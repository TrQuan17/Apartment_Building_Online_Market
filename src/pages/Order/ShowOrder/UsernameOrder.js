import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./ShowOrder.module.scss";

const cx = classNames.bind(styles)

function UsernameOrder({ username, idOrder, children }) {
    return (
        <div className={cx('item-order')}>
            <div className={cx('info-user-order')}>
                <div classNames={cx('username')}>
                    <FontAwesomeIcon icon={faCircleUser} className={cx('icon-user')}/>
                    {username}
                </div>
                <div className={cx('id-order')}>Mã đơn hàng {idOrder}</div>
            </div>
            <table className={cx('table-order')}>
                <tr>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá bán</th>
                    <th>Số lượng</th>
                    <th>Tổng thanh toán</th>
                </tr>
                {children}
            </table>
        </div>
    );
}

export default UsernameOrder;