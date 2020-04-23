import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { Thread, Message } from '../model';
import { MessagesService } from './messages.service';
import { map } from 'rxjs/operators';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root',
})
export class ThreadService {
  threads$: Observable<{ [key: string]: Thread }>;

  orderedThreads$: Observable<Thread[]>;

  currentThread$: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());

  currentThreadMessages$: Observable<Message[]>;

  constructor(private messagesService: MessagesService) {
    this.threads$ = this.messagesService.messages$.pipe(
      map((messages) => {
        const threads: { [key: string]: Thread } = {};
        messages.forEach((msg) => {
          threads[msg.thread.id] = threads[msg.thread.id] || msg.thread;

          const messagesThread: Thread = threads[msg.thread.id];
          if (
            !messagesThread ||
            messagesThread.lastMessage.sendAt < msg.sendAt
          ) {
            messagesThread.lastMessage = msg;
          }
        });

        return threads;
      })
    );

    this.orderedThreads$ = this.threads$.pipe(
      map((threadGroups) => {
        const threads: Thread[] = _.values(threadGroups);
        return _.sortBy(threads, (t) => t.lastMessage.sendAt).reverse();
      })
    );

    this.currentThreadMessages$ = combineLatest([
      this.currentThread$,
      this.messagesService.messages$,
    ]).pipe(
      map(([currentThread, messages]) => {
        if (currentThread && messages.length > 0) {
          return _.chain(messages)
            .filter((msg) => msg.thread.id === currentThread.id)
            .map((msg) => {
              msg.isRead = true;
              return msg;
            })
            .value();
        } else {
          return [];
        }
      })
    );

    this.currentThread$.subscribe(this.messagesService.markThreadAsRead);
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread$.next(newThread);
  }
}

export const threadsServiceInjectables: Array<any> = [ThreadService];
