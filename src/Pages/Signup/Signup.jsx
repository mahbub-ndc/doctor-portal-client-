import React, { useContext } from 'react'
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignup = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .then (error=>console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2">
                    <img src={img} alt=''/>
                </div>
                <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignup}>
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p>Already have an account? <Link className="text-red-700" to ="/login">Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Signup;