import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "src/config";
import styles from "./Header.module.scss";
import mainLogo from "src/assets/image/logo.png";
import Menu from "src/components/Popper/Menu";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleUser,
    faRightFromBracket,
    faList
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faCircleUser} />,
        title: 'Tài khoản',
        link: config.routes.profile
    },
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng xuất',
        link: config.routes.logout
    }
]

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <Link to={config.routes.product}>
                    <img src={mainLogo} alt="" srcset="" />
                </Link>

                <div className={cx('title')}>
                    <h4>KÊNH NGƯỜI BÁN</h4>
                </div>
            </div>

            <div className={cx('search')}>
                <input type="text" name=""
                    placeholder="Tìm kiếm sản phẩm hoặc đơn hàng ..."
                    spellCheck={false} />

                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            <div className={cx('info')}>
                <FontAwesomeIcon icon={faCircleUser} className={cx('avatar')} />
                <h4 className={cx('name-shop')}>Trung Quân</h4>
                <Menu
                    menu_items={MENU_ITEMS} >
                    <button className={cx('btn-more')}>
                        <FontAwesomeIcon icon={faList} />
                    </button>
                </Menu>

            </div>

        </div>
    </header>;
}

export default Header;