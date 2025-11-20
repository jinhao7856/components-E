"use client";

// Example usage of ProductVariant_04 component

import { useState } from "react";
import ProductVariant_04, {
    AccessoryVariant,
    StorageVariant,
    Testimonial,
    VariantSelectionPayload,
} from "@/app/components/productVariants/Product_variants_04";

// Storage variants with prices and stock information
const EXAMPLE_STORAGE_VARIANTS: StorageVariant[] = [
    {
        availableQuantity: 15,
        id: "storage-64",
        isInStock: true,
        label: "64GB",
        price: 1299.99,
        value: "storage-64",
    },
    {
        availableQuantity: 8,
        id: "storage-128",
        isInStock: true,
        label: "128GB",
        price: 1399.99,
        value: "storage-128",
    },
    {
        availableQuantity: 3,
        id: "storage-256",
        isInStock: true,
        label: "256GB",
        price: 1499.99,
        value: "storage-256",
    },
    {
        availableQuantity: 0,
        id: "storage-512",
        isInStock: false,
        label: "512GB",
        price: 1699.99,
        value: "storage-512",
    },
];

// Accessory options with prices
const EXAMPLE_ACCESSORY_VARIANTS: AccessoryVariant[] = [
    {
        id: "acc-sd",
        label: "SD 卡 (64GB)",
        price: 29.99,
        value: "acc-sd",
    },
    {
        id: "acc-tripod",
        label: "迷你三脚架",
        price: 49.99,
        value: "acc-tripod",
    },
    {
        id: "acc-bag",
        label: "相机包",
        price: 79.99,
        value: "acc-bag",
    },
    {
        id: "acc-lens",
        label: "额外镜头",
        price: 249.99,
        value: "acc-lens",
    },
    {
        id: "acc-batt",
        label: "备用电池",
        price: 59.99,
        value: "acc-batt",
    },
];

// Example testimonials
const EXAMPLE_TESTIMONIALS: Testimonial[] = [
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
];

export default function ProductVariantExample_04() {
    const [selectedStorage, setSelectedStorage] = useState<string>(
        EXAMPLE_STORAGE_VARIANTS[0].value
    );
    const [selectedAccessories, setSelectedAccessories] = useState<string[]>([
        "acc-sd",
        "acc-tripod",
    ]);
    const [quantity, setQuantity] = useState<number>(1);

    // Adjust quantity if it exceeds available stock when storage changes
    const handleStorageChange = (value: string) => {
        setSelectedStorage(value);
        const newStorageVariant = EXAMPLE_STORAGE_VARIANTS.find(
            (v) => v.value === value
        );
        if (
            newStorageVariant &&
            newStorageVariant.isInStock &&
            newStorageVariant.availableQuantity !== undefined &&
            newStorageVariant.availableQuantity !== null &&
            quantity > newStorageVariant.availableQuantity
        ) {
            setQuantity(Math.max(1, newStorageVariant.availableQuantity));
        }
    };

    const handleAddToCart = (payload: VariantSelectionPayload) => {
        const storageVariant = EXAMPLE_STORAGE_VARIANTS.find(
            (v) => v.value === payload.storageVariantId
        );
        const stockStatus = storageVariant?.isInStock ? "有库存" : "已售罄";

        const accessoryLabels = payload.accessoryLabels.join(", ");
        const accessoriesMessage =
            payload.accessoryIds.length > 0
                ? `\n配件选择: ${accessoryLabels} 总计¥${payload.accessoriesPrice.toFixed(2)}`
                : "\n没有选择配件";

        window.alert(
            `已选择 ${payload.quantity} 个${payload.storageVariantLabel} ProCapture X3 数码相机。总计 ¥${payload.totalPrice.toFixed(2)}
本体价格: ¥${payload.storagePrice.toFixed(2)}${accessoriesMessage}
库存状态: ${stockStatus}`
        );
    };

    const handleBuyNow = (payload: VariantSelectionPayload) => {
        const storageVariant = EXAMPLE_STORAGE_VARIANTS.find(
            (v) => v.value === payload.storageVariantId
        );
        const stockStatus = storageVariant?.isInStock ? "有库存" : "已售罄";

        const accessoryLabels = payload.accessoryLabels.join(", ");
        const accessoriesMessage =
            payload.accessoryIds.length > 0
                ? `\n配件选择: ${accessoryLabels} 总计¥${payload.accessoriesPrice.toFixed(2)}`
                : "\n没有选择配件";

        window.alert(
            `已选择 ${payload.quantity}个 ${payload.storageVariantLabel} ProCapture X3 数码相机。总计 ¥${payload.totalPrice.toFixed(2)}
本体价格: ¥${payload.storagePrice.toFixed(2)}${accessoriesMessage}
库存状态: ${stockStatus}`
        );
    };

    return (
        <div className="container mx-auto p-4">
            <ProductVariant_04
                title="ProCapture X3 数码相机"
                description="专业级无反相机，配备 3200 万像素传感器、4K 视频录制和先进的防抖功能。无论是专业人士还是摄影爱好者，都能轻松驾驭."
                badge="新品上市"
                imageUrl="https://images.pexels.com/photos/6883802/pexels-photo-6883802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                features={[
                    "3200万像素传感器",
                    "4K视频录制",
                    "五轴稳定",
                    "密封式身体",
                    "支持蓝牙和Wi-Fi",
                    "每次充电可拍摄1200+次",
                ]}
                storageVariants={EXAMPLE_STORAGE_VARIANTS}
                accessoryVariants={EXAMPLE_ACCESSORY_VARIANTS}
                testimonials={EXAMPLE_TESTIMONIALS}
                selectedStorage={selectedStorage}
                onStorageChange={handleStorageChange}
                selectedAccessories={selectedAccessories}
                onAccessoriesChange={setSelectedAccessories}
                quantity={quantity}
                onQuantityChange={setQuantity}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                currencyPrefix="¥"
            />
        </div>
    );
}
