import { v4 as uuid } from 'uuid';

export class User {
  id: string;

  constructor(public name: string, public avatarSrc: string) {
    this.id = uuid();
  }
}

export class Thread {
  id: string;
  lastMessage: Message;
  name: string;
  avatarSrc: string;

  constructor(id?: string, name?: string, avatarSrc?: string) {
    this.id = id;
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}

export class Message {
  id: string;
  sendAt: Date;
  isRead: boolean;
  author: User;
  text: string;
  thread: Thread;

  constructor(obj?: {
    id?: string;
    sendAt?: Date;
    isRead?: boolean;
    author?: User;
    text?: string;
    thread?: Thread;
  }) {
    this.id = (obj && obj.id) || uuid();
    this.isRead = (obj && obj.isRead) || false;
    this.sendAt = (obj && obj.sendAt) || new Date();
    this.author = (obj && obj.author) || null;
    this.text = (obj && obj.text) || null;
    this.thread = (obj && obj.thread) || null;
  }
}
