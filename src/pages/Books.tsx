import React, { useEffect } from "react";
import { Tabs, Tab, Button } from 'react-bootstrap'
import { useGetProductsQuery } from '../redux/features/bookApi';
import { Genre, IProduct } from '../types/globalTypes';
import { useAppDispatch } from '../redux/hook';
import { addToCart } from '../redux/features/cart/cartSlice';
import { Form, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { filterBooksByGenre, setBooks, setSearchQuery } from "../redux/features/bookSlice";
// import BookGenreList from "../components/BookGenreList";

export const Books = () => {
    const { data, isLoading, error } = useGetProductsQuery(undefined);


    const dispatch = useAppDispatch();
    const filteredBooks = useSelector((state: RootState) => state.books.filteredBooks);
    const searchQuery = useSelector((state: RootState) => state.books.searchQuery);


    useEffect(() => {
        if (data) {
            dispatch(setBooks(data));
        }
    }, [data, dispatch]);


    useEffect(() => {
        dispatch(setSearchQuery(""));
    }, [dispatch]);



    const handleGenreChange = (genre: Genre | "All") => {
        dispatch(filterBooksByGenre(genre));
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value));
    };



    return (
        <div className='px-4'>

            <form className="w-75 mx-auto mb-5">
                <div className="mb-3">
                    <input type="text" onChange={handleSearch} placeholder="Search by book name..." className="form-control py-3 bg-secondary-subtle text-dark fw-semibold"   />
                </div>
            </form>

            <Tabs
                defaultActiveKey="All"
                id="justify-tab-example"
                className="mb-3 border-0 fs-5 px-5 mx-3"
                justify
                onSelect={(genre) => handleGenreChange(genre as Genre)}
            >
                <Tab eventKey="All" title="All">

                    <BookGenreList genre="All" books={filteredBooks} />

                </Tab>
                <Tab eventKey="Thriller" title="Thriller">

                    <BookGenreList genre="All" books={filteredBooks} />
                </Tab>
                <Tab eventKey="Action" title="Action" >

                    <BookGenreList genre="Action" books={filteredBooks} />
                </Tab>
            </Tabs>
        </div>
    )
}


interface BookGenreListProps {
    genre: Genre | "All";
    books: IProduct[];
}

const BookGenreList = ({ genre, books }: BookGenreListProps) => {
    const genreBooks = genre === "All" ? books : books.filter((book) => book.genre === genre);
    console.log(genreBooks);
    const dispatch = useAppDispatch();
    const handleAddProduct = (data: IProduct) => {
        dispatch(addToCart(data));
    };
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {genreBooks?.map((book) => (
                        <div key={book._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link to={`/book-details/${book._id}`} className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-fill object-center w-full h-full block" src={book?.image} />
                            </Link>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{book?.genre}</h3>

                                <h2 className="text-gray-900 title-font text-lg font-medium truncate">{book?.name}</h2>
                                {/* <p className="mt-1">${product.price}</p> */}

                                <button onClick={() => handleAddProduct(book)} type="button" className="bg-danger px-2 text-white fs-6 py-0 d-inline py-1 mt-1">Add To Cart<i className="bi bi-bag-plus ms-2"></i></button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>

    );
};




// interface SearchBarProps {
//     onChange: (query: string) => void;
// }

// const SearchBar = ({ onChange }: SearchBarProps) => {
//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         onChange(e.target.value);
//     };

//     return (
//         <input
//             type="text"
//             placeholder="Search by book name..."
//             onChange={handleSearchChange}
//         />
//     );
// };

export default Books