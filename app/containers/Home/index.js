/**********************
Name - Home / Dashboard
Author - Nasir Ansari
Description: This is home page component
***********************/

import React from 'react';
import { Helmet } from 'react-helmet';
import CustomButton from "../../components/Buttons";
import SharingSetting from '../../components/SharingSetting';
import './style.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issharSettOpen: false
    }
  }

  fnShareFiles = (e) => {
    this.setState({
      issharSettOpen: !this.state.issharSettOpen
    })
  }

  render() {
    return (
      <div style={{ border: '1px solid transparent' }}>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>

        <div className="maindiv1">
          Share Files
        </div>

        <div className="maindiv2">
          <CustomButton
            handleClick={(e) => { this.fnShareFiles(e) }}
            name="Share"
            className="ButtonStyleWithBlue"
          />
        </div>

        <SharingSetting
          fnShareFiles={this.fnShareFiles}
          issharSettOpen={this.state.issharSettOpen}
        />
      </div>
    );
  }
}

export default Home;

