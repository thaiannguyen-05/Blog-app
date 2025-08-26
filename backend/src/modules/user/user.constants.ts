export const USER_CONSTANTS = {
	// cache key
	CACHE_KEY: {
		KeyUserWithId: (mainkey: string) => `account:${mainkey}`,
		KeyUserWithEmail: (mainkey: string) => `account:${mainkey}`,
		KeyUserPosts: (mainkey: string) => `userPosts:${mainkey}`
	},

	// Cache expiration times
	MAX_AGE_CACHE_TEMPORARY: 60 * 1000, // 60 seconds
	MAX_AGE_CACHE: 60 * 60 * 1000, // 1 hour
}