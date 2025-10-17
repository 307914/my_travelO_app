import { useEffect, useState } from "react";
import axios from "axios"
import './category.css'
import { ArrowLeftCircle, ArrowRightCircle, Funnel } from "react-bootstrap-icons";
import { useCategory, useFilter } from "../../context";

export const CategoryCard = () => {
    const [categories, setCategories] = useState([]);
    const [pages, setPages] = useState(0);
    const { state, setState } = useCategory()
    const { isfilteropen, filterDispatch } = useFilter();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.post("http://localhost:3500/api/categoryadd");
                const showData = data.slice(
                    pages + 10 > data.length ? data.length - 10 : pages,
                    pages + 10
                );
                setCategories(showData);
            } catch (error) {
                console.log("the erros is in category useEffect", error);
            }
        })();

    }, [pages])
    const handleshowright = () => {
        setPages(prev => prev + 10);
    }

    const handleshowleft = () => {
        setPages(prev => prev - 10);
    }

    const handlecategory = (category) => {
        setState(category);
    }

    const handlefilter = () => {
        filterDispatch({ type: "IS_FILTER_OPEN" });
    }

    return (
        <section className="category-card cursor-pointer">
            {pages >= 10 &&
                <button onClick={handleshowleft} className="category-btn">

                    <ArrowLeftCircle className="arrow-left btns-arrow" size={30} />

                </button>}
            {
                categories.map(({ _id, category }) => (
                    <span key={_id} className={`${category === state ? "btn-bottom" : ""}`} onClick={() => handlecategory(category)}>{category}</span>
                ))
            }
            {pages - 10 < categories.length &&
                <button onClick={handleshowright} className="category-btn">
                    <ArrowRightCircle className="arrow-right btns-arrow" size={30} />

                </button>}
            <button className="button btn-filter" onClick={handlefilter}>
                <Funnel size={20} />
                <span className="btn-filter">Filter</span>
            </button>
        </section>
    )

}