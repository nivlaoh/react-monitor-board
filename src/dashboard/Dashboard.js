import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Dashboard.css';
import DashboardActions from './DashboardActions';
import DashboardCard from '../dashboard-card/Card';

const mapStateToProps = state => {
	console.log('see state', state);
	return ({
		endpointName: state.newEndpoint.endpointName,
		endpointVal: state.newEndpoint.endpointVal,
		cards: state.newEndpoint.cards
	});
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(DashboardActions, dispatch)
});

class Dashboard extends Component {
	render() {

		return (
			<div className="dashboard-container">
				{this.props.cards.map((row, i) =>
					<DashboardCard key={i} {...row} {...this.props} />
				)}
			</div>
		);
	}
}

Dashboard.propTypes = {
  cards: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);