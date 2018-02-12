import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Route, withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

import './NewEndpoint.css';
import NewEndpointActions from './NewEndpointActions';

const mapStateToProps = (state, props) => ({
  id: props.location.state ? props.location.state.id : -1,
  endpointName: state.newEndpoint.endpointName,
  endpointVal: state.newEndpoint.endpointVal,
  endpointDesc: state.newEndpoint.endpointDesc,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NewEndpointActions, dispatch),
});

const ButtonComponent = ({ history, props }) => (
  <Button
    variant="raised"
    color="primary"
    primary="true"
    onClick={props.actions.addNew.bind(this, props, history)}
  >
    Add
  </Button>
);

const ButtonRoute = comProps => (
  <Route path="/" render={props => <ButtonComponent props={comProps} {...props} />} />
);

const styles = theme => ({
  textField: {
    marginRight: theme.spacing.unit,
    width: '45%',
  },
});

class NewEndpoint extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      endpointName,
      endpointVal,
      endpointDesc,
      actions,
      history,
      classes,
    } = this.props;
    console.log(this.props.id);
    return (
      <div className="dashboard-container">
        <Card className="dashboard-card">
          <CardHeader title="New Endpoint" subtitle="Add an endpoint to monitor" />
          <CardContent>
            <TextField
              id="endpointName"
              value={endpointName}
              placeholder="Name of endpoint"
              label="Endpoint Name"
              onChange={actions.updateVal}
              margin="normal"
              className={classes.textField}
            />
            <NumberFormat
              id="endpointVal"
              value={endpointVal}
              customInput={TextField}
              label="IP Address"
              format="###.###.###.###"
              mask="_"
              onChange={actions.updateVal}
              className={classes.textField}
            />
            <TextField
              id="endpointDesc"
              value={endpointDesc}
              placeholder="Description of endpoint"
              label="Endpoint Description"
              multiline
              rows="3"
              rowsMax="5"
              onChange={actions.updateVal}
              margin="normal"
              fullWidth
            />
          </CardContent>
          <CardActions style={{ textAlign: 'right' }}>
            <Button onClick={() => history.push('/')}>
            Cancel
            </Button>
            <ButtonRoute {...this.props} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

NewEndpoint.defaultProps = {
  id: -1,
  endpointName: null,
  endpointVal: null,
  endpointDesc: null,
};

NewEndpoint.propTypes = {
  id: PropTypes.number,
  endpointName: PropTypes.string,
  endpointVal: PropTypes.string,
  endpointDesc: PropTypes.string,
  classes: PropTypes.object,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewEndpoint)));
