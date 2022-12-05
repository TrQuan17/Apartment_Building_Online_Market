import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import config from "src/config";

const cx = classNames.bind(styles)

function Login() {
    return (
        <>
            <h2>Đăng nhập vào Kênh người bán</h2>
            <form action="" method="post" className={cx('login-form')}>
                <div className={cx('username')}>
                    <input type="text" name="" id="" 
                        spellCheck={false}
                        placeholder='Số điện thoại / Email đăng nhập'/>
                </div>
                
                <div className={cx('password')}>
                    <input type="password" name="" id="" 
                    placeholder='Mật khẩu'/>
                </div>

                <div className={cx('forget-pass')}>
                    <Link to={config.routes.login}>Quên mật khẩu ?</Link>
                </div>
                
                <div className={cx('login-btn')}>
                    <button type="submit" >Đăng nhập</button>
                </div>

                <div className={cx('register-link')}>
                    <p>
                        Chưa có tài khoản Online Shop?
                        <Link to={config.routes.register}> Đăng kí ngay</Link>
                    </p>
                    
                </div>
            </form>

        </>

    );
}

export default Login;