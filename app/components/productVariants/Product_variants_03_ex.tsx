"use client";

// Example usage of ProductVariant_03 component

import { useState } from "react";
import ProductVariant_03, {VariantItem, VariantSelectionPayload} from "@/app/components/productVariants/Product_variants_03";

const EXAMPLE_VARIANTS: VariantItem[] = [
    {
        availableQuantity: 32,
        features: [
            "360°沉浸式音效",
            "防水设计",
            "10 小时电池续航时间",
            "蓝牙5.0",
        ],
        id: "model-standard",
        images: [
            {
                title: "标准音箱",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-02.jpg",
            },
            {
                title: "标准音箱",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-02.jpg",
            },
        ],
        isInStock: true,
        label: "标准",
        price: 199.99,
        value: "model-standard",
    },
    {
        availableQuantity: 15,
        features: [
            "360°沉浸式音效",
            "防水设计",
            "10 小时电池续航时间",
            "蓝牙5.0",
            "语音助手",
        ],
        id: "model-pro",
        images: [
            {
                title: "专业音响",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-03.jpg",
            },
            {
                title: "专业音响",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-03.jpg",
            },
        ],
        isInStock: true,
        label: "专业",
        price: 249.99,
        salePrice: 229.99,
        value: "model-pro",
    },
    {
        availableQuantity: 8,
        features: [
            "360°沉浸式音效",
            "防水设计",
            "10 小时电池续航时间",
            "蓝牙5.0",
            "语音助手",
            "多房间音频同步",
        ],
        id: "model-ultra",
        images: [
            {
                title: "顶级音响",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-04.jpg",
            },
            {
                title: "顶级音响",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-04.jpg",
            },
        ],
        isInStock: true,
        label: "顶级",
        price: 299.99,
        value: "model-ultra",
    },
    {
        availableQuantity: 0,
        features: [
            "360°沉浸式音效",
            "防水设计",
            "10 小时电池续航时间",
            "蓝牙5.0",
            "语音助手",
            "多房间音频同步",
            "独家设计",
        ],
        id: "model-limited",
        images: [
            {
                title: "限量版音箱",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
            },
            {
                title: "限量版音箱",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
            },
            {
                title: "限量版音箱",
                url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
            },
        ],
        isInStock: false,
        label: "限量版",
        price: 349.99,
        value: "model-limited",
    },
];

export default function ProductVariantExample_03() {
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
        const stockStatus = variant?.isInStock ? "有存货 " : "已售罄";
        window.alert(
            `添加 ${payload.quantity} ${payload.variantLabel} 至购物车。每件 ¥${payload.totalPrice.toFixed(2)}.\n库存状态: ${stockStatus}`
        );
    };

    const handleBuyNow = (payload: VariantSelectionPayload) => {
        const variant = EXAMPLE_VARIANTS.find((v) => v.value === payload.variantId);
        const stockStatus = variant?.isInStock ? "有存货" : "已售罄";
        window.alert(
            `添加 ${payload.quantity} ${payload.variantLabel} 至购物车。每件 ¥${payload.totalPrice.toFixed(2)}.\n库存状态: ${stockStatus}`
        );
    };

    return (
        <div className="container mx-auto p-4">
            <ProductVariant_03
                title="SoundSphere Ultra 无线扬声器"
                description="新一代便携式扬声器，具备360°空间音频和沉浸式音效体验。是居家、旅行和户外探险的理想之选."
                badge="新品上市"
                variants={EXAMPLE_VARIANTS}
                selectedVariant={selectedVariant}
                onVariantChange={handleVariantChange}
                quantity={quantity}
                onQuantityChange={setQuantity}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                releaseDate="2025年8月15日"
                currencyPrefix="¥"
            />
        </div>
    );
}
