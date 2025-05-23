import { model, Schema, Types } from 'mongoose';
import { TBook } from './book.interface';

const bookSchema = new Schema<TBook>(
  {
    categoryId: { type: Types.ObjectId, ref: 'Category', required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: {
      type: Number,
      min: [0, 'Price must be a positive number'],
      required: true,
    },
    category: {
      type: String,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: false,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    publicationDate: { type: String, required: true },
    publisher: { type: String, required: true },
    imageURL: { type: [String], required: true },
  },
  { timestamps: true },
);

export const Book = model<TBook>('Book', bookSchema);
