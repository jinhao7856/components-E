"use client";

import { useState } from "react";
import VariantSelectorImages from '@/app/components/variant_selector/VariantSelectorImages';

const variants = [
    {
        id: "cat-default",
        label: "第一张图",
        url: "/placeholders/cat-default.webp",
        value: "第一张图",
    },
    {
        id: "cat-steampunk",
        label: "第二张图",
        url: "/placeholders/cat-steampunk.webp",
        value: "第二张图",
    },
    {
        id: "cat-cyberpunk",
        label: "第三张图",
        url: "/placeholders/cat-cyberpunk.webp",
        value: "第三张图",
    },
];

export default function VariantSelector_Images_Ex_01() {
    const [selected, setSelected] = useState("第一张图");

    return (
        <div className="flex flex-col gap-4">
            <fieldset className="space-y-4">
                <legend className="mb-2 text-sm font-medium">选择图片:</legend>
                <VariantSelectorImages
                    value={selected}
                    onValueChange={setSelected}
                    variants={variants}
                />
            </fieldset>
            <p className="text-muted-foreground text-center text-sm">
                选择: {selected}
            </p>
        </div>
    );
}
