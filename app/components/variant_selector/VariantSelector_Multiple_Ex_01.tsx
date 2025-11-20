"use client";

import * as React from "react";
import VariantSelectorMultiple, {
    VariantItem,
} from '@/app/components/variant_selector/VariantSelectorMultiple';

const variants: VariantItem[] = [
    {
        id: "damage-protection",
        label: "破损保护",
        value: "damage-protection",
    },
    {
        id: "extended-warranty",
        label: "延长保修",
        value: "extended-warranty",
    },
    {
        id: "theft-protection",
        label: "被盗保护",
        value: "theft-protection",
    },
];

export default function VariantSelector_Basic_Ex_01() {
    const [selectedVariant, setSelectedVariant] = React.useState<string[]>([
        "extended-warranty",
    ]);

    return (
        <div className="space-y-8">
            <fieldset className="space-y-4">
                <legend className="mb-2 text-sm font-medium">选择内容:</legend>
                <VariantSelectorMultiple
                    values={selectedVariant}
                    onValuesChange={setSelectedVariant}
                    variants={variants}
                />
            </fieldset>
        </div>
    );
}
