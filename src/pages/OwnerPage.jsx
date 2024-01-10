import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookingsTable from "../charts/BookingsTable";
import VehiclesTable from "../charts/VehiclesTable";
import ReviewsTable from "../charts/ReviewsTable";
import Graph from "../charts/Graph";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Header from "../components/Header/Header";
import CommonSection2 from "../components/UI/CommonSection2";

const data = [
  { name: 'January', value: 20 },
  { name: 'February', value: 45 },
  { name: 'March', value: 30 },
  { name: 'April', value: 60 },
  { name: 'May', value: 38 },
  { name: 'June', value: 60 },
  { name: 'July', value: 92 },
  { name: 'August', value: 53 },
  { name: 'September', value: 56 },
  { name: 'October', value: 75 },
  { name: 'November', value: 59 },
  { name: 'December', value: 80 },
];
const data1 = [
  { name: 'Toyota Camry', value: 40 },
  { name: 'Toyota Prius', value: 35 },
  { name: 'Toyota Avalon', value: 60 },
  { name: 'Toyota Corolla', value: 50 },
  { name: 'Toyota Yaris', value: 55 },
  { name: 'Toyota 86', value: 65 },
  { name: 'Toyota Sienna', value: 48 },
  { name: 'Toyota C-HR', value: 65 },
];

const data2 = [
  { name: 'Toyota Camry', value: 13 },
  { name: 'Toyota Prius', value: 30 },
  { name: 'Toyota Avalon', value: 34 },
  { name: 'Toyota Corolla', value: 50 },
  { name: 'Toyota Yaris', value: 34 },
  { name: 'Toyota 86', value: 12 },
  { name: 'Toyota Sienna', value: 20 },
  { name: 'Toyota C-HR', value: 10 },
];

const OwnerPage = () => {
  return (
    <React.Fragment>
      <Header />
      <CommonSection title="Owner Dashboard" />

      {/* <CommonSection2 title="Booking Management" />
      <Container>
        <Row>
          <Col>
            <BookingsTable />
          </Col>
        </Row>
      </Container> */}

      {/* <CommonSection2 title="Vehicle Management" />
      <Container>
        <Row>
          <Col>
            <VehiclesTable />
          </Col>
        </Row>
      </Container> */}

      <CommonSection2 title="Rental Rates and Availability" />
      <Container>
        <Row justify="center">
          <Col>
            <Graph data={data1} />
            <p>Rental Rates</p>
          </Col>
          <Col>
            <Graph data={data2} />
            <p>Availability</p>
          </Col>
        </Row>
      </Container>

      <CommonSection2 title="Customer Reviews and Feedback" />
      <Container>
        <Row>
          <Col>
            <ReviewsTable />
          </Col>
        </Row>
      </Container>

      <CommonSection2 title="Marketing and Promotions" />
      <Container>
        <Row>
          <Col>
            <p>Coming Soon...</p>
          </Col>
        </Row>
      </Container>

      <CommonSection2 title="Analytics and Insights" />
      <Container>
        <Row justify="center">
          <Col span={24}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Graph data={data} style={{ width: '80%', height: 'auto' }} />
            </div>
          </Col>
        </Row>


        {/*         <Row> */}
        {/*           <Col> */}
        {/*             <Graph data={data} /> */}
        {/*           </Col> */}
        {/*           <Col> */}
        {/*             <p>Email and chat options will be available soon.</p> */}
        {/*           </Col> */}
        {/*         </Row> */}
      </Container>

    </React.Fragment>
  );
};

export default OwnerPage;
