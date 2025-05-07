import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

import { categoryServices } from './category.service';
import { cartServices } from '../cart/cart.services';

//create cart
const createCategory = catchAsync(async (req, res, next) => {
  const user = req.user;
  console.log(user);
  const result = await categoryServices.createCategoryIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Category Created successfully!',
    data: result,
  });
});

//get cart
const getAllCategory = catchAsync(async (req, res, next) => {
  const result = await categoryServices.getCategorytIntoDB();
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Category Retrived successfully!',
    data: result,
  });
});

const getSingleCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await categoryServices.getSingleCategoryIntoDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Category Retrived successfully!',
    data: result,
  });
});

//updated Cart
const updateCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await categoryServices.updateCategoryIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Category Updated successfully!',
    data: result,
  });
});

//delte Cart
const deleteCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await categoryServices.deleteCategoryIntoBD(id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Category Delted  successfully!',
    data: result,
  });
});

export const categoryController = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
