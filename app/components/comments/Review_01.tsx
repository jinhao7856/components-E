import StarRating from '@/app/components/starRating/StarRating_basic';
interface Review_01Props {
    rating?: number;
    reviewDate?: string;
    reviewText?: string;
    avatarUrl?: string;
    reviewerName?: string;
    reviewerTitle?: string;
}

function Review_01({
                       avatarUrl = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-07.jpg",
                       rating = 4.0,
                       reviewDate = "2025年2月12日",
                       reviewerName = "张三",
                       reviewerTitle = "普通会员",
                       reviewText = "产品很棒，我对它的质量和价格都非常满意。我会把它推荐给任何正在寻找优质产品或服务的人.",
                   }: Review_01Props = {}) {
    return (
        <>
            <div className="flex max-w-2xl flex-col gap-4 rounded-lg border px-6 py-4">
                <div className="flex flex-row flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <StarRating value={rating} maxStars={5} iconSize={18} readOnly />
                        <p className="text-sm">({rating}/5)</p>
                    </div>

                    <p className="text-muted-foreground text-sm">{reviewDate}</p>
                </div>

                <div>
                    <p className="text-justify">{reviewText}</p>
                </div>

                <div className="flex flex-row items-end gap-4">
                    <img
                        src={avatarUrl}
                        alt="reviewer avatar"
                        className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                    />
                    <div>
                        <p className="text-sm font-semibold">{reviewerName}</p>
                        <p className="font-base text-muted-foreground text-sm">
                            {reviewerTitle}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Review_01;
export type { Review_01Props };
