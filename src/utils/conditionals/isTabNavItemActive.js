// @flow

const isTabNavItemActive = ({ pathname }) => ({ text }) => {
  switch (text) {
    case 'Home':
      if (pathname === '/') return true;
      break;
    case 'Add':
      if (pathname === '/newPost') return true;
      break;
    default:
      return false;
  }

  return false;
};

export default isTabNavItemActive;
