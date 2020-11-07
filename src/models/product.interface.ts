export default interface IProduct {
  id: number;
  title: string;
  price: number;
  cover: string;
  currency: "PLN";
  availability: boolean;
}

export interface IProductGroup extends IProduct {
  amount: number;
}
