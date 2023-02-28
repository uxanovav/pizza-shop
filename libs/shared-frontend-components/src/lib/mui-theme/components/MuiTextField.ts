import { ComponentsOverrides, ComponentsProps } from '@mui/material';

export interface IMuiTextFieldType {
  defaultProps: ComponentsProps['MuiTextField'];
  styleOverrides: ComponentsOverrides['MuiTextField'];
}

const MuiTextField: IMuiTextFieldType = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};

export default MuiTextField;
