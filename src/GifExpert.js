import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpert = ()=>{

    const [categories, setCategories] = useState(['Dragon Ball']);
    
    // const handleAdd = ()=>{
    //     const nuevoValor='One Piece'
    //     // setCategories(c => [...c,nuevoValor])
    //     setCategories([...categories,nuevoValor])
    // }

    const nombre = 'GifExpertApp'
    // const categories = ['One Punch Man','Samurai X','Dragon Ball']
     return(

        <>
        <h1>{nombre}</h1>
        <AddCategory setCategories={setCategories}/>
        
        <hr/>

        

        <ul>
            {
                categories.map(category =>(
                <GifGrid 
                key={category}
                category={category}
                />
                ))
            }
        </ul>

        </>
    )

}


export default GifExpert;