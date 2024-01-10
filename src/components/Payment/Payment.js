import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import config from "../../Config.json"
import { renderToNodeStream } from "react-dom/server";



function Payment(props) {
    let amt = +props.amt
    let config = {
        headers: {
            // TODO: Fetch token from local storage and update here
            Authorization: localStorage.getItem("token"),
        }
    }
    let f_startDate = new Date(props.startDate).toLocaleDateString('en-GB');
    let f_endDate = new Date(props.endDate).toLocaleDateString('en-GB');
    const navigate = useNavigate();
    const onToken = (token) => {
        console.log("Callings API");
        console.log(props.rent_id, props.startDate, props.endDate);
        axios.post("https://rsms.herokuapp.com/api/createorder/", {
            // TODO: Replace to actual
            rent: props.rent_id,
            email_id: token.email,
            payment_id: token.id,
            amount: amt,
            // TODO: Replace to actual
            from_date: f_startDate,
            to_date: f_endDate

        }, config).then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
        // {}, token, token.id, token.id, props.amt
        console.log(token.email)
        console.log((token.id))
        console.log(props.amt)

        navigate('/user', { state: props.user_id });
        // if (token != null) {
        //     <Link to="/cars" />;

        // } else {9
        //     console.log('Token is null or undefined');
        // }

    };

    return (
        <div>
            <div className="Payment">
                <StripeCheckout
                    token={onToken}
                    name="Order now"
                    description="QuickWheels Inc." // the pop-in header subtitle
                    image="https://www.iconsdb.com/icons/preview/purple/car-4-xxl.png" // the pop-in header image (default none)
                    ComponentClass="div"
                    panelLabel="Pay" // prepended to the amount in the bottom pay button
                    currency="USD"
                    email
                    shippingAddress
                    billingAddress={false}
                    zipCode={false}
                    alipay // accept Alipay (default false)
                    bitcoin // accept Bitcoins (default false)
                    allowRememberMe // "Remember Me" option (default true)
                    token={onToken} // submit callback
                    currency="USD"
                    amount={amt}
                    reconfigureOnUpdate={false}
                    stripeKey="pk_test_51MvLjVE7HhlCQUmP1YKJzQlJzslB9rajO1iz15EWsl2TRqZqahcXenjWCn2PvThoWy7wkWvtO8OgBUuGKScFsbgC0096a7SBSI"
                />
                {/*<Link to="/cars">here</Link> for a successful payment message.*/}

            </div>
            {/*    <div>*/}
            {/*    <button onClick={onToken}>Pay now</button>*/}
            {/*    <p>Click <Link to="/cars">here</Link> for a successful payment message.</p>*/}
            {/*</div>*/}
        </div>
    );
}


export default Payment;