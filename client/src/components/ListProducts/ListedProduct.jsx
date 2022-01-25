import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedProduct = ({ product, deleteFn }) => {
  return (
    <div>
      <div
        style={{
          background: "dodgerBlue",
          margin: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", height: 60 }}>
          <div style={{ width: "fit-content" }}>
            <Link to={`/product/edit/${product.productid}`}>
              <img src={product.image} height="60" alt={product.name} />
            </Link>
          </div>

          <div style={{ marginLeft: 20 }}>
            <Link to={`/product/edit/${product.productid}`} style={{color: "azure"}}>
              <h3>{product.name}</h3>
            </Link>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <Link to={`/product/edit/${product.productid}`}>
            <div style={{ background: "azure", borderRadius: 5, padding: 5 }}>
              <MdModeEdit color="CadetBlue" size="40" />
            </div>
          </Link>

          <Link to="#">
            <div
              style={{
                background: "azure",
                borderRadius: 5,
                padding: 5,
                marginLeft: 20,
              }}
            >
              <MdDelete
                name={product.name}
                color="crimson"
                size="40"
                onClick={() => deleteFn(product)}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedProduct;
