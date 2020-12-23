// 900 chars per minute on average. Increasing it to 1100, because we have many special stuff in the post
export const calcReadTime = (charCount: number) => Math.round(charCount / 1100) || 1;
