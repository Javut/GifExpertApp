
import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);


  const onAddCategory = (newCategory) => {


    if(categories.includes(newCategory)) return;

  //  if(categ.toLowerCase.includes(newCategory)) return;
    setCategories([newCategory]);
  }


  return (
    
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        //setCategories={setCategories} -- Esta es una forma, enviando la funcion al componente hijo 
        onNewCategory={value => onAddCategory(value)}
        />

      <button onClick={onAddCategory}>Agregar</button>

      <ol>
      {
        categories.map((cat) => 
        <GifGrid 
          key={cat} 
          category={cat}
         />
        )
      }
      </ol>


    </>


)
}



  // DTHQiNDMMoza8g9suGB88BgqOCotRIoq