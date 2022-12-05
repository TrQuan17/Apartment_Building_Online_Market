import classNames from "classnames/bind";
import Header from "./Header";
import styles from "./LoginRegisterLayout.module.scss";

const cx = classNames.bind(styles)

function LoginRegisterLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <div className={cx('introduce')}>
                    <h1>Bán hàng chuyên nghiệp</h1>
                    <h3>Quản lý shop của bạn một cách hiệu quả hơn trên
                        Online Shop - Kênh Người bán</h3>
                    <div className={cx('image')}></div>
                </div>

                <div className={cx('empty')}></div>

                <div className={cx('form')}>
                    { children }
                </div>
            </div>
            
        </div>
    )       
}

export default LoginRegisterLayout