import style from './Main.module.scss'
import BreadCrumbs from "./breadCrumbs/BreadCrumbs"
import MainHeader from "./mainHeader/MainHeader"

function Main() {
    return (
        <div className={style.main}>
            <BreadCrumbs/>
            <MainHeader />
        </div>
    );
}

export default Main;
