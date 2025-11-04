import { IsString, MinLength, MaxLength, IsNotEmpty, IsArray } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Content is required.' })
  @IsString()
  @MinLength(1, { message: 'Content must be at least 1 character.' })
  @MaxLength(5000, { message: 'Content must be at most 5000 characters.' })
  content: string;

  @IsArray({ message: 'Paths must be an array.' })
  paths: string[];

  title: string;
}
