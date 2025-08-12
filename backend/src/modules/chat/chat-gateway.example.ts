
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(4001, {
    cors: { origin: '*' }
})
export class ChatGatewayExample implements OnGatewayConnection, OnGatewayDisconnect{

    handleConnection(client: Socket) {
        console.log("Connect")
        
        client.broadcast.emit("user-join",client.id + "Join")
    }
    handleDisconnect(client: Socket) {
        console.log('Disconnect')
        this.server.emit("user-disconnect",client.id + "Out")
    }

    @WebSocketServer()
    server: Server

    @SubscribeMessage('newMessage')
    handleNewMessage(client: Socket, message: any) {
        console.log(message)

        client.emit("rep","this is a reply")

        this.server.emit("rep",message)
    }
}