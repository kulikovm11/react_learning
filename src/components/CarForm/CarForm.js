import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const{register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({mode:'all'})

    const submit = (data) =>{
        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand',{pattern:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/})}/>
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            <button>Save</button>

        </form>
    );
};

export {CarForm};