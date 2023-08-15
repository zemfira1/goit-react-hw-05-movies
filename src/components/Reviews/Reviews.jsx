import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'servises/api';
import { ReviewsList } from './ReviewsList';
import { NoReviews } from './NoReviews';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const getReviewsData = async () => {
      try {
        setIsLoading(true);
        setReviews(await getReviews(movieId));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getReviewsData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews !== [] ? <ReviewsList reviews={reviews} /> : <NoReviews />}
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};
