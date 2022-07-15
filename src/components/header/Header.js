import style from './Header.module.scss'

function Header() {
    const menu = ['Discover', 'My Plants', 'Diseases', 'Blog', 'FAQ', 'Contact Us']
    return (
        <div className={style.header}>
            <div className={style.body}>
                {menu.map((el, i) => <span className={style.title} key={i}>{el}</span>)}
            </div>
        </div>
    );
}

export default Header;
