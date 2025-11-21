"use client";

import React, { useState } from "react";

function Banner_11() {
    const [isVisible, setIsVisible] = useState(true);

    // Payment options data - removed icons and using text only
    const paymentOptions = [
        { name: "信用卡" },
        { name: "微信支付" },
        { name: "支付宝" },
        { name: "花呗" },
    ];

    // Hide banner when user dismisses it
    const dismissBanner = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-xl transition-all duration-300">
            {/* Top gradient accent - enhanced with animation */}
            <div className="animate-gradient absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

            <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight text-gray-800">
                    支持多种付款方式
                </h3>

                <button
                    className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    onClick={dismissBanner}
                    aria-label="Dismiss"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <p className="mb-6 max-w-3xl text-gray-600">
                灵活的支付方式，让结账更轻松。选择最适合您的方式。
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {paymentOptions.map((option, index) => (
                    <div
                        key={index}
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:transform hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
                    >
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
              {option.name}
            </span>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <a
                    href="#payment-details"
                    className="inline-block rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-800"
                >
                    了解更多关于我们付款流程的信息 →
                </a>
            </div>
        </div>
    );
}

export default Banner_11;
