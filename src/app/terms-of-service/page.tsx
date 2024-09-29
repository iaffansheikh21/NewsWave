import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-serif mb-6 text-gray-900 text-center">
        Terms of Service
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        These terms and conditions outline the rules and regulations for the use
        of our website and services. By accessing or using our services, you
        agree to comply with these terms.
      </p>

      <div className="max-w-3xl mx-auto bg-gray-80 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our website, you agree to be bound by these
          terms and conditions. If you do not agree with any part of these
          terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Any changes
          will be effective immediately upon posting on our website. It is your
          responsibility to review these terms periodically.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your
          account and password and for restricting access to your computer. You
          agree to accept responsibility for all activities that occur under
          your account.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">
          Our website and services are provided on an "as is" basis. We make
          no representations or warranties of any kind, express or implied,
          regarding the operation of our website or the information, content,
          materials, or products included on our site.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these terms of service, please
          contact us:
          <br />
          Email: <a href="mailto:muhammadaffansheikh21@gmail.com" className="text-blue-500 hover:underline">muhammadaffansheikh21@gmail.com</a>
          <br />
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
