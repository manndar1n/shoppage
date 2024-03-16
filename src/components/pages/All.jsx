import React from "react";
import "./styles.css";
import { incremented } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

function All() {
    const cardData = [
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
            title: "The best products from The Ordinary",
            price: "100$",
        },
        {
            img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
            title: "World’s Most Luxurious Lipsticks ",
            price: "50$",
        },
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
            title: "The best products from The Ordinary",
            price: "100$",
        },
        {
            img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
            title: "Beauty Base Protect",
            price: "250$",
        },
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
            title: "The best products from  The Ordinary",
            price: "100$",
        },
        {
            img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
            title: "Beauty Base Protect",
            price: "250$",
        },
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
            title: "The best products from The Ordinary",
            price: "100$",
        },
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
            title: "The best products from The Ordinary",
            price: "100$",
        },
        {
            img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
            title: "Beauty Base Protect",
            price: "250$",
        },
        {
            img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
            title: "World’s Most Luxurious Lipsticks ",
            price: "50$",
        },
        {
            img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
            title: "World’s Most Luxurious Lipsticks ",
            price: "50$",
        },
        {
            img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
            title: "World’s Most Luxurious Lipsticks ",
            price: "50$",
        },
    ];

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="container">
                <div className="counts">
                    <div className="img"></div>
                    <h1> allprice: {count}$</h1>
                </div>
                <div className="all-content">
                    <div className="cards">
                        {cardData.map((el, index) => (
                            <div key={index} className="card">
                                <img src={el.img} alt={el.title} />
                                <h3>{el.title}</h3>
                                <p>{`Price: ${el.price}`}</p>
                                <button
                                    onClick={() =>
                                        dispatch(
                                            incremented(parseFloat(el.price))
                                        )
                                    }
                                    className="home-btn"
                                >
                                    Add
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default All;
