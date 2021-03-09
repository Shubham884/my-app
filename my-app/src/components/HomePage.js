import React, { Component } from "react";
import Navbar from './Navbar/Navbar'
import Dropdown from './Dropdown/Dropdown'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import './styles.css'

class HomePage extends Component {
  componentDidMount() {
    const { email, pas, history } = this.props
    console.log('email, passWord', email, pas)
    if (email === '' && pas === '') {
      history.replace('/login')
    }
  }
  state = {
    dropdownText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  }
  handleClick = (value) => {
    let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    console.log(value)
    switch (value) {
      case 'covid19':
        text = 'COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.'
        break;

      case 'politics':
        text = 'the activities associated with the governance of a country or area, especially the debate between parties having power.'
        break;

      default:
        break;
    }
    this.setState({ dropdownText: text })
  }
  render() {
    const { email, pas, history } = this.props
    console.log('email, pas, history', email, pas, history)
    const { dropdownText } = this.state
    return (
      <div>
        <Navbar />
        <Dropdown clicked={(event) => this.handleClick(event.target.value)} />
        <div className="dropdown-content">{dropdownText}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    email: state.emailReducer.userEmail,
    pas: state.passReducer.userPas
  }
}

export default connect(mapStateToProps)(withRouter(HomePage));
// export default HomePage;

