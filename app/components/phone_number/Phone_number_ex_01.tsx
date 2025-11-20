"use client";

import PhoneNumberInput_Basic from "@/app/components/phone_number/Phone_number_basic";
import { Button } from "@/app/components/ui/Button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneNumberSchema = z.object({
    phoneNumber: z.string().min(1, "请输入电话号码"),
});
export default function PhoneNumberInput_Basic_Ex_01() {
    const form = useForm<z.infer<typeof phoneNumberSchema>>({
        defaultValues: {
            phoneNumber: "+8612346578900",
        },
        resolver: zodResolver(phoneNumberSchema),
    });

    function onSubmit(data: z.infer<typeof phoneNumberSchema>) {
        console.log("正在提交电话号码:", data.phoneNumber);
        window.alert(`正在提交电话号码: ${data.phoneNumber}`);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="gap-g flex max-w-md flex-col items-center gap-4"
            >
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>电话号码</FormLabel>
                            <FormControl>
                                <PhoneNumberInput_Basic
                                    defaultCountry="GB"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormDescription>
                                输入带有国际区号的电话号码
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="secondary" className="w-full">
                    提交
                </Button>
            </form>
        </Form>
    );
}
