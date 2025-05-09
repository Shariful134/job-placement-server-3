import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { BookValidationSchemas } from '../Book/book.validation';
import { bookController } from './book.controllers';

const router = express.Router();

//create Book
router.post(
  '/create-book',
  validateRequest(BookValidationSchemas.BookValidationSchema),
  auth(USER_ROLE.admin),
  bookController.createBook,
);
//get cart
router.get('/get-book', bookController.getAllBook);
router.get('/get-book/:id', bookController.getSingleBook);

//update cart
router.patch(
  '/update-book/:id',
  auth(USER_ROLE.admin),
  validateRequest(BookValidationSchemas.updateValidationShema),
  bookController.updateBook,
);
router.delete(
  '/delete-book/:id',
  auth(USER_ROLE.admin),
  bookController.deleteBook,
);

export const BookRoutes = router;
