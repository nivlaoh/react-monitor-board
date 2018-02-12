import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { createMuiTheme, withStyles } from 'material-ui/styles';

import './App.css';
import Dashboard from './dashboard/Dashboard';
import DashboardActions from './dashboard/DashboardActions';
import NewEndpoint from './new-endpoint/NewEndpoint';

const mapStateToProps = state => ({
  appName: state.reducer.appName,
  open: state.reducer.open,
  cards: state.newEndpoint.cards,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(DashboardActions, dispatch),
});

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
  },
};

const DashboardPage = props => (
  <Dashboard cards={props.cards} />
);

DashboardPage.propTypes = {
  cards: PropTypes.array.isRequired,
};

const NewEndpointPage = props => (
  <NewEndpoint id={props.id} />
);

class App extends Component {
  render() {
    console.log(this.props);
    const {
      appName,
      open,
      actions,
      classes,
    } = this.props;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="App">
          <AppBar position="static" title={appName}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={actions.open}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {appName}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer docked="false" open={open} onClose={actions.open}>
            <List component="nav" onClick={actions.open} style={{ width: '250px' }}>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/new">
                <ListItemText primary="Add Endpoint" />
              </ListItem>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/" render={DashboardPage} />
            <Route path="/new" render={NewEndpointPage} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.defaultProps = {
  open: false,
};

App.propTypes = {
  appName: PropTypes.string.isRequired,
  open: PropTypes.bool,
  cards: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App)));
