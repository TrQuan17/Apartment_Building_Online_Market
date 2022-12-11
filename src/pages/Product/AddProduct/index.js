import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";

const cx = classNames.bind(styles)

function AddProduct() {
    return (
        <div className={cx('wrapper')}>
            <h3>Thông tin cơ bản</h3>

            <form action="" method="post" className={cx('add-form')}>
                <div className={cx('item-row')}>
                    <div className={cx('input-label')}>Hình ảnh sản phẩm</div>
                    <input className={cx('input-img')} 
                        type="file" name="img" accept="image/*" />
                </div>

                <div className={cx('item-row')}>
                    <div className={cx('input-label')}>Tên sản phẩm</div>
                    <input className={cx('input-text', 'input-item')}
                        placeholder="Nhập tên sản phẩm" 
                        type="text" name="" id="" />
                </div>
                <div className={cx('item-row')}>
                    <div className={cx('input-label')}>Danh mục sản phẩm</div>
                    <div className={cx('input-category')}>
                        <select name="category">
                            <option value="">Công nghệ</option>
                            <option value="">Mỹ phẩm</option>
                            <option value="">Thực phẩm</option>
                            <option value="">Thời trang</option>
                        </select>
                    </div>
                </div>
                <div className={cx('item-row')}>
                    <div className={cx('input-label')}>Mô tả sản phẩm</div>
                    <textarea className={cx('input-decription','input-item')}
                        placeholder="Nhập mô tả tối đa 1000 kí tự" 
                        name="" maxLength={1000}></textarea>
                </div>
                <div className={cx('item-row')}>
                    <div className={cx('input-label')}>Đơn giá sản phẩm</div>
                    <input className={cx('input-text','input-item')} 
                        type="text" name="" id="" 
                        placeholder="Nhập dơn giá sản phẩm" 
                        pattern="[0-9]+"/>
                </div>
                <div className={cx('item-row')}>
                    <div className={cx('input-label')}>Số lượng trong kho</div>
                    <input className={cx('input-text', 'input-item')}
                        type="text" name="" id=""
                        placeholder="Nhập số lượng sản phẩm trong kho" 
                        pattern="[0-9]+"/>
                </div>
                <div className={cx('item-submit')}>
                    <input type="submit" className={cx('add-submit')}
                        name="" value={"Thêm sản phẩm"}/>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;