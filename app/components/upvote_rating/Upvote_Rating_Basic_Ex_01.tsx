"use client";

import { useState } from "react";
import Upvote_Rating_Basic from "@/app/components/upvote_rating/Upvote_Rating_Basic";

export default function Upvote_Rating_Basic_Ex_01() {
    const [upvotes, setUpvotes] = useState(100);
    const [downvotes, setDownvotes] = useState(20);
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);

    return (
        <div className="flex flex-col items-center gap-4">
            <Upvote_Rating_Basic
                upvotes={upvotes}
                downvotes={downvotes}
                upvoted={upvoted}
                downvoted={downvoted}
                onVoteChange={(newState) => {
                    setUpvotes(newState.upvotes);
                    setDownvotes(newState.downvotes);
                    setUpvoted(newState.upvoted);
                    setDownvoted(newState.downvoted);
                }}
            />
        </div>
    );
}
