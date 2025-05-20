export interface IPlanDTO {
  name: string;
  price: number;
  description: Array<string>;
  age: number;
}

export interface IGetPlansListResponse {
  list: Array<IPlanDTO>;
}
