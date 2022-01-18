import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "./Card";

import s from "../assets/styles/Products.module.css";

import products from "./bd";

const Products = () => {
    const [search, setSearch] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        console.log(searchParams)
        console.log(products);
    }, [searchParams]);

    return (
        <div className={s.container}>
            <input 
                className={s.searchBar} 
                type="text" 
                onChange={e => e.target.value ? setSearchParams({search: e.target.value}) : setSearchParams({})}
            />

            {products.filter(({name}) => {
                let filter = searchParams.get("search");

                if(filter){
                    return name.toLowerCase().startsWith(filter);
                }else{
                    return true;
                }
            }).map(({id, name, img, price}) => {
                return(
                    <Card key={id} name={name} img={img} price={price}/>
                );
            })}
        </div>
    )
}

export default Products
