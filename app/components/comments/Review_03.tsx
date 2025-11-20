"use client";

import LikeRating from '@/app/components/like_rating/LikeRating_Basic';
import StarRating from '@/app/components/starRating//StarRating_basic';
import {Button} from "@/app/components/ui/Button";
import { useState, useRef, useEffect } from "react";

interface Review_03Props {
    defaultRating?: number;
    reviewerName?: string;
    reviewerTitle?: string;
    reviewerAvatar?: string;
    initialLikes?: number;
    initialDislikes?: number;
    initialIsLiked?: boolean;
    initialIsDisliked?: boolean;
    reviewTitle?: string;
    reviewContent?: string;
}

function Review_03({
                       defaultRating = 5,
                       initialDislikes = 1,
                       initialIsDisliked = false,
                       initialIsLiked = true,
                       initialLikes = 11,
                       reviewContent = "我最近入手了这款超棒的包，用了一段时间后，我可以很肯定地说，它绝对是旅行的理想之选。结论：如果你正在寻找一款兼具舒适性、收纳性和耐用性的出色背包，那么这款绝对值得投资。强烈推荐给所有需要可靠背包的人! 🎒💼",
                       reviewerAvatar = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-07.jpg",
                       reviewerName = "李四",
                       reviewerTitle = "普通会员",
                       reviewTitle = "真后悔没早点买它!!",
                   }: Review_03Props = {}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [likes, setLikes] = useState(initialLikes);
    const [dislikes, setDislikes] = useState(initialDislikes);
    const [isLiked, setIsLiked] = useState(initialIsLiked);
    const [isDisliked, setIsDisliked] = useState(initialIsDisliked);
    const [isContentOverflowing, setIsContentOverflowing] = useState(false);
    const contentRef = useRef<HTMLParagraphElement>(null);

    // Check if content overflows when component mounts or content changes
    useEffect(() => {
        const checkOverflow = () => {
            if (contentRef.current) {
                // Check if scrollHeight is greater than clientHeight
                const isOverflowing =
                    contentRef.current.scrollHeight > contentRef.current.clientHeight;
                setIsContentOverflowing(isOverflowing);
            }
        };

        // Run the check after render
        checkOverflow();

        // Also check on window resize in case layout changes
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [reviewContent]);
    return (
        <div className="items-left flex max-w-2xl flex-col gap-6 rounded-lg border px-6 py-4">
            <div className="flex flex-row flex-wrap items-end justify-between gap-4">
                <div className="flex flex-row items-end justify-between gap-4">
                    <img
                        src={reviewerAvatar}
                        alt="avatar"
                        className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                    />
                    <div>
                        <p className="text-sm font-semibold">{reviewerName}</p>
                        <p className="font-base text-muted-foreground text-sm">
                            {reviewerTitle}
                        </p>
                    </div>
                </div>

                <div className="text-muted-foreground max-w-[15ch] grow-0 text-sm">
                    <span className="font-semibold">{likes} </span>人觉得有用
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <StarRating value={defaultRating} readOnly />
                <div>
                    <h2 className="mb-2 text-xl font-semibold">{reviewTitle}</h2>
                    <p
                        ref={contentRef}
                        className={`text-muted-foreground ${isExpanded ? "" : "line-clamp-3"} text-ellipsis`}
                    >
                        {reviewContent}
                    </p>
                </div>
                {isContentOverflowing && (
                    <Button
                        className="px-0"
                        variant="link"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "Show less" : "Show more"}
                    </Button>
                )}
            </div>

            <div>
                <LikeRating
                    dislikes={dislikes}
                    isDisliked={isDisliked}
                    isLiked={isLiked}
                    likes={likes}
                    onRatingChange={(newState) => {
                        setLikes(newState.likes);
                        setDislikes(newState.dislikes);
                        setIsLiked(newState.isLiked);
                        setIsDisliked(newState.isDisliked);
                    }}
                />
            </div>
        </div>
    );
}

export default Review_03;
export type { Review_03Props };
