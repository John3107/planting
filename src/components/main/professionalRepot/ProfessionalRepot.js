import style from './ProfessionalRepot.module.scss'
import styleNew from '../new/New.module.scss'


function ProfessionalRepot({date, title, description, image, margin}) {
    return (
        <div className={style.professionalRepot} style={{marginBottom: `${margin}px`}}>
            <img src={image} className={style.image}/>
            <span className={styleNew.date}>{date}</span>
            <span className={style.title}>{title}</span>
            <span className={styleNew.description}>{description}</span>
        </div>
    );
}

export default ProfessionalRepot;