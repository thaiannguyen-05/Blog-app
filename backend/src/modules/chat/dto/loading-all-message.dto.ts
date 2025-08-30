import { IsNumber, IsOptional, IsString } from "class-validator";

export class LoadAllMessageDto {
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