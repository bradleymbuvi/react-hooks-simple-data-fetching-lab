import React, { useEffect, useState } from "react";
import App from "./components/App";


function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then((data) => {
                // Set the image state using the fetched image URL
                setImage(data.message);
            })
            .catch(error => {
                // Handle any errors that occur during the fetch operation
                console.error("Error fetching random dog image:", error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once

    if (!image) {
        return <p>Loading...</p>;
    }

    return (
        <div id="Random-img">
            <img src={image} alt="A Random Dog" />
        </div>
    );
}

export default App;
