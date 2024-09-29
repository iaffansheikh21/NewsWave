import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-serif mb-6 text-gray-900 text-center">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Your privacy is important to us. This privacy policy explains the types
        of information we collect, how we use it, and your rights regarding
        that information.
      </p>
      
      <div className="max-w-3xl mx-auto bg-gray-80 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect various types of information in order to provide the best
          service possible. This includes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Personal Information: Such as your name, email address, etc.</li>
          <li>
            Usage Data: Information about how you use our website and services.
          </li>
          <li>Cookies: Small data files stored on your device.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain our services.</li>
          <li>To notify you about changes to our services.</li>
          <li>To allow you to participate in interactive features when you choose to do so.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Access the information we hold about you.</li>
          <li>Request correction of any inaccurate information.</li>
          <li>Request deletion of your personal information.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our privacy policy from time to time. We will notify you
          of any changes by posting the new privacy policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this privacy policy, please contact us:
          <br />
          Email: <a href="mailto:muhammadaffansheikh21@gmail.com" className="text-blue-500 hover:underline">muhammadaffansheikh21@gmail.com</a>
          <br />
         </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
