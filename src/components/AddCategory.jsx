
import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    if(inputValue.trim().length <= 1) return;

    //setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim().toUpperCase());
    setInputValue('');
    
    // setInputValue([...setCategories, inputValue]);
  }


  return (

    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form>

  )
}
