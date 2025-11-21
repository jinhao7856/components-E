"use client";

import Face_RatingBasic from "@/app/components/face_rating/Face_Rating_Basic";
import { useState } from "react";

export default function Face_Rating_Basic_Ex_03() {
    const [formData, setFormData] = useState({
        comment: "",
        email: "",
        rating: 3,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send this data to your backend
        console.log("Form submitted:", formData);
        alert(`Thank you for your feedback! You rated ${formData.rating} stars`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="border-border bg-background mx-auto w-full max-w-md space-y-6 rounded-lg border p-6 shadow-xs"
        >
            <div className="space-y-2">
                <label className="block text-sm font-medium">
                    您对这款产品满意度如何?
                </label>
                <Face_RatingBasic
                    value={formData.rating}
                    onChange={(value) =>
                        setFormData((prev) => ({ ...prev, rating: value }))
                    }
                    iconSize={32}
                    className="justify-center"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="comment" className="block text-sm font-medium">
                    请告诉我们您的使用体验
                </label>
                <textarea
                    id="comment"
                    rows={3}
                    className="border-ring w-full rounded-md border px-3 py-2"
                    value={formData.comment}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, comment: e.target.value }))
                    }
                    placeholder="您的反馈可以帮助我们改进产品"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                    邮箱 (可选)
                </label>
                <input
                    type="email"
                    id="email"
                    className="border-ring w-full rounded-md border px-3 py-2"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="请输入邮箱"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
                提交反馈
            </button>
        </form>
    );
}
