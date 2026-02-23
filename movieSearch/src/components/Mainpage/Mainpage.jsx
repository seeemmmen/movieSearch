import { useState, useEffect } from "react";
import styles from "./Mainpage.module.css";
import { Cards } from "../Cards/Cards";

export const Mainpage = () => {
  const [searchFilm, setSearchFilm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>🎬 Movie Search</p>
        <input
          type="text"
          placeholder="Поиск фильмов..."
          className={styles.searchInput}
          onChange={(e) => setSearchFilm(e.target.value)}
        />
      </div>

      <div className={styles.content}>
        {isLoading && (
          <div className={styles.loaderWrapper}>
            <div className={styles.spinner}></div>
            <p>Ищем лучшие фильмы...</p>
          </div>
        )}


        <div style={{ display: isLoading ? "none" : "block" }}>
          <Cards name={searchFilm} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  );
};