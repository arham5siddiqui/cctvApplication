import React from 'react';
import { Link } from "react-router-dom";
import './layout.css';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { auth } from "./firebase.js";


function Home() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user-info'))
  console.warn(user)

  function logOut() {
    localStorage.clear();
    auth.signOut();
    history.push('/');
  }

  return (
    <div>
      <div id="like_button_container" />
      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <div id="logo" className="fl_left">
            {/* ################################################################################################ */}
            <h1 className="logoname"><a href="index.html">Eyes<span>S</span>py</a></h1>
            {/* ################################################################################################ */}
          </div>
          <Nav id="mainav" className="fl_right">
            {/* ################################################################################################ */}
            <b> <ul className="clear">
              <li><a onClick={() => history.push('/number-plate')}>Number Plate</a>
              </li>
              <li><a onClick={() => history.push('/mask')}>Mask</a>
              </li>
              <li><a onClick={() => history.push('/theft-violence')}>Theft and Violence</a></li>
              <li>
                 <a onClick={logOut}>
                  LOGOUT
                 </a>
              </li>
            </ul> </b>
            {/* ################################################################################################ */}
          </Nav>
        </header>
      </div>
      {/* ################################################################################################ */}
      <div className="bgdedOverlay" style={{ backgroundImage: 'url("index.jpeg")' }}>
        <div id="pageintro" className="hoc clear">
          {/* ################################################################################################ */}
          <article>
            <h3 className="heading">CCTV MANAGEMENT SYSTEM</h3>
            <p>Our motive is to make you feel safe no matter where you are. We provide different and accurate CCTV features that'll help you keep your mind at peace and make your home, shops, etc., safety eaze.</p>
          </article>
          {/* ################################################################################################ */}
        </div>
      </div>
      {/* ################################################################################################ */}
      <div className="wrapper row3">
        <main className="hoc container clear">
          {/* main body */}
          {/* ################################################################################################ */}
          <b><section id="introblocks">
            <ul className="nospace group btmspace-80 elements elements-four">
              <li className="one_quarter">
                <article><a href="#"><i className="fas fa-car" /></a>
                  <h6 className="heading">Number Plate Recognition</h6>
                  <p>Using Image Processing and Artificial Intelligence, we'll be helping the society by finding the stolen vehicles and directly reporting them to the authority.<br /><br /></p>
                </article>
              </li>
              <li className="one_quarter">
                <article><a href="#"><i className="fas fa-smile" /></a>
                  <h6 className="heading">Mask Detection</h6>
                  <p>Covid times has destabilized everything. Masks are an important necessity now. Again using Image Processing, we'll tracking the people who are not wearing masks in campus.<br /><br /></p>
                </article>
              </li>
              <li className="one_quarter">
                <article><a href="#"><i className="fas fa-fire" /></a>
                  <h6 className="heading">Theft and Violence Detection</h6>
                  <p>We want our country to become a place where we can sleep with a peaceful mind. Here, we'll be identifying any forms of violent or theft movements through our technology.<br /><br /> </p>
                </article>
              </li>
              <li className="one_quarter">
               
              </li>
            </ul>
          </section></b>
          {/* ################################################################################################ */}
          <div className="wrapper row3">
            <section className="hoc container clear">
              {/* ################################################################################################ */}
              <b><div className="sectiontitle">
                <h6 className="heading font-x2">Present Accuracies of our System</h6>
              </div>
                <ul className="pr-charts nospace group center">
                  <li className="pr-chart-ctrl" data-animate="false">
                    <div className="pr-chart" data-percent={25}><i /></div>
                    <p>Number Plate Recognition</p>
                  </li>
                  <li className="pr-chart-ctrl" data-animate="false">
                    <div className="pr-chart" data-percent={50}><i /></div>
                    <p>Mask Detection</p>
                  </li>
                  <li className="pr-chart-ctrl" data-animate="false">
                    <div className="pr-chart" data-percent={75}><i /></div>
                    <p>Theft and Violence Detection</p>
                  </li>
                  
                </ul>
                {/* ################################################################################################ */}
              </b></section><b>
            </b></div>
          {/* ################################################################################################ */}
          <a id="backtotop" href="#top"><i className="fas fa-chevron-up" /></a>
          {/* JAVASCRIPTS */}
          {/* Homepage specific */}
          {/* / Homepage specific */}
        </main>
      </div>
    </div>
  );
}

export default Home;
