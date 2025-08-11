import { forwardRef, Module } from '@nestjs/common';
import { PresenceGateway } from './presence.gateway';
import { PresenceService } from './presence.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [forwardRef(() => AuthModule)],
    providers: [PresenceGateway, PresenceService],
    exports: [PresenceService]
})
export class PresenceModule {}
