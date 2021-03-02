import { Layout } from "../imports";
import style from "../styles/Store.module.css";
import Link from "next/link";

const storeCategories = [
    {
        id: "1",
        name: "Pharmacy",
        description: "Drugs and Personal care",
        image: "static/images/pharmacy.png",
    },
    {
        id: "2",
        name: "Raw Food",
        description: "Uncooked food,proteins...",
        image: "static/images/rawfood.png",
    },
    {
        id: "3",
        name: "Restaurant",
        description: "Meals, Finger Foods...",
        image: "static/images/restaurant.png",
    },
    {
        id: "4",
        name: "Super Market",
        description: "Groceries, daily needs",
        image: "static/images/supermarket.png",
    },
    {
        id: "5",
        name: "Finger Foods",
        description: "Groceries, daily needs",
        image: "static/images/bookshop.png",
    },
    {
        id: "6",
        name: "Drinks",
        description: "Red wines, Whiskey...",
        image: "static/images/bookshop.png",
    },
    {
        id: "7",
        name: "Bookshop",
        description: "Personal care and needs",
        image: "static/images/bookshop.png",
    },
];

const Store = () => {
    const displayCategories = () =>
        storeCategories.map((category) => {
            const linkName = category.name;
            const replaceSpaces = linkName.replace(" ", "-");
            const categoryLink = replaceSpaces.toLowerCase();
            return (
                <Link key={category.id} href={`/${categoryLink}`}>
                    <a>
                        <div className={style.category}>
                            <img
                                src={category.image}
                                alt={`Cloudmall- ${category.name}`}
                            />
                            <div className={style.description}>
                                <h6>{category.name}</h6>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    </a>
                </Link>
            );
        });

    return (
        <Layout
            showHeader={false}
            sliderStyle={true}
            showFooter={true}
            headerTitle="Store"
        >
            <section className={style.store}>
                <div className={style.storeheader}></div>
                <div className={style.storeCategories}>
                    {displayCategories()}
                </div>
            </section>
        </Layout>
    );
};

export default Store;
