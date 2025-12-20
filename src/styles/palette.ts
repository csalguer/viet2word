import { ColorPalette } from './types';
import { couleurs } from './colors';

const palette: ColorPalette = {
  warm: couleurs.rouge as any,
  greens: couleurs.verte as any,
  cool: couleurs.bleu as any,
  highlighter: couleurs.jaune as any,
  edit: couleurs.orange as any,
  primary: couleurs.bleu[6],
  secondary: couleurs.sage[6],
  success: couleurs.verte[6],
  info: couleurs.eaux[6],
  warning: couleurs.jaune[6],
  error: couleurs.rouge[6],
  gray: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
  colorsEstimate: [],
  neutrals: {
    beige: "#bda28f",
    warm: "#ccaba4",
    slate: "#9b9b9b",
    bluestone: "#58748f",
    legalpad: "#e9d8a6",
    white: "#ede0d4",
  }
};

export default palette;
export const ToneNames = ['warm', 'greens', 'cool', 'highlighter', 'edit'];

export const VnZhHighlightColor = {
  NGANG: 'blue',
  SÁC: 'red',
  HUYỀN: 'green',
  HỎI: 'orange',
  NGÃ: 'purple',
  NẠNG: 'gray',
};

export type Color = string;
export const colorsPractical = palette;
