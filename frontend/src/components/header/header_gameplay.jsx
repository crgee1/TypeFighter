import React, { Component } from 'react'

class HeaderGameplay extends Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.props.openModal('menu-dropdown');
  }
  
  render() {
    return (
      <div className="header__container header__gameplay-container">
        <div className="header__container-inner">
          {/* <div className="header__logo-container">
            <div className="header__logo-img"></div>
          </div> */}
          <div className="header__navbar-container">
            <div className="header__navbar">
              <div className="header__navbar-menu-wrapper">
                <button className="header__navbar-dropdown-btn" onClick={this.handleModal}>
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderGameplay;
