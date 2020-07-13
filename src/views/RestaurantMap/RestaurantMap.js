// // import React from "react";
// // // react plugin for creating charts
// // import ChartistGraph from "react-chartist";
// // // @material-ui/core
// // import { makeStyles } from "@material-ui/core/styles";
// // import Icon from "@material-ui/core/Icon";
// // // @material-ui/icons
// // import Store from "@material-ui/icons/Store";
// // import Warning from "@material-ui/icons/Warning";
// // import DateRange from "@material-ui/icons/DateRange";
// // import LocalOffer from "@material-ui/icons/LocalOffer";
// // import Update from "@material-ui/icons/Update";
// // import ArrowUpward from "@material-ui/icons/ArrowUpward";
// // import AccessTime from "@material-ui/icons/AccessTime";
// // import Accessibility from "@material-ui/icons/Accessibility";
// // import BugReport from "@material-ui/icons/BugReport";
// // import Code from "@material-ui/icons/Code";
// // import Cloud from "@material-ui/icons/Cloud";
// // // core components
// // import GridItem from "components/Grid/GridItem.js";
// // import GridContainer from "components/Grid/GridContainer.js";
// // import Table from "components/Table/Table.js";
// // import Tasks from "components/Tasks/Tasks.js";
// // import CustomTabs from "components/CustomTabs/CustomTabs.js";
// // import Danger from "components/Typography/Danger.js";
// // import Card from "components/Card/Card.js";
// // import CardHeader from "components/Card/CardHeader.js";
// // import CardIcon from "components/Card/CardIcon.js";
// // import CardBody from "components/Card/CardBody.js";
// // import CardFooter from "components/Card/CardFooter.js";
// // import imga from "../../assets/img/restmap.png";


// // import { bugs, website, server } from "variables/general.js";

// // import {
// //   dailySalesChart,
// //   emailsSubscriptionChart,
// //   completedTasksChart
// // } from "variables/charts.js";

// // import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// // const useStyles = makeStyles(styles);
// // var ImageMapper = require('react-image-mapper');
// // export default function RestaurantView() {
// //   const classes = useStyles();
// //   return (
// //     <div>
// // <img src={imga} width="100%" height="60%"/>


// //     </div>
// //   );
// // }
// import React from "react";
// import ImageMapper from "react-image-mapper";
// import Map from "../../assets/img/restmap.png";

// class App extends React.Component {
//   state = {
//     msg:"",
//     hoveredArea:null,
//     count : 2,
//     MAP: {
//       name: "my-map",
//         areas: [
//         {
//           name: "1",
//           shape: "poly",
//           coords: [25, 33, 50, 33, 50, 8, 25, 8],
//           preFillColor: "brown",
//           fillColor: "blue",
//         },
        
//       ]
//     },
//   };
//   enterArea = (area) => {
//     this.setState({ hoveredArea: area });
//   };

//   leaveArea = (area) => {
//     this.setState({ hoveredArea: null });
//   };

//   getTipPosition = (area) => {
//     return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
//   };
//   moveOnImage=(evt) =>{
// 		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
// 		this.setState({
// 			moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
// 		});
//   }
//   clickedOutside=(evt)=> {
//     const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
//     const x1 = coords.x -10;
//     const y1 = coords.y +10;
//     const x2 = coords.x +10;
//     const y2 = coords.y +10;
//     const x3 = coords.x +10;
//     const y3 = coords.y -10;
//     const x4 = coords.x -10;
//     const y4 = coords.y -10;
//     console.log(coords)
//      const area = {
//       name: this.state.count,
//       shape: "poly",
//       coords: [x1, y1, x2, y2, x3, y3, x4, y4],
//       preFillColor: "brown",
//       fillColor: "blue",
//     } 
//     const MAP = this.state.MAP;
//     MAP.areas.push(area);
// 		this.setState({
//       msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`,
//       MAP,
//       count: this.state.count +1
// 		});
//   }
//   clicked=(area)=> {
    
// 		this.setState({
// 			msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
// 				area.coords
// 			)} !`
// 		});
// 	}
//   moveOnArea=(area, evt)=> {
// 		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
// 		this.setState({
// 			moveMsg: `You moved on ${area.shape} ${
// 				area.name
// 			} at coords ${JSON.stringify(coords)} !`
// 		});
// 	}
//   render() {
    
//     return (
      
//       <div className="container">
//         <h2>{this.state.msg}</h2>
//         <ImageMapper
//           src={Map}
//           map={this.state.MAP}
//           width={800}
//           onClick={(area) => this.clicked(area)}
//           onMouseEnter={(area) => this.enterArea(area)}
//           onMouseLeave={(area) => this.leaveArea(area)}
//           onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
//           onImageClick={(evt) => this.clickedOutside(evt)}
//           onImageMouseMove={(evt) => this.moveOnImage(evt)}

//         />
//         {this.state.hoveredArea && (
//           <span
//             className="tooltip"
//             style={{ ...this.getTipPosition(this.state.hoveredArea) }}
//           >
//             {this.state.hoveredArea && this.state.hoveredArea.name}
//           </span>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import ImageMapper from "react-image-mapper";
import {withRouter} from 'react-router-dom'
import Map from "../../assets/img/restmap.png";
import Table from '../../components/Table/Table'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
class App extends React.Component {
  state = {
    msg: "",
    hoveredArea: null,
    count: 1,
    MAP: {
      name: "my-map",
      areas: [
        // {
        //   name: "1",
        //   shape: "poly",
        //   coords: [25, 33, 50, 33, 50, 8, 25, 8],
        //   preFillColor: "brown"  ,
        //   fillColor: "blue",
         
        // },
        {
          name: "2",
          shape: "poly",
          coords: [150,122,186,122,186,102,150,102],
          preFillColor: "brown"  ,
          fillColor: "blue", 
        },
        {
          name: "3",
          shape: "poly",
          coords: [203,122,239,122,239,102,203,102],
          preFillColor: "brown"  ,
          fillColor: "blue", 
        },
          {
          name: "4",
          shape: "poly",
          coords: [267,122,303,122,303,102,267,102],
          preFillColor: "brown"  ,
          fillColor: "blue", 
        },
        {
          name: "5",
          shape: "poly",
          coords: [332,122,368,122,368,102,332,102],
          preFillColor: "brown"  ,
          fillColor: "blue", 
        }, 
         {
          name: "6",
          shape: "poly",
          coords: [396,122,432,122,432,102,396,102],
          preFillColor: "brown"  ,
          fillColor: "blue", 
        },
        {
          name: "7",
          shape: "poly",
          coords: [283,280,383,280,383,260,283,260],
          preFillColor: "brown"  ,
          fillColor: "blue", 
        },
        {
          name: "8",
          shape: "poly",
          coords: [416,278,516,278,516,258,416,258],
          preFillColor: "brown"  ,
          fillColor: "blue", 
        },
        {
          name: "6",
          shape: "poly",
          coords: [551,282,651,282,651,262,551,262],
          preFillColor: "brown"  ,
          fillColor: "blue", 
        },
      ]
    },
  };
  enterArea = (area) => {
    this.setState({ hoveredArea: area });
  };

  leaveArea = (area) => {
    this.setState({ hoveredArea: null });
  };

  getTipPosition = (area) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };
  moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
    });
  }

  inside = (point, vs) => {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point[0], y = point[1];

    var inside = false;
    

    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0], yi = vs[i][1];
      var xj = vs[j][0], yj = vs[j][1];
      

      var intersect = ((yi > y) != (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }

    return inside;
  };
  clickedOutside = (evt) => {

    const clickables_tables = [
      {
        coords: {
          x1: 285 - 18,
          y1: 112 + 10,
          x2: 285 + 18,
          y2: 112 + 10,
          x3: 285 + 18,
          y3: 112 - 10,
          x4: 285 - 18,
          y4: 112 - 10,
        },
        id: 1,
   

      },
      {
        coords: {
          x1: 414 - 18,
          y1: 112 + 10,
          x2: 414 + 18,
          y2: 112 + 10,
          x3: 414 + 18,
          y3: 112 - 10,
          x4: 414 - 18,
          y4: 112 - 10,
        },
        id: 2,

      },
      {
        coords: {
          x1: 350 - 18,
          y1: 112 + 10,
          x2: 350 + 18,
          y2: 112 + 10,
          x3: 350 + 18,
          y3: 112 - 10,
          x4: 350 - 18,
          y4: 112 - 10,
        },
        id: 3,

      },
      {
        coords: {
          x1: 168 - 18,
          y1: 112 + 10,
          x2: 168 + 18,
          y2: 112 + 10,
          x3: 168 + 18,
          y3: 112 - 10,
          x4: 168 - 18,
          y4: 112 - 10,
        },
        id: 4,

      },
      {
        coords: {
          x1: 221 - 18,
          y1: 112 + 10,
          x2: 221 + 18,
          y2: 112 + 10,
          x3: 221 + 18,
          y3: 112 - 10,
          x4: 221 - 18,
          y4: 112 - 10,
        },
        id: 5,

      },
      {
        coords: {
          x1: 166 - 18,
          y1: 158 + 10,
          x2: 166 + 18,
          y2: 158 + 10,
          x3: 166 + 18,
          y3: 158 - 10,
          x4: 166 - 18,
          y4: 158 - 10,
        },
        id: 6,
      },
      {
        coords: {
          x1: 221 - 18,
          y1: 158 + 10,
          x2: 221 + 18,
          y2: 158 + 10,
          x3: 221 + 18,
          y3: 158 - 10,
          x4: 221 - 18,
          y4: 158 - 10,
        },
        id: 7,
      },
      {
        coords: {
          x1: 285 - 18,
          y1: 155 + 10,
          x2: 285 + 18,
          y2: 155 + 10,
          x3: 285 + 18,
          y3: 155 - 10,
          x4: 285 - 18,
          y4: 155 - 10,
        },
        id: 8,
      },
      {
        coords: {
          x1: 350 - 18,
          y1: 158 + 10,
          x2: 350 + 18,
          y2: 158 + 10,
          x3: 350 + 18,
          y3: 158 - 10,
          x4: 350 - 18,
          y4: 158 - 10,
        },
        id: 9,
      },
      {
        coords: {
          x1: 415 - 18,
          y1: 158 + 10,
          x2: 415 + 18,
          y2: 158 + 10,
          x3: 415 + 18,
          y3: 158 - 10,
          x4: 415 - 18,
          y4: 158 - 10,
        },
        id: 9,
      },
      {
        coords: {
          x1: 170 - 18,
          y1: 208 + 10,
          x2: 170 + 18,
          y2: 208 + 10,
          x3: 170 + 18,
          y3: 208 - 10,
          x4: 170 - 18,
          y4: 208 - 10,
        },
        id: 10,
      },
      {
        coords: {
          x1: 220 - 18,
          y1: 207 + 10,
          x2: 220 + 18,
          y2: 207 + 10,
          x3: 220 + 18,
          y3: 207 - 10,
          x4: 220 - 18,
          y4: 207 - 10,
        },
        id: 11,
      },
      {
        coords: {
          x1: 285 - 18,
          y1: 208 + 10,
          x2: 285 + 18,
          y2: 208 + 10,
          x3: 285 + 18,
          y3: 208 - 10,
          x4: 285 - 18,
          y4: 208 - 10,
        },
        id: 12,
      },
      {
        coords: {
          x1: 350 - 18,
          y1: 208 + 10,
          x2: 350 + 18,
          y2: 208 + 10,
          x3: 350 + 18,
          y3: 208 - 10,
          x4: 350 - 18,
          y4: 208 - 10,
        },
        id: 13,
      },
      {
        coords: {
          x1: 416 - 18,
          y1: 208 + 10,
          x2: 416 + 18,
          y2: 208 + 10,
          x3: 416 + 18,
          y3: 208 - 10,
          x4: 416 - 18,
          y4: 208 - 10,
        },
        id: 14,
      },

      {
        coords: {
          x1: 333 - 50,
          y1: 270 + 10,
          x2: 333 + 50,
          y2: 270 + 10,
          x3: 333 + 50,
          y3: 270 - 10,
          x4: 333 - 50,
          y4: 270 - 10,
        },
        id: 15,
      },
      {
        coords: {
          x1: 466 - 50,
          y1: 268 + 10,
          x2: 466 + 50,
          y2: 268 + 10,
          x3: 466 + 50,
          y3: 268 - 10,
          x4: 466 - 50,
          y4: 268 - 10,
        },
        id: 16,
      },
      {
        coords: {
          x1: 601 - 50,
          y1: 272 + 10,
          x2: 601 + 50,
          y2: 272 + 10,
          x3: 601 + 50,
          y3: 272 - 10,
          x4: 601 - 50,
          y4: 272 - 10,
        },
        id: 17,
      },
      {
        coords: {
          x1: 336 - 50,
          y1: 340 + 10,
          x2: 336 + 50,
          y2: 340 + 10,
          x3: 336 + 50,
          y3: 340 - 10,
          x4: 336 - 50,
          y4: 340 - 10,
        },
        id: 18,
      },
      {
        coords: {
          x1: 365 - 50,
          y1: 340 + 10,
          x2: 365 + 50,
          y2: 340 + 10,
          x3: 365 + 50,
          y3: 340 - 10,
          x4: 365 - 50,
          y4: 340 - 10,
        },
        id: 19,
      },
      {
        coords: {
          x1: 467 - 50,
          y1: 340 + 10,
          x2: 467 + 50,
          y2: 340 + 10,
          x3: 467 + 50,
          y3: 340 - 10,
          x4: 467 - 50,
          y4: 340 - 10,
        },
        id: 20,
      },
      {
        coords: {
          x1: 603 - 50,
          y1: 340 + 10,
          x2: 603 + 50,
          y2: 340 + 10,
          x3: 603 + 50,
          y3: 340 - 10,
          x4: 603 - 50,
          y4: 340 - 10,
        },
        id: 21,
      },
      
    ]

    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
  
    console.log(coords);
    const clicked_tables = clickables_tables.filter(clickable_table => {
      
      const _coords = clickable_table.coords;
      debugger;
      const area = [[_coords.x1, _coords.y1], [_coords.x2, _coords.y2], [_coords.x3, _coords.y3], [_coords.x4, _coords.y4]];

      if (this.inside([coords.x, coords.y], area)) {
        return true
      }

      return false;
    })

    const MAP = this.state.MAP;
    if (clicked_tables.length > 0) {
      const area = {
        name: this.state.count,
        shape: "poly",
        coords: [clicked_tables[0].coords.x1, clicked_tables[0].coords.y1, clicked_tables[0].coords.x2, clicked_tables[0].coords.y2, clicked_tables[0].coords.x3, clicked_tables[0].coords.y3, clicked_tables[0].coords.x4, clicked_tables[0].coords.y4],
        preFillColor: "brown",
        fillColor: "blue",
      }
      debugger;
      MAP.areas.push(area);
      // this.props.history.push(`/tablelist/${clicked_tables[0].id}`)


    }

    // const area = {
    //   name: this.state.count,
    //   shape: "poly",
    //   coords: [x1, y1, x2, y2, x3, y3, x4, y4],
    //   preFillColor: "brown",
    //   fillColor: "blue",
    // }

    // MAP.areas.push(area);


    this.setState({
      msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`,
      MAP,
      count: this.state.count + 1
    });
  }
  clicked = (area) => {

    this.setState({
      msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
   
  }
  moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on ${area.shape} ${
        area.name
        } at coords ${JSON.stringify(coords)} !`
    });
  }
  render() {
    return (
      <Card>
      <CardHeader color="primary">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <form>
                <div className="grey-text">
      <div className="container">
        <h2>{this.state.msg}</h2>
        <ImageMapper
          src={Map}
          map={this.state.MAP}
          width={800}
          onClick={(area) => this.clicked(area)}
          onMouseEnter={(area) => this.enterArea(area)}
          onMouseLeave={(area) => this.leaveArea(area)}
          onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
          onImageClick={(evt) => this.clickedOutside(evt)}
          onImageMouseMove={(evt) => this.moveOnImage(evt)}
        />
        {this.state.hoveredArea &&(
          <span
            className="tooltip"
            style={{ ...this.getTipPosition(this.state.hoveredArea) }}
          >
            {this.state.hoveredArea && this.state.hoveredArea.name}
          </span>
        )
        }
      </div>
      </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
 
      </CardHeader>
      
    </Card>
    );
  }
}

export default withRouter(App);
