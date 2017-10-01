import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Dashboard.css';
import DashboardActions from './DashboardActions';
import DashboardCard from '../dashboard-card/Card';

const mapStateToProps = state => ({
	cards: [
		{
			checked: true,
			actions: state.data,
			data: state.data
		},
		{
			checked: false,
			actions: state.data,
			data: state.data
		}
	]
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(DashboardActions, dispatch)
});

class Dashboard extends Component {
	render() {
		/*const {
			checked,
			actions
		} = this.props;*/

		return (
			<div className="dashboard-container">
				{this.props.cards.map((row, i) =>
					<DashboardCard key={i} {...row} />
				)}
			</div>
		);
	}
}

Dashboard.propTypes = {
  cards: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);