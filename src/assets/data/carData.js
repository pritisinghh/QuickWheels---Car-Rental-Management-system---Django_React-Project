// import all images from assets/images directory
import img01 from "../all-images/cars-img/1.png";
import img02 from "../all-images/cars-img/2.png";
import img03 from "../all-images/cars-img/3.png";
import img04 from "../all-images/cars-img/4.jpg";
import img05 from "../all-images/cars-img/5.png";
import img06 from "../all-images/cars-img/6.png";
// import img07 from "../all-images/cars-img/toyota-offer-2.png";
// import img08 from "../all-images/cars-img/mercedes-offer.png";
// import img09 from "../all-images/cars-img/mercedes-offer.png";
// import img10 from "../all-images/cars-img/mercedes-offer.png";
// import img11 from "../all-images/cars-img/mercedes-offer.png";
// import img12 from "../all-images/cars-img/mercedes-offer.png";
// import img13 from "../all-images/cars-img/mercedes-offer.png";
// import img14 from "../all-images/cars-img/mercedes-offer.png";
// import img15 from "../all-images/cars-img/mercedes-offer.png";
// import img16 from "../all-images/cars-img/mercedes-offer.png";
// import img17 from "../all-images/cars-img/mercedes-offer.png";
// import img18 from "../all-images/cars-img/mercedes-offer.png";
// import img19 from "../all-images/cars-img/mercedes-offer.png";
// import img20 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    car_model: "honda",
    image: img01,
    model_name: "civic",
    color: "BLUE",
    number_plate: "XYZ123",
    rent_status: "AVAILABLE",
    day_rent_rate: 60,
    latitude: "51.5074",
    longitude: "-0.1278",
  },
  {
    id: 2,
    car_model: "toyota",
    image: img02,
    model_name: "corolla",
    color: "RED",
    number_plate: "WWJ52",
    rent_status: "PENDING",
    day_rent_rate: 50,
  },
  {
    id: 3,
    car_model: "audi",
    image: img03,
    model_name: "a4",
    color: "BLACK",
    number_plate: "ABC456",
    rent_status: "AVAILABLE",
    day_rent_rate: 80,
  },
  {
    id: 4,
    car_model: "ford",
    image: img04,
    model_name: "mustang",
    color: "YELLOW",
    number_plate: "DEF789",
    rent_status: "AVAILABLE",
    day_rent_rate: 100,
  },
  {
    id: 5,
    car_model: "mercedes",
    image: img05,
    model_name: "e-class",
    color: "SILVER",
    number_plate: "GHI012",
    rent_status: "PENDING",
    day_rent_rate: 120,
  },
  {
    id: 6,
    car_model: "bmw",
    image: img06,
    model_name: "x5",
    color: "WHITE",
    number_plate: "JKL345",
    rent_status: "AVAILABLE",
    day_rent_rate: 90,
  },
  {
    id: 7,
    car_model: "tesla",
    image: "random_image_7",
    model_name: "model s",
    color: "RED",
    number_plate: "MNO678",
    rent_status: "AVAILABLE",
    day_rent_rate: 150,
  },
  {
    id: 8,
    car_model: "honda",
    image: "random_image_8",
    model_name: "accord",
    color: "BLACK",
    number_plate: "PQR901",
    rent_status: "PENDING",
    day_rent_rate: 70,
  },
  {
    id: 9,
    car_model: "toyota",
    image: "random_image_9",
    model_name: "prius",
    color: "GREEN",
    number_plate: "STU234",
    rent_status: "AVAILABLE",
    day_rent_rate: 55,
  },
  {
    id: 10,
    car_model: "audi",
    image: "random_image_10",
    model_name: "q7",
    color: "BLUE",
    number_plate: "VWX567",
    rent_status: "AVAILABLE",
    day_rent_rate: 100,
  },
  {
    id: 11,
    car_model: "ford",
    image: "random_image_11",
    model_name: "f-150",
    color: "RED",
    number_plate: "YZA890",
    rent_status: "PENDING",
    day_rent_rate: 90,
  },
  {
    id: 12,
    car_model: "honda",
    image: "random_image_11",
    model_name: "civic",
    color: "BLUE",
    number_plate: "XYZ987",
    rent_status: "AVAILABLE",
    day_rent_rate: 60,
  },
  {
    id: 13,
    car_model: "bmw",
    image: "random_image_12",
    model_name: "3-series",
    color: "BLACK",
    number_plate: "BCD123",
    rent_status: "AVAILABLE",
    day_rent_rate: 80,
  },
  {
    id: 14,
    car_model: "tesla",
    image: "random_image_13",
    model_name: "model x",
    color: "WHITE",
    number_plate: "EFG456",
    rent_status: "AVAILABLE",
    day_rent_rate: 140,
  },
  {
    id: 15,
    car_model: "honda",
    image: "random_image_14",
    model_name: "odyssey",
    color: "GREY",
    number_plate: "HIJ789",
    rent_status: "PENDING",
    day_rent_rate: 75,
  },
  {
    id: 16,
    car_model: "toyota",
    image: "random_image_15",
    model_name: "highlander",
    color: "SILVER",
    number_plate: "KLM012",
    rent_status: "AVAILABLE",
    day_rent_rate: 65,
  },
  {
    id: 17,
    car_model: "audi",
    image: "random_image_16",
    model_name: "a6",
    color: "RED",
    number_plate: "NOP345",
    rent_status: "AVAILABLE",
    day_rent_rate: 90,
  },
  {
    id: 18,
    car_model: "ford",
    image: "random_image_17",
    model_name: "fusion",
    color: "BLUE",
    number_plate: "QRS678",
    rent_status: "PENDING",
    day_rent_rate: 70,
  },
  {
    id: 19,
    car_model: "mercedes",
    image: "random_image_18",
    model_name: "s-class",
    color: "BLACK",
    number_plate: "TUV901",
    rent_status: "AVAILABLE",
    day_rent_rate: 130,
  },
  {
    id: 20,
    car_model: "bmw",
    image: "random_image_19",
    model_name: "5-series",
    color: "GREY",
    number_plate: "WXY234",
    rent_status: "AVAILABLE",
    day_rent_rate: 95,
  }
];

export default carData;

// Honda Civic
// Toyota Corolla
// Audi A4
// Ford Mustang
// Mercedes E-Class
// BMW X5
// Tesla Model S
// Honda Accord
// Toyota Prius
// Audi Q7
// Ford F-150
// Honda Civic (duplicate entry)
// BMW 3-series
// Tesla Model X
// Honda Odyssey
// Toyota Highlander
// Audi A6
// Ford Fusion
// Mercedes S-Class
// BMW 5-Series