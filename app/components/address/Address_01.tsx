"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/app/components/ui/Form'
import { Input } from '@/app/components/ui/Input'
import { Button } from '@/app/components/ui/Button'
import { Checkbox } from '@/app/components/ui/Checkbox'
import PhoneInput from '@/app/components/phone_number/Phone_number_basic'

export const addressFormSchema = z.object({
    address1: z.string().min(1, "请填写地址"),
    address2: z.string().min(1, "请填写详细地址"),
    city: z.string().min(1, "请填写城市"),
    country: z.string().min(1, "请填写国家"),
    email: z.string().email("无效邮箱").optional(),
    name: z.string().min(5, "请输入姓名"),
    isBillingAddress: z.boolean(),
    phone: z.string().optional(),
    postalCode: z.string().min(1, "请输入邮编"),
    // state: z.string().min(1, "State is required"),
});

export type AddressFormValues = z.infer<typeof addressFormSchema>;

export type AddressFormProps = {
    value?: AddressFormValues;
    onSubmit?: (value: AddressFormValues) => void;
    submitLabel?: string;
    disabled?: boolean;
    className?: string;
};

function Address_01({
                        className = "",
                        disabled = false,
                        onSubmit,
                        submitLabel = "保存地址",
                        value,
                    }: AddressFormProps) {
    const form = useForm<AddressFormValues>({
        defaultValues: value || {
            address1: "",
            address2: "",
            city: "",
            country: "",
            email: "",
            name: "",
            isBillingAddress: true,
            phone: "",
            postalCode: "",
        },
        mode: "onChange",
        resolver: zodResolver(addressFormSchema),
    });

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold">联系地址</h1>
            <Form {...form}>
                <form
                    className={className}
                    onSubmit={form.handleSubmit(onSubmit ?? (() => {}))}
                >
                    <div className="grid gap-4">
                        <div className="flex flex-wrap gap-4">
                            <div className="min-w-[180px] flex-1">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>姓名</FormLabel>
                                            <FormControl>
                                                <div>
                                                    <Input
                                                        {...field}
                                                        disabled={disabled}
                                                        autoComplete="given-name"
                                                        required
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name="address1"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>地址</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={disabled}
                                            autoComplete="address-line1"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address2"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>详细地址与门牌号</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={disabled}
                                            autoComplete="address-line2"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-wrap gap-4">
                            <div className="min-w-[120px] flex-1">
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>城市</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={disabled}
                                                    autoComplete="address-level2"
                                                    required
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="min-w-[120px] flex-1">
                                <FormField
                                    control={form.control}
                                    name="postalCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>邮编</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={disabled}
                                                    autoComplete="postal-code"
                                                    required
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>手机号码</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={disabled}
                                            autoComplete="tel"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>邮箱（可选）</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={disabled}
                                            autoComplete="email"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/*<FormField*/}
                        {/*    control={form.control}*/}
                        {/*    name="isBillingAddress"*/}
                        {/*    render={({ field }) => (*/}
                        {/*        <FormItem>*/}
                        {/*            <FormLabel>Same for Billing Address</FormLabel>*/}
                        {/*            <FormControl>*/}
                        {/*                <Checkbox*/}
                        {/*                    name={field.name}*/}
                        {/*                    checked={field.value ?? false}*/}
                        {/*                    onCheckedChange={(value) => {*/}
                        {/*                        field.onChange(value);*/}
                        {/*                    }}*/}
                        {/*                    onBlur={field.onBlur}*/}
                        {/*                    ref={field.ref}*/}
                        {/*                    disabled={disabled}*/}
                        {/*                />*/}
                        {/*            </FormControl>*/}
                        {/*            <FormMessage />*/}
                        {/*        </FormItem>*/}
                        {/*    )}*/}
                        {/*/>*/}

                        <Button type="submit" disabled={disabled} className="mt-2 w-full cursor-pointer">
                            {submitLabel}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default Address_01;
