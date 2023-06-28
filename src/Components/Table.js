import React, { Component } from "react";

export default class Table extends Component {
  fetchData = (id) => {
    let item = this.props.listStudent.find((item) => item.id === id);
    this.props.updateStateEdit(false, item);
  };

  deleteStudent = (id) => {
    let index = this.props.listStudent.findIndex((item) => item.id === id);
    let newArr = this.props.listStudent;
    newArr.splice(index, 1);
    this.props.updateArrState(newArr);
  };

  render() {
    return (
      <>
        <div className="p-4 mb-2 d-flex justify-content-end align-items-center">
          <input
            id="search_input"
            type="text"
            placeholder="Enter search key..."
            className="py-2 px-3 me-2"
          />
          <button id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="bg-black text-white text-center">
                <th scope="col">Mã SV</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.listStudent.map((item, index) => {
                const { id, fullName, phone, email } = item;
                return (
                  <tr className="text-center" key={index}>
                    <td valign="middle">{id}</td>
                    <td valign="middle">{fullName}</td>
                    <td valign="middle">{phone}</td>
                    <td valign="middle">{email}</td>
                    <td valign="middle">
                      <div>
                        <button
                          className="btn btn-warning me-3"
                          onClick={() => {
                            this.fetchData(id);
                          }}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.deleteStudent(id);
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
