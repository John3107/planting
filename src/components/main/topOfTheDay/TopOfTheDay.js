import style from './TopOfTheDay.module.scss'
import ProfessionalRepot from "../professionalRepot/ProfessionalRepot"
import professionalRepotLeft from "../../../assets/professional-repot-left.svg";
import professionalRepotRight from "../../../assets/professional-repot-right.svg";

function TopOfTheDay() {

    const arrayData = []
    const data = {
        date: 'Feb 23 · 8 min read',
        title: 'Professional Repot',
        description: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...',
    }

    if (arrayData.length < 2) {
        for (let i = 0; i < 2; i++) {
            arrayData.push(data)
        }
    }

    return (
        <div className={style.topOfTheDay}>
            <span className={style.title}>TOP of the Day</span>
            <div className={style.container}>
                <div className={style.box}>{arrayData.map((el, i) =>
                    <ProfessionalRepot date={el.date}
                                       title={el.title}
                                       description={el.description}
                                       image={i === 0 ? professionalRepotLeft : professionalRepotRight}
                                       key={i}/>)}</div>
            </div>
        </div>
    );
}

export default TopOfTheDay;