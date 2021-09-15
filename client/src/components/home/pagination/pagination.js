import React from 'react';
import styles from './pagination.module.css'; 

export function Pagination ({ gamesPerPage, totalGames, paginate }) {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.navPag}>
          <ul className={styles.pagination}>
            {pageNumbers.map((number) => (
              <li key={number} className={styles.pageItem}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(number);
                  }}
                  className={styles.pageLink}
                >
                  {number}{" "}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      );
    };