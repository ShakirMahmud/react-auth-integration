import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const navigate = useNavigate();

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
                navigate('/orders');
            })
            .catch(error => {
                console.error('Error signing in:', error.message);
            });
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
           .then((result) => {
                console.log(result.user);
                navigate('/orders');
            })
           .catch(error => {
                console.error('Error signing in with Google:', error.message);
            });
    }

    return (
        <div className="hero  ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-lg font-bold text-lg text-white">Login</button>
                        </div>
                    </form>
                    <div className="text-center mb-6 px-4">
                        <p className='text-lg'>Don't have an account? <Link className="link link-hover" to='/register'>Create Now!</Link></p>
                    </div>
                    <div className="w-full flex  justify-center py-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-ghost bg-base-300 rounded-lg text-lg">Sign In with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;