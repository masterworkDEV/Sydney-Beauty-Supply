import { ref } from 'vue'

interface FormField {
  name: string
  label: string
  type: string
  placeholder?: string
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  validationMessage?: string
  default?: string | number | boolean | string[]
  options?: string[] | { value: string; text: string }[]
  readOnly?: boolean
}

interface FormStep {
  stepName: string
  fields: FormField[]
}

const productFormSteps = ref<FormStep[]>([
  {
    stepName: 'Basic Information',
    fields: [
      {
        name: 'name',
        label: 'Product Name',
        type: 'text',
        placeholder: 'e.g., Silk Maxi Dress, Classic Denim Jacket',
        required: true,
        minLength: 3,
        maxLength: 120,
        validationMessage: 'Product name must be between 3 and 120 characters.',
      },
      {
        name: 'description',
        label: 'Product Description',
        type: 'textarea',
        placeholder: 'A detailed description of the product, including fit and features...',
        required: true,
        minLength: 20,
        maxLength: 1000,
        validationMessage: 'Product description must be between 20 and 1000 characters.',
      },
      {
        name: 'designer', // Changed from 'brand'
        label: 'Designer',
        type: 'text',
        placeholder: 'e.g., Sarah Designs, Urban Threads Co.',
        required: true,
        maxLength: 70,
        validationMessage: 'Designer name cannot exceed 70 characters.',
      },
      {
        name: 'category',
        label: 'Category',
        type: 'text',
        placeholder: 'e.g., Footwares, Women wears, Men wears',
        required: true,
        validationMessage: 'Product category is required.',
      },
      {
        name: 'subCategory',
        label: 'Sub-Category',
        type: 'text',
        placeholder: 'e.g., Evening Dresses, Graphic Tees, Clutch Bags',
        maxLength: 70,
        validationMessage: 'Sub-category name cannot exceed 70 characters.',
      },
      {
        name: 'gender',
        label: 'Target Gender',
        type: 'select',
        options: ['Men', 'Women', 'Unisex', 'Kids'],
        default: 'Unisex',
        required: true,
        validationMessage: 'Target gender is required.',
      },
    ],
  },
  {
    stepName: 'Pricing & Stock',
    fields: [
      {
        name: 'price',
        label: 'Price',
        type: 'number',
        placeholder: '0.00',
        required: true,
        min: 0,
        validationMessage: 'Price cannot be negative.',
      },
      {
        name: 'currency',
        label: 'Currency',
        type: 'text',
        default: 'USD',
        placeholder: 'USD',
      },
      {
        name: 'countInStock',
        label: 'Quantity in Stock',
        type: 'number',
        placeholder: '0',
        required: true,
        min: 0,
        default: 0,
        validationMessage: 'Stock count cannot be negative.',
      },
    ],
  },
  {
    stepName: 'Attributes & Details',
    fields: [
      {
        name: 'sizes',
        label: 'Available Sizes',
        type: 'checkbox-group',
        options: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size', 'Custom'],
        default: [],
        validationMessage: 'Select at least one size.',
      },
      {
        name: 'colors',
        label: 'Available Colors',
        type: 'text-array',
        placeholder: 'Add a color (e.g., Red, Navy, Black) and press Enter',
        validationMessage: 'Add at least one color.',
      },
      {
        name: 'materials',
        label: 'Materials',
        type: 'text-array', // For adding multiple materials
        placeholder: 'Add a material (e.g., Cotton, Silk, Leather) and press Enter',
      },
      // {
      //   name: 'style',
      //   label: 'Style/Aesthetic',
      //   type: 'checkbox-group',
      //   options: [
      //     'Bohemian',
      //     'Minimalist',
      //     'Streetwear',
      //     'Formal',
      //     'Casual',
      //     'Vintage',
      //     'Athleisure',
      //     'Classic',
      //   ],
      //   default: [],
      // },
      {
        name: 'collection',
        label: 'Collection',
        type: 'text',
        placeholder: 'e.g., Spring/Summer 2025, Limited Edition',
        maxLength: 80,
        validationMessage: 'Collection name cannot exceed 80 characters.',
      },
      {
        name: 'season',
        label: 'Season',
        type: 'checkbox-group',
        options: ['Spring', 'Summer', 'Autumn', 'Winter', 'All-Season'],
        default: ['All-Season'],
      },
      {
        name: 'careInstructions',
        label: 'Care Instructions',
        type: 'textarea',
        placeholder: 'e.g., Machine wash cold, Tumble dry low, Do not bleach',
        maxLength: 300,
        validationMessage: 'Care instructions cannot exceed 300 characters.',
      },
    ],
  },
  {
    stepName: 'Media & Features',
    fields: [
      {
        name: 'thumbnail',
        label: 'Thumbnail Image (Required)',
        type: 'file-single',
        required: true,
        validationMessage: 'A thumbnail image is required.',
      },
      {
        name: 'images',
        label: 'Additional Product Images',
        type: 'file-multi',
      },
      {
        name: 'rating',
        label: 'Rating',
        type: 'number',
        placeholder: '0',
        min: 0,
        max: 5,
        default: 0,
        readOnly: true,
        validationMessage: 'Rating must be between 0 and 5.',
      },
      {
        name: 'numReviews',
        label: 'Number of Reviews',
        type: 'number',
        default: 0,
        readOnly: true,
      },
      {
        name: 'isFeatured',
        label: 'Mark as Featured Product',
        type: 'checkbox',
        default: false,
      },
      {
        name: 'isActive',
        label: 'Product is Active',
        type: 'checkbox',
        default: true,
      },
    ],
  },
])

export default productFormSteps
