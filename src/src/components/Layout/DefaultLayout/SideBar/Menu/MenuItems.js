import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ icon, title, link }) {
  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={link}>
      <FontAwesomeIcon icon={icon} />
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
