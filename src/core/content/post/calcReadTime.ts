// 900 chars per minute on average.
export const calcReadTime = (charCount: number) => Math.round(charCount / 900) || 1;
