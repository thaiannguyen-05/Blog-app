import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class UserGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    server: Server
    private onlineUsers = new Map<string, string>()


    handleConnection(client: Socket) {
        const userId = this.getUserIdFromSocket(client)
        if (userId) {
            this.onlineUsers.set(userId, client.id)
            console.log(`User ${userId} connected`)
        }
    }

    handleDisconnect(client: Socket) {
        const userId = [...this.onlineUsers.entries()]
            .find(([_, socketId]) => socketId === client.id)?.[0]

        if (userId) {
            this.onlineUsers.delete(userId)
            console.log(`User ${userId} disconnected`)
        }
    }

    private getUserIdFromSocket(client: Socket): string | null {
        const userId = client.handshake.query.userId as string
        return userId
    }

} 