
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  const onSubmit = (event) => {
    console.log('Hola Mundo desde onSubmit');
    event.preventDefault();
    
    if(inputValue.trim().length <= 1) return;

    //setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim().toUpperCase());
    setInputValue('');
    
    // setInputValue([...setCategories, inputValue]);
  }


  return (

    <form onSubmit={onSubmit} aria-label="form">
        <input
            type="text"
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form>

  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
