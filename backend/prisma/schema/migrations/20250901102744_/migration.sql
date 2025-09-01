-- CreateEnum
CREATE TYPE "public"."TypeOfCode" AS ENUM ('EMAIL', 'PHONE');

-- CreateEnum
CREATE TYPE "public"."StatusPost" AS ENUM ('PUBLIC', 'PRIVATE', 'ARCHIVE');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE', 'OTHERS');

-- CreateTable
CREATE TABLE "public"."Session" (
    "id" UUID NOT NULL,
    "hashingRefreshToken" TEXT,
    "userId" UUID NOT NULL,
    "userIp" TEXT,
    "userAgent" TEXT,
    "loginAt" TIMESTAMP(3),
    "logout" TIMESTAMP(3),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Code" (
    "id" UUID NOT NULL,
    "tokens" TEXT,
    "typeOfCode" "public"."TypeOfCode" NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."private_chats" (
    "id" UUID NOT NULL,
    "creatorId" UUID NOT NULL,
    "friendId" UUID NOT NULL,
    "lastMessage" TEXT,
    "lastMessageAt" TIMESTAMP(3),
    "user1LastReadIndex" INTEGER NOT NULL DEFAULT 0,
    "user2LastReadIndex" INTEGER NOT NULL DEFAULT 0,
    "socketId" TEXT NOT NULL,
    "totalMessage" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "private_chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."private_messages" (
    "id" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "conversationId" UUID NOT NULL,
    "senderId" UUID NOT NULL,
    "receiverId" UUID NOT NULL,
    "messageIndex" INTEGER NOT NULL,
    "replyToId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "private_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Owner" (
    "id" UUID NOT NULL,
    "nameRole" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "objectId" UUID NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Post" (
    "id" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "status" "public"."StatusPost" NOT NULL DEFAULT 'PUBLIC',
    "urlImgs" TEXT[],
    "userId" UUID NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "id" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "postId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RepComment" (
    "id" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "senderID" UUID NOT NULL,
    "commentId" UUID NOT NULL,

    CONSTRAINT "RepComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BehaviorWithPost" (
    "id" UUID NOT NULL,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,
    "userId" UUID NOT NULL,
    "postId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BehaviorWithPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."blockedUser" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blockedUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "gender" "public"."Gender",
    "dateOfBirth" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "userName" TEXT NOT NULL,
    "avtUrl" TEXT,
    "email" TEXT NOT NULL,
    "hashingPassword" TEXT NOT NULL,
    "lastSeen" TIMESTAMP(3),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Following" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "addressUserId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Following_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Follower" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "followerId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Follower_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_userAgent_key" ON "public"."Session"("userAgent");

-- CreateIndex
CREATE UNIQUE INDEX "private_chats_socketId_key" ON "public"."private_chats"("socketId");

-- CreateIndex
CREATE INDEX "private_chats_creatorId_idx" ON "public"."private_chats"("creatorId");

-- CreateIndex
CREATE INDEX "private_chats_friendId_idx" ON "public"."private_chats"("friendId");

-- CreateIndex
CREATE INDEX "private_chats_lastMessageAt_idx" ON "public"."private_chats"("lastMessageAt");

-- CreateIndex
CREATE UNIQUE INDEX "private_chats_creatorId_friendId_key" ON "public"."private_chats"("creatorId", "friendId");

-- CreateIndex
CREATE INDEX "private_messages_conversationId_messageIndex_idx" ON "public"."private_messages"("conversationId", "messageIndex");

-- CreateIndex
CREATE INDEX "private_messages_senderId_idx" ON "public"."private_messages"("senderId");

-- CreateIndex
CREATE INDEX "private_messages_replyToId_idx" ON "public"."private_messages"("replyToId");

-- CreateIndex
CREATE UNIQUE INDEX "private_messages_conversationId_messageIndex_key" ON "public"."private_messages"("conversationId", "messageIndex");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_userId_objectId_key" ON "public"."Owner"("userId", "objectId");

-- CreateIndex
CREATE INDEX "Post_userId_idx" ON "public"."Post"("userId");

-- CreateIndex
CREATE INDEX "Post_createAt_idx" ON "public"."Post"("createAt");

-- CreateIndex
CREATE INDEX "Post_status_idx" ON "public"."Post"("status");

-- CreateIndex
CREATE INDEX "Post_userId_createAt_idx" ON "public"."Post"("userId", "createAt");

-- CreateIndex
CREATE INDEX "Comment_postId_idx" ON "public"."Comment"("postId");

-- CreateIndex
CREATE INDEX "Comment_userId_idx" ON "public"."Comment"("userId");

-- CreateIndex
CREATE INDEX "Comment_createAt_idx" ON "public"."Comment"("createAt");

-- CreateIndex
CREATE UNIQUE INDEX "BehaviorWithPost_userId_key" ON "public"."BehaviorWithPost"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BehaviorWithPost_postId_key" ON "public"."BehaviorWithPost"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "BehaviorWithPost_userId_postId_key" ON "public"."BehaviorWithPost"("userId", "postId");

-- CreateIndex
CREATE UNIQUE INDEX "blockedUser_userId_key" ON "public"."blockedUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "public"."User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Following_userId_key" ON "public"."Following"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Following_addressUserId_key" ON "public"."Following"("addressUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Following_userId_addressUserId_key" ON "public"."Following"("userId", "addressUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Follower_userId_key" ON "public"."Follower"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Follower_followerId_key" ON "public"."Follower"("followerId");

-- CreateIndex
CREATE UNIQUE INDEX "Follower_userId_followerId_key" ON "public"."Follower"("userId", "followerId");

-- AddForeignKey
ALTER TABLE "public"."Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Code" ADD CONSTRAINT "Code_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."private_chats" ADD CONSTRAINT "private_chats_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."private_chats" ADD CONSTRAINT "private_chats_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."private_messages" ADD CONSTRAINT "private_messages_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "public"."private_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."private_messages" ADD CONSTRAINT "private_messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."private_chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."private_messages" ADD CONSTRAINT "private_messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RepComment" ADD CONSTRAINT "RepComment_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RepComment" ADD CONSTRAINT "RepComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "public"."Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BehaviorWithPost" ADD CONSTRAINT "BehaviorWithPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BehaviorWithPost" ADD CONSTRAINT "BehaviorWithPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."blockedUser" ADD CONSTRAINT "blockedUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Following" ADD CONSTRAINT "Following_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Follower" ADD CONSTRAINT "Follower_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
