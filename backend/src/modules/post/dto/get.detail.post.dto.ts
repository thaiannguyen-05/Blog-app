import { IsOptional, IsNumber, IsString } from 'class-validator';

export class GetDetailPostDto {
	@IsOptional()
	@IsNumber()
	page?: number = 1;

	@IsOptional()
	@IsNumber()
	limit?: number = 20;

	@IsOptional()
	@IsString()
	cursor?: string;
}