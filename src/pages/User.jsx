import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/dashboard.css";
import '../styles/Register.css';
import HeaderUser from "../components/Header/HeaderUser";
import FooterUser from "../components/Footer/FooterUser";
import CarItem from "../components/UI/CarItem";
import AdminCarItem from "../components/UI/AdminCarItem";
import OwnerCarItem from "../components/UI/OwnerCarItem";
import CommonSection from "../components/UI/CommonSection";
import CommonSection2 from "../components/UI/CommonSection2";
import SingleCard from "../components/reuseable/SingleCard";

import { Container, Row, Col } from "reactstrap";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";
import "../styles/bookings.css";

import ReviewsTable from "../charts/ReviewsTable";
import Graph from "../charts/Graph";

import carData from "../assets/dummy-data/booking-cars.js";

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

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

const carObj = {
    title: "Total Cars",
    totalNumber: 500,
    icon: "ri-police-car-line",
};

const tripObj = {
    title: "Daily Trips",
    totalNumber: 1200,
    icon: "ri-steering-2-line",
};

const clientObj = {
    title: "Clients Annually",
    totalNumber: "75k",
    icon: "ri-user-line",
};

const distanceObj = {
    title: "Kilometers Daily",
    totalNumber: 3300,
    icon: "ri-timer-flash-line",
};

const User = (props) => {
    const [user, setUser] = useState({});
    const [carData, setCarData] = useState({
        car_model: "",
        number_plate: "",
        model_name: "",
        color: "",
        image: "",
    });
    const [car_model, setCarModel] = useState({});
    const [model_name, setModelName] = useState({});
    const [number_plate, setNumPlate] = useState({});
    const [color, setColor] = useState({});
    const [roleType, setRoleType] = useState("");
    const [car, setCar] = useState("");
    const [dayRent, setDayRent] = useState("");

    const [b_64, setB_64] = useState({});

    const handleInputChange = (event) => {

        const { name, value } = event.target;
        console.log(name, value);
        if (name == "car_model") {
            setCarModel(value)
        }
        if (name == "model_name") {
            setModelName(value)
        }
        if (name == "number_plate") {
            setNumPlate(value)
        }
        if (name == "color") {
            setColor(value)
        }
        if (name == "day_rent_rate") {
            setDayRent(value)
        }
        setCarData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    function handleFileInputChange(e) {
        console.log(e.target.files[0]);

        let file = e.target.files[0];
        getBase64(file)
            .then((result) => {
                file["base64"] = result;

                console.log("File Is", file);

                setB_64(result);
            })

            .catch(console.log("then"));
    }

    function getBase64(file) {
        return new Promise((resolve) => {
            let fileInfo;

            let baseURL = "";

            let reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = function () {
                console.log("Called", reader);

                baseURL = reader.result;

                console.log(baseURL);

                resolve(baseURL);
            };

            console.log(fileInfo);
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(car_model, b_64, number_plate);
        let config = {
            headers: {
                // TODO: Fetch token from local storage and update here
                Authorization: localStorage.getItem("token"),
            },
        };
        axios
            .post(
                "https://rsms.herokuapp.com/api/createrentitem/",
                {
                    // TODO: Replace to actual
                    car_model: car_model,
                    number_plate: number_plate,
                    model_name: model_name,
                    color: color,
                    image: b_64,
                    day_rent_rate: dayRent,
                },
                config
            )
            .then((response) => {
                console.log(response);
                window.location.reload()
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        const fetchData = async () => {
            const headers = {
                Authorization: localStorage.getItem("token"),
            };
            const result = await axios.get(
                "https://rsms.herokuapp.com/api/fetchuserdetails/",
                { headers }
            );
            setUser(result.data);
            console.log(result.data);
            console.log(props.user_id);
            setRoleType(result.data.role_type);
            if (result.data.role_type === "OWNER") {
                setCar(result.data.cars_rented);
            }
            if (result.data.role_type === "CUSTOMER") {
                setCar(result.data.cars_booked);
            }
            if (result.data.role_type === "ADMIN") {
                setCar(result.data.cars_pending);
            }
        };
        fetchData();
    }, []);

    if (Object.keys(user).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <HeaderUser />

            {roleType === "CUSTOMER" && (
                <React.Fragment>
                    <div className="or-separator">
                    </div>
                    <div className="vh-40" style={{ backgroundColor: '#FDEAFF' }}>
                        <MDBContainer className="container py-5 h-100">
                            <MDBRow className="justify-content-center align-items-center h-100">
                                <MDBCol md="12" xl="4">
                                    <MDBCard style={{ borderRadius: '15px' }}>
                                        <MDBCardBody className="text-center">
                                            <div className="mt-3 mb-4">
                                                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                    className="rounded-circle" fluid style={{ width: '100px' }} />
                                            </div>
                                            <MDBTypography tag="h4">{user.first_name} {user.last_name}</MDBTypography>
                                            <MDBCardText className="text-muted mb-4">
                                                @User
                                            </MDBCardText>
                                            <MDBTypography tag="h5">{user.email_id}</MDBTypography>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <div className="or-separator">
                    </div>
                    <h2>
                        Your Bookings:
                    </h2>

                    <section>
                        <Container>
                            <Row className="justify-content-center align-items-center">
                                {car.length > 0 ? (
                                    car.slice(0, car.length).map((car) => <CarItem item={car} key={car.id} />)
                                ) : (
                                    <p>No cars found.</p>
                                )}
                            </Row>
                        </Container>
                    </section>
                </React.Fragment>
            )}
            {roleType === "OWNER" && (
                <React.Fragment>
                    <div className="or-separator">
                    </div>
                    <div className="vh-40" style={{ backgroundColor: '#FDEAFF' }}>
                        <MDBContainer className="container py-5 h-100">
                            <MDBRow className="justify-content-center align-items-center h-100">
                                <MDBCol md="12" xl="4">
                                    <MDBCard style={{ borderRadius: '15px' }}>
                                        <MDBCardBody className="text-center">
                                            <div className="mt-3 mb-4">
                                                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                                    className="rounded-circle" fluid style={{ width: '100px' }} />
                                            </div>
                                            <MDBTypography tag="h4">{user.first_name} {user.last_name}</MDBTypography>
                                            <MDBCardText className="text-muted mb-4">
                                                @Owner
                                            </MDBCardText>
                                            <MDBTypography tag="h5">{user.email_id}</MDBTypography>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <div className="or-separator">
                    </div>
                    <h2>
                        Your Listings:
                    </h2>
                    <section>
                        <Container>
                            <Row className="justify-content-center align-items-center">
                                {car.length > 0 ? (
                                    car.slice(0, car.length).map((car) => <OwnerCarItem item={car} key={car.id} />)
                                ) : (
                                    <p>No cars found.</p>
                                )}
                            </Row>
                        </Container>
                    </section>
                    <div className="or-separator">
                    </div>
                    <CommonSection title="Owner Dashboard" />
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
                    <div className="or-separator">
                    </div>
                    <div className="login-container" style={{ backgroundColor: '#FDEAFF' }}>
                        <div className="form-container" style={{ backgroundColor: '#FDEAFF' }}>
                            <div className="form-body">
                                <h2>Want to rent out a car? Fill out the below form!</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="name-inputs">
                                        <div className="form-group">
                                            <label>
                                                Car Name:
                                                <input
                                                    type="text"
                                                    name="car_model"
                                                    value={carData.car_model}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                            <label>
                                                Model Name:
                                                <input
                                                    type="text"
                                                    name="model_name"
                                                    value={carData.model_name}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="name-inputs">
                                        <div className="form-group">
                                            <label>
                                                Number Plate:
                                                <input
                                                    type="text"
                                                    name="number_plate"
                                                    value={carData.number_plate}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                            <label>
                                                Car Color:
                                                <input
                                                    type="text"
                                                    name="color"
                                                    value={carData.color}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                            <label>
                                                Per day rate
                                                <input
                                                    type="text"
                                                    name="day_rent_rate"
                                                    value={carData.day_rent_rate}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="name-inputs">
                                        <div className="form-group">
                                            <label>
                                                Upload Image:
                                                <input type="file" name="file" onChange={handleFileInputChange} style={{marginRight: "20px"}} />
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" onSubmit={handleSubmit}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="or-separator">
                    </div>
                    {/* <form onSubmit={handleSubmit}>
                        <label>
                            Car Model:
                            <input
                                type="text"
                                name="car_model"
                                value={carData.car_model}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Number Plate:
                            <input
                                type="text"
                                name="number_plate"
                                value={carData.number_plate}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Model Name:
                            <input
                                type="text"
                                name="model_name"
                                value={carData.model_name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Color:
                            <input
                                type="text"
                                name="color"
                                value={carData.color}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Image (base64 encoded):
                            <input type="file" name="file" onChange={handleFileInputChange} />
                        </label>
                        <button type="submit" onSubmit={handleSubmit}>
                            Submit
                        </button>
                    </form> */}
                </React.Fragment >
            )}
            {
                roleType === "ADMIN" && (
                    <React.Fragment>
                        <div className="or-separator">
                        </div>
                        <div className="vh-40" style={{ backgroundColor: '#FDEAFF' }}>
                            <MDBContainer className="container py-5 h-100">
                                <MDBRow className="justify-content-center align-items-center h-100">
                                    <MDBCol md="12" xl="4">
                                        <MDBCard style={{ borderRadius: '15px' }}>
                                            <MDBCardBody className="text-center">
                                                <div className="mt-3 mb-4">
                                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                        className="rounded-circle" fluid style={{ width: '100px' }} />
                                                </div>
                                                <MDBTypography tag="h4">{user.first_name} {user.last_name}</MDBTypography>
                                                <MDBCardText className="text-muted mb-4">
                                                    @Admin
                                                </MDBCardText>
                                                <MDBTypography tag="h5">{user.email_id}</MDBTypography>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                        <div className="or-separator">
                        </div>
                        <h2>
                            Decisions Needed:
                        </h2>
                        <section>
                            <Container>
                                <Row className="justify-content-center align-items-center">
                                    {car.length > 0 ? (
                                        car.slice(0, car.length).map((car) => <AdminCarItem item={car} key={car.id} />)
                                    ) : (
                                        <p>No cars found.</p>
                                    )}
                                </Row>
                            </Container>
                        </section>
                        <div style={{ margin: "0 100px" }}>
                            <React.Fragment>
                                <CommonSection title="Admin Dashboard" />
                                <div className="dashboard">
                                    <CommonSection2 title="Insights and Our Analytical Reports" />
                                    <div className="dashboard__wrapper">
                                        <div className="dashboard__cards">
                                            <SingleCard item={carObj} />
                                            <SingleCard item={tripObj} />
                                            <SingleCard item={clientObj} />
                                            <SingleCard item={distanceObj} />
                                        </div>

                                        <div className="statics">
                                            <div className="stats">
                                                <h3 className="stats__title">Miles Statistics</h3>
                                                <MileChart />
                                            </div>

                                            <div className="stats">
                                                <h3 className="stats__title">Car Statistics</h3>
                                                <CarStatsChart />
                                            </div>
                                        </div>

                                        <br />
                                        <CommonSection2 title="Top Cars of the Week" />
                                        <div className="recommend__cars-wrapper">
                                            {recommendCarsData.map((item) => (
                                                <RecommendCarCard item={item} key={item.id} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        </div>
                    </React.Fragment>
                )
            }

            <FooterUser />
        </React.Fragment >
    );
};

export default User;
