import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import Card from "./Card";

import s from "../assets/styles/Products.module.css";

// import products from "./bd";

const Products = () => {
    const [products, setProducts] = useState(undefined);
    const [name, setName] = useState("");
    
    const [searchParams, setSearchParams] = useSearchParams();

    const [category, setCategory] = useState(searchParams.get("category") || "");

    // name
    useEffect(async () => {
        const name = searchParams.get("name");

        let res = null;

        let url = "http://localhost:3001/products" + (category || name ? "?" : "") + (category ? "category=" + category : "") + (category && name ? "&" : "") + (name ? "name=" + name : "");

        console.log(url);
        
        res = await axios.get(url);

        setProducts(res.data);
    }, [searchParams]);

    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={e => {
                e.preventDefault();

                const queries = {};

                if(category){
                    queries["category"] = category;
                }

                if(name){
                    queries["name"] = name
                }

                setSearchParams(queries);
            }}>
                <input 
                    value={name}
                    type="text"
                    className={s.searchBar}
                    onChange={e => setName(e.target.value)}
                />
            </form>

            {(() => {
                if(products){
                    if(products.length > 0){
                        return(
                            products.map(({productid, name, image, price}) => {
                                return(
                                    <Card key={productid} name={name} img={image} price={price}/>
                                );
                            })
                        )
                    }else{
                        return (<h1>No tenemos ese producto</h1>)
                    }
                }else{
                    return(<h1>Cargando...</h1>)
                }
            })()}
        </div>
    )
}

export default Products
