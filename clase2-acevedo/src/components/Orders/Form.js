import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useForm } from "react-hook-form";
import './form.css';


const Form = () => {  
    const {onSubmit} = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    return (
      <div className='formContainer'>
        <h2>Orden de compra</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="Tu nombre" />
          <input {...register("phone", { required: true })} placeholder="Tu teléfono" />
          <input {...register("email", { required: true })} placeholder="Tu correo" />
          <br></br>
          <input type="submit" className='send' />
        </form>
      </div>     
      );
};

export default Form;