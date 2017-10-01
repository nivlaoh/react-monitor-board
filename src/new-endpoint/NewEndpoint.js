import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import './NewEndpoint.css';
import NewEndpointActions from './NewEndpointActions';

const mapStateToProps = state => ({
	endpointVal: state.endpointVal
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(NewEndpointActions, dispatch)
});

export class NewEndpoint extends Component {
	render() {
		const {
			endpointVal,
			actions
		} = this.props;
		return (
			<div className="dashboard-container">
				<Card className="dashboard-card">
					<CardHeader title="New Endpoint" subtitle="Add an endpoint to monitor" />
					<CardText>
						<TextField value={endpointVal} hintText="Enter endpoint here" floatingLabelText="Endpoint"
							onChange={actions.updateVal} />
					</CardText>
					<CardActions style={{'textAlign':'right'}}>
						<FlatButton label="Cancel" onClick={this.props.cancelNew} />
						<FlatButton primary={true} label="Add" onClick={actions.addNew.bind(this, endpointVal)} containerElement={<Link to="/"/>} />
					</CardActions>
				</Card>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEndpoint);