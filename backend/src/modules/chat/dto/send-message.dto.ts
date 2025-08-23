import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class SendMessageDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    receiverId: string;

    @IsString()
    @IsNotEmpty()
    roomId: string;

    @IsString()
    @IsOptional()
    messageType?: 'text' | 'image' | 'file' = 'text';
}