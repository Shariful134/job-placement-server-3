import { ObjectId } from 'mongoose';

export type TBook = {
  categoryId: ObjectId;
  title: string;
  author: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  publicationDate: string;
  publisher: string;
  imageURL: string[];
};
