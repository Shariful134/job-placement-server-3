import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidationSchemas } from './categoryValidation';
import { categoryController } from './category.controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-category',
  validateRequest(categoryValidationSchemas.CreateCategoryValidationSchema),
  auth(USER_ROLE.admin),
  categoryController.createCategory,
);

router.patch(
  '/update-category/:id',
  validateRequest(categoryValidationSchemas.updateCategoryValidationShema),
  auth(USER_ROLE.admin),
  categoryController.updateCategory,
);

router.get('/get-category/:id', categoryController.getSingleCategory);
router.delete(
  '/delete-category/:id',
  auth(USER_ROLE.admin),
  categoryController.deleteCategory,
);
router.get('/get-category/', categoryController.getAllCategory);

export const CategoryRoutes = router;
