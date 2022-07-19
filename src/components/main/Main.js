import style from './Main.module.scss'
import BreadCrumbs from "./breadCrumbs/BreadCrumbs"
import MainHeader from "./mainHeader/MainHeader"
import TopOfTheDay from "./topOfTheDay/TopOfTheDay";
import New from "./new/New";

function Main() {
    return (
        <div className={style.main}>
            <BreadCrumbs/>
            <MainHeader />
            <New/>
            <TopOfTheDay />
        </div>
    );
}

export default Main;
