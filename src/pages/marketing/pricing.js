import React from 'react';

const Pricing = () => {
    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-4/6">
                {/* Silver Plan */}
                <div className="bg-gradient-to-b from-gray-200 to-gray-300 shadow-md rounded-lg overflow-hidden border-4 border-gray-300 transition duration-300 hover:border-gray-500">
                    <div className="p-6">
                        <h3 className="text-center text-2xl font-bold text-gray-800">Silver</h3>
                        <div className="text-center text-gray-600 text-5xl mt-4 my-4 font-bold">$99/yr</div>
                        <div className="text-center text-gray-600 text-lg mt-1">($10/month)</div>
                        <ul className="mt-6 space-y-2">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            {/* Add more features as needed */}
                        </ul>
                        <button className="block w-full bg-gray-800 text-white font-semibold py-2 mt-6 rounded hover:bg-gray-700">Get Started</button>
                    </div>
                </div>

                {/* Gold Plan */}
                <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 shadow-md rounded-lg overflow-hidden border-4 border-gray-300 transition duration-300 hover:border-gray-500">
                    <div className="p-6">
                        <h3 className="text-center text-2xl font-bold text-yellow-500">Gold</h3>
                        <div className="text-center text-gray-600 text-5xl mt-4 my-4 font-bold">$199/yr</div>
                        <div className="text-center text-gray-600 text-lg mt-1">($20/month)</div>
                        <ul className="mt-6 space-y-2">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            {/* Add more features as needed */}
                        </ul>
                        <button className="block w-full bg-gray-800 text-white font-semibold py-2 mt-6 rounded hover:bg-gray-700">Get Started</button>
                    </div>
                </div>

                {/* Diamond Plan */}
                <div className="bg-gradient-to-b from-blue-100 to-blue-300 shadow-md rounded-lg overflow-hidden border-4 border-gray-300 transition duration-300 hover:border-gray-500">
                    <div className="p-6">
                        <h3 className="text-center text-2xl font-bold text-blue-800">Diamond</h3>
                        <div className="text-center text-gray-600 text-5xl mt-4 my-4 font-bold">$299/yr</div>
                        <div className="text-center text-gray-600 text-lg mt-1">($30/month)</div>
                        <ul className="mt-6 space-y-2">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            {/* Add more features as needed */}
                        </ul>
                        <button className="block w-full bg-gray-800 text-white font-semibold py-2 mt-6 rounded hover:bg-gray-700">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
