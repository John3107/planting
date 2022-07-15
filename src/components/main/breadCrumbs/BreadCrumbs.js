import style from './BreadCrumbs.module.scss'
import arrowIcon from '../../../assets/cramb-arrow.svg'

function BreadCrumbs() {
    return (
         <div className={style.breadCrumbs}>
             <div className={style.breadCrumb}>Home</div>
             <img className={style.arrow} src={arrowIcon}/>
             <div className={style.breadCrumb}>Blog</div>
             <img className={style.arrow} src={arrowIcon}/>
        </div>
    );
}

export default BreadCrumbs;
