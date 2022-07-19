import style from './New.module.scss'
import newLabel from '../../../assets/new-label.svg'
import newImage from '../../../assets/new-image.svg'

function New() {
    return (
            <div className={style.new}>
                <img src={newLabel}/>
                <div className={style.main}>
                    <img src={newImage} className={style.image}/>
                    <div className={style.mainText}>
                        <span className={style.date}>Feb 23 · 8 min read</span>
                        <span className={style.title}>Tips & Tricks For Cutting</span>
                        <span className={style.description}>Pruning, like any other skill, requires knowing what you are doing to achieve success. The old idea that anyone with a chain saw or a pruning saw can be a landscape pruner is far from the truth. More trees are killed or ruined each year from improper pruning than by pests. Remember that pruning is the removal or...</span>
                    </div>
                </div>
            </div>
    );
}

export default New;