import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { loginUser } from '../redux/features/user/userSlice';
import { useForm } from "react-hook-form";


interface LoginFormInputs {
    email: string;
    password: string;
}

const Login = () => {
    const {
        register,
        handleSubmit,
    } = useForm<LoginFormInputs>();

    const { user, isLoading } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const onSubmit = (data: LoginFormInputs) => {
        console.log(data);

        dispatch(loginUser({ email: data.email, password: data.password }));
    };


    useEffect(() => {
        if (user.email && !isLoading) {
            navigate('/');
        }
    }, [user.email, isLoading]);

    return (
        <div>
            <div className="flex justify-center">
                <div className="h-[90%] w-full md:w-3/4 m-4">
                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                        <h1 className="font-semibold text-3xl text-gray-700 m-2">Login</h1>
                        <div className="flex">
                            {/* icon */}
                        </div>
                        <div className="text-gray-700 font-semibold">  or </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                            <div className="">
                                <input id="email" type="email" autoComplete="email" placeholder="Email"  {...register('email', { required: 'Email is required' })}
                                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                            </div>
                            <div className="">
                                <input id="password" type="password" placeholder="Password" {...register('password', { required: 'Password is required' })}
                                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                            </div>
                        </div>
                        <div className="text-center mt-7">
                            <button type='submit'
                                className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">login</button>
                        </div>
                    </form>
                    <div className="text-center my-6 flex flex-col">
                        <Link to="/signup" className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                            Create a Accout?</Link>
                    </div>
                </div>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        </div>
    )
}

export default Login