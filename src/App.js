import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';
import Dashboard from './dashboard/Dashboard';
import DashboardActions from './dashboard/DashboardActions';
import NewEndpoint from './new-endpoint/NewEndpoint';

const mapStateToProps = state => ({
  appName: state.reducer.appName,
  open: state.reducer.open,
  cards: state.newEndpoint.cards
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(DashboardActions, dispatch)
});

const muiTheme = getMuiTheme({
  palette: {
  },
  appBar: {
  }
});

const DashboardPage = (props) => {
  return (
    <Dashboard cards={props.cards}/>
  );
}

const NewEndpointPage = (props) => {
  return (
    <NewEndpoint cards={props.cards}/>
  );
}

class App extends Component {

  render() {
    console.log(this.props);
    const {
      appName,
      open,
      actions
    } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar title={appName} onLeftIconButtonTouchTap={actions.open}/>
          <Drawer docked={false} open={open} onRequestChange={actions.open}>
            <Menu onClick={actions.open}>
              <MenuItem containerElement={<Link to="/"/>}>
                Home
              </MenuItem>
              <MenuItem containerElement={<Link to="/new"/>}>
                Add Endpoint
              </MenuItem>
            </Menu>
          </Drawer>
          <Switch>
            <Route exact path="/" render={DashboardPage}/>
            <Route path="/new" render={NewEndpointPage}/>
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  appName: PropTypes.string.isRequired,
  open: PropTypes.bool,
  cards: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
