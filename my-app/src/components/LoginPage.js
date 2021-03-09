import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import * as actionTypes from '../store/actions'
import './styles.css'

class LoginPage extends Component {

  handleEmail = (emailVal) => {
    this.props.onEmailSave(emailVal)
  }

  handlePas = (pasVal) => {
    this.props.onPasSave(pasVal)
  }

  submitForm = () => {
    const { email, pas, history } = this.props
    if (email !== '' && pas !== '') {
      localStorage.setItem('email', email)
      localStorage.setItem('pas', pas)
      history.replace('/home')
    }
  }

  render() {
    const { email, pas } = this.props
    return (
      <div id='login'>
        <form action="" onSubmit={() => this.submitForm()} >
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => this.handleEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="passwrod"
              id="password"
              autoComplete="off"
              value={pas} onChange={(e) => this.handlePas(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LoginPage));

