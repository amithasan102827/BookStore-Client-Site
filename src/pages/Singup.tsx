import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { createUser } from '../redux/features/user/userSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from 'react-bootstrap/Toast';


interface SignupFormInputs {
    email: string;
    password: string;
}


const Singup = () => {
    const {
        register,
        handleSubmit,
    } = useForm<SignupFormInputs>();

    const dispatch = useAppDispatch();

    const onSubmit = (data: SignupFormInputs) => {
        console.log(data);
        dispatch(createUser({ email: data.email, password: data.password }));

    };



    return (
        <div>
            <div className="flex justify-center">
                <div className="h-[90%] w-full md:w-3/4 m-4">
                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                        <h1 className="font-semibold text-3xl text-gray-700 m-2">Sign Up</h1>
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
                        <Link to="/login" className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                            Not a User?</Link>
                    </div>
                </div>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        </div>
    )
}

export default Singup