import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, title = '' }) {
  return (
    <div className={cx('wrapper')}>
      <h4 className={cx('title-list')}>{title}</h4>
      <nav>{children}</nav>
    </div>
  );
}

export default Menu;
