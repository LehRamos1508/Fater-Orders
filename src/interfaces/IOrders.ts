export interface IOrder {
  date: string;
  client_id: string;
  payment_method: string;
  quantity: number;
  totalValue: number;
}
