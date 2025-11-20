"use client";

import { useState } from "react";
import QuantityInputBasic from "@/app/components/quantity_input/QuantityInputBasic";


export default function QuantityInputBasic_ex_01() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };

    return (
        <>
            <QuantityInputBasic
                quantity={quantity}
                onChange={handleQuantityChange}
                min={5}
                max={20}
            />
        </>
    );
}
