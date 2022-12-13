import classNames from "classnames/bind";
import UsernameOrder from "./UsernameOrder";
import RowItem from "./RowItem";
import styles from "./ShowOrder.module.scss";

const cx = classNames.bind(styles)

function ShowOrder() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Danh sách đơn hàng </h3>
            <div className={cx('total-order')}>
                <h4>4 Đơn hàng</h4>
            </div>

            <UsernameOrder username="trquan17" idOrder={123456}>
                <RowItem image="ảnh" name="Chuột máy tính"
                    price={120000} count={2} />
                <RowItem image="ảnh" name="Bàn máy tính"
                    price={300000} count={1} />
            </UsernameOrder>

            <UsernameOrder username="nth1245" idOrder={61651}>
                <RowItem image="ảnh" name="Sữa tắm"
                    price={115000} count={1} />
                <RowItem image="ảnh" name="Dầu gội"
                    price={60000} count={2} />
            </UsernameOrder>

            <UsernameOrder username="abcd45" idOrder={123456}>
                <RowItem image="ảnh" name="Lót chuột"
                    price={13000} count={2} />
                <RowItem image="ảnh" name="Bàn máy tính"
                    price={300000} count={1} />
            </UsernameOrder>

            <UsernameOrder username="lkjhy789" idOrder={15466}>
                <RowItem image="ảnh" name="Đèn học"
                    price={270000} count={1} />
                <RowItem image="ảnh" name="Dây USB"
                    price={50000} count={4} />
            </UsernameOrder>
        </div>
    );
}

export default ShowOrder;