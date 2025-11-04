export interface CommentWithReps {
  id: string;
  repComment: {
    id: string;
    content: string;
    createAt: Date;
    updateAt: Date;
    senderID: string;
    commentId: string;
  };
}
