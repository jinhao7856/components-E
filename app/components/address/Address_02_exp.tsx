"use client";

import React, { useState } from "react";
import { z } from "zod";
import Address_02 from "@/app/components/address/Address_02";

export const addressFormSchema = z.object({
    address1: z.string().min(1, "Address is required"),
    address2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    email: z.string().email("Invalid email").optional(),
    firstName: z.string().min(1, "First name is required"),
    isBillingAddress: z.boolean(),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().optional(),
    postalCode: z.string().min(1, "Postal code is required"),
    state: z.string().min(1, "State is required"),
});

export type AddressFormValues = z.infer<typeof addressFormSchema>;

export type AddressCardProps = {
    value?: AddressFormValues;
    onChange?: (value: AddressFormValues) => void;
    onSubmit?: (value: AddressFormValues) => void;
    title?: string;
    editButtonLabel?: string;
    saveButtonLabel?: string;
    cancelButtonLabel?: string;
    disabled?: boolean;
    className?: string;
    showBillingBadge?: boolean;
};

export default function Address_02_exp() {
    const [address, setAddress] = useState<AddressFormValues>({
        address1: "鄞州区XX街道",
        address2: "XXXX",
        city: "宁波市",
        country: "中国",
        email: "zhangsan@example.com",
        firstName: "张",
        isBillingAddress: true,
        lastName: "三",
        phone: "123456",
        postalCode: "10001",
        state: "浙江省",
    });

    const handleAddressSubmit = (value: AddressFormValues) => {
        console.log("Address submitted:", value);
        setAddress(value); // Update the state to reflect changes in the card
    };

    return (
        <div>
            <Address_02
                className=""
                value={address}
                onChange={(value) => console.log("Address changed:", value)}
                onSubmit={handleAddressSubmit}
            />
        </div>
    );
}
