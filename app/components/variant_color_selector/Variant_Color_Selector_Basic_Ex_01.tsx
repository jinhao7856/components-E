import * as React from "react";
import Variant_Color_Selector_Basic, {
    ColorVariantItem,
} from '@/app/components/variant_color_selector/Variant_Color_Selector_Basic';

const variants: ColorVariantItem[] = [
    { color: "#000000", id: "color-black", label: "Black", value: "black" },
    { color: "#FFFFFF", id: "color-white", label: "White", value: "white" },
    { color: "#FF0000", id: "color-red", label: "Red", value: "red" },
    { color: "#0000FF", id: "color-blue", label: "Blue", value: "blue" },
    { color: "#00FF00", id: "color-green", label: "Green", value: "green" },
    { color: "#FFFF00", id: "color-yellow", label: "Yellow", value: "yellow" },
    { color: "#800080", id: "color-purple", label: "Purple", value: "purple" },
];

export default function Variant_Color_Selector_Basic_Ex_01() {
    const [selectedColor, setSelectedColor] = React.useState("black");

    return (
        <div className="space-y-8">
            <fieldset className="space-y-4">
                <legend className="mb-2 text-sm font-medium">Select color:</legend>
                <Variant_Color_Selector_Basic
                    value={selectedColor}
                    onValueChange={setSelectedColor}
                    variants={variants}
                />
            </fieldset>
        </div>
    );
}
