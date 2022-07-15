import style from './MainHeader.module.scss'
import mainIcon from "../../../assets/main-icon.svg";

function MainHeader() {
    return (
        <div className={style.mainHeader}>
            <div className={style.mainBody}>
                <span className={style.title}>Stay always tuned with planting trends</span>
                <span className={style.temperature}>Current temperature is: 24°C</span>
                <label className={style.label}>
                <input className={style.input} placeholder={'Search'}/>
                </label>
            </div>
            <img src={mainIcon}/>
        </div>
    );
}

export default MainHeader;