import React, { Component } from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import { Menu, X } from 'react-feather';
import Logo from './Logo';

import './Nav.css';

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false,
  };

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname });

  handleMenuToggle = () => this.setState({ active: !this.state.active });

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle();

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav,
    });

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      );

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/alumni">Alumni</NavLink>
            <NavLink to="/photos">Photos</NavLink>
            <NavLink to="/players/">Players</NavLink>
            <NavLink to="/schedule">Schedule/Results</NavLink>
            <NavLink to="/sponsors">Sponsors</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    );
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
);
