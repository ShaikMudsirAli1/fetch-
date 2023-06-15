import { useState, useEffect } from "react";
import "./App.css";

//import styled from "styled-components";
//import backgroundImage from "./background.png";

// * Component definition:
// *  The FetchAPI component is defined as a functional component using the arrow function syntax.

const FetchAPI = () => {
  /**
   * * State initialization:
   * * The useState hook is used to initialize the advice state variable with an empty string.
   * * This state variable will hold the fetched advice data.
   */

  const [advice, setAdvice] = useState("");

  // * Side effect with useEffect:
  // * The useEffect hook is used to perform the API request when the component is mounted.
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    // * Inside the useEffect hook,
    // * an asynchronous function fetchData is defined.
    const fetchData = async () => {
      try {
        // * The fetchData function uses the fetch function to make a GET request to the specified URL (https://api.adviceslip.com/.
        const respone = await fetch(url);
        // * f the request is successful, the response is parsed as JSON and the advice value (json.slip.advice) is extracted.
        const json = await respone.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    /**
     * *  Rendered JSX:
     * *  The return statement contains the JSX code to be rendered.
     * *  The JSX is wrapped in a Wrapper component, which is likely
     * *  a custom styled component defined using styled-components.
     */
    <>
      {/* <img src={backgroundImage} alt="background" /> */}
      <h1>Fetch Data from an API</h1>
      <h1>{advice}</h1>
      <img
        className="img"
        src="https://d3nn873nee648n.cloudfront.net/900x600/100210/300-ZM1013703.jpg"
        alt="img"
      />
      {/*  The Description component displays the value of the advice state variable, which will be updated once the API request completes.  */}
    </>
  );
};

export default FetchAPI;

// const Wrapper = styled.div`
//   padding-top: 150px;
//   margin: 0 auto;
// `;

// const Title = styled.h1`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 40px;
//   line-height: 48px;
//   color: #ffffff;
//   text-align: center;
// `;

// const Description = styled.h2`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 20px;
//   line-height: 48px;
//   color: #ffffff;
//   text-align: center;
// `;

// const Background = styled.img`
//   position: absolute;
//   width: 100%;
//   top: 0px;
//   z-index: -1;
// `;

// Create the keyframes
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

// render(
//   <Rotate>&lt; 💅🏾 &gt;</Rotate>
// );
