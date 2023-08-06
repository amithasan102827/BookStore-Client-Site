import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct, Genre } from '../../types/globalTypes';

// interface IProduct {
//     status: boolean;
//     priceRange: number;
// }

// const initialState: IProduct = {
//     status: false,
//     priceRange: 150,
// };



interface IBook {
    books: IProduct[];
    filteredBooks: IProduct[];
    searchQuery: string;
}

const initialState: IBook = {
    books: [],
    filteredBooks: [],
    searchQuery: "",
};




const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks(state, action: PayloadAction<IProduct[]>) {
            state.books = action.payload;
            state.filteredBooks = action.payload;
        },

        filterBooksByGenre(state, action: PayloadAction<Genre | "All">) {
            const genre = action.payload;
            if (genre === "All") {
                state.filteredBooks = state.books;
            } else {
                state.filteredBooks = state.books.filter((book) => book.genre === genre);
            }
        },

        setSearchQuery(state, action: PayloadAction<string>) {
            // state.searchQuery = action.payload;
            const searchQuery = action.payload;
            if (!searchQuery) {
                state.filteredBooks = state.books;
            } else {
                state.filteredBooks = state.books.filter((book) =>
                    book?.name.toLowerCase().includes(action.payload.toLowerCase())
                );
            }
        },
    },
});
// const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {
//         toggleState: (state) => {
//             state.status = !state.status;
//         },
//         setPriceRange: (state, action: PayloadAction<number>) => {
//             state.priceRange = action.payload;
//         },
//     },
// });

// export const { toggleState, setPriceRange } = productSlice.actions;

// export default productSlice.reducer;


export const { setBooks, filterBooksByGenre, setSearchQuery  } = bookSlice.actions;

export default bookSlice.reducer;