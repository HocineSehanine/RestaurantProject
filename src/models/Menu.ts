export interface MenuItem {
  id: number;
  name: string;
  details?: string;
  price: number;
}
export interface BebidasType {
  semAlcool: {
    suco: MenuItem[]
    refrigirante: MenuItem[]
  },
  comAlcool: {
    caipirinha: MenuItem[],
    dose: MenuItem[],
    batida: MenuItem[],
    cerveja: MenuItem[],
  }
}
export interface Menu {
  bebidas: BebidasType;
  comidas: MenuItem[];
  adicionaisParaLanche: MenuItem[];
  sobreMesa: MenuItem[];
}
