import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "src/config";
import styles from "./Header.module.scss";
import mainLogo from "src/assets/image/logo.png";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <Link to={config.routes.login}>
                    <img src={mainLogo} alt="" srcset="" />
                </Link>

                <div className={cx('title')}>
                    <h4>Kênh người bán</h4>
                </div>
            </div>

            <div className={cx('contact')}>
                <h4 className={cx('title-contact')}>Liên hệ </h4>
                <div>
                    <FontAwesomeIcon icon={faPhone} className={cx('icon')}/>
                    <FontAwesomeIcon icon={faFacebook} className={cx('icon')}/>
                    <FontAwesomeIcon icon={faTiktok} className={cx('icon')}/>
                    <FontAwesomeIcon icon={faInstagram} className={cx('icon')}/>
                </div>
            </div>

        </div>
    </header>;
}

export default Header;