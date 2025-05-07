import { isValidObjectId } from 'mongoose';
import { z } from 'zod';

const CreateCategoryValidationSchema = z.object({
  body: z.object({
    name: z.enum([
      'Fiction',
      'Science',
      'SelfDevelopment',
      'Poetry',
      'Religious',
    ]),
    imageURL: z.string().nonempty('Image is required'),
  }),
});

//updated shcema
const updateCategoryValidationShema = z.object({
  body: z.object({
    name: z
      .enum(['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'])
      .optional(),
    imageURL: z.string().optional(),
  }),
});

export const categoryValidationSchemas = {
  CreateCategoryValidationSchema,
  updateCategoryValidationShema,
};
