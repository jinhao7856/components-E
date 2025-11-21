"use client";

import ImageViewer from "@/app/components/imageViewer/ImageViewer";
import StarRating_Fractions from "@/app/components/starRating/StarRating_fraction";
import PriceFormat_basic from "@/app/components/priceFormat/PriceFormat_basic";
import {Button} from "@/app/components/ui/Button";

const DEFAULT_IMAGE_URL =
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-4.jpg";

interface ProductCard_02Props {
    imageUrl?: string;
    discount?: string | null;
    title?: string;
    rating?: number;
    reviewCount?: number;
    description?: string;
    inStock?: boolean;
    stockCount?: number;
    hasShipping?: boolean;
    shippingText?: string;
    price?: number;
    prefix?: string;
    onAddToCart?: () => void;
    onBuyNow?: () => void;
}

function ProductCard_02({
                            description = "AeroTune X9 为您带来前所未有的音频体验，这款全球最先进的无线耳机专为发烧友、游戏玩家和音乐爱好者而设计。凭借量子低音技术，每一个节拍、每一个低音下潜和每一个轻声细语都能以录音棚级别的精准度呈现.",
                            discount = "节省20%",
                            hasShipping = true,
                            imageUrl = DEFAULT_IMAGE_URL,
                            inStock = true,
                            onAddToCart = () => {},
                            onBuyNow = () => {},
                            prefix = "¥",
                            price = 39.99,
                            rating = 4.45,
                            reviewCount = 362,
                            shippingText = "包邮",
                            stockCount = 256,
                            title = "AeroTune X9",
                        }: ProductCard_02Props = {}) {
    return (
        <div className="bg-card grid max-w-screen-lg grid-cols-4 gap-6 rounded-lg border p-4">
            <div className="relative col-span-4 w-full md:col-span-2">
                {discount && (
                    <div className="absolute top-2 left-2 z-10 w-fit rounded-lg bg-purple-500/80 p-2">
                        <p className="text-xs font-semibold">{discount}</p>
                    </div>
                )}
                <ImageViewer imageUrl={imageUrl} />
            </div>

            <div className="col-span-4 flex flex-col gap-6 md:col-span-2">
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-semibold">{title}</p>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        <StarRating_Fractions readOnly value={rating} />
                        <p className="text-lg">({rating})</p>
                        <p className="text-muted-foreground">{reviewCount} 评论</p>
                    </div>
                    <p className="text-muted-foreground text-base">{description}</p>
                </div>

                <div className="flex flex-col gap-2">
                    {inStock ? (
                        <div className="flex flex-row items-center gap-2">
                            <div className="w-fit rounded-lg border border-green-500 bg-green-500/30 px-2 py-1 text-sm font-semibold text-green-500 uppercase dark:border-green-300 dark:text-green-300">
                                热卖中
                            </div>
                            <p className="text-muted-foreground">剩余{stockCount}</p>
                        </div>
                    ) : (
                        <div className="w-fit rounded-lg border border-red-500 bg-red-500/30 px-2 py-1 text-sm font-semibold text-red-500 uppercase dark:border-red-300 dark:text-red-300">
                            已售罄
                        </div>
                    )}

                    {hasShipping && (
                        <p>
                            <a
                                href="#"
                                className="semibold underline underline-offset-4 opacity-80 hover:opacity-100"
                            >
                                {shippingText}
                            </a>{" "}

                        </p>
                    )}
                </div>

                <PriceFormat_basic
                    prefix={prefix}
                    value={price}
                    className="text-4xl font-semibold"
                />

                <div className="flex flex-row flex-wrap gap-4">
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full md:w-fit"
                        onClick={onAddToCart}
                    >
                        添加至购物车
                    </Button>
                    <Button size="lg" className="w-full md:w-fit" onClick={onBuyNow}>
                        立即购买
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard_02;
export type { ProductCard_02Props };
