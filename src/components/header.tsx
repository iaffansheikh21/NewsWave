import React from "react";

const Header = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white py-4">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold font-serif mb-4">The NewsWave</h1>
                            <p className="text-lg mb-8">
                                Stay informed with NewsWave&apos;s diverse articles, ensuring comprehensive coverage and insightful analysis. Trust our dedicated team for accurate, timely updates, empowering you to stay knowledgeable and engaged.
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            {" "}
                            {/* Adjusted this div */}
                            <a
                                href="#"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;