import style from './Interesting.module.scss'
import ProfessionalRepot from "../professionalRepot/ProfessionalRepot"
import plantPotSecrets from "../../../assets/plant-pot-secrets.svg";
import professionalRepot from "../../../assets/professional-repot.svg";
import wateringMastery from "../../../assets/watering-mastery.svg";
import {useEffect, useState} from "react";

function Interesting() {
    const getWindowSize = window.innerWidth
    const [windowSize, setWindowSize] = useState(getWindowSize);
    let arrayData = []
    const arrayDataDifferent = [
        {title: 'Watering mastery', image: wateringMastery},
        {title: 'Plant pot secrets', image: plantPotSecrets},
        {title: 'Professional Repot', image: professionalRepot},
        {title: 'Watering mastery', image: wateringMastery},
        {title: 'Professional Repot', image: professionalRepot},
        {title: 'Plant pot secrets', image: plantPotSecrets},
    ]
    const data = {
        date: 'Feb 23 · 8 min read',
        description: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...',
    }

    useEffect(() => {
        function handleWindowResize(event) {
            setWindowSize(event.target.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    if (arrayData.length < 7) {
        for (let i = 0; i < 6; i++) {
            let objectBuild = {
                date: data.date,
                description: data.description,
                title: arrayDataDifferent[i].title,
                image: arrayDataDifferent[i].image,
            }
            arrayData.push(objectBuild)
        }
    }

    if(windowSize < 920) arrayData.splice(3)

    return (
        <div className={style.interesting}>
            <span className={style.title}>interesting</span>
            <div className={style.container}>
                <div className={style.box}>{arrayData.map((el, i) =>
                    <ProfessionalRepot margin={windowSize < 1395 ? 24 : 56}
                                       date={el.date}
                                       title={el.title}
                                       description={el.description}
                                       image={el.image}
                                       key={i}/>)}</div>
            </div>
        </div>
    );
}

export default Interesting;