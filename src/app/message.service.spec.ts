import { MessageService } from './message.service';


describe('MessageService', () => {
  let service = new MessageService();

  it('should have no messages to start', () => {
      //arrange
      service = new MessageService();

      //act and assert
      expect(service.messages.length).toBe(0);
  })

  it('should add message when add is called', () => {
    //arrange
    service = new MessageService();

    //act
    service.add('message1');

    //assert
    expect(service.messages.length).toBe(1);
  })

  it('should remove all messages when clear is called', () => {
    //arrange
    service = new MessageService();
    service.add('message1');

    //act
    service.clear();

    //assert
    expect(service.messages.length).toBe(0);
  })


})