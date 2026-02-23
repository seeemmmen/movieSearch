import { useState, useEffect } from "react";
import styles from './Cards.module.css';
export const Cards = ({ name , setIsLoading }) => {
  const [foundFilm, setFoundFilm] = useState([]);

  useEffect(() => {
    if (!name) return; 

    const findFilm = async () => {
          setIsLoading(true);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${name}&apikey=fbf6ed17`
        );
        const data = await response.json();
        console.log(data)

       setTimeout(()=>{
           if (data.Response === "True") {
          setFoundFilm(data.Search); 
          setIsLoading(false);

        } else {
          setFoundFilm([]);
        }
       },1000)
      } catch (error) {
        console.log(error);
      }
    };

    findFilm();
  }, [name]); 

  return (
    <div>
      {foundFilm.map((movie) => (
        <div key={movie.imdbID} className={styles.cards}>
          <h3>{movie.Title}</h3>
          {movie.Poster?<img src={movie.Poster} alt={movie.Title} width="150" />:<p>Photo Not Found</p>}
        </div>
        
      ))}
    </div>
  );
};