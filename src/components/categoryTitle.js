import Link from 'next/link';
import style from '../styles/category.module.css';

const CategoryTitle = ({ linkTo, title }) => {
  return (
    <section className={style.categoryTitle}>
      <div className={style.categoryname}>
        <div className="float-left">
          <h5>{title}</h5>
        </div>
        <div className={`${style.arrowIcon} float-right `}>
          <Link href={`/${linkTo}`}>
            <a>
              <i className="fas fa-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryTitle;
