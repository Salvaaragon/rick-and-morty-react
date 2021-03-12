type TextAlignment = 'right' | 'center' | 'left';
type CustomColorType = { customcolor: string };

export type ColorType = TypographyColorType | string;

export const TypographyColors = [
  'initial',
  'inherit',
  'primary',
  'secondary',
  'textPrimary',
  'textSecondary',
  'error',
];

export type TypographyColorType =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

export type LoadTextColorFunction = (
  color: ColorType,
) => TypographyColorType | CustomColorType;

export type CustomTextProps = {
  alignment?: TextAlignment;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  text: string;
};

export type CustomTypographyProps = {
  align: string;
  customcolor: string;
  fontfamily: string;
  fontsize: string;
  fontstyle: string;
  fontweight: string;
  letterspacing: string;
  lineheight: string;
};
