import style from './MainHeader.module.scss'
import mainIcon from "../../../assets/main-icon.svg";

function MainHeader() {
    return (
        <div>
            <div className={style.mainHeader}>
                <div className={style.mainBody}>
                    <span className={style.title}>Stay always tuned with planting trends</span>
                    <span className={style.temperature}>Current temperature is: 24°C</span>
                    <label className={style.label}>
                        <input className={style.input} placeholder={'Search'}/>
                    </label>
                </div>
                <img src={mainIcon} className={style.image}/>
            </div>
            <div className={style.mainHeaderMobile}>
                    <span className={style.titleMobile}>Stay always tuned with planting trends</span>
                    <div className={style.descriptionMobile}>Tips & Tricks<span className={style.normal}> selected specially for</span> you!</div>
                    <label className={style.labelMobile}>
                        <input className={style.inputMobile} placeholder={'Search'}/>
                    </label>
            </div>
        </div>
    );
}

export default MainHeader;