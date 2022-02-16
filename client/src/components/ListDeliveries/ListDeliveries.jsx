import React, { useEffect, useState } from "react";
import ListedDelivery from "./ListedDelivery";
import DeliveriesSearchBar from "./DeliveriesSearchBar";
import { Wrapper } from "../../styles/StyledComponents/Wrapper";
import { Container } from "../../styles/StyledComponents/Container";
import { useSelector, useDispatch } from "react-redux";
import { getDeliveries } from "../../Store/actions/deliveries";
import { Paragraph } from "../../styles/StyledComponents/Paragraph";
import NoResults from "../NoResults/NoResults";
import {putDelivery} from "../../Store/actions/delivery";
import {swalMessages} from "../../helpers/Swal/swal";
import {
  StyledTable,
  TH,
  TR,
  THead,
  TBody,
} from "../../styles/StyledComponents/Table";

const ListDeliveries = () => {
  const deliveries = useSelector((state) => state.tickets.deliveries);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    deliveryid: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putDelivery(input));
    swalMessages("Envío editado exitosamente", "Editado", "success");
  }

  useEffect(() => {
    dispatch(getDeliveries());
  }, []);

  return (
    <Wrapper
     
    bground="ghostwhite"
    margin="105px 0 0 0"  
    height="100vh"
      width="100vw"
      padding="175px 50px"
    >
      <Container width="100%" bRadius="5px" padding="50px">
        <Paragraph fSize="1.5rem" margin="0 0 20px 0">
          Envíos
        </Paragraph>
        <StyledTable padding="20px">
          <THead>
            <TR>
              <TH>ID Envío</TH>
              <TH>ID Orden</TH>
              <TH>Estado</TH>
              <TH>Creación</TH>
              <TH>Última Actualizacíon</TH>
              <TH>Acciones</TH>
            </TR>
          </THead>
          <TBody>
            {deliveries?.rows?.length ? (
              deliveries.rows?.map((d, i) => (
                <ListedDelivery key={i} delivery={d} handleSubmit={handleSubmit} setInput={setInput} />
              ))
            ) : (
              <NoResults />
            )}
          </TBody>
        </StyledTable>
      </Container>
    </Wrapper>
  );
};

export default ListDeliveries;
