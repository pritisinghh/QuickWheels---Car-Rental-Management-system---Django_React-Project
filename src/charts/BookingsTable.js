import React from 'react';
import { Table } from 'react-bootstrap';

const BookingsTable = () => {
  const bookings = [    {      id: 1,      customerName: 'John Doe',      carType: 'SUV',      rentalPeriod: '4 days',      pickUpLocation: 'New York',      dropOffLocation: 'Boston',      paymentStatus: 'Pending'    },
  {      id: 2,      customerName: 'Jane Smith',      carType: 'Sedan',      rentalPeriod: '3 days',      pickUpLocation: 'Los Angeles',      dropOffLocation: 'San Francisco',      paymentStatus: 'Paid'    },
  {      id: 3,      customerName: 'Mark Johnson',      carType: 'Convertible',      rentalPeriod: '2 days',      pickUpLocation: 'Miami',      dropOffLocation: 'Key West',      paymentStatus: 'Paid'    },
  {      id: 4,      customerName: 'Sarah Lee',      carType: 'Sports Car',      rentalPeriod: '7 days',      pickUpLocation: 'Las Vegas',      dropOffLocation: 'San Diego',      paymentStatus: 'Pending'    },
  {      id: 5,      customerName: 'James Wang',      carType: 'SUV',      rentalPeriod: '5 days',      pickUpLocation: 'Chicago',      dropOffLocation: 'Minneapolis',      paymentStatus: 'Paid'    },
  {      id: 6,      customerName: 'Emily Chen',      carType: 'Sedan',      rentalPeriod: '4 days',      pickUpLocation: 'Seattle',      dropOffLocation: 'Portland',      paymentStatus: 'Pending'    },
  {      id: 7,      customerName: 'Kevin Davis',      carType: 'Convertible',      rentalPeriod: '3 days',      pickUpLocation: 'New Orleans',      dropOffLocation: 'Houston',      paymentStatus: 'Paid'    },
  {      id: 8,      customerName: 'Megan Brown',      carType: 'Sports Car',      rentalPeriod: '6 days',      pickUpLocation: 'Denver',      dropOffLocation: 'Salt Lake City',      paymentStatus: 'Paid'    },
  {      id: 9,      customerName: 'Daniel Kim',      carType: 'SUV',      rentalPeriod: '8 days',      pickUpLocation: 'San Francisco',      dropOffLocation: 'Los Angeles',      paymentStatus: 'Pending'    },
  {      id: 10,      customerName: 'Jessica Liu',      carType: 'Sedan',      rentalPeriod: '2 days',      pickUpLocation: 'New York',      dropOffLocation: 'Boston',      paymentStatus: 'Paid'    }
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Customer Name</th>
          <th>Car Type</th>
          <th>Rental Period</th>
          <th>Pick-up Location</th>
          <th>Drop-off Location</th>
          <th>Payment Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.customerName}</td>
            <td>{booking.carType}</td>
            <td>{booking.rentalPeriod}</td>
            <td>{booking.pickUpLocation}</td>
            <td>{booking.dropOffLocation}</td>
            <td>{booking.paymentStatus}</td>
            <td>
              {booking.paymentStatus === "Pending" ? (
                <>
                  <button className="btn btn-transparent mr-2">
                    Confirm
                  </button>
                  <button className="btn btn-transparent">Cancel</button>
                </>
              ) : (
                <button className="btn btn-transparent">Cancel</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>

           </Table>
           );
           };
export default BookingsTable;






