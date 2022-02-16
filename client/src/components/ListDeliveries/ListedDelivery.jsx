import React, { useEffect, useState } from "react";
import { MdSave } from "react-icons/md";
import { TR, TD } from "../../styles/StyledComponents/Table";

const ListedDelivery = ({ delivery, handleSubmit, setInput }) => {
  const [active, setActive] = useState(false);
  const handleSelect = (e) => {
    setInput({
      deliveryid: delivery.deliveryid,
      status: e.target.value,
    });
  };

  return (
    <TR>
      <TD>{delivery ? delivery?.deliveryid?.slice(0, 8) : ""}</TD>
      <TD>
        {
          delivery ? delivery?.orders[0]?.orderid.slice(0, 8) : ""
          // <select name="" id="">
          //   {delivery.orders[0] &&
          //     delivery.orders.map((o, i) => (
          //       <option key={i}>{o.orderid.slice(0, 6)}</option>
          //     ))}
          // </select>
        }
      </TD>
      <TD>
        {
          <select
            defaultValue={delivery.status}
            onChange={(e) => {
              handleSelect(e);
              setActive(true);
            }}
          >
            <option value="Requested">Solicitado</option>
            <option value="In process">Procesando</option>
            <option value="Dispatched">Despachado</option>
            <option value="In transit">En camino</option>
            <option value="Delivered">Entregado</option>
          </select>
        }
      </TD>
      <TD>{delivery ? delivery.createdAt.slice(0, 10) : ""}</TD>
      <TD>{delivery ? delivery.updatedAt.slice(0, 10) : ""}</TD>
      <TD fSize="1.8rem" tAlign="center" color={active && "#2eb8b0"}>
        {
          <MdSave
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              if (active) {
                handleSubmit(e);
                setActive(false);
              }
            }}
          />
        }
      </TD>
    </TR>
  );
};

export default ListedDelivery;
