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
			data
		} = this.props;

		return (
			<Card className="dashboard-card">
				<CardHeader title="Endpoint" subtitle="subtitle" />
				<CardMedia>
					<Doughnut data={data} />
				</CardMedia>
				<CardTitle title="Card title"/>
				<CardText>Lorem ipsum
				<Checkbox label="To check" checked={checked} onCheck={actions.check} />
	  			{ checked ? <h2>Done</h2> : null }
				</CardText>
			</Card>
		);
	}
}

DashboardCard.propTypes = {
  checked: PropTypes.bool,
  actions: PropTypes.object,
  data: PropTypes.object
};

export default DashboardCard;