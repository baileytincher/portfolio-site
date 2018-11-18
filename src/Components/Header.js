import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const scrollTo = (el) => {
    const elementPosition = el.offsetTop;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
}

class Header extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var location = this.props.data.location;
            var networks = this.props.data.social.map(function(network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><NavLink smooth to="#home">Home</NavLink></li>
            <li><NavLink scroll={el => scrollTo(el)} to="#about">About</NavLink></li>
            <li><NavLink scroll={el => scrollTo(el)} to="#resume">Resume</NavLink></li>
            <li><NavLink scroll={el => scrollTo(el)} to="#portfolio">Works</NavLink></li>
            <li><NavLink scroll={el => scrollTo(el)} to="#testimonials">Testimonials</NavLink></li>
            <li><NavLink scroll={el => scrollTo(el)} to="#contact">Contact</NavLink></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}<span id="cursor">_</span></h1>
            <h3>I'm a <span>{occupation}</span></h3>
            <h3>at the {location}.</h3>
            <h3><span>{description}</span>.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <NavLink scroll={el => scrollTo(el)} to="#about"><i className="icon-down-circle"></i></NavLink >
      </p>

   </header>
        );
    }
}

export default Header;
