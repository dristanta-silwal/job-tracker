import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Perform form validation
        if (name && email && message) {
            try {
                // Call backend API to send message
                await sendMessage({ name, email, message }); // Replace with actual implementation
                setMessageSent(true);
            } catch (error) {
                console.error('Error sending message:', error);
                // Handle error (e.g., display error message)
            }
        } else {
            // Handle form validation errors
        }
    };

    const sendMessage = async (formData) => {
        // Call your backend API to send the message
        // You will need to implement this backend API endpoint
        // Example:
        // const response = await fetch('/api/send-message', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // });
        // const data = await response.json();
        // Handle response accordingly
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 border-4 border-gray-300 border-solid transition duration-300 hover:border-gray-500 rounded-lg overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                {messageSent ? (
                    <div>
                        <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                        {/* Optionally, display a confirmation message */}
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                Send Message
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
