import { colors, Colors } from './colors';
import { shadows, Shadows } from './shadows';
import { shapes, Shapes } from './shapes';
import { typography, Typography } from './typography';

export interface Theme {
  colors: Colors,
  shadows: Shadows,
  shapes: Shapes,
  typography: Typography,
}

const theme: Theme = {
  colors,
  shadows,
  shapes,
  typography,
};

export default theme;
