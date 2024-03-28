import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="text-center max-w-lg mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Welcome to Job Tracker</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">Your all-in-one solution for job hunting and application management</p>
                <a href="/signup" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">Get Started</a>
            </div>
            <div className="mt-16 md:mt-24 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard title="Job Search" description="Efficiently search for job openings based on your desired roles, location, and keywords." />
                    <FeatureCard title="Application Management" description="Track and manage your job applications, receive status updates, and set reminders for interviews and deadlines." />
                    <FeatureCard title="Resume Generation" description="Generate professional CVs and resumes tailored to each job application, increasing your chances of landing interviews." />
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({ title, description }) => {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

export default Home;
