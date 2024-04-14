import React, { useState, useEffect } from 'react';

const SignIn = () => {
    // State variables for form fields
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    // Form validation
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'credential':
                setCredential(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        // Form validation logic
        const errors = {};
        if (!credential.trim()) {
            errors.credential = 'Please enter your email or phone number';
        }
        if (!password.trim()) {
            errors.password = 'Please enter your password';
        }
        setErrors(errors);
    }, [credential, password]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Logged in");
    };

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100">
            <div className="sm:w-full sm:max-w-sm rounded-lg overflow-hidden border-4 border-gray-300 border-solid transition duration-300 hover:border-gray-500 bg-gradient-to-b from-gray-100 to-gray-200" style={{ height: '500px' }}>
                <div className="p-6">
                    <img className="mx-auto h-10 w-auto" src="" alt="Company Logo" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Sign in to your account</h2>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                        <div>
                            <label htmlFor="credential" className="block text-sm font-medium leading-6">Email address or Phone number</label>
                            <div className="mt-1">
                                <input 
                                    id="credential" 
                                    name="credential" 
                                    type="text" 
                                    autoComplete="email" 
                                    required 
                                    value={credential} 
                                    onChange={handleInputChange} 
                                    placeholder="Enter your email or phone number" 
                                    className={`block w-full h-12 px-4 rounded-md border ${errors.credential ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 focus:ring-gray-500 text-base text-gray-900 shadow-sm focus:shadow-outline-gray placeholder-gray-500 focus:placeholder-gray-400 focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 sm:text-sm`} 
                                />
                                {errors.credential && <p className="text-red-500 text-xs mt-1">{errors.credential}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
                            <div className="mt-1">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="current-password" 
                                    required 
                                    value={password} 
                                    onChange={handleInputChange} 
                                    placeholder="Enter your password" 
                                    className={`block w-full h-12 px-4 rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 focus:ring-gray-500 text-base text-gray-900 shadow-sm focus:shadow-outline-gray placeholder-gray-500 focus:placeholder-gray-400 focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 sm:text-sm`} 
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Not a member?
                        <a href="/signup" className="font-semibold leading-6 text-gray-600 hover:text-gray-500"> Sign up for free</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
