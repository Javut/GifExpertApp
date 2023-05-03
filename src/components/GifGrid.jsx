import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log(isLoading);


    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
                // isLoading ? ( <h2>Cargando...</h2>) : null
            }
           

            <div className="card-grid">
                {
                    images.map((img) => (
                        //    <li key={id}>{title}</li>
                        <GifItem
                           key={images.id}
                           title={img.title}
                           url={img.url}
                        //    {...img} Esta es otra forma de pasar las propiedades, esparciendolas al componnte Hijo
                        />
                    )
                    )
                }
            </div>

            {/* <h5>{counter}</h5> */}
            {/* <button onClick={() => setCounter(counter+1)}>+1</button>
        <p>Hola Mundo</p> */}
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
