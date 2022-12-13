import classNames from "classnames/bind";
import styles from "./ShowOrder.module.scss";

const cx = classNames.bind(styles)

function RowItem({ image, name, price , count }) {
    return (
        <tr>
            <td><img src={image} alt={image} className={cx('img-product')} /></td>
            <td>{name}</td>
            <td>{price} đ</td>
            <td>{count}</td>
            <td>{price * count}</td>
        </tr>
    );
}

export default RowItem;