import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';

import './Card.css';

class DashboardCard extends Component {
	render() {
		const {
			checked,
			actions,
			data,
			endpointName,
			endpointDesc,
			endpointVal
		} = this.props;

		return (
			<Card className="dashboard-card">
				<CardHeader title={endpointName} subtitle={endpointVal} />
				<CardMedia>
					<Doughnut data={data} />
				</CardMedia>
				<CardTitle title="Card title"/>
				<CardText>{endpointDesc}
				<Checkbox label="To check" checked={checked} onCheck={actions !== null ? actions.check : null} />
	  			{ checked ? <h2>Done</h2> : null }
				</CardText>
			</Card>
		);
	}
}

DashboardCard.propTypes = {
  checked: PropTypes.bool,
  actions: PropTypes.object,
  data: PropTypes.object,
  endpointName: PropTypes.string,
  endpointDesc: PropTypes.string,
  endpointVal: PropTypes.string
};

export default DashboardCard;