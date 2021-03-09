import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import * as actionTypes from '../store/actions'
import './styles.css'


class TaskPage extends Component {
  state = {
    taskData: []
  };
  async componentDidMount() {
    const { onEmailSave, onPasSave, history } = this.props
    const lsEmail = localStorage.getItem('email')
    const lsPas = localStorage.getItem('pas')
    if (lsEmail !== null && lsPas !== null && lsEmail !== '' && lsPas !== '') {
      onEmailSave(lsEmail)
      onPasSave(lsPas)
      this.fetchData()
    } else {
      history.replace('/login')
    }
  }
  fetchData = async () => {
    const taskRes = await fetch(
      "http://jsonplaceholder.typicode.com/todos"
    ).then((response) => response.json());
    this.setState({ taskData: taskRes.splice(0, 3) });
  }
  addTaskHandler = () => {
    const { taskData } = this.state;
    const taskDataCopied = [...taskData];
    const lengthVal = taskDataCopied.length;
    const newTaskId = taskDataCopied[lengthVal - 1].id + 1;
    const newTaskObj = {
      userId: 1,
      id: newTaskId,
      title: `Nimap Test ${newTaskId}`,
      completed: false
    };
    taskDataCopied.push(newTaskObj);
    this.setState({ taskData: taskDataCopied });
  };
  delTaskHandler = (id) => {
    const { taskData } = this.state;
    const taskDataCopied = [...taskData];
    const newData = taskDataCopied.filter((item) => item.id !== id);
    this.setState({ taskData: newData });
  };
  render() {
    const { taskData } = this.state;
    const btnDel = (id) => {
      return <button className="del-task-btn" onClick={() => this.delTaskHandler(id)}>Delete</button>;
    };
    const dispData = taskData.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.completed}</td>
          <td>{btnDel(item.id)}</td>
        </tr>

      );
    });
    return (
      <Fragment>
        <Navbar />
        <table className="task-table">
          <tbody>
            {dispData}

          </tbody>
        </table>
        <button className="add-task-btn" onClick={() => this.addTaskHandler()}>Add Task</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskPage));

