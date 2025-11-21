"use client";

import { useState } from "react";
import StarRating_Basic from "@/app/components/starRating/StarRating_basic";

export default function StarRating_Basic_Ex_01() {
    const [rating, setRating] = useState(3);
    return (
        <div className="flex flex-row items-center gap-4">
            <StarRating_Basic value={rating} onChange={setRating} maxStars={5} />
            <p>({rating})</p>
        </div>
    );
}
