import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Message, Thread, User } from '../model';

@Injectable({
  providedIn: 'root',
})
/**
 * 应用中的消息处理服务类
 */
export class MessagesService {
  // 发出每条新的消息
  newMessages$: Subject<Message> = new Subject<Message>();

  constructor() {}

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
