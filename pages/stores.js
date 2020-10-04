import { Layout } from "../imports";
import style from "../styles/Store.module.css";

const storeCategories = [
  {
    id: "1",
    name: "Bookshop",
    description: "Personal care and needs",
    image: "static/images/Rectangle1.png"
  },
  {
    id: "2",
    name: "Pharmacy",
    description: "Personal care and needs",
    image: "static/images/Rectangle1.png"
  },
  {
    id: "3",
    name: "Restaurant",
    description: "Personal care and needs",
    image: "static/images/Rectangle1.png"
  },
  {
    id: "4",
    name: "Groceries",
    description: "Personal care and needs",
    image: "static/images/Rectangle1.png"
  },
  {
    id: "5",
    name: "Raw Food",
    description: "Personal care and needs",
    image: "static/images/Rectangle1.png"
  },
  {
    id: "6",
    name: "Spa",
    description: "Personal care and needs",
    image: "static/images/Rectangle1.png"
  }
];

const Store = () => {
  const displayCategories = () =>
    storeCategories.map(category => (
      <div className={style.category} key={category.id}>
        <img src={category.image} alt={`Cloudmall- ${category.name}`} />
        <div className={style.description}>
          <h6>{category.name}</h6>
          <p>{category.description}</p>
        </div>
      </div>
    ));

  return (
    <Layout
      showHeader={false}
      sliderStyle={true}
      showFooter={true}
      headerTitle="Store"
    >
      <section className={style.store}>
        <div className={style.storeheader}></div>
        <div className={style.storeCategories}>{displayCategories()}</div>
      </section>
    </Layout>
  );
};

export default Store;
