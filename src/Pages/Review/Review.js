import React, { useState } from 'react';

function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      content: "Quantity of Rice of Canteen is very little. Should be increased.",
      rating: 0,
    },
    {
      id: 2,
      content: "Dinning workers should be more polite and hygienic.",
      rating: 0,
    },
    {
      id: 3,
      content: "Authority should take extra care about the quality of the food",
      rating: 0,
    },
  ]);

  const handleRatingChange = (reviewId, rating) => {
    const updatedReviews = reviews.map((review) =>
      review.id === reviewId ? { ...review, rating } : review
    );
    setReviews(updatedReviews);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 my-4 shadow-md rounded-lg">
            <p className="text-cyan-700">{review.content}</p>
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Rate this content:</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`text-xl ${review.rating >= star ? 'text-yellow-500' : 'text-gray-400'} mr-2`}
                    onClick={() => handleRatingChange(review.id, star)}
                  >
                    &#9733;
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
