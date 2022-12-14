import classNames from 'classnames/bind';
import { faChartSimple, faCirclePlus, faClipboardList, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

import styles from './SideBar.module.scss';
import Menu from './Menu';
import config from 'src/config';
import MenuItem from './Menu/MenuItems';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu title="Sản phẩm">
        <MenuItem icon={faClipboardList} title="Danh sách sản phẩm" link={config.routes.showProduct} />
        <MenuItem icon={faCirclePlus} title="Sản phẩm cho bạn" link={config.routes.product} />
      </Menu>

      <Menu title="Đơn hàng của bạn">
        <MenuItem icon={faChartSimple} title="Đơn hàng hiện tại" link={config.routes.curorder} />
        <MenuItem icon={faHandHoldingDollar} title="Lịch sử mua hàng" link={config.routes.history} />
      </Menu>
    </aside>
  );
}
export default Sidebar;
