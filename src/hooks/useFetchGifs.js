import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images: images, //De acuerdo a EcmaScript 6 se podria dejar tambien como images simplemente (cuando tenemos una propiedad que a punta a una variable con el mismo nombre se puede dejar un solo nombre, para este caso seria: images simplemente  )
        isLoading: isLoading //tambien se podria dejar como isLoading"
    }

}
