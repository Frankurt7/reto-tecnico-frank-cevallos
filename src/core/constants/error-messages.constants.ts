export const TEXT_FIELD_REQUIRED_ERROR = 'El campo es requerido';
export const textFieldMaxError = (max: number, field?: string) =>
  `El campo ${field || ''} debe tener como máximo ${max} caracteres`;
export const textFieldMinError = (max: number, field?: string) =>
  `El campo ${field || ''} debe tener como mínimo ${max} caracter${max !== 1 ? 'es' : ''}`;
export const textFieldLenghtError = (lenght: number, field?: string) =>
  `El campo ${field || ''} debe tener ${lenght} caracteres`;

export const TEXT_FIELD_AGREE_ERROR = 'La política debe ser aceptada';
