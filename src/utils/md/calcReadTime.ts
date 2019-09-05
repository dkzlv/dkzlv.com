export default function calcReadTime(charCount: number) {
  // 900 chars per minute on average.
  return Math.round(charCount / 900) || 1
}
