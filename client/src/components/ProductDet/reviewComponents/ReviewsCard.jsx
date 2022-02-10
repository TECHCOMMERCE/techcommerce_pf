import { Rating } from "@mui/material";
import { useRef } from "react";
import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import styles from "../../../styles/reviews/CardReview.module.css";
import styled from "styled-components";
import { Text, Input, Modal } from '@nextui-org/react';
import { postReview } from '../../../Store/actions/reviews'
import Swal from 'sweetalert2';
import getReviewsByProduct from '../../../Store/actions/reviews'

const Info = styled.div`
font-size: 20px;
text-align: left;
list-style:none;
padding-bottom: 10px;
padding-top: 13px;

font-weight: bold;

@media (max-width: 640px) {
 margin:0;
}
`
const Edit = styled.a`
color:#95BEFE;
font-size: 18px;
float: right;
text-decoration: underline;
padding-right: 10px;
&:hover{
  background-color: #e8eaeb53;
  border-radius: 2px;
}
`

const Button = styled.button`
display: flex;
position: relative;
margin-left: auto;
margin-top: 30px;
padding: 0.7em 2.4em;
font-size: 15px;
border-radius: 20px;
user-select: none;
overflow: hidden;
color: #95BEFE;
z-index: 1;
border: none;
font-weight: 500;
cursor: pointer;
&:hover {
color: white;
background-color: #95BEFE;
} 
`



const ReviewsCard = ({name='Prueba',lastname='Lopez', stars, description, id,productid, getReviewsByProduct}) => {
  const dispatch = useDispatch();
 
  const [visible1, setVisible1] = useState(false);
  const handler1 = () => setVisible1(true);
 
  const closeHandler1 = () => {
    setVisible1(false) 
  };
  const [textEdit,setTextEdit] = useState(''+description);
  //const valueRef = useRef('')

  /* const sendValue = () => {
    return console.log(valueRef.current.value);
  } */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('description', description)
    console.log('textEdit', textEdit)
    console.log('stars', stars)
    console.log('productid', productid)
    dispatch(postReview(
      {
        description: textEdit,
        stars
      }
      , productid))
      Swal.fire({
        icon: 'success',
        text: 'Tu comentario ha sido editado correctamente!',
        title: 'Edicion exitosa'
      })

      dispatch(getReviewsByProduct(productid))

  }


  return (
    <div key={id} className={styles.MainContainer}>
      <div className="basic__info">
        <h4>{`${name} ${lastname}`}</h4>
        <Rating name="read-only" value={stars} readOnly />
        <Info>
        <p>{description}</p>
             <Edit auto shadow onClick={handler1}>Edit</Edit>
             <Modal
                  closeButton
                  aria-labelledby="modal-title"
                  open={visible1}
                  onClose={closeHandler1}>
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Editar reseña de:&nbsp; 
                      <Text b size={18}>
                      {`${name} ${lastname}`}
                      </Text>
                    </Text>
                  </Modal.Header>
                  <form action="" onSubmit={e => handleSubmit(e)}>
                  <Modal.Body>

                    <Input 
                      label="Comentario"
                      description=""
                      type="text"
                      placeholder="Comentario"
                      onChange={(e)=>setTextEdit(e.target.value)}
                      value={textEdit}
                   />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                     type="submit"
                     variant="contained"
                     onClick={closeHandler1}>
                      Guardar
                    </Button>
                  </Modal.Footer>
                  </form>
                </Modal>
              </Info>
      </div>
    </div>
  );
};

export default ReviewsCard;
