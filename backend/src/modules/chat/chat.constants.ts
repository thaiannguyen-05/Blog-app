export const CHAT_CONSTANTS = {
  SOCKET_ID: (creatorId: string, friendId: string) => `${creatorId} - ${friendId}`,
  PERSONAL_ROOM: (userId: string) => `personal:${userId}`,
};
