// * This is set of available categories. This type can be extended if necessary.
type ProductCategories =
    'clothes'
    | 'electronics'
    | 'furniture'
    | 'shoes'
    | 'miscellaneous';

interface ProductCategoryModel {
    id: number
    name: string
    image: string
    slug: ProductCategories
}

export interface ProductModel {
    id: number
    title: string
    price: number
    description: string
    categoryId: number
    category: ProductCategoryModel
    images: Array<string>
    slug: string
    creationAt: string
    updatedAt: string
}

