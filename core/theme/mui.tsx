'use client';

import { createTheme, Shadows } from '@mui/material/styles';
import {
  colorsCommon,
  colorsError,
  colorsGrey,
  colorsPrimary,
  colorsSecondary,
  colorsTheme,
  defaultPalette,
} from '@/core/theme/vars';

export const themeLight = createTheme({
  spacing: 5,
  shape: { borderRadius: 4 },
  palette: {
    mode: 'light',
    ...defaultPalette,
    customGrey: colorsTheme.light.grey,
    customNavigation: {
      search: colorsGrey[230],
      avatar: colorsGrey[230],
      text: {
        primary: colorsSecondary.main,
        secondary: colorsGrey[100],
        hover: colorsGrey[10],
        item: colorsPrimary.main,
      },
    },
    divider: colorsGrey[30],
    background: {
      default: colorsCommon.white,
      paper: colorsCommon.white,
    },
    text: {
      primary: colorsCommon.black,
      secondary: colorsGrey[200],
      disabled: colorsGrey[100],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colorsGrey[270],
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: colorsTheme.light.grey[40],
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
        bar: {
          borderRadius: 2,
        },
        colorPrimary: {
          backgroundColor: colorsTheme.light.grey[50],
        },
        colorSecondary: {
          backgroundColor: colorsTheme.light.grey[50],
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: colorsTheme.light.grey[250],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: colorsCommon.white,
          '&.Mui-disabled': {
            backgroundColor: colorsTheme.light.grey[20],
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: colorsTheme.light.grey[50],
            },
          },
          '&.Mui-error': {
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: colorsError.main,
            },
          },
        },
        input: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {},
        colorInherit: {},
        root: {
          variants: [
            {
              props: { variant: 'contained', color: 'inherit' },
              style: {
                border: 'none',
                backgroundColor: colorsGrey[20],
                '&:hover': {
                  backgroundColor: colorsGrey[30],
                },
              },
            },
            {
              props: { variant: 'outlined', color: 'inherit' },
              style: {
                border: `2px solid ${colorsGrey[50]}`,
                backgroundColor: 'transparent',
                '&:hover': {
                  borderColor: colorsGrey[70],
                },
              },
            },
            {
              props: { variant: 'text', color: 'inherit' },
              style: {
                border: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: colorsGrey[20],
                },
              },
            },
          ],
          fontSize: '1rem',
          fontWeight: '600',
          textTransform: 'unset',
          boxShadow: 'none !important',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          minWidth: 'unset',
          // '&.MuiButton-contained.MuiButton-colorInherit': {
          //   backgroundColor: colorsGrey[20],
          //   '&:hover': {
          //     backgroundColor: colorsGrey[30],
          //   },
          // },
          // '&.MuiButton-text.MuiButton-colorInherit:hover': {
          //   backgroundColor: colorsGrey[20],
          // },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: '600',
          textTransform: 'unset',
          boxShadow: 'none !important',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          minWidth: 'unset',
          lineHeight: 'normal',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          zIndex: 1200,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          paddingTop: 2,
          paddingBottom: 2,
        },
        action: { paddingTop: 2, paddingBottom: 2, marginTop: 2 },
        message: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          flexGrow: 1,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
          position: 'relative',
          zIndex: 1,
        },
        indicator: {
          height: 2,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginRight: 20,
          minWidth: 'auto',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          minHeight: 40,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          marginTop: 5,
          fontSize: '0.9rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: 'auto',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 600,
        },
      },
    },
  },
  shadows: [
    ...createTheme({}).shadows.map((shadow, i) => {
      if (i === 3) return '0px 3px 12px 0px rgba(0,0,0,0.12)';
      if (i === 4) return '0px 2px 4px 0px rgba(0,0,0,0.12)';
      return shadow;
    }),
  ] as Shadows,
});
export const themeDark = createTheme({
  spacing: 5,
  shape: { borderRadius: 4 },
  palette: {
    mode: 'dark',
    ...defaultPalette,
    customGrey: colorsTheme.dark.grey,
    customNavigation: {
      search: colorsGrey[230],
      avatar: colorsGrey[230],
      text: {
        primary: colorsSecondary.main,
        secondary: colorsGrey[100],
        hover: colorsGrey[10],
        item: colorsCommon.white,
      },
    },
    divider: colorsGrey[270],
    background: {
      default: colorsCommon.black,
      paper: colorsCommon.black,
    },
    text: {
      primary: colorsCommon.white,
      secondary: colorsGrey[100],
      disabled: colorsGrey[200],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colorsGrey[290],
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: colorsTheme.dark.grey[40],
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
        bar: {
          borderRadius: 2,
        },
        colorPrimary: {
          backgroundColor: colorsTheme.dark.grey[50],
        },
        colorSecondary: {
          backgroundColor: colorsTheme.dark.grey[50],
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: colorsTheme.dark.grey[250],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: colorsTheme.dark.grey[20],
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: colorsTheme.dark.grey[50],
            },
          },
          '&.Mui-error': {
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: colorsError.main,
            },
          },
        },
        input: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: '600',
          textTransform: 'unset',
          boxShadow: 'none !important',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          minWidth: 'unset',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: '600',
          textTransform: 'unset',
          boxShadow: 'none !important',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          minWidth: 'unset',
          lineHeight: 'normal',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
        action: { paddingTop: 2, paddingBottom: 2 },
        message: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          flexGrow: 1,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
          position: 'relative',
          zIndex: 1,
        },
        indicator: {
          height: 2,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginRight: 20,
          minWidth: 'auto',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          minHeight: 40,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          marginTop: 5,
          fontSize: '0.9rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: 'auto',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 600,
        },
      },
    },
  },
  shadows: [
    ...createTheme({}).shadows.map((shadow, i) => {
      if (i === 3) return '0px 3px 12px 0px rgba(0,0,0,0.12)';
      return shadow;
    }),
  ] as Shadows,
});
