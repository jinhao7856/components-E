"use client";

import Face_RatingBasic from "@/app/components/face_rating/Face_Rating_Basic";
import { useState } from "react";

export default function Face_Rating_Basic_Ex_02() {
    const [rating, setRating] = useState(3);
    return (
        <div className="flex flex-col items-center gap-4">
            <div>您觉得这款产品怎么样?</div>
            <Face_RatingBasic value={rating} onChange={setRating} iconSize={48} />
            <p>评分: {rating}</p>
        </div>
    );
}
