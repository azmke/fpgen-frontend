export type GenerateFormData = {
  seed: string;
  truncation: string;
  gpu?: boolean;
};

export type ModelType =
  | 'dummy'
  | 'pggan'
  | 'pix2pix'
  | 'stylegan'
  | 'stylegan2'
  | 'stylegan2ada';
