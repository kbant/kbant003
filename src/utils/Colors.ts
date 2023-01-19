interface Color {
  [key: number]: string;
}
interface ExtendedColors {
  [key: string]: Color;
}

const Colors: ExtendedColors = {
  primary: {
    50: '#cffafe',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#6750A4',
  },
};

export default Colors;
