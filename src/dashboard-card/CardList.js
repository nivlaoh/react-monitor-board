import React from 'react';

import DashboardCard from './Card';

const DashboardCardList = props => (
  props.items.length > 0 && props.items.map((item, index) =>
    <DashboardCard key={index} card={item} {...item} />, this)
);

export default DashboardCardList;
