"use client";

import Cart_01, {
    CartCheckoutPayload,
    CartProduct,
} from '@/app/components/cart/Cart_01';
import {Button} from "@/app/components/ui/Button";
import { useEffect, useState } from "react";

export default function Cart_01_ex() {
    // Initial products for the demo
    const initialProducts: CartProduct[] = [
        {
            id: "prod-1",
            imageUrl:
                "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
            name: "无线耳机",
            price: 98.96,
            quantity: 1,
        },
        {
            id: "prod-2",
            imageUrl:
                "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/smartwatch-01.jpg",
            name: "智能手表",
            price: 129.99,
            quantity: 2,
        },
        {
            id: "prod-3",
            imageUrl:
                "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
            name: "蓝牙音箱",
            price: 79.95,
            quantity: 1,
        },
    ];

    // State management
    const [products, setProducts] = useState<CartProduct[]>(initialProducts);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [shippingCost] = useState<number>(15.99);
    const [vatRate] = useState<number>(0.2); // 20% VAT rate
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    // Calculate subtotal whenever the products change
    useEffect(() => {
        const newSubtotal = products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSubtotal(newSubtotal);
    }, [products]);

    // Handler to update product quantity
    const handleUpdateQuantity = (productId: string, newQuantity: number) => {
        setProducts(
            products.map((product) =>
                product.id === productId
                    ? { ...product, quantity: newQuantity }
                    : product
            )
        );
    };

    // Handler to remove a product
    const handleRemoveProduct = (productId: string) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    // Handler for checkout
    const handleCheckout = (payload: CartCheckoutPayload) => {
        const itemCount = payload.products.reduce((sum, p) => sum + p.quantity, 0);
        window.alert(
            `总共有 ${itemCount} 件物品\n总计: ${payload.currencyPrefix}${payload.totalAmount.toFixed(2)}
      `
        );
    };

    // Handler for continue shopping
    const handleContinueShopping = (payload: CartCheckoutPayload) => {
        if (payload.products.length === 0) {
            window.alert("开始购物吧!");
        } else {
            const itemCount = payload.products.reduce(
                (sum, p) => sum + p.quantity,
                0
            );
            window.alert(
                `已有 ${itemCount} 件物品在购物车.\n总计: ${payload.currencyPrefix}${payload.subtotal.toFixed(2)}
        `
            );
        }
    };

    // Add a demo product
    const handleAddDemoProduct = () => {
        const demoProducts = [
            {
                id: `demo-${Date.now()}`,
                imageUrl:
                    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
                name: "蓝牙音响",
                price: 49.99,
                quantity: 1,
            },
            {
                id: `demo-${Date.now() + 1}`,
                imageUrl:
                    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-4.jpg",
                name: "蓝牙耳机 X9",
                price: 89.95,
                quantity: 1,
            },
        ];

        const randomProduct =
            demoProducts[Math.floor(Math.random() * demoProducts.length)];
        setProducts([...products, randomProduct]);
    };

    // Reset cart to initial state
    const handleResetCart = () => {
        setProducts(initialProducts);
        setErrorMessage("");
    };

    // Clear cart
    const handleClearCart = () => {
        setProducts([]);
        setErrorMessage("");
    };

    // Toggle loading state
    const handleToggleLoading = () => {
        setIsLoading(!isLoading);
        if (errorMessage) {
            setErrorMessage("");
        }
    };

    // Toggle error state
    const handleToggleError = () => {
        if (errorMessage) {
            setErrorMessage("");
        } else {
            setErrorMessage("无法添加至购物车。请稍后再次尝试添加");
        }
        if (isLoading) {
            setIsLoading(false);
        }
    };

    return (
        <div className="mx-auto w-full max-w-3xl py-8">
            <div className="mb-6 flex flex-wrap justify-center gap-4">
                <Button
                    onClick={handleAddDemoProduct}
                    variant="outline"
                    className="font-mono"
                    size="sm"
                >
                    添加商品
                </Button>

                <Button
                    onClick={handleResetCart}
                    variant="outline"
                    className="font-mono"
                    size="sm"
                >
                    重置购物车
                </Button>

                <Button
                    onClick={handleClearCart}
                    variant="outline"
                    className="font-mono"
                    size="sm"
                >
                    清除购物车
                </Button>

                <Button
                    onClick={handleToggleLoading}
                    variant="outline"
                    className={`font-mono ${
                        isLoading ? "border-blue-500 text-blue-500" : ""
                    }`}
                    size="sm"
                >
                    {isLoading ? "停止加载" : "模拟加载"}
                </Button>

                <Button
                    onClick={handleToggleError}
                    variant="outline"
                    className={`font-mono ${
                        errorMessage ? "border-red-500 text-red-500" : ""
                    }`}
                    size="sm"
                >
                    {errorMessage ? "清除错误" : "模拟错误"}
                </Button>
            </div>

            <Cart_01
                storeName="科技小店"
                logoUrl="https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/logo-05.png"
                products={products}
                subtotal={subtotal}
                vatRate={vatRate}
                currencyPrefix="¥"
                isLoading={isLoading}
                errorMessage={errorMessage}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveProduct={handleRemoveProduct}
                onCheckout={handleCheckout}
                onContinueShopping={handleContinueShopping}
            />
        </div>
    );
}
