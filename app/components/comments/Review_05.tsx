"use client";

import StarRating from '@/app/components/starRating/StarRating_fraction';
import { Button } from "@/app/components/ui/Button";
import { Check } from "lucide-react";
import { useState } from "react";

interface Review_06Props {
    reviewerName?: string;
    reviewerTitle?: string;
    reviewerAvatar?: string;
    reviewDate?: string;
    reviewTitle?: string;
    reviewContent?: string;
    rating?: number;
    initialUsefulCount?: number;
    initialHelpfulCount?: number;
    initialInsightfulCount?: number;
    verified?: boolean;
}

function FeedbackButton({
                            active,
                            children,
                            count,
                            onClick,
                        }: {
    children: React.ReactNode;
    count: number;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <Button
            variant={active ? "secondary" : "outline"}
            size="sm"
            onClick={onClick}
            className={`rounded-full text-xs ${
                active
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-400"
                    : ""
            }`}
        >
            {children}
            <span className="ml-1 font-normal">({count})</span>
        </Button>
    );
}

function Review_05({
                       initialHelpfulCount = 17,
                       initialInsightfulCount = 9,
                       initialUsefulCount = 24,
                       rating = 5,
                       reviewContent = "我每天使用这款产品持续大约一个月了，可以毫不夸张地说，它彻底改变了我的日常生活。与我之前用过的类似产品相比，它的品质卓越。它经久耐用，设计精良，细节之处也体现了对品质的关注。当我咨询保养问题时，客服服务也非常出色。强烈推荐给所有正在寻找可靠且真正有效解决方案的人.",
                       reviewDate = "2024年8月15日",
                       reviewerAvatar = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-01.jpg",
                       reviewerName = "王五",
                       reviewerTitle = "高级会员",
                       reviewTitle = "各方面都超出了我的预期",
                       verified = true,
                   }: Review_06Props = {}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [usefulCount, setUsefulCount] = useState(initialUsefulCount);
    const [helpfulCount, setHelpfulCount] = useState(initialHelpfulCount);
    const [insightfulCount, setInsightfulCount] = useState(
        initialInsightfulCount
    );
    const [isUsefulActive, setIsUsefulActive] = useState(false);
    const [isHelpfulActive, setIsHelpfulActive] = useState(false);
    const [isInsightfulActive, setIsInsightfulActive] = useState(false);
    const [isReported, setIsReported] = useState(false);

    // Truncate content for preview with a reasonable length
    const previewContent =
        reviewContent.length > 280 && !isExpanded
            ? reviewContent.substring(0, 280) + "..."
            : reviewContent;

    return (
        <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src={reviewerAvatar}
                        alt={reviewerName}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                {reviewerName}
                            </h3>
                            {verified && (
                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  <Check className="mr-1 h-4 w-4" />
                  已认证
                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {reviewerTitle}
                        </p>
                    </div>
                </div>
                <time className="text-xs text-gray-500 dark:text-gray-400">
                    {reviewDate}
                </time>
            </div>

            <div>
                <div className="mb-2 flex items-center gap-2">
                    <StarRating value={rating} readOnly iconSize={18} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {rating}/5
          </span>
                </div>
                <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {reviewTitle}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{previewContent}</p>

                {reviewContent.length > 280 && (
                    <Button
                        variant="link"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-2 h-auto p-0 text-blue-600 dark:text-blue-400"
                    >
                        {isExpanded ? "Show less" : "Read more"}
                    </Button>
                )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 dark:border-gray-800">
                <div className="flex flex-wrap gap-2">
                    <FeedbackButton
                        count={usefulCount}
                        active={isUsefulActive}
                        onClick={() => {
                            setIsUsefulActive(!isUsefulActive);
                            setUsefulCount(
                                isUsefulActive ? usefulCount - 1 : usefulCount + 1
                            );
                        }}
                    >
                        有用
                    </FeedbackButton>
                    <FeedbackButton
                        count={insightfulCount}
                        active={isInsightfulActive}
                        onClick={() => {
                            setIsInsightfulActive(!isInsightfulActive);
                            setInsightfulCount(
                                isInsightfulActive ? insightfulCount - 1 : insightfulCount + 1
                            );
                        }}
                    >
                        没用
                    </FeedbackButton>
                </div>

                <button
                    onClick={() => setIsReported(!isReported)}
                    className={`text-xs font-medium ${
                        isReported
                            ? "text-red-500 dark:text-red-400"
                            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    }`}
                >
                    {isReported ? "已举报" : "举报"}
                </button>
            </div>
        </div>
    );
}

export default Review_05;
export type { Review_06Props };
