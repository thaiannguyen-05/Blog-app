import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class EditPostDto {
  @IsNotEmpty({ message: 'File path is required.' })
  @IsString()
  filePaths: string[];

  @IsNotEmpty({ message: 'New content is required.' })
  @IsString()
  @MinLength(1, { message: 'New content must be at least 1 character.' })
  @MaxLength(5000, { message: 'New content must be at most 5000 characters.' })
  newContent: string;
}
