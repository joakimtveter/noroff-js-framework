export interface Product {
    description: string;
    discountedPrice: number;
    id: string;
    imageUrl: string;
    price: number;
    rating: number;
    reviews: Array<Review>;
    tags: Array<string>;
    title: string;
}

export interface Review {
    description: string;
    id: string;
    rating: number;
    username: string;
}
