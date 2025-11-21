"use client";

import ImageViewer from "@/app/components/imageViewer/ImageViewer";
import StarRating_Fractions from "@/app/components/starRating/StarRating_fraction";
import PriceFormat_basic from "@/app/components/priceFormat/PriceFormat_basic";
import {Button} from "@/app/components/ui/Button";
import {
    Check,
    ChevronLeft,
    ChevronRight,
    MessageSquareText,
} from "lucide-react";
import { useState } from "react";

const DEFAULT_IMAGE_URL =
    "https://images.pexels.com/photos/6883802/pexels-photo-6883802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

interface Testimonial {
    name: string;
    role?: string;
    rating: number;
    text: string;
    date?: string;
}

interface ProductCard_07Props {
    imageUrl?: string;
    productName?: string;
    description?: string;
    price?: number;
    inStock?: boolean;
    features?: string[];
    testimonials?: Testimonial[];
    onAddToCart?: () => void;
    onBuyNow?: () => void;
    currencyPrefix?: string;
}

function ProductCard_07({
                            currencyPrefix = "¥",
                            description = "专业级无反相机，配备 3200 万像素传感器和 4K 视频录制功能",
                            features = [
                                "3200万像素传感器",
                                "4K视频录制",
                                "五轴稳定",
                                "密封式设计",
                            ],
                            imageUrl = DEFAULT_IMAGE_URL,
                            inStock = true,
                            onAddToCart = () => {},
                            onBuyNow = () => {},
                            price = 1299.99,
                            productName = "ProCapture X3 数码相机",
                            testimonials = [
                                {
                                    date: "3周前",
                                    name: "张三",
                                    rating: 5,
                                    role: "专业摄影师",
                                    text: "图像质量非常出色。我之前一直用单反，后来换成了这台相机，一点也不后悔.",
                                },
                                {
                                    date: "1个月前",
                                    name: "李四",
                                    rating: 4,
                                    role: "编辑",
                                    text: "非常适合拍摄视频。自动对焦速度极快!",
                                },
                                {
                                    date: "2个月前",
                                    name: "王五",
                                    rating: 5,
                                    text: "物超所值。低光性能令人惊艳.",
                                },
                            ],
                        }: ProductCard_07Props = {}) {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            {/* Main product card */}
            <div className="group flex flex-col sm:h-[220px] sm:flex-row">
                {/* Image section */}
                <div className="relative h-52 w-full bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 sm:h-full sm:w-2/5 dark:from-gray-900 dark:via-green-950/10 dark:to-emerald-950/10">
                    <div className="absolute inset-0">
                        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-300/20 blur-2xl"></div>
                        <div className="absolute -bottom-8 left-0 h-28 w-28 rounded-full bg-green-400/20 blur-xl"></div>
                    </div>

                    {/* Product label */}
                    {inStock ? (
                        <div className="absolute top-3 left-3 z-10">
                            <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                                有存货
                            </div>
                        </div>
                    ) : (
                        <div className="absolute top-3 left-3 z-10">
                            <div className="rounded-md bg-amber-500 px-2 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                                预购
                            </div>
                        </div>
                    )}

                    {/* Image with hover effect */}
                    <div className="flex h-full items-center justify-center p-4">
                        <div className="transition-all duration-500 group-hover:scale-[1.05]">
                            <ImageViewer
                                imageUrl={imageUrl}
                                classNameThumbnailViewer="rounded-lg h-full object-contain drop-shadow-lg max-h-[180px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                        {/* Product name, price and description */}
                        <div className="mb-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {productName}
                                </h3>
                                <PriceFormat_basic
                                    prefix={currencyPrefix}
                                    value={price}
                                    className="text-xl font-bold text-emerald-600 dark:text-emerald-400"
                                />
                            </div>
                            <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                                {description}
                            </p>
                        </div>

                        {/* Features list */}
                        <div className="mb-3">
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm">
                                        <Check className="mr-1.5 h-4 w-4 text-emerald-500" />
                                        <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-2">
                        <Button
                            variant="outline"
                            onClick={onAddToCart}
                            className="flex-1 border-gray-300 bg-white text-gray-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        >
                            添加至购物车
                        </Button>
                        <Button
                            onClick={onBuyNow}
                            className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
                        >
                            立即购买
                        </Button>
                    </div>
                </div>
            </div>

            {/* Compact horizontal testimonials section */}
            <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
                <div className="mb-3 flex items-center justify-between">
                    <h4 className="flex items-center text-base font-medium text-gray-900 dark:text-white">
                        <MessageSquareText className="mr-2 h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                        消费者评价
                    </h4>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials.length} 评论
                    </div>
                </div>

                {/* Current testimonial */}
                <div className="mb-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 text-center font-medium text-white">
                                {testimonials[activeTestimonial].name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 dark:text-gray-200">
                                    {testimonials[activeTestimonial].name}
                                </p>
                                {testimonials[activeTestimonial].role && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {testimonials[activeTestimonial].role}
                                    </p>
                                )}
                            </div>
                        </div>

                        <StarRating_Fractions
                            value={testimonials[activeTestimonial].rating}
                            readOnly={true}
                            iconSize={16}
                            color="#F59E0B" // amber-400 color
                            className="flex-shrink-0"
                        />
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonials[activeTestimonial].text}
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {testimonials[activeTestimonial].date}
                    </p>
                </div>

                {/* Testimonial navigation */}
                <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`h-2 w-6 rounded-full transition-colors ${
                                    activeTestimonial === index
                                        ? "bg-emerald-500"
                                        : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                                }`}
                                aria-label={`View review ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="flex space-x-1">
                        <button
                            onClick={() =>
                                setActiveTestimonial((prev) =>
                                    prev === 0 ? testimonials.length - 1 : prev - 1
                                )
                            }
                            className="rounded p-1 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                            aria-label="Previous review"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() =>
                                setActiveTestimonial((prev) =>
                                    prev === testimonials.length - 1 ? 0 : prev + 1
                                )
                            }
                            className="rounded p-1 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                            aria-label="Next review"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard_07;
export type { ProductCard_07Props, Testimonial };
