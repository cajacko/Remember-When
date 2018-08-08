// @flow

const isTabNavItemActive = ({ pathname }) => ({ text }) => {
  switch (text) {
    case 'Home':
      if (pathname === '/') return true;
      break;
    case 'Add':
      if (pathname === '/post/new') return true;
      break;
    default:
      return false;
  }

  return false;
};

export default isTabNavItemActive;
