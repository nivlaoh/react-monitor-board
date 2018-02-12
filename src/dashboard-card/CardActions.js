import types from './CardTypes';

const closeMenu = () => ({
  type: types.CLOSE_MENU,
});

const openMenu = (id, e) => ({
  type: types.OPEN_MENU,
  id,
  anchorEl: e.currentTarget,
});

const deleteCard = (id) => {
  return ({
    type: types.DELETE_CARD,
    id,
  });
};

export default {
  openMenu,
  closeMenu,
  deleteCard,
};
