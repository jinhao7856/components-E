"use client";

// Example usage of ProductVariant_01 component

import { useState } from "react";
import ProductVariant_01, {
    VariantItem,
    VariantSelectionPayload,
} from '@/app/components/productVariants/Product_variants_01';

const EXAMPLE_VARIANTS: VariantItem[] = [
    {
        availableQuantity: 5,
        id: "variant-sport",
        imageUrl:
            "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
        isInStock: true,
        label: "运动版",
        price: 109.99,
        value: "variant-sport",
    },
    {
        availableQuantity: 10,
        id: "variant-prosound",
        imageUrl:
            "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg",
        isInStock: true,
        label: "专业版",
        price: 99.99,
        salePrice: 89.99,
        value: "variant-prosound",
    },
    {
        availableQuantity: 0,
        id: "variant-ultraquiet",
        imageUrl:
            "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-3.jpg",
        isInStock: false,
        label: "高级版™",
        price: 89.99,
        value: "variant-ultraquiet",
    },
    {
        availableQuantity: 2,
        id: "variant-extremesilence",
        imageUrl:
            "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-4.jpg",
        isInStock: true,
        label: "极致享受™",
        price: 119.99,
        salePrice: 99.99,
        value: "variant-extremesilence",
    },
];

export default function Product() {
    const [selectedVariant, setSelectedVariant] = useState<string>(
        EXAMPLE_VARIANTS[0].value
    );
    const [quantity, setQuantity] = useState<number>(1);

    // Adjust quantity if it exceeds available stock when variant changes
    const handleVariantChange = (value: string) => {
        setSelectedVariant(value);
        const newVariant = EXAMPLE_VARIANTS.find((v) => v.value === value);
        if (
            newVariant &&
            newVariant.isInStock &&
            newVariant.availableQuantity !== undefined &&
            newVariant.availableQuantity !== null &&
            quantity > newVariant.availableQuantity
        ) {
            setQuantity(Math.max(1, newVariant.availableQuantity));
        }
    };

    const handleAddToCart = (payload: VariantSelectionPayload) => {
        const variant = EXAMPLE_VARIANTS.find((v) => v.value === payload.variantId);
        const stockStatus = variant?.isInStock ? "有存货" : "已售罄";
        window.alert(
            `添加 ${payload.quantity} ${payload.variantLabel}  至购物车。每件 ¥${payload.price} \n库存状态: ${stockStatus}`
        );
    };

    const handleBuyNow = (payload: VariantSelectionPayload) => {
        const variant = EXAMPLE_VARIANTS.find((v) => v.value === payload.variantId);
        const stockStatus = variant?.isInStock ? "有存货" : "已售罄";
        window.alert(
            `添加 ${payload.quantity} ${payload.variantLabel} 至购物车。每件 ¥${payload.price}\n库存状态: ${stockStatus}`
        );
    };

    return (
        <div className="w-full">
            <ProductVariant_01
                title="高级降噪耳机"
                description="我们顶级的降噪耳机能为您带来卓越的音质体验，是音乐爱好者和专业人士的理想之选."
                badge="热卖中"
                variants={EXAMPLE_VARIANTS}
                variantLabel="款式"
                shippingInfo='包邮'
                selectedVariant={selectedVariant}
                onVariantChange={handleVariantChange}
                quantity={quantity}
                onQuantityChange={setQuantity}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
            />
        </div>
    );
}
