// 'use client'

// import { News } from "@/src/lib/NewsApi"
// import Link from "next/link";

// import {
//     WhatsappShareButton,
//     WhatsappIcon,
// } from "next-share";
// import {
//     LinkedinShareButton,
//     LinkedinIcon,
// } from 'next-share'
// import {
//     FacebookMessengerShareButton,
//     FacebookMessengerIcon,
// } from 'next-share'
// import {
//     EmailShareButton,
//     EmailIcon,
// } from 'next-share'

// interface CardActionBarProps {
//     news: News;
// }
// const CardActionBar: React.FC<CardActionBarProps> = ({ news }) => {

//     let convertObjectToUrlEnc = () => {
//         let url = "";
//         for (let key in news) {
//             //@ts-ignore
//             url += key + "=" + news[key] + "&"
//         }
//         return url
//     }
//     return (
//         <div className="space-x-4 flex justify-end">
//             <WhatsappShareButton
//                 url={news.url}
//                 title={news.title || ""}
//                 separator=":: "
//             >
//                 <WhatsappIcon size={32} round />
//             </WhatsappShareButton>
//             <LinkedinShareButton url={news.url || " "}>
//                 <LinkedinIcon size={32} round />
//             </LinkedinShareButton>
//             <FacebookMessengerShareButton
//                 url={news.url}
//                 appId={''}
//             >
//                 <FacebookMessengerIcon size={32} round />
//             </FacebookMessengerShareButton>
//             <EmailShareButton
//                 url={news.url}
//                 subject={""}
//                 body="body"
//             >
//                 <EmailIcon size={32} round />
//             </EmailShareButton>
//             <Link target="_blank" href={news.url || ""}>
//                 <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 px-3 py-3">Show Details</button>
//             </Link>
//             <Link href={`/${news.title}?${convertObjectToUrlEnc()}`}>
//                 <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 px-3 py-3">Open</button>
//             </Link>
//         </div>
//     );
// };
// export default CardActionBar;
'use client'

import { News } from "@/src/lib/NewsApi"
import Link from "next/link";

import {
    WhatsappShareButton,
    WhatsappIcon,
} from "next-share";
import {
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share'
import {
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
} from 'next-share'
import {
    EmailShareButton,
    EmailIcon,
} from 'next-share'

interface CardActionBarProps {
    news: News;
}
const CardActionBar: React.FC<CardActionBarProps> = ({ news }) => {

    let convertObjectToUrlEnc = () => {
        let url = "";
        for (let key in news) {
            //@ts-ignore
            url += key + "=" + news[key] + "&"
        }
        return url
    }
    return (
        <div className="space-x-2 space-y-1 flex flex-wrap justify-center md:justify-end">
            <WhatsappShareButton
                url={news.url}
                title={news.title || ""}
                separator=":: "
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={news.url || " "}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <FacebookMessengerShareButton
                url={news.url}
                appId={''}
            >
                <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <EmailShareButton
                url={news.url}
                subject={""}
                body="body"
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
            <Link target="_blank" href={news.url || ""}>
                <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-full md:w-auto">
                    Show Details
                </button>
            </Link>
            <Link href={`/${news.title}?${convertObjectToUrlEnc()}`}>
                <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-full md:w-auto">
                    Open
                </button>
            </Link>
        </div>
    );
};
export default CardActionBar;
