"use client";

import Face_RatingBasic from '@/app/components/face_rating/Face_Rating_Basic'
import { useState } from "react";

export default function Face_Rating_Basic_Ex_01() {
    const [rating, setRating] = useState(3);
    return (
        <div className="flex flex-col items-center gap-4">
            <Face_RatingBasic value={rating} onChange={setRating} />
            <p>评分: {rating}</p>
        </div>
    );
}
