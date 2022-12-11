import classNames from "classnames/bind";
import styles from "./ShowProduct.module.scss";
import Button from "src/components/Button";
const cx = classNames.bind(styles)

function RowItem({ id, image, name, category, price, count }) {
    return (
        <tr>
            <td><input type="checkbox" name="" id="" /></td>
            <td><img src={image} alt={image} className={cx('img-product')} /></td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price} đ</td>
            <td>{count}</td>
            <td className={cx('func-btn')}>
                <Button
                    type="update-btn"
                    link={"\\product\\update\\" + id}
                    name="Cập nhật" />
                <Button
                    type="delete-btn"
                    link={"\\product\\delete\\" + id}
                    name="Xóa" />
            </td>
        </tr>

    );
}

export default RowItem;