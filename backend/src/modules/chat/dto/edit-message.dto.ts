import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class UpdateMessageDto {
  @IsNotEmpty({ message: 'Message ID is required.' })
  @IsString({ message: 'Message ID must be a string.' })
  messageId: string;

  @IsNotEmpty({ message: 'Content is required.' })
  @IsString({ message: 'Content must be a string.' })
  @MinLength(1, { message: 'Content must be at least 1 character.' })
  @MaxLength(500, { message: 'Content must be at most 500 characters.' })
  content: string;
}
