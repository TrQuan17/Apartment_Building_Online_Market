import classNames from "classnames/bind";
import styles from "./ShowProduct.module.scss";
import RowItem from "./RowItem";

const cx = classNames.bind(styles)

function ShowProduct() {
    return (
        <form action="" method="POST">
            <table className={cx('table')}>
                <tr>
                    <th>Chọn</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Danh mục</th>
                    <th>Giá bán</th>
                    <th>Số lượng</th>
                    <th className={cx('func-th')}>Thao tác</th>
                </tr>
                <RowItem id={1} image="ảnh" name="Chuột máy tính"
                    category="Công nghệ"
                    price={120000} count={20} />
                <RowItem id={2} image="ảnh" name="Bàn máy tính"
                    category="Công nghệ"
                    price={300000} count={30} />
                <RowItem id={2} image="ảnh" name="Tivi"
                    category="Gia dụng"
                    price={2400000} count={40} />
                <RowItem id={2} image="ảnh" name="Son môi"
                    category="Mỹ phẩm"
                    price={100000} count={50} />
            </table>
        </form>
    );
}

export default ShowProduct;