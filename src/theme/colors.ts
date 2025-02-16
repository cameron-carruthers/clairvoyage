export const calculateTertiaryColor = (percentage: number) => {
  const initialLightness = 40;
  const finalLightness = initialLightness + percentage;
  return `hsla(214, 100%, ${finalLightness}%, 1)`
};

// export const calculateTertiaryColor = (percentage: number) => {
//   const initialLightness = 37;
//   const finalLightness = initialLightness + percentage;
//   return `hsla(306, 100%, ${finalLightness}%, 1)`
// };

export const primaryColor = '#1EC4E2';
export const primaryLight = '#B4EEF8';
// export const secondaryColor = '#7464EB';
export const secondaryColor = '#00DC9B';
// export const secondaryLight = '#BEB4F8';
export const secondaryLight = '#B4F8E0';
export const successColor = '#00DC9B';
export const textColor = '#2D255E';
// export const failColor = calculateTertiaryColor(0);
export const failColor = '#E96958';