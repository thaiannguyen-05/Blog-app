import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
	@IsNotEmpty({ message: 'Content is required.' })
	@IsString()
	content: string;

	@IsNotEmpty({ message: 'Chat ID is required.' })
	@IsString()
	chatId: string;
}