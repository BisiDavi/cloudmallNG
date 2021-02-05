import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryTitle;
