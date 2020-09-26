import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
//    const [images, setimages] = useState([]);
  

     const {data:images,loading} =  useFetchGifs(category);

  
//    useEffect(()=>{
//        getGifs(category)
//        .then(imgs => setimages(imgs))
//    },[category])  // Evitar que al renderizar se efectue la función

    
   

    return (
        <>
        <h3 className="animate__fadeIn">{category}</h3>
        {loading && <p className="animate_animated animate_flash">Cargando</p>}
        
        
        <div className="card-grid">
        
        
            
                {
                    images.map( img => (
                     <GifGridItem 
                     
                    //  img={img}
                     key={img.id}
                     {...img}
                     />
                    ))
                }
            
        </div>
        </>
    )
}
