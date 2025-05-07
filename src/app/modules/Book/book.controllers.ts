import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bookServices } from './book.services';

//create cart
const createBook = catchAsync(async (req, res, next) => {
  const result = await bookServices.createBookIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Book Created successfully!',
    data: result,
  });
});

//get cart
const getAllBook = catchAsync(async (req, res, next) => {
  const result = await bookServices.getBookIntoDB();
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Book Retrived successfully!',
    data: result,
  });
});

const getSingleBook = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await bookServices.getSingleBookIntoDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Book Retrived successfully!',
    data: result,
  });
});

//updated Cart
const updateBook = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await bookServices.updateBookIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Book Updated successfully!',
    data: result,
  });
});

//delte Cart
const deleteBook = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await bookServices.deleteBookIntoBD(id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Book Delted  successfully!',
    data: result,
  });
});

export const bookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
