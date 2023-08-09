import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Books from '../pages/Books';
import NotFound from '../pages/NotFound';
import Singup from '../pages/Singup';
import Login from '../pages/Login';
import BooksDetails from '../pages/BooksDetails';
import Checkout from '../pages/Checkout';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/books',
                element: <Books />,
            },
            {
                path: '/book-details/:id',
                element: <BooksDetails />,
            },
            {
                path: '/checkout',
                element: (
                    <PrivateRoute>
                        <Checkout />,
                    </PrivateRoute>
                )
                    
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Singup />,
    },
    
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default routes;