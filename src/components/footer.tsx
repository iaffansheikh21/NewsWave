// import React from "react";
// import Link from "next/link";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-4">
//       <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center">
//         <p className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-4">
//           &copy; 2024 The NewsWave. All rights reserved.
//           Developed and designed by Muhammad Affan Sheikh.  
//         </p>
//         <nav className="flex flex-wrap justify-center lg:justify-end space-x-4">
//           <a href="#" className="hover:text-gray-400">
//             Privacy Policy
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Terms of Service
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Contact Us
//           </a>

//           <ul className="flex space-x-4 items-center">
//             <li>
//               <Link
//                 target="_blank " href="https://www.instagram.com/iaffansheikh21?igsh=dzM2eG5wbzZlbmk2"
//                 className="hover:text-gray-400"
//               >
//                 <FaInstagram className="h-4 w-4 text-gray-400 hover:text-blue-500" />
//               </Link>
//             </li>
//             <li>
//               <Link
//                 target="_blank " href="https://www.linkedin.com/in/muhammad-affan-sheikh-587330250/"
//                 className="hover:text-gray-400"
//               >
//                 <FaLinkedin className="h-4 w-4 text-gray-400 hover:text-blue-700" />
//               </Link>
//             </li>
//             <li>
//               <Link
//                 target="_blank " href="https://github.com/iaffansheikh21"
//                 className="hover:text-gray-400"
//               >
//                 <FaGithub className="h-4 w-4 text-gray-400 hover:text-purple-600" />
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div className="text-center lg:text-left">
          <p className="text-sm">
            &copy; 2024 The NewsWave. All rights reserved.
          </p>
          <p className="text-sm">Developed and designed by Muhammad Affan Sheikh.</p>
        </div>

        <nav className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex space-x-6">
          <Link href="/" className="text-sm hover:text-white transition-colors">
              Home
            </Link>
            <Link href="privacy-policy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="terms-of-service" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="contact-us" className="text-sm hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>

          <ul className="flex space-x-4">
            <li>
              <Link href="https://www.instagram.com/iaffansheikh21?igsh=dzM2eG5wbzZlbmk2" target="_blank" aria-label="Instagram">
                <FaInstagram className="h-6 w-6 text-gray-500 hover:text-white transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/muhammad-affan-sheikh-587330250/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6 text-gray-500 hover:text-white transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/iaffansheikh21" target="_blank" aria-label="GitHub">
                <FaGithub className="h-6 w-6 text-gray-500 hover:text-white transition-colors" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
