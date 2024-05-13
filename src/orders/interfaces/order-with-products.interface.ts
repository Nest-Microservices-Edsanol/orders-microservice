export interface OrderWithProducts {
  OrderItem: {
    name: any;
    productId: number;
    quantity: number;
    price: number;
  }[];
  id: string;
  totalAmount: number;
  totalItems: number;
  status: any;
  paid: boolean;
  paidAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
