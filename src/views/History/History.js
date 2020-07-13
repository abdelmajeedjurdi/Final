import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable = () => {
  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Time</th>
          <th>Table Number</th>
          <th>email</th>
          <th>Status</th>


        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>2/2/2020</td>
          <td>02:00 pm</td>
          <td>3</td>
          <td>Otto@gmail.com</td>
          <td>confirmed</td>
        </tr>
        <tr>
        <td>2</td>
          <td>aaa</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>confirmed</td>
        </tr>
        <tr>
        <td>3</td>
          <td>aaa</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>requested</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;