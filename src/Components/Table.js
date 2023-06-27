import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <>
        <div className="p-4 pt-0 mb-2 d-flex justify-content-end align-items-center">
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
              <tr className="bg-dark text-white text-center">
                <th scope="col">Mã SV</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td valign="middle">001</td>
                <td valign="middle">Huỳnh Quang Bảo</td>
                <td valign="middle">0335590516</td>
                <td valign="middle">hbao592000@gmail.com</td>
                <td valign="middle">
                  <div>
                    <button className="btn btn-warning me-3">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
