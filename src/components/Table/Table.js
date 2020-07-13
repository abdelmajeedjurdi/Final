import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { Checkbox } from '@material-ui/core';

import { Button } from '@material-ui/core';
import Typography from '../../views/Typography/Typography';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class TablePage extends React.Component{
  state={
   columns: [
    {
      label: 'Table',
      field: 'id',
      sort: 'asc'
    },
    {
      label: '10:00 am',
      field: 'first',
      sort: 'asc'
    },
    {
      label: '12:00 pm',
      field: 'asd',
      sort: 'asdfgc'
    },
    {
      label: '02:00 pm',
      field: 'laest',
      sort: 'asfgghfc'
    },
    {
      label: '04:00 pm',
      field: 'lsfgw4ast',
      sort: 'ege'
    },
    {
      label: '06:00 pm',
      field: 'wrgw',
      sort: 'w4tw'
    },
    {
      label: '08:00 pm',
      field: 'lafghfst',
      sort: 'asrggerc'
    },
    {
      label: '10:00 pm',
      field: 'lawrwst',
      sort: 'wrt'
    },
    {
      label: '12:00 am',
      field: 'lawrwst',
      sort: 'wrt'
    },
    {
      label: '02:00 am',
      field: 'lawrwst',
      sort: 'wrt'
    },
    {
      label: 'Coast',
      field: 'dsdsds',
      sort: 'wrt'
    },
    {
      label: 'Request',
      field: 'dswqe',
      sort: 'asc'
    }
  ],

  rows_rounded_btn :[
    {
      'id': 1,
      'first': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'last': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'handle': <Checkbox color="default" rounded size="sm" ></Checkbox>,
      'asd': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'laest': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lsfgw4ast': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'wrgw': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lafghfst': <Checkbox color="default" rounded size="sm"> </Checkbox>,
      'lawrwst': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'dsdsds': <text color="default" rounded size="sm">10$</text>,
      'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" onClick={()=>this.setState({display:!this.state.display})} Link to="/Table" > Request</MDBBtn>,
    },
    {
      'id': 2,
      'first': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'last': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'handle': <Checkbox color="default" rounded size="sm" ></Checkbox>,
      'asd': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'laest': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lsfgw4ast': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'wrgw': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lafghfst': <Checkbox color="default" rounded size="sm"> </Checkbox>,
      'lawrwst': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'dsdsds': <text color="default" rounded size="sm">10$</text>,
      'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" onClick={()=>this.setState({display:!this.state.display})} Link to="/Table"> Request</MDBBtn>,
    },
    {
      'id': 3,
      'first': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'last': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'handle': <Checkbox color="default" rounded size="sm" ></Checkbox>,
      'asd': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'laest': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lsfgw4ast': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'wrgw': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lafghfst': <Checkbox color="default" rounded size="sm"> </Checkbox>,
      'lawrwst': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'dsdsds': <text color="default" rounded size="sm">10$</text>,
      'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" onClick={()=>this.setState({display:!this.state.display})} Link to="/Table"> Request</MDBBtn>,
    },
    {
      'id': 4,
      'first': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'last': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'handle': <Checkbox color="default" rounded size="sm" ></Checkbox>,
      'asd': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'laest': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lsfgw4ast': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'wrgw': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lafghfst': <Checkbox color="default" rounded size="sm"> </Checkbox>,
      'lawrwst': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'dsdsds': <text color="default" rounded size="sm">10$</text>,
      'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" onClick={()=>this.setState({display:!this.state.display})}Link to="/Table"> Request</MDBBtn>,
    },
    {
      'id': 5,
      'first': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'last': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'handle': <Checkbox color="default" rounded size="sm" ></Checkbox>,
      'asd': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'laest': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lsfgw4ast': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'wrgw': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lafghfst': <Checkbox color="default" rounded size="sm"> </Checkbox>,
      'lawrwst': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'dsdsds': <text color="default" rounded size="sm">10$</text>,
      'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" onClick={()=>this.setState({display:!this.state.display})}Link to="/Table"> Request</MDBBtn>,
    },
    {
      'id': 6,
      'first': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'last': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'handle': <Checkbox color="default" rounded size="sm" ></Checkbox>,
      'asd': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'laest': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lsfgw4ast': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'wrgw': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lafghfst': <Checkbox color="default" rounded size="sm"> </Checkbox>,
      'lawrwst': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'dsdsds': <text color="default" rounded size="sm">10$</text>,
      'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" onClick={()=>this.setState({display:!this.state.display})}Link to="/Table"> Request</MDBBtn>,
    },
    {
      'id': 7,
      'first': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'last': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'handle': <Checkbox color="default" rounded size="sm" ></Checkbox>,
      'asd': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'laest': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lsfgw4ast': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'wrgw': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'lafghfst': <Checkbox color="default" rounded size="sm"> </Checkbox>,
      'lawrwst': <Checkbox color="default" rounded size="sm"></Checkbox>,
      'dsdsds': <text color="default" rounded size="sm">10$</text>,
      'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" onClick={()=>this.setState({display:!this.state.display})}Link to="/Table"> Request</MDBBtn>,
    },
  ],
  display:false
}

render(){
  return(
    <>
{this.state.display && <Typography />}
    <MDBTable btn>
      <MDBTableHead columns={this.state.columns} />
      <MDBTableBody rows={this.state.rows_rounded_btn} />
    </MDBTable>
    </>
  );
}
};

export default TablePage;