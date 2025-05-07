import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);

  return result;
};
const getCategorytIntoDB = async () => {
  const result = await Category.find();
  if (result?.length === 0) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Category is not found!');
  }
  return result;
};

const getSingleCategoryIntoDB = async (id: string) => {
  const result = await Category.findById(id);
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Category is not found!');
  }
  return result;
};

//updated cart
const updateCategoryIntoDB = async (
  id: string,
  payload: Record<string, unknown>,
) => {
  const result = await Category.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Category is not found!');
  }
  return result;
};

//delete cart
const deleteCategoryIntoBD = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Category is not found');
  }
  return result;
};

export const categoryServices = {
  createCategoryIntoDB,
  getSingleCategoryIntoDB,
  getCategorytIntoDB,
  updateCategoryIntoDB,
  deleteCategoryIntoBD,
};
