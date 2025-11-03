export const POST_CONSTANTS = {
  CACHE_KEY: {
    KeyUserWithPosts: (mainkey: string) => `userWithPosts:${mainkey}`,
    Postkey: (mainkey: string) => `post:${mainkey}`,
    ViewPostKey: (mainkey: string) => `postViews:${mainkey}`,
  },
  TIME_LIFE_CACHE: 10 * 60 * 60,
  TIME_FILE_CACHE_VIEW_POST: 6 * 60 * 60,
};
