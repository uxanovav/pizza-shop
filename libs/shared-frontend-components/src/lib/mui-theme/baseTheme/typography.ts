import { palette } from './palette';
declare module '@mui/material/styles' {
  interface TypographyVariants {
    tableCaption: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    tableCaption?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
  }
}

export const typography = {
  fontFamily: 'Arial, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  h1: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '40px',
  },
  h2: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '-0.01em',
    color: 'common.black',
  },
  h3: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 1.6,
  },
  error: {
    color: 'error.main',
  },
  body1: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.002em',
  },
  body2: {
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '0.005em',
    color: '#7C8993',
  },
  button: {
    fontSize: '16px',
    lineHeight: 1.5,
    fontWeight: 600,
    letterSpacing: '0.005em',
  },
};

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
  }
}
