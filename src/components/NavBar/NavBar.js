import React from 'react'
import { Link, navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import styles from "./NavBar.module.css"

const ListLink = props => (
    <li>
        <Link to={props.to} className={styles.navText}>
            {props.children}
        </Link>
    </li>
)
  
const Links = () => (
    <ul>
        <ListLink to="/design">DESIGNS</ListLink>
        <ListLink to="/animation">ANIMATIONS</ListLink>
        <ListLink to="/about">ABOUT</ListLink>
    </ul>
)

const NavTopMargin = () => <div style={{ height: 80 }} />

class MinimalBar extends React.Component {
  handleAYButtonClick() {
    navigate("/")
  }

  render() {
    return (
      <div className={this.props.className}>
        <button
          className={styles.AYButton}
          onClick={this.handleAYButtonClick}
        >
          AY
        </button>
        <button className={styles.menuButton} onClick={this.props.onClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    )
  }
}

class FullBar extends React.Component {
  render() {
    return (
        <div className={this.props.className}>
            <div className={styles.navHeader}>
                <ListLink to="/">ASHLEY YEH</ListLink>
            </div>

            <div className={styles.navContent}>
                <ListLink to="/design">DESIGNS</ListLink>
                <ListLink to="/animation">ANIMATIONS</ListLink>
                <ListLink to="/about">ABOUT</ListLink>
            </div>
            
        </div>
    )
  }
}

class NavMobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.className = this.props.className
  }
  render() {
    if (!this.props.show) {
      this.className = styles.hidden + " " + this.props.className
    } else {
      this.className = this.props.className
    }
    return (
      <div className={this.className}>
        <button className={styles.closeButton} onClick={this.props.onClick}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Links />
      </div>
    )
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      type: this.props.type,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.state.type) {
      this.setState({ type: nextProps.type })
    }
  }

  handleMenuClick() {
    this.setState({
      toggled: true,
    })
  }

  handleCloseButtonClick() {
    this.setState({
      toggled: false,
    })
  }

  render() {

    return (
      <div style={{display: 'block'}}>
        <FullBar
          className={[
            styles.navbar,
            styles.navbarDesktop,
            this.props.className,
          ].join(" ")}
        />

        <MinimalBar
          className={[
            styles.navbar,
            styles.navbarMobile,
            this.props.className,
          ].join(" ")}
          onClick={this.handleMenuClick}
        />

        <NavMobileMenu
          className={[styles.navbarMobileMenu, this.props.className].join(" ")}
          show={this.state.toggled}
          onClick={this.handleCloseButtonClick}
        />

        {this.props.type === "solid" ? <NavTopMargin /> : null}
      </div>
    )
  }
}

export default Navbar
