import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';

import './Dashboard.css';
import DashboardActions from './DashboardActions';
import DashboardCardList from '../dashboard-card/CardList';

const mapStateToProps = (state) => {
  console.log('see state', state);
  return ({
    cards: state.newEndpoint.cards,
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(DashboardActions, dispatch),
});

class Dashboard extends Component {
  render() {
    const {
      cards,
      history,
    } = this.props;
    return (
      <div className="dashboard-container">
        <DashboardCardList items={cards} />
        { cards.length === 0 &&
        <Card>
          <CardHeader title="No Endpoints" subtitle="Start monitoring now" />
          <CardContent>
          Click on the plus icon to add
          </CardContent>
          <CardActions style={{ textAlign: 'right' }}>
            <Button variant="raised" color="primary" primary="true" onClick={() => history.push('/new')}>
            Add
            </Button>
          </CardActions>
        </Card>
        }
      </div>
    );
  }
}

Dashboard.defaultProps = {
  cards: null,
  history: {},
};

Dashboard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape({}),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
