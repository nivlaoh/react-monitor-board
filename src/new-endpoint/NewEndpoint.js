import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import './NewEndpoint.css';
import NewEndpointActions from './NewEndpointActions';

const mapStateToProps = state => ({
	endpointName: state.newEndpoint.endpointName,
	endpointVal: state.newEndpoint.endpointVal,
	cards: state.newEndpoint.cards,
	navigate: state.newEndpoint.navigate
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(NewEndpointActions, dispatch)
});

const Test = ({title, history, props}) => (
	<FlatButton primary={true} label="Add"
		onClick={props.actions.addNew.bind(this, props, history)} />
);

const TestComponent = (comProps) => (
	<Route path="/" render={(props) => <Test props={comProps} {...props} />} />
);

export class NewEndpoint extends Component {
	render() {
		const {
			endpointName,
			endpointVal,
			actions
		} = this.props;
		return (
			<div className="dashboard-container">
				<Card className="dashboard-card">
					<CardHeader title="New Endpoint" subtitle="Add an endpoint to monitor" />
					<CardText>
						<TextField id="endpointName" value={endpointName} hintText="Name of endpoint" floatingLabelText="Endpoint Name"
							onChange={actions.updateVal.bind(this)} />

						<TextField id="endpointVal" value={endpointVal} hintText="Endpoint IP Address" floatingLabelText="IP Address"
							onChange={actions.updateVal.bind(this)} />
					</CardText>
					<CardActions style={{'textAlign':'right'}}>
						<FlatButton label="Cancel" onClick={this.props.cancelNew} />
						<TestComponent {...this.props} />
					</CardActions>
				</Card>
			</div>
		);
	}
}

NewEndpoint.propTypes = {
	endpointName: PropTypes.string,
	endpointVal: PropTypes.string,
	cards: PropTypes.array.isRequired,
	navigate: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEndpoint);