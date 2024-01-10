import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ReviewsTable = () => {
  const reviews = [
    {
      id: 1,
      customerName: 'Sara Lee',
      rating: 4,
      comment: 'The car was comfortable and clean, but the pickup process took longer than expected.',
    },
    {
      id: 2,
      customerName: 'Mike Johnson',
      rating: 5,
      comment: 'Fantastic experience! The staff was friendly and helpful, and the car was in great condition.',
    },
    {
      id: 3,
      customerName: 'Emily Wong',
      rating: 3,
      comment: 'The car was fine, but the customer service could have been better.',
    },
    {
      id: 4,
      customerName: 'David Lee',
      rating: 4,
      comment: 'I had a good experience overall, but the drop-off location was a bit difficult to find.',
    },
    {
      id: 5,
      customerName: 'Karen Smith',
      rating: 2,
      comment: 'The car was dirty and smelled bad. I would not rent from this company again.',
    },
    {
      id: 6,
      customerName: 'Alex Jones',
      rating: 4,
      comment: 'The rental process was easy, and the car was in good condition.',
    },
    {
      id: 7,
      customerName: 'Rachel Brown',
      rating: 5,
      comment: 'I had a great experience renting from this company. The staff was friendly and professional, and the car was in excellent condition.',
    },
    {
      id: 8,
      customerName: 'Tom Davis',
      rating: 3,
      comment: 'The car was average, but the pickup and drop-off process was very slow.',
    },
    {
      id: 9,
      customerName: 'Linda Chen',
      rating: 4,
      comment: 'The car was great, but the staff could have been more attentive to customer needs.',
    },
    {
      id: 10,
      customerName: 'Kevin Lee',
      rating: 5,
      comment: 'I had a wonderful experience renting from this company. The car was clean and well-maintained, and the staff was very helpful and accommodating.',
    },
  ];


  return (
    <div>
      <h3>Customer Reviews</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.customerName}</td>
              <td>{review.rating}</td>
              <td>{review.comment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReviewsTable;