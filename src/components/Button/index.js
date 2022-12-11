import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles)

function Button({ link, name, type }) {
    return (
        <a href={link} className={cx('button', type)}>
            <div className={cx('name-btn')}>
                {name}
            </div>
        </a>
    );
}

export default Button;