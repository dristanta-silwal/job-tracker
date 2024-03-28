import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [progress, setProgress] = useState(0);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        updateProgress();
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        updateProgress();
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        updateProgress();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
    };

    const updateProgress = () => {
        let newProgress = 0;
        if (email !== '') newProgress += 33.33;
        if (password !== '') newProgress += 33.33;
        if (confirmPassword !== '') newProgress += 33.33;
        setProgress(newProgress);
    };

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100">
            <div className="sm:w-full sm:max-w-sm rounded-lg overflow-hidden border border-gray-300 transition duration-300 hover:border-gray-500" style={{ height: '580px' }}>
                <div className="p-6">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Sign up for an account</h2>

                    <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6">Email address</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required placeholder="Enter your email" value={email} onChange={handleEmailChange} className="block w-full h-12 px-4 rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-base text-gray-900 shadow-sm focus:shadow-outline-gray placeholder-gray-500 focus:placeholder-gray-400 focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="new-password" required placeholder="Enter your password" value={password} onChange={handlePasswordChange} className="block w-full h-12 px-4 rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-base text-gray-900 shadow-sm focus:shadow-outline-gray placeholder-gray-500 focus:placeholder-gray-400 focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6">Confirm password</label>
                            <div className="mt-1">
                                <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required placeholder="Retype your password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="block w-full h-12 px-4 rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-base text-gray-900 shadow-sm focus:shadow-outline-gray placeholder-gray-500 focus:placeholder-gray-400 focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Create Account</button>
                        </div>
                    </form>

                    <div className="mt-4">
                        <progress value={progress} max="100" className="w-full h-2 bg-gray-300 rounded-md"></progress>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="/signin" className="font-semibold leading-6 text-gray-600 hover:text-gray-500">
                            Sign in here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
