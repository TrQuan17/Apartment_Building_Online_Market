import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles)

function MenuItem({ value }) {
    return ( 
        <div className={cx('item-menu')}>
            <Link to={value.link}>
                <p>{value.icon} {value.title}</p>
            </Link>
            
        </div>
    );
}

export default MenuItem;
