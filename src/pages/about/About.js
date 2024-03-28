import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Job Tracker</h1>
            <p className="text-lg mb-6">
                The "Job Tracker" web application, developed using Flask, empowers users to efficiently search for job openings across the internet based on their desired roles. This application offers functionalities for generating CVs, resumes, and autofilling job applications. Additionally, it includes features to manage job applications, providing status updates and reminders for better organization.
            </p>
            <h2 className="text-2xl font-bold mb-4">Features:</h2>
            <ul className="list-disc list-inside mb-6">
                <li><strong>Job Search:</strong> This feature allows users to search for job openings by specifying their desired roles, such as job title, industry, location, etc.</li>
                <li><strong>Comprehensive Job Search:</strong> Unlike traditional job search engines that rely on a single database, this feature scours various online job portals and sources.</li>
                <li><strong>CV/Resume Generation:</strong> Users can create professional CVs and resumes directly within the application.</li>
                <li><strong>Autofill Job Applications:</strong> This feature simplifies the process of applying for jobs by automatically populating common fields in job application forms.</li>
                <li><strong>Application Tracking:</strong> Users can track the status of their job applications within the application.</li>
                <li><strong>Reminders:</strong> Users can set reminders for important dates related to job applications.</li>
                <li><strong>User Authentication:</strong> This feature ensures that only authorized users can access the application's functionalities and data.</li>
                <li><strong>User Profiles:</strong> Users can create and manage their profiles within the application.</li>
                <li><strong>Mobile Responsive:</strong> The web application is designed to be responsive and accessible across various devices.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Technologies:</h2>
            <ul className="list-disc list-inside">
                <li><strong>Flask:</strong> Python web framework for efficient backend development.</li>
                <li><strong>HTML/CSS/JavaScript:</strong> Frontend development for creating an intuitive user interface and interactive features.</li>
                <li><strong>Database:</strong> Storage solution for user data, job listings, and application information.</li>
                <li><strong>Web Scraping:</strong> Utilize libraries like BeautifulSoup to scrape job listings from diverse websites.</li>
                <li><strong>PDF Generation Libraries:</strong> Tools for generating professional CVs and resumes in PDF format.</li>
            </ul>
            <p className="text-sm text-gray-600 mt-8">
                Note: Ensure compliance with legal regulations concerning data privacy and usage rights when scraping job listings from third-party websites. Consider utilizing APIs or obtaining proper permissions where available.
            </p>
        </div>
    );
};

export default About;
