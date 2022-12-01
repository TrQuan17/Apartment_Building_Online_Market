import classNames from "classnames/bind";
import { 
    faChartSimple, 
    faCirclePlus, 
    faHandHoldingDollar, 
    faPenToSquare 
    } from "@fortawesome/free-solid-svg-icons";
    
import styles from "./Sidebar.module.scss";
import Menu from "./Menu";
import config from "src/config";
import MenuItem from "./Menu/MenuItem";

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu title="Quản lý sản phẩm">
            <MenuItem icon={faCirclePlus} 
                title='Thêm sản phẩm' 
                link={config.routes.addProduct}/>
            <MenuItem icon={faPenToSquare}
                title='Cập nhật/Xóa sản phẩm' 
                link={config.routes.editProduct}/>
        </Menu>

        <Menu title="Quản lý đơn hàng">
            <MenuItem icon={faChartSimple} 
                title='Thống kê' 
                link={config.routes.order}/>
            <MenuItem icon={faHandHoldingDollar} 
                title='Doanh thu' 
                link={config.routes.turnover}/>
        </Menu>
    </aside>;
}

export default Sidebar;