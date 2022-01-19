import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import Card from "./Card";

import s from "../assets/styles/Products.module.css";

// import products from "./bd";

const Products = () => {
    const [products, setProducts] = useState(undefined);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(async () => {
        const search = searchParams.get("search");
        let res = null;

        if(search){
            res = await axios.get("http://localhost:3001/products?search="+search);
        }else{
            res = await axios.get("http://localhost:3001/products");
        }

        setProducts(res.data);
    }, [searchParams]);

    useEffect(() => {
        console.log(products)
    }, [products]);

    return (
        <div className={s.container}>
            <input 
                className={s.searchBar} 
                value={searchParams.get("search") || ""}
                type="text" 
                onChange={e => e.target.value ? setSearchParams({search: e.target.value}) : setSearchParams({})}
            />

            {(() => {
                if(products){
                    if(products.length > 0){
                        return(
                            products.filter(({name}) => {
                                let filter = searchParams.get("search");
                
                                if(filter){
                                    return name.toLowerCase().startsWith(filter);
                                }else{
                                    return true;
                                }
                            }).map(({id, name, image, price}) => {
                                return(
                                    <Card key={id} name={name} img={image} price={price}/>
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
