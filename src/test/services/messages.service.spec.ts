import { MessagesService } from '../../app/ts/services/messages.service';

import { Message, User, Thread } from '../../app/ts/model';

describe('MessagesService', () => {
  it('should test', () => {
    const user: User = new User('Nate', '');
    const thread: Thread = new Thread('t1', 'Nate', '');
    const m1: Message = new Message({
      author: user,
      text: 'Hi! ',
      thread,
    });

    const m2: Message = new Message({
      author: user,
      text: 'Bye! ',
      thread,
    });

    const messagesService: MessagesService = new MessagesService();

    messagesService.newMessages$.subscribe((msg) => {
      console.log('=> newMsg: ', msg.text);
    });

    messagesService.messages$.subscribe((msgs) => {
      console.log('=> messages: ', msgs.length);
    });

    messagesService.addMessage(m1);
    messagesService.addMessage(m2);
  });
});
