"use client";

import { useState } from "react";
import StarRating_Fractions from "@/app/components/starRating/StarRating_fraction";

export default function StarRating_Fractions_Ex_01() {
    const [rating, setRating] = useState(4.3);
    return (
        <div className="flex flex-row items-center gap-4">
            <StarRating_Fractions value={rating} onChange={setRating} maxStars={5} />
            <p>({rating})</p>
        </div>
    );
}
