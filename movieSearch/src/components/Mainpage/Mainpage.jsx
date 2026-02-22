import { useState } from "react";
import styles from "./Mainpage.module.css";
import { Cards } from "../Cards/Cards";
export const Mainpage = () => {

    const [searchFilm , setSearchFilm] = useState("");
  return (
    <>
    <div className={styles.main}>
      <p style={{fontSize:"20px"}}>Movie Search</p>
      <input type="text" className={styles.main} onChange={(e) => setSearchFilm(e.target.value)}/>
    </div>
        <Cards name={searchFilm}/>
    </>
   
    
  );
};