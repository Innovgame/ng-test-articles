import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, scan, refCount, publishReplay, map } from 'rxjs/operators';
import { Message, Thread, User } from '../model';

const initialMessages: Message[] = [];

@Injectable({
  providedIn: 'root',
})
/**
 * 应用中的消息处理服务类
 */
export class MessagesService {
  // 发出每条新的消息
  newMessages$: Subject<Message> = new Subject<Message>();

  // 维护一个messages数组
  messages$: Observable<Message[]>;

  // updates 应用于messages流的函数流
  updates$: Subject<any> = new Subject<any>();

  // action streams
  createMsg$: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages$ = this.updates$.pipe(
      scan(
        (messages: Message[], operation: MessageOperation) =>
          operation(messages),
        initialMessages
      ),
      publishReplay(1),
      refCount()
    );

    this.createMsg$
      .pipe(
        map(function (msg: Message): MessageOperation {
          return (messages: Message[]) => messages.concat(msg);
        })
      )
      .subscribe(this.updates$);

    this.newMessages$.subscribe(this.createMsg$);

    this.markThreadAsRead
      .pipe(
        map((thread: Thread) => {
          return (messages: Message[]) => {
            return messages.map((msg) => {
              if (msg.thread.id === thread.id) {
                msg.isRead = true;
              }
              return msg;
            });
          };
        })
      )
      .subscribe(this.updates$);
  }

  addMessage(msg: Message): void {
    this.newMessages$.next(msg);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages$.pipe(
      filter(
        (msg: Message) =>
          msg.thread.id === thread.id && msg.author.id === user.id
      )
    );
  }
}

type MessageOperation = (messages: Message[]) => Message[];

[].reduce((pre, curr) => pre + curr, 0);
