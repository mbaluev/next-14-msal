import { Open_Sans, JetBrains_Mono, Roboto_Mono } from 'next/font/google';
import {} from '@mui/lab/themeAugmentation';

declare module '@mui/material/styles' {
  interface PaletteColorGrey {
    290: string;
    280: string;
    270: string;
    260: string;
    250: string;
    240: string;
    230: string;
    220: string;
    210: string;
    200: string;
    190: string;
    180: string;
    170: string;
    160: string;
    150: string;
    140: string;
    130: string;
    120: string;
    110: string;
    100: string;
    90: string;
    80: string;
    70: string;
    60: string;
    50: string;
    40: string;
    30: string;
    20: string;
    10: string;
  }
  interface PaletteColorNavigation {
    search: string;
    avatar: string;
    text: {
      primary: string;
      secondary: string;
      hover: string;
      item: string;
    };
  }
  interface Palette {
    customGrey: PaletteColorGrey;
    customNavigation: PaletteColorNavigation;
  }
  interface PaletteOptions {
    customGrey: PaletteColorGrey;
    customNavigation: PaletteColorNavigation;
  }
}

export const fontOpenSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export const fontJetBrainsMono = JetBrains_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export const fontRobotoMono = Roboto_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const fonts = [
  { value: fontOpenSans.style.fontFamily, label: 'Open Sans' },
  { value: 'arial', label: 'Arial' },
  { value: 'verdana', label: 'Verdana' },
  { value: 'tahoma', label: 'Tahoma' },
  { value: fontRobotoMono.style.fontFamily, label: 'Roboto Mono' },
  { value: fontJetBrainsMono.style.fontFamily, label: 'JetBrains Mono' },
];

export const colorsCommon = { white: '#ffffff', black: '#111419' };
export const colorsPrimary = { main: '#3a398c', contrastText: '#ffffff' };
export const colorsSecondary = { main: '#5c5aff', contrastText: '#ffffff' };
export const colorsSuccess = { main: '#0b8148', contrastText: '#ffffff' };
export const colorsWarning = { main: '#c86a00', contrastText: '#ffffff' };
export const colorsError = { main: '#d71105', contrastText: '#ffffff' };
export const colorsInfo = { main: '#2970df', contrastText: '#ffffff' };
export const colorsGrey = {
  '290': '#191c21',
  '280': '#212429',
  '270': '#292c31',
  '260': '#313439',
  '250': '#393c41',
  '240': '#414449',
  '230': '#494c51',
  '220': '#515459',
  '210': '#595c61',
  '200': '#616469',
  '190': '#696c71',
  '180': '#717479',
  '170': '#797c81',
  '160': '#818489',
  '150': '#898c91',
  '140': '#919499',
  '130': '#999ca1',
  '120': '#a1a4a9',
  '110': '#a9acb1',
  '100': '#b1b4b9',
  '90': '#b9bcc1',
  '80': '#c1c4c9',
  '70': '#c9ccd1',
  '60': '#d1d4d9',
  '50': '#d9dce1',
  '40': '#e1e4e9',
  '30': '#e9ecf1',
  '20': '#f1f4f9',
  '10': '#f9faff',
};

export const colorsTheme = {
  light: {
    grey: colorsGrey,
  },
  dark: {
    grey: {
      '10': colorsGrey[290],
      '20': colorsGrey[280],
      '30': colorsGrey[270],
      '40': colorsGrey[260],
      '50': colorsGrey[250],
      '60': colorsGrey[240],
      '70': colorsGrey[230],
      '80': colorsGrey[220],
      '90': colorsGrey[210],
      '100': colorsGrey[200],
      '110': colorsGrey[190],
      '120': colorsGrey[180],
      '130': colorsGrey[170],
      '140': colorsGrey[160],
      '150': colorsGrey[150],
      '160': colorsGrey[140],
      '170': colorsGrey[130],
      '180': colorsGrey[120],
      '190': colorsGrey[110],
      '200': colorsGrey[100],
      '210': colorsGrey[90],
      '220': colorsGrey[80],
      '230': colorsGrey[70],
      '240': colorsGrey[60],
      '250': colorsGrey[50],
      '260': colorsGrey[40],
      '270': colorsGrey[30],
      '280': colorsGrey[20],
      '290': colorsGrey[10],
    },
  },
};
