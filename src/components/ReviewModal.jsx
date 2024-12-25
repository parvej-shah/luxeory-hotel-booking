/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";
import ReactStars from "react-stars";
const ReviewModal = ({ isOpen, setIsOpen, username, onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle Form Submission
  const handleSubmit = () => {
    if (!rating || !comment.trim()) {
      toast.error("Please provide a rating and a comment.");
      return;
    }

    const reviewData = {
        roomId:isOpen.roomId,
      username,
      rating,
      comment,
      timestamp: new Date(),
    };

    onSubmitReview(reviewData);
    setIsOpen(null);
    setRating(0);
    setComment("");
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-bgStart rounded-lg shadow-lg p-6 w-full max-w-lg text-textPrimary">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Leave a Review</h2>
            <button
              className="text-gray-500 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-textPrimary/80">
              Username
            </label>
            <input
              type="text"
              value={username}
              readOnly
              className="input input-bordered w-full bg-bgEnd cursor-not-allowed"
            />
          </div>
          {/* Rating */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-textPrimary/80">
              Rating
            </label>
            <div className="flex items-center space-x-2">
              <ReactStars
                count={5}
                onChange={handleRatingChange}
                size={30}
                value={rating}
                color2={"#facc15"} // Star color when filled
                color1={"#d1d5db"} // Star color when empty
              />
            </div>
          </div>
          {/* Comment */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-textPrimary/80">
              Comment
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="textarea textarea-bordered w-full bg-bgEnd"
              placeholder="Write your review here..."
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex justify-end">
            <button onClick={handleSubmit} className="btn btn-sm bg-secondary hover:bg-secondary/80 text-primary border-none">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ReviewModal;
