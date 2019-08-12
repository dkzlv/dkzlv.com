export default function calcReadTime(charCount) {
  // 900 chars per minute on average.
  return Math.round(charCount / 900) || 1
}
