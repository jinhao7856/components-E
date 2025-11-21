"use client";

import StarRating from '@/app/components/starRating/StarRating_fraction';
import { Button } from "@/app/components/ui/Button";
import { Separator } from '@/app/components/ui/Separator';
import { Globe, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface Review_08Props {
    reviewerName?: string;
    reviewerAvatar?: string;
    yearsMember?: number;
    reviewDate?: string;
    reviewContent?: string;
    rating?: number;
    isTranslated?: boolean;
    originalLanguage?: string;
    helpfulCount?: number;
    responseFromHost?: string;
    responseFromHostDate?: string;
}

function Review_06({
                       helpfulCount = 3,
                       isTranslated = true,
                       originalLanguage = "英语",
                       rating = 4.5,
                       responseFromHost = "非常感谢你的评价！能接待你真是我的荣幸，很高兴你喜欢这套公寓和它的位置。露台也是我最喜欢的地方！希望很快能再次见到你.",
                       responseFromHostDate = "2024年8月",
                       reviewContent = "这间公寓简直是我们周末度假的完美之选。地理位置绝佳，步行即可到达众多餐厅和商店。公寓一尘不染，装饰精美，设施齐全。床铺舒适无比，夜晚街区也十分安静。房东热情周到，并为我们推荐了许多当地好去处。我们尤其喜欢那间可以享用晨间咖啡的私人露台。下次一定还会选择入住这里!",
                       reviewDate = "2024年8月",
                       reviewerAvatar = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-03.jpg",
                       reviewerName = "柳如烟",
                       yearsMember = 5,
                   }: Review_08Props = {}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [helpful, setHelpful] = useState(helpfulCount);
    const [hasMarkedHelpful, setHasMarkedHelpful] = useState(false);
    const [showOriginal, setShowOriginal] = useState(false);

    // Truncate content for preview
    const previewContent =
        reviewContent.length > 250 && !isExpanded
            ? reviewContent.substring(0, 250) + "..."
            : reviewContent;

    return (
        <div className="space-y-4 rounded-lg border p-5">
            <div className="flex items-center gap-4">
                <img
                    src={reviewerAvatar}
                    alt={reviewerName}
                    className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <h3 className="font-medium">{reviewerName}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <span>·</span>
                            <span className="ml-2">
                已使用{yearsMember} 年
              </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <time className="text-sm text-gray-500">{reviewDate}</time>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <StarRating value={rating} readOnly iconSize={16} />
                </div>

                {isTranslated && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Globe className="h-3 w-3" />
                        <span>
              翻译自 {originalLanguage}
                            <Button
                                variant="link"
                                size="sm"
                                className="h-auto p-0 px-1 text-xs font-normal text-gray-600"
                                onClick={() => setShowOriginal(!showOriginal)}
                            >
                {showOriginal ? "查看中文" : "查看原文"}
              </Button>
            </span>
                    </div>
                )}

                <p className="">{previewContent}</p>

                {reviewContent.length > 250 && (
                    <Button
                        variant="link"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="h-auto p-0 text-gray-600"
                    >
                        {isExpanded ? "恢复" : "查看更多"}
                    </Button>
                )}

                <div className="flex items-center pt-1">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1.5 text-xs"
                        onClick={() => {
                            if (!hasMarkedHelpful) {
                                setHelpful(helpful + 1);
                                setHasMarkedHelpful(true);
                            } else {
                                setHelpful(helpful - 1);
                                setHasMarkedHelpful(false);
                            }
                        }}
                    >
                        <ThumbsUp
                            className={`h-3.5 w-3.5 ${
                                hasMarkedHelpful ? "text-red-500" : ""
                            }`}
                        />
                        有用{" "}
                        {helpful > 0 && <span className="text-gray-500">({helpful})</span>}
                    </Button>
                </div>
            </div>

            {responseFromHost && (
                <div className="mt-4 ml-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h4 className="mb-1 text-sm font-medium">卖家回复</h4>
                    <time className="mb-2 block text-xs text-gray-500">
                        {responseFromHostDate}
                    </time>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        {responseFromHost}
                    </p>
                </div>
            )}

            <Separator />
        </div>
    );
}

export default Review_06;
export type { Review_08Props };
