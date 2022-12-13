import classNames from "classnames/bind";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles)

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h3>Hồ sơ cửa hàng</h3>
                <p>Xem tình trạng Shop và cập nhập hồ sơ Shop của bạn</p>
            </div>

            <div className={cx('shop-info')}>
                <div className={cx('info-row')}>
                    <div className={cx('info-label')}>Tên cửa hàng</div>
                    <input className={cx('info-text', 'info-item')}
                        type="text" name="" id="" />
                </div>
                <div className={cx('info-row')}>
                    <div className={cx('info-label')}>Logo cửa hàng</div>
                    <img src="" alt="" srcset="" className={cx('logo-shop')} />
                    <input className={cx('info-img')}
                        type="file" name="img" accept="image/*" />
                </div>

                <div className={cx('info-row')}>
                    <div className={cx('info-label')}>Mô tả cửa hàng</div>
                    <textarea className={cx('info-decription', 'info-item')}
                        placeholder="Nhập mô tả tối đa 1000 kí tự"
                        name="" maxLength={1000}></textarea>
                </div>

                <div className={cx('info-submit')}>
                    <input type="submit" className={cx('submit')}
                        name="" value={"Lưu thông tin"}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;