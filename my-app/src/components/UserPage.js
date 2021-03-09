import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import * as actionTypes from '../store/actions'
import Navbar from './Navbar/Navbar'
import './styles.css'

class UserPage extends Component {
  state = {
    changePas: false
  }
  async componentDidMount() {
    const { onEmailSave, onPasSave, history } = this.props
    const lsEmail = localStorage.getItem('email')
    const lsPas = localStorage.getItem('pas')
    if (lsEmail !== null && lsPas !== null && lsEmail !== '' && lsPas !== '') {
      onEmailSave(lsEmail)
      onPasSave(lsPas)
    } else {
      history.replace('/login')
    }
  }
  dispEncodePas = (pas) => {
    const strArr = Array.from(pas)
    const endcodedPas = strArr.map(item => item.replace(item, '*')).toString().replace(/\,/g, "")
    return endcodedPas
  }
  handleChngPas = () => {
    this.setState({ changePas: true })
  }
  handlePas = (pasVal) => {
    this.props.onPasSave(pasVal)
    localStorage.setItem('pas', pasVal)
  }
  handlSavePass = () => {
    this.setState({ changePas: false })
  }
  handleLogout = () => {
    const { onPasSave, onEmailSave, history } = this.props
    onPasSave('')
    onEmailSave('')
    this.setState({ changePas: false })
    localStorage.removeItem("email")
    localStorage.removeItem("pas")
    history.replace('/login')
  }
  render() {
    const { email, pas } = this.props
    const { changePas } = this.state
    const passToDisp = () => {
      if (changePas === false) {
        return (
          <p>Password: {this.dispEncodePas(pas)}</p>
        )
      } else {
        return (
          <div>
            <label htmlFor="change-password">Password</label>
            {'  '}
            <input type="text" placeHolder="enter new password" id="change-password" onChange={(e) => this.handlePas(e.target.value)}></input>
          </div>
        )
      }
    }
    const passChngSaveBtn = () => {
      if (changePas === false) {
        return (<button className="change-password-btn" onClick={() => this.handleChngPas()}>Change Password</button>)
      } else {
        return (<button className="change-password-btn" onClick={() => this.handlSavePass()}>Save Password</button>)
      }
    }
    return (
      <Fragment className="user-pg-wrapper">
        <Navbar />
        <div className="user-pg-wrapper">
          <p>Username: {email}</p>
          {passToDisp()}
          <br />
          {passChngSaveBtn()}
          <button className="logout-btn" onClick={() => this.handleLogout()}>Logout</button>
        </div>
      </Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    email: state.emailReducer.userEmail,
    pas: state.passReducer.userPas
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onPasSave: (pas) => {
      dispatch({
        type: actionTypes.Password,
        payload: pas
      })
    },
    onEmailSave: (email) => {
      dispatch({
        type: actionTypes.Email,
        payload: email
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserPage));

