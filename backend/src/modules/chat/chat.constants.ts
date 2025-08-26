export const CHAT_CONSTANTS = {
	KEY: {
		Room: (mainkey: string) => `chat:${mainkey}`,
		PersonalRoom: (mainkey: string) => `user:${mainkey}`
	}
}