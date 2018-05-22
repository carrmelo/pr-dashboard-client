import React, { Component } from 'react';

import DashboardHeader from '../header/component_dashboard_header'
import DashboardContent from './component_dashboard_content'
import 'materialize-css/dist/css/materialize.min.css'

class PuReDashboard extends Component {
  render() {
    return (
      <div>
        <div style={{width:"100vw", height:"109px", backgroundColor:"#2b2d3b", position:"fixed", zIndex:"1"}}></div>
        <DashboardHeader />
        <DashboardContent />
      </div>
    );
  }
}

export default PuReDashboard;
