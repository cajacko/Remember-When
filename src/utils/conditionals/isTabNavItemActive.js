// @flow

const isTabNavItemActive = ({ pathname }) => ({ text }) => {
  switch (text) {
    case 'Home':
      if (pathname === '/' || pathname.includes('/home')) return true;
      break;
    case 'Add':
      if (pathname === '/new-post') return true;
      break;
    default:
      return false;
  }

  return false;
};

export default isTabNavItemActive;
