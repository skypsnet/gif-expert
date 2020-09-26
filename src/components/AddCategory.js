import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('') // Si se deja vacio es undefined
    const handleInputChange = (e) =>{
      console.log(e.target.value)
      setinputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
       e.preventDefault();
       //setCategory

       if(inputValue.trim().length >2){
                  setCategories(c => [inputValue,...c])
                  setinputValue('')
       }
       
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input
               type="text"
               value={inputValue}
               onChange={handleInputChange}
            />
        </form>
            
    
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

