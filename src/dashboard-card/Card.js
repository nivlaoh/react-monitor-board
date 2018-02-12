import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { Doughnut } from 'react-chartjs-2';
import Card, { CardContent } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import PropTypes from 'prop-types';

import './Card.css';
import CardActions from './CardActions';

const mapStateToProps = (state, ownProps) => {
  return ({
    open: ownProps.card.open,
    anchorEl: state.card.anchorEl,
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CardActions, dispatch),
});

class DashboardCard extends Component {
  render() {
    const {
      checked,
      actions,
      data,
      endpointName,
      endpointDesc,
      endpointVal,
      open,
      anchorEl,
      id,
      history,
    } = this.props;
    return (
      <Card className="dashboard-card">
        <div className="header-row">
          <div className="title">{endpointName} - {endpointVal}</div>
          <div>
            <IconButton onClick={() => history.push({
              pathname: '/new',
              state: { id },
            })}>
              <i className="material-icons grey600">mode_edit</i>
            </IconButton>
            <IconButton
              aria-owns={open ? 'card-menu' : null}
              aria-haspopup="true"
              onClick={e => actions.openMenu(id, e)}
            >
              <i className="material-icons grey600">more_vert</i>
            </IconButton>
            <Menu
              id="card-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={actions.closeMenu}
            >
              <MenuItem onClick={() => actions.deleteCard(id)}>
              Delete
              </MenuItem>
            </Menu>
          </div>
        </div>
        <CardContent>
          <Doughnut data={data} />
          {endpointDesc}
          <Button onClick={() => actions.deleteCard(id)}>
            Test
          </Button>
          <Checkbox checked={checked} onChange={actions !== null ? actions.check : null} />
          { checked ? <h2>Done</h2> : null }
        </CardContent>
      </Card>
    );
  }
}

DashboardCard.defaultProps = {
  id: null,
  checked: false,
  data: {},
  endpointName: null,
  endpointDesc: null,
  endpointVal: null,
  open: false,
};

DashboardCard.propTypes = {
  id: PropTypes.number,
  checked: PropTypes.bool,
  actions: PropTypes.object,
  data: PropTypes.object,
  endpointName: PropTypes.string,
  endpointDesc: PropTypes.string,
  endpointVal: PropTypes.string,
  open: PropTypes.bool,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardCard));
