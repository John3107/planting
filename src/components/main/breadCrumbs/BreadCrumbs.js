import style from './BreadCrumbs.module.scss'
import arrowRight from '../../../assets/arrow-right.svg'
import arrowLeft from '../../../assets/arrow-left.svg'

function BreadCrumbs() {
    return (
        <div>
            <div className={style.breadCrumbs}>
                <div className={style.breadCrumb}>Home</div>
                <img className={style.arrowRight} src={arrowRight}/>
                <div className={style.breadCrumb}>Blog</div>
                <img className={style.arrowRight} src={arrowRight}/>
            </div>
            <div className={style.breadCrumbsMobile}>
                <img className={style.arrowLeft} src={arrowLeft}/>
                <div className={style.breadCrumb}>Home</div>
            </div>
        </div>
    );
}

export default BreadCrumbs;
