import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { AuthService } from "../auth/auth.service";
import { PresenceService } from "./presence.service";

@WebSocketGateway({
    cors: { origin: "*" }
})

export class PresenceGateway implements OnGatewayConnection, OnGatewayDisconnect {

    constructor(
        private readonly presenceService: PresenceService,
        private readonly authService: AuthService
    ) { }

    @WebSocketServer()
    server: Server

    async handleConnection(client: Socket) {
        const accessToken = client.handshake.auth.token
        if (!accessToken) {
            client.disconnect()
            return
        }

        // verify token
        const user = await this.authService.validate(accessToken)

        if (!user) {
            client.disconnect()
            return
        }

        console.log(`User ${user.id} connected`)

        this.server.emit('user-connected', user.id)
    }

    async handleDisconnect(client: Socket) {
        const userId = client.handshake.query.userId as string

        if (userId) {
            await this.presenceService.setUserOffline(userId)
            console.log(`User ${userId} disconnected`)
            this.server.emit('user-disconnected', userId)
        }
    }

}