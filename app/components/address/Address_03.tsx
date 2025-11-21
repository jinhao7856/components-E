"use client";

import InputIcon from '@/app/components/input/Input_icon'
import PhoneInput from '@/app/components/phone_number/Phone_number_basic'
import {Button} from '@/app/components/ui/Button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/app/components/ui/Form'
import {zodResolver} from "@hookform/resolvers/zod";
import {Building, Building2, Globe, House, Mail, User} from "lucide-react";
import {useForm} from "react-hook-form";
import {z} from "zod";

export const addressFormSchema = z.object({
    address1: z.string().min(1, "Address is required"),
    address2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    email: z.string().email("Invalid email").optional(),
    fullName: z.string().min(5, "Full name is required"),
    phone: z.string().optional(),
    postalCode: z.string().min(1, "Postal code is required"),
    state: z.string().min(1, "State is required"),
});

export type AddressFormValues = z.infer<typeof addressFormSchema>;

export type AddressFormProps = {
    value?: AddressFormValues;
    onSubmit?: (value: AddressFormValues) => void;
    submitLabel?: string;
    disabled?: boolean;
    className?: string;
};

function Address_03({
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
            fullName: "",
            phone: "",
            postalCode: "",
            state: "",
        },
        mode: "onChange",
        resolver: zodResolver(addressFormSchema),
    });

    return (
        <div
            className="mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                地址
            </h1>
            <Form {...form}>
                <form
                    className={className}
                    onSubmit={form.handleSubmit(onSubmit ?? (() => {
                    }))}
                >
                    <div className="grid gap-6">
                        {/* Full Name */}
                        <div>
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>姓名</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="full-name"
                                                required
                                                startIcon={User}
                                                placeholder="张三"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <hr className="my-2 border-gray-100 dark:border-gray-800"/>

                        {/* Address 1 & 2 */}
                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="address1"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>地址</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="address-line1"
                                                required
                                                startIcon={House}
                                                placeholder=""
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address2"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>详细地址与门牌号</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="address-line2"
                                                placeholder=""
                                                startIcon={Building}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <hr className="my-2 border-gray-100 dark:border-gray-800"/>

                        {/* City, State, Postal Code */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <FormField
                                control={form.control}
                                name="state"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>省份</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="address-level1"
                                                required
                                                startIcon={Building2}
                                                placeholder="浙江省"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>城市</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="address-level2"
                                                required
                                                startIcon={Building2}
                                                placeholder="宁波市"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="postalCode"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>邮编</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="postal-code"
                                                required
                                                startIcon={Mail}
                                                placeholder="10001"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <hr className="my-2 border-gray-100 dark:border-gray-800"/>

                        {/* Country, Phone, Email */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <FormField
                                control={form.control}
                                name="country"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>国家</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="country"
                                                required
                                                startIcon={Globe}
                                                placeholder="中国"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>手机号码</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="tel"
                                                placeholder='123456'
                                                required
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>邮箱（可选）</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                disabled={disabled}
                                                autoComplete="email"
                                                type="email"
                                                startIcon={Mail}
                                                placeholder="youxiang@example.com"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="pt-2">
                            <Button type="submit" disabled={disabled} className="w-full cursor-pointer">
                                {submitLabel}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default Address_03;
