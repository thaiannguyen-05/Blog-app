export const POST_CONSTANTS = {
	CACHE_KEY: {
		KeyUserWithPosts: (mainkey: string) => `userWithPosts:${mainkey}`,
		Postkey: (mainkey: string) => `post:${mainkey}`
	},
}