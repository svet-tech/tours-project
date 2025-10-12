import { LoginModal } from "../LoginModal/LoginModal";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";
import logoMain from "/logoMain.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import type { RootState } from "../../store";

export const Header = () => {
    const isCartActive = useSelector((state: RootState) => state.tours.isCartActive)
    return <div className={classes.header}>
        <div className={classes.headerMain}>

            <div className={classes.container}>
                <div className={classes.headerInner}>
                    <a href="index.html" className={classes.logo}>
                        <img src={logoMain} alt="ЛОГО" className={classes.logoImg} />
                    </a>
                    <nav className={classes.menu}>
                        <ul className={classes.menuList}>
                            <li className={classes.menuListitem}><a href="#">О компании</a>
                            </li>
                            <li className={classes.menuListitem}><a href="#programm">Направления</a></li>
                            {/* <li className={classes.menuListitem}><a href="#">Стоимость</a></li> */}
                            <li className={classes.menuListitem}><Link to="/blog">Блог</Link></li>
                            <li className={classes.menuListitem}><a href="#contacts">Контакты</a></li>
                            <li className={`${classes.menuListitem} ${classes.cart}`}><Link to="/cart">
                                <FontAwesomeIcon icon={faShoppingCart}
                                    size="lg"
                                    style={{ color: isCartActive ? 'green' : 'black' }} />
                            </Link>
                            </li>


                        </ul>
                    </nav>
                    <div className={classes.login}>
                        <p>Личный кабинет</p>

                        <LoginModal />
                    </div>
                </div>
            </div>
        </div>
    </div>;
};