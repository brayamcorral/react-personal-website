import React from 'react';
import { css } from "@emotion/react";
import Loader from "react-spinners/BarLoader";
import './Spinner.css'

const override = css`
  display: block;
  margin: 10rem auto;
  background-color: lightblue;
`;

function Spinner() {
     return (
         <>
         <Loader size={50} css={override} speedMultiplier={0.5} />
      </>
    );
}

export default Spinner;
