import { MessagingProtocol } from "../classes/interfaces/message-protocol";

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void { //Manda a mensagem*******
    console.log("Mensagem Enviada", msg);
  }
}