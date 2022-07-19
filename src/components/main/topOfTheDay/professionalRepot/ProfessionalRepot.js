import style from './ProfessionalRepot.module.scss'
import styleNew from '../../new/New.module.scss'


function ProfessionalRepot({date, title, description, image}) {

    return (
        <div className={style.professionalRepot}>
            <img src={image} className={style.image}/>
            <span className={styleNew.date}>{date}</span>
            <span className={style.title}>{title}</span>
            <span className={styleNew.description}>{description}</span>
        </div>
    );
}

export default ProfessionalRepot;