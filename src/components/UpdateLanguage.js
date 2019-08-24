import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";
import "../styling/Navbar.css";
import i18n from "../i18n";

class UpdateLanguage extends Component {
  render() {
    return (
      <>
      <div className="ui simple dropdown item">
        {i18n.t('navbar:languages')} <i className="dropdown icon" />
          <Menu secondary id="Language">
          <Menu.Item
            id="Swedish"
            name="Swedish"
            onClick={() =>{i18n.changeLanguage('sv',() => this.props.UpdateLanguage());}}
          />
          <Menu.Item 
            name="English" 
            onClick={() =>{i18n.changeLanguage('sv',() => this.props.UpdateLanguage());}} 
            />
          </Menu>
      </div>
      </>
    )
  }
}

export default UpdateLanguage;