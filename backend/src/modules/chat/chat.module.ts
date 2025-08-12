import { Module } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { PresenceModule } from "../presence/presence.module";
import { ChatGateway } from "./chat.gateway";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports: [PresenceModule, AuthModule],
    providers: [ChatService, ChatGateway],
    exports: [ChatService]
})
export class ChatModule {}