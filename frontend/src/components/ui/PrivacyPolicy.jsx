import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 text-gray-800">
      {/* Header Section */}
      <div className="text-center py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
        <h1 className="text-5xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Your privacy matters to us. Learn how we collect, use, and protect your
          information while using <span className="font-semibold">ClassSync</span>.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            1. Information We Collect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Personal details such as your name, email, and account information.</li>
            <li>Usage data like pages visited and interactions with the platform.</li>
            <li>Device and browser information for better optimization.</li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>To improve platform performance and enhance user experience.</li>
            <li>To provide customer support and respond to inquiries.</li>
            <li>To send important updates or security notifications.</li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            3. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use advanced security measures to protect your data from unauthorized
            access or misuse. While no system is completely secure, we encourage you
            to use strong passwords and follow safe online practices.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            4. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have full rights to access, update, or delete your personal data.
            For any such requests, please contact our support team through the
            official ClassSync channels.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            5. Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy may be updated periodically. Any changes will be
            reflected on this page with a new “Last Updated” date.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            Last updated: October 2025
          </p>
        </section>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-transform transform hover:-translate-y-1 shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
