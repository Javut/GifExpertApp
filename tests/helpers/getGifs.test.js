import { getGifs } from "../../src/helpers/getGifs"

describe('', () => {

    test('debe de retornar un arreglo de Gifs ', async () => {

        const gifs = await getGifs('Superman');
        // console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
      
    })
    
  
})
