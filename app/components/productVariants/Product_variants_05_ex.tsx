"use client";

// Example usage of ProductVariant_05 component

import { useState } from "react";
import ProductVariant_05, {
    AccessoryVariant,
    ServiceVariant,
    VariantSelectionPayload,
} from "@/app/components/productVariants/Product_variants_05";

// Example accessory variants
const EXAMPLE_ACCESSORY_VARIANTS: AccessoryVariant[] = [
    {
        availableQuantity: 15,
        id: "acc-pitcher",
        isInStock: true,
        label: "牛奶壶",
        price: 24.99,
        value: "acc-pitcher",
    },
    {
        availableQuantity: 32,
        id: "acc-descaler",
        isInStock: true,
        label: "除垢套件",
        price: 19.99,
        value: "acc-descaler",
    },
    {
        availableQuantity: 8,
        id: "acc-filter",
        isInStock: true,
        label: "水过滤包",
        price: 29.99,
        value: "acc-filter",
    },
    {
        availableQuantity: 0,
        id: "acc-cups",
        isInStock: false,
        label: "浓缩咖啡杯套装",
        price: 39.99,
        value: "acc-cups",
    },
    {
        availableQuantity: 5,
        id: "acc-tamper",
        isInStock: true,
        label: "高级捣固机",
        price: 44.99,
        value: "acc-tamper",
    },
];

// Example service variants
const EXAMPLE_SERVICE_VARIANTS: ServiceVariant[] = [
    {
        id: "serv-extended",
        label: "延长保修期（+2年）",
        price: 99.99,
        value: "serv-extended",
    },
    {
        id: "serv-installation",
        label: "专业安装",
        price: 79.99,
        value: "serv-installation",
    },
    {
        id: "serv-maintenance",
        label: "年度保修计划",
        price: 149.99,
        value: "serv-maintenance",
    },
];

// Example product images
const EXAMPLE_PRODUCT_IMAGES = [
    {
        title: "咖啡机前视图",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-01.jpg",
    },
    {
        title: "咖啡机侧视图",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-02.jpg",
    },
    {
        title: "咖啡机杯",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-cups-01.jpg",
    },
    {
        title: "咖啡过滤器",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-filter-01.jpg",
    },
];

export default function ProductVariantExample_05() {
    const [selectedAccessories, setSelectedAccessories] = useState<string[]>([
        "acc-descaler",
        "acc-filter",
    ]);
    const [selectedServices, setSelectedServices] = useState<string[]>([
        "serv-extended",
    ]);
    const [quantity, setQuantity] = useState<number>(1);

    const handleAddToCart = (payload: VariantSelectionPayload) => {
        // Format the accessories and services for the alert message
        const accessoriesMessage =
            payload.accessoryIds.length > 0
                ? `\n选择配件: ${payload.accessoryLabels.join(", ")} 总计 ¥${payload.accessoriesPrice.toFixed(2)}`
                : "\n没有选择配件";

        const servicesMessage =
            payload.serviceIds.length > 0
                ? `\n选择配件: ${payload.serviceLabels.join(", ")} 总计 ¥${payload.servicesPrice.toFixed(2)}`
                : "\n没有选择配件";

        window.alert(
            `添加 ${payload.quantity} 个 BrewMaster Pro 咖啡机至购物车。总计¥${payload.totalPrice.toFixed(2)}
本体价格: ¥${payload.productPrice.toFixed(2)}${accessoriesMessage}${servicesMessage}`
        );
    };

    const handleBuyNow = (payload: VariantSelectionPayload) => {
        // Format the accessories and services for the alert message
        const accessoriesMessage =
            payload.accessoryIds.length > 0
                ? `\n选择配件: ${payload.accessoryLabels.join(", ")}总计 ¥${payload.accessoriesPrice.toFixed(2)}`
                : "\n没有选择配件";

        const servicesMessage =
            payload.serviceIds.length > 0
                ? `\n选择配件: ${payload.serviceLabels.join(", ")}总计 ¥${payload.servicesPrice.toFixed(2)}`
                : "\n没有选择配件";

        window.alert(
            `购买 ${payload.quantity} 个 BrewMaster Pro 咖啡机至购物车。总计¥${payload.totalPrice.toFixed(2)}
本体价格: ¥${payload.productPrice.toFixed(2)}${accessoriesMessage}${servicesMessage}`
        );
    };

    return (
        <div className="container mx-auto p-4">
            <ProductVariant_05
                title="BrewMaster Pro 咖啡机"
                description="这款专业级意式咖啡机拥有15巴压力，内置磨豆机和奶泡器，让您在家也能享用咖啡馆品质的咖啡。它具备可编程设置，设计紧凑."
                price={399.99}
                badge="咖啡师之选"
                rating={4.8}
                reviewCount={256}
                warranty="2年"
                images={EXAMPLE_PRODUCT_IMAGES}
                accessoryVariants={EXAMPLE_ACCESSORY_VARIANTS}
                serviceVariants={EXAMPLE_SERVICE_VARIANTS}
                selectedAccessories={selectedAccessories}
                onAccessoriesChange={setSelectedAccessories}
                selectedServices={selectedServices}
                onServicesChange={setSelectedServices}
                quantity={quantity}
                onQuantityChange={setQuantity}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                currencyPrefix="¥"
                benefits={[
                    {
                        description: "30秒内即可完成",
                        icon: (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        ),
                        title: "快速冲泡",
                    },
                    {
                        description: "自我清洁功能",
                        icon: (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        ),
                        title: "简单清洗",
                    },
                    {
                        description: "多种冲泡选择",
                        icon: (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                            </svg>
                        ),
                        title: "可定制",
                    },
                ]}
                featuredReview={{
                    avatarUrl:
                        "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-04.jpg",
                    rating: 5,
                    reviewDate: "2024年3月15日",
                    reviewerName: "张三",
                    reviewerTitle: "咖啡师",
                    reviewText:
                        "这台意式咖啡机彻底改变了我的早晨。它的奶泡器能打出完美的奶泡，做出来的拿铁咖啡口感极佳，而且咖啡的品质和本地咖啡馆的咖啡几乎一模一样.",
                }}
            />
        </div>
    );
}
