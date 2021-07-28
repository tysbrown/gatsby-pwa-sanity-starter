import React from 'react';
import { Link } from 'components';

const Button = (props) => {
  const { to, title, children, theme = 'primary', outline } = props;
  return (
    <Link to={to} title={title || ''} className={`button ${theme} ${outline ? 'outline' : ''}`}>
      {children}
    </Link>
  );
};

export default Button;
