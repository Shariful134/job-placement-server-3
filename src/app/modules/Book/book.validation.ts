import { z } from 'zod';

const BookValidationSchema = z.object({
  body: z.object({
    title: z.string().nonempty('Title is required'),
    author: z.string().nonempty('Author is required'),
    price: z
      .number()
      .min(0, { message: 'Price must be a positive number' })
      .nonnegative()
      .refine((value) => value !== null, { message: 'Price is required' }),
    category: z.enum(
      ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      {
        required_error: 'Category is required',
      },
    ),
    description: z.string().nonempty('Description is required'),
    quantity: z
      .number()
      .int('Quantity must be an integer')
      .min(0, { message: 'Quantity must be a positive number' })
      .refine((value) => value !== null, { message: 'Quantity is required' }),
    inStock: z
      .boolean()
      .refine((value) => value !== null, { message: 'InStock is required' }),
    publicationDate: z.string().nonempty('publicationDate is required'),
    publisher: z.string().nonempty('publisher is required'),
    imageURL: z.string().nonempty('Image is required'),
  }),
});

//updated shcema
const updateValidationShema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    price: z.number().optional(),
    category: z
      .enum(['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'])
      .optional(),
    description: z.string().optional(),
    quantity: z
      .number()

      .optional(),
    publicationDate: z.string().optional(),
    publisher: z.string().optional(),
    imageURL: z.string().optional(),
  }),
});

export const BookValidationSchemas = {
  BookValidationSchema,
  updateValidationShema,
};
