import React, { Component } from "react";
import Table from "./Table";

export default class Form extends Component {
  state = {
    values: {
      id: "",
      fullName: "",
      phone: "",
      email: "",
    },
    errors: {
      id: "",
      fullName: "",
      phone: "",
      email: "",
    },
    formState: true,
    isDisabled: true,
    arrStudent: [],
  };

  getValues = (event) => {
    const { id, value } = event.target;
    let newValue = this.state.values;
    let newError = this.state.errors;
    let isDisabled = true;
    let dataType = event.target.getAttribute("data-type");

    newValue[id] = value;
    // todo: check null
    if (newValue[id] === "") {
      newError[id] = "This field must not be empty";
    } else {
      newError[id] = "";
      // todo: check advances
      switch (dataType) {
        case "name":
          const nameRegex = /^[a-zA-z\s]+$/;
          if (!newValue[id].match(nameRegex)) {
            newError[id] = "Name can only contain letters and spaces";
          }
          break;
        case "phone":
          const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
          if (!phoneRegex.test(newValue[id])) {
            newError[id] = "Phone number is not valid";
          }
          break;
        case "email":
          const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
          if (!emailRegex.test(newValue[id])) {
            newError[id] = "Email address is not valid";
          }
          break;
        default:
          for (let item of this.state.arrStudent) {
            if (newValue[id] === item.id) {
              newError[id] = "This ID existed. ID must be unique";
            }
          }
          break;
      }
    }

    for (let item in this.state.errors) {
      if (this.state.errors[item] === "" && this.state.values[item] !== "") {
        isDisabled = false;
      } else {
        isDisabled = true;
        this.setState({
          ...this.state,
          values: newValue,
          errors: newError,
          isDisabled: isDisabled,
        });
        return;
      }
    }

    this.setState({
      ...this.state,
      values: newValue,
      errors: newError,
      isDisabled: isDisabled,
    });
  };

  // todo: add students
  addStudent = (event) => {
    event.preventDefault();
    let newStudent = this.state.values;
    let newArrStudent = this.state.arrStudent;
    newArrStudent.push(newStudent);
    this.setState({
      ...this.state,
      values: {
        id: "",
        fullName: "",
        phone: "",
        email: "",
      },
      isDisabled: true,
      arrStudent: newArrStudent,
    });
  };

  // todo: update Array State
  updateArrState = (newArr) => {
    this.setState({
      ...this.state,
      arrStudent: newArr,
    });
  };

  // todo: update state when editing
  updateStateEdit = (formState, newValue) => {
    this.setState({
      ...this.state,
      values: { ...newValue },
      formState: formState,
    });
  };

  // todo: Update new Information
  updateStudent = (event) => {
    event.preventDefault();
    let newInfo = this.state.values;
    let index = this.state.arrStudent.findIndex(
      (item) => item.id === newInfo.id
    );
    let newArr = this.state.arrStudent;
    newArr[index] = newInfo;
    this.setState({
      ...this.state,
      values: {
        id: "",
        fullName: "",
        phone: "",
        email: "",
      },
      formState: true,
      isDisabled: true,
      arrStudent: newArr,
    });
  };

  render() {
    const { id, fullName, phone, email } = this.state.errors;
    return (
      <>
        <h1 className="text-white bg-black p-4 mb-0 py-5">
          Thông tin sinh viên
        </h1>

        <form className="container-fluid p-4">
          <div className="row">
            {/* Mã sv*/}
            <div className="mb-3 col-md-6">
              <label htmlFor="id" className="form-label">
                Mã SV
              </label>
              <input
                type="text"
                className="form-control"
                name="id"
                id="id"
                onChange={this.getValues}
                value={this.state.values.id}
                disabled={!this.state.formState}
              />
              <p className="text-danger fst-italic mt-2 fw-semibold">{id}</p>
            </div>

            {/* Họ tên */}
            <div className="mb-3 col-md-6">
              <label htmlFor="fullName" className="form-label">
                Họ tên
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="fullName"
                onChange={this.getValues}
                data-type="name"
                value={this.state.values.fullName}
              />
              <p className="text-danger fst-italic mt-2 fw-semibold">
                {fullName}
              </p>
            </div>

            {/* Số điện thoại */}
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Số điện thoại
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                onChange={this.getValues}
                data-type="phone"
                value={this.state.values.phone}
              />
              <p className="text-danger fst-italic mt-2 fw-semibold">{phone}</p>
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                onChange={this.getValues}
                data-type="email"
                value={this.state.values.email}
              />
              <p className="text-danger fst-italic mt-2 fw-semibold">{email}</p>
            </div>
          </div>

          {/* Button */}
          {this.state.formState ? (
            <button
              type="submit"
              className="btn btn-success text-white py-2 px-3"
              disabled={this.state.isDisabled}
              onClick={this.addStudent}
            >
              Thêm sinh viên
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-warning text-white py-2 px-3"
              disabled={this.state.isDisabled}
              onClick={this.updateStudent}
            >
              Cập nhật sinh viên
            </button>
          )}
        </form>

        <Table
          listStudent={this.state.arrStudent}
          updateArrState={this.updateArrState}
          updateStateEdit={this.updateStateEdit}
        />
      </>
    );
  }
}
