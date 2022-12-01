import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles)

function MenuItem({ value }) {
    return ( 
        <div className={cx('item-menu')}>
            <a href={value.link}>
                {value.icon} {value.title}
            </a>
        </div>
    );
}

export default MenuItem;
