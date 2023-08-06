
export type Genre = "Romance" | "Thriller" | "Mystery" | "Action" |"Health";


export interface IProduct {
    _id: string;
    name: string;
    image: string;
    price: number;
    details: string;
    rating: number;
    author: string;
    genre: Genre;
    publicationDate: Date;
    quantity?: number;
}

