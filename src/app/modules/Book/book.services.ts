import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { Book } from './book.model';
import { TBook } from './book.interface';

const createBookIntoDB = async (payload: TBook) => {
  const result = await Book.create(payload);

  return result;
};
const getBookIntoDB = async () => {
  const result = await Book.find().populate('categoryId');
  if (result?.length === 0) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Book is not found');
  }
  return result;
};

const getSingleBookIntoDB = async (id: string) => {
  const result = await Book.findById(id).populate('categoryId');
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Book is not found');
  }
  return result;
};

//updated cart
const updateBookIntoDB = async (
  id: string,
  payload: Record<string, unknown>,
) => {
  const result = await Book.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Book is not found');
  }
  return result;
};

//delete cart
const deleteBookIntoBD = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Book is not found');
  }
  return result;
};

export const bookServices = {
  createBookIntoDB,
  getBookIntoDB,
  getSingleBookIntoDB,
  updateBookIntoDB,
  deleteBookIntoBD,
};
