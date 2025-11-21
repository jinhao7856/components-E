"use client";


import PriceFormat_Sale from "@/app/components/priceFormat/PriceFormat_Sale";

export default function PriceFormat_Sale_Ex_02() {
    return (
        <div className="flex flex-row items-center gap-4 text-lg">
            <PriceFormat_Sale
                originalPrice={129.99}
                salePrice={99.95}
                prefix="¥"
                showSavePercentage={true}
                classNameSalePrice="text-4xl text-red-700"
                className="flex-col items-start"
            />
        </div>
    );
}
