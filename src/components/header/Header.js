import style from './Header.module.scss'
import burger from './../../assets/burger.svg'
import logo from './../../assets/logo.svg'
import search from './../../assets/search.svg'
import {useState} from "react";

function Header() {
    const menu = ['Discover', 'My Plants', 'Diseases', 'Blog', 'FAQ', 'Contact Us']

    const [isBurger, setIsBurger] = useState(false)

    return (
        <div>
            <div className={style.header}>
                <div className={style.body}>
                    {menu.map((el, i) => <span className={style.title} key={i}>{el}</span>)}
                </div>
            </div>
            <div className={style.mobileHeader}>
                <div className={style.logo}>
                    <img src={logo}/>
                </div>
                <div className={style.navigation}>
                    <img src={search} className={style.magnifyingGlass}/>
                    <img src={burger} className={style.burger} onClick={() => setIsBurger(!isBurger)}/>
                </div>
                {isBurger && <div className={style.burgerMenu}>
                    {menu.map((el, i) => <span className={style.title} key={i}>{el}</span>)}
                </div>}
            </div>
        </div>
    );
}

export default Header;
