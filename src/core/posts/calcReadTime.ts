// 900 chars per minute on average.
const calcReadTime = (charCount: number) => Math.round(charCount / 900) || 1

export default calcReadTime
