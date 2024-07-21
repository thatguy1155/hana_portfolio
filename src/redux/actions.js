// src/redux/actions.js
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SWITCH_PAGE = 'SWITCH_PAGE';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const switchPage = () => ({
  type: SWITCH_PAGE,
});