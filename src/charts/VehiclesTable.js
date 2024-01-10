import React from 'react';
import { Table } from 'react-bootstrap';

const VehiclesTable = () => {
  const vehicles = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      mileage: '15,000',
      availability: 'Available',
    },
    {
      id: 2,
      make: 'Ford',
      model: 'Explorer',
      year: 2021,
      mileage: '10,000',
      availability: 'Not Available',
    },
    {
      id: 3,
      make: 'Honda',
      model: 'Civic',
      year: 2018,
      mileage: '20,000',
      availability: 'Available',
    },
    {
      id: 4,
      make: 'Chevrolet',
      model: 'Impala',
      year: 2019,
      mileage: '18,000',
      availability: 'Not Available',
    },
    {
      id: 5,
      make: 'Nissan',
      model: 'Altima',
      year: 2022,
      mileage: '5,000',
      availability: 'Available',
    },
    {
      id: 6,
      make: 'Tesla',
      model: 'Model S',
      year: 2021,
      mileage: '8,000',
      availability: 'Available',
    },
    {
      id: 7,
      make: 'BMW',
      model: 'X5',
      year: 2020,
      mileage: '12,000',
      availability: 'Not Available',
    },
    {
      id: 8,
      make: 'Audi',
      model: 'A4',
      year: 2021,
      mileage: '7,500',
      availability: 'Available',
    },
    {
      id: 9,
      make: 'Mercedes-Benz',
      model: 'E-Class',
      year: 2019,
      mileage: '22,000',
      availability: 'Not Available',
    },
    {
      id: 10,
      make: 'Hyundai',
      model: 'Elantra',
      year: 2022,
      mileage: '3,500',
      availability: 'Available',
    },
  ];


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Mileage</th>
          <th>Availability</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle) => (
          <tr key={vehicle.id}>
            <td>{vehicle.id}</td>
            <td>{vehicle.make}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.year}</td>
            <td>{vehicle.mileage}</td>
            <td>{vehicle.availability}</td>
            <button className="btn btn-transparent mr-2">Edit</button>
            <button className="btn btn-transparent">Remove</button>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default VehiclesTable;
