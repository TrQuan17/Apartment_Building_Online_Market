import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import config from "src/config";

const cx = classNames.bind(styles)

function Register() {
    return (
        <>
            <h2>Đăng kí Kênh người bán</h2>
            <form action="" method="post" className={cx('register-form')}>
                <div className={cx('fullname')}>
                    <input type="text" name="" id=""
                        spellCheck={false}
                        placeholder='Họ và tên' />
                </div>
                <div className={cx('username')}>
                    <input type="text" name="" id=""
                        spellCheck={false}
                        placeholder='Số điện thoại / Email đăng kí' />
                </div>

                <div className={cx('password')}>
                    <input type="password" name="" id=""
                        placeholder='Mật khẩu' />
                </div>

                <div className={cx('re-pass')}>
                    <input type="password" name="" id=""
                        placeholder='Nhập lại mật khẩu' />
                </div>

                <div className={cx('register-btn')}>
                    <button type="submit" >Đăng kí</button>
                </div>

                <div className={cx('login-link')}>
                    <p>
                        Bạn đã có tài khoản Online Shop? <br />
                        <Link to={config.routes.login}> Đăng nhập ngay</Link>
                    </p>

                </div>
            </form>

        </>

    );
}

export default Register;