import { useState } from "react";

function TermsOfService({ setIsOpen }) {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Terms of Service
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 transition text-xl font-semibold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto text-gray-600 text-sm leading-relaxed space-y-4">
          <p>
            Welcome to <strong>ClassSync</strong>. By using our services, you agree
            to the following terms and conditions. Please read them carefully
            before proceeding.
          </p>

          <h3 className="font-semibold text-gray-800">1. Use of Service</h3>
          <p>
            You agree to use this platform lawfully and in accordance with all
            applicable regulations. Misuse of ClassSync may lead to suspension or
            permanent restriction.
          </p>

          <h3 className="font-semibold text-gray-800">2. Privacy & Data</h3>
          <p>
            We prioritize user privacy. Data collected is handled in compliance with our
            <a
              href="/privacy-policy"
              className="text-indigo-600 hover:underline ml-1"
            >
              Privacy Policy
            </a>.
          </p>

          <h3 className="font-semibold text-gray-800">3. Intellectual Property</h3>
          <p>
            All content, including text, design, and logos, are proprietary to
            ClassSync and protected by copyright laws.
          </p>

          <h3 className="font-semibold text-gray-800">4. Liability</h3>
          <p>
            ClassSync is not liable for indirect or incidental damages resulting
            from use of the platform or temporary unavailability of services.
          </p>

          <h3 className="font-semibold text-gray-800">5. Modifications</h3>
          <p>
            These terms may be updated from time to time. Continued use implies
            acceptance of the revised terms.
          </p>

          <p className="text-gray-500 text-xs">Last updated: October 2025</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="accent-indigo-600 w-4 h-4"
            />
            I Agree
          </label>
          <button
            disabled={!isAgreed}
            onClick={() => setIsOpen(false)}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              isAgreed
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
