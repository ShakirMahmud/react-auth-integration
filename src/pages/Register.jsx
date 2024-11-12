import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password, name);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch(err => {
                console.error('Error', err.message);
            })
    }

    return (
        <div className="hero  ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="email" name='name' className="input input-bordered rounded-lg " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered rounded-lg " required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="text-lg font-semibold">Password</span>
                            </label>
                            <input type={isClicked ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered rounded-lg " required />
                            <div onClick={() => setIsClicked(!isClicked)} className="absolute hover:cursor-pointer right-4 top-[3.75rem] text-xl">
                                {
                                    isClicked ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-lg font-bold text-lg">Register</button>
                        </div>
                    </form>
                    <div className="text-center mb-6 px-4">
                        <p className='text-lg'>Already have an account? <Link className="link link-hover" to='/login'>Login Now!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;