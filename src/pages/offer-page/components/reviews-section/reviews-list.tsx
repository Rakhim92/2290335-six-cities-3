import ReviewsItem from './reviews-item';
import {TComment} from '../../../../types';

const MAX_REVIEWS_COUNT = 10;

type TCommentsProps = {
  comments: TComment[];
}

const ReviewsList = ({comments}:TCommentsProps) => {
  const sortedComments = [...comments]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_COUNT);
  return (
    sortedComments.length !== 0 ? (
      <ul className="reviews__list">
        {sortedComments.map((review) => (
          <ReviewsItem
            review = {review}
            key={review.id}
          />
        ))}
      </ul>
    ) : null
  );
};

export default ReviewsList;
