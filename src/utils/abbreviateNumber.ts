const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

// © https://stackoverflow.com/a/40724354/3720087
export const abbreviateNumber = (number: number) => {
  // what tier? (determines SI symbol)
  const tier = (Math.log10(number) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier == 0) return number;

  // get suffix and determine scale
  const suffix = SI_SYMBOL[tier],
    scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
};
