import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const history = useNavigate();

    useEffect(() => {
        const unlisten = history.listen(() => {
            if (history.action === "POP") {
                history.push("/login");
            }
        });

        return () => {
            unlisten();
        };
    }, [history]);

    const handleLogout = () => {
        // Perform logout action here
        history.push("/");
    };

    return (
        <div>
            <h1>Welcome to the home page!</h1>
            <button onClick={() => history.goBack()}>Click to go back</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;