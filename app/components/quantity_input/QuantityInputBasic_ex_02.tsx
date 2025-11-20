"use client";

import { useState } from "react";
import QuantityInputBasic from "@/app/components/quantity_input/QuantityInputBasic";


export default function QuantityInputBasic_ex_02() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };

    return (
        <>
            <QuantityInputBasic
                quantity={quantity}
                onChange={handleQuantityChange}
                min={1}
                max={10}
                step={1}
            />
        </>
    );
}
