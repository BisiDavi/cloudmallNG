import { rightArrowIcon } from "../imports";
import style from "../styles/category.module.css";


const CategoryTitle = props => {
  return (
    <section className={style.categoryTitle}>
      <div className={style.categoryname}>
        <div className="float-left">
          <h5>{props.title}</h5>
        </div>
        <div className={`${style.arrowIcon} float-right `}>
          <img src={rightArrowIcon} alt="rightIcon" />
        </div>
      </div>
      </section>
  )
}

export default CategoryTitle;