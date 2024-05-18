import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const fetchImage = () => {
    setError("");
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        setImageUrl(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch image");
      });
  };

  return (
    <>
      <h1>Random Image Generation App</h1>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={fetchImage} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Fetch Image
        </button>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {imageUrl && (
          <img src={imageUrl} alt="Random Dog" style={{ marginTop: "20px", maxWidth: "100%" }} />
        )}
      </div>
    </>
  );
}

export default App;
