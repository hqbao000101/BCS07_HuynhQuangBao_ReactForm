import React, { Component } from "react";

export default class Form extends Component {
  state = {
    formState: true,
  };

  render() {
    return (
      <>
        <h1 className="text-white bg-dark p-4 mb-0">Thông tin sinh viên</h1>

        <form className="container-fluid p-4">
          <div className="row">
            {/* Mã sv*/}
            <div className="mb-3 col-md-6">
              <label htmlFor="studentID" className="form-label">
                Mã SV
              </label>
              <input
                type="text"
                className="form-control"
                name="id"
                id="studentID"
              />
            </div>

            {/* Họ tên */}
            <div className="mb-3 col-md-6">
              <label htmlFor="studentName" className="form-label">
                Họ tên
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="studentName"
              />
            </div>

            {/* Số điện thoại */}
            <div className="mb-3 col-md-6">
              <label htmlFor="phoneNumber" className="form-label">
                Số điện thoại
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phoneNumber"
              />
            </div>

            {/* Email */}
            <div className="mb-3 col-md-6">
              <label htmlFor="emailAddress" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="emailAddress"
              />
            </div>
          </div>

          {/* Button */}
          {this.state.formState ? (
            <button
              type="submit"
              className="btn btn-success text-white py-2 px-3 mt-4"
            >
              Thêm sinh viên
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-warning text-white py-2 px-3 mt-4"
            >
              Cập nhật sinh viên
            </button>
          )}
        </form>

        {this.props.children}
      </>
    );
  }
}
