import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../Popper"
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItems";

const cx = classNames.bind(styles)

function Menu({children, menu_items = []}) {

    const showMenuItems = () => {
        return menu_items.map((value, index) => (
            <MenuItem key={index} value={value}/>
        ))
    }
    return ( 
        <HeadlessTippy
            interactive
            delay={[0, 600]}
            offset={[20,0]}
            placement="bottom-end"
            render={(attrs) => (
                <div classNames={cx('content')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        {showMenuItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;