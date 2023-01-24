import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators/carValidator";
import {carService} from "../../services";

const CarForm = ({setCars, updateCar}) => {
    const{register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({mode:'all',resolver:joiResolver(carValidator)})

    useEffect(()=>{
        if(updateCar){
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    },[updateCar])

    const submit = async (car) =>{

        if (!updateCar) {
            const {data} = await carService.createNew(car)
            setCars(prev=>[...prev, data])
        }else{

            await carService.updateById(updateCar.id, car)
            setCars(prev=>[...prev, car])

        }




        reset()

    }


    return (
        // <form onSubmit={handleSubmit(submit)}>
        //     <input type="text" placeholder={'brand'} {...register('brand',{pattern:{value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message:'Words only!'},required:{value:true, message:'required!'}})}/>
        //     {errors.brand&&<span style={{color:'red'}}>{errors.brand.message}</span>}
        //
        //     <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true, min:{value:0, message:'Min 0!'}, max: {value:1000000, message:'Max 1m'}})}/>
        //     {errors.price&&<span style={{color:'red'}}>{errors.price.message}</span>}
        //
        //     <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true, min:{value:1990 ,message:'Min 1990!'}, max:{value:new Date().getFullYear(),message:'Max only current year'}})}/>
        //     {errors.year&&<span style={{color:'red'}}>{errors.year.message}</span>}
        //     <button>Save</button>
        //
        // </form> //

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span style={{color:'red'}}>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price&&<span style={{color:'red'}}>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year&&<span style={{color:'red'}}>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>

        </form>
    );
};

export {CarForm};