// import React from "react";
// import Link
//  from "next/link";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";

// const ContactUs = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold font-serif mb-6 text-gray-900 text-center">
//         Contact Us
//       </h1>
//       <p className="text-lg text-gray-700 text-center mb-8">
//         We would love to hear from you! Feel free to reach out to us with any questions, feedback, or inquiries.
//       </p>

//       {/* Contact Form */}
//       <div className="max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg p-8">
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Type your message"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Contact Information */}
//       <div className="mt-12 text-center text-gray-700">
//         <p>Email: <a href="muhammadaffansheikh21@gmail.com" className="text-blue-500 hover:underline">support@example.com</a></p>
//         <p className="mt-4">
//           Follow us on:
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="https://www.instagram.com/iaffansheikh21?igsh=dzM2eG5wbzZlbmk2" target="_blank" aria-label="Instagram">
//                 <FaInstagram className="h-6 w-6 text-gray-500 hover:text-white transition-colors" />
//               </Link>
//             </li>
//             <li>
//               <Link href="https://www.linkedin.com/in/muhammad-affan-sheikh-587330250/" target="_blank" aria-label="LinkedIn">
//                 <FaLinkedin className="h-6 w-6 text-gray-500 hover:text-white transition-colors" />
//               </Link>
//             </li>
//             </ul>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Make sure to import your icons

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-serif mb-6 text-gray-900 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        We would love to hear from you! Feel free to reach out to us with any questions, feedback, or inquiries.
      </p>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-gray-80 shadow-lg rounded-lg p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type your message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center text-gray-700">
        <p>Email: <a href="mailto:muhammadaffansheikh21@gmail.com" className="text-blue-500 hover:underline">muhammadaffansheikh21@gmail.com</a></p>
        <div className="flex items-center justify-center mt-4">
          <span className="mr-2">Follow us on:</span>
          <Link href="https://www.instagram.com/iaffansheikh21?igsh=dzM2eG5wbzZlbmk2" target="_blank" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 text-slate-500 hover:text-slate-900 transition-colors mx-2" />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-affan-sheikh-587330250/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 text-slate-500 hover:text-slate-900 transition-colors mx-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
