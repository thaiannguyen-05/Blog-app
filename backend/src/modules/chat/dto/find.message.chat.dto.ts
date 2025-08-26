
export class FindAllPrivateMessageDto {

  page?: number = 1;


  limit?: number = 20;

  cursor?: string;


  search?: string;


  userId?: string;
}