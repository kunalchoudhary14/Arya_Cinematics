import React from "react";
// import "./LoaderLogo.css";
import { ClipLoader } from 'react-spinners';

class LogoLoader extends React.Component {
  render() {
    // const theme = this.props.theme;
    return (
      <div className="loader-container">
      <ClipLoader size={80} color={"#d1d1d1"} loading={true} />
    </div>
    );
  }
}

export default LogoLoader;
