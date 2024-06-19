import React, { useState, useEffect, useRef } from 'react';
import styles from "./JuegoFood.module.css"

const fruits = ['🍊', '🍉', '🍈', '🍍', '🍌'];

const JuegoFood = () => {
  const [avatarPosition, setAvatarPosition] = useState(0);

  const [fruitPosition, setFruitPosition] = useState(Math.random() * 150);

  const [fruitTop, setFruitTop] = useState(0);
  const [score, setScore] = useState(0);
  const [currentFruit, setCurrentFruit] = useState(fruits[0]);
  const fruitRef = useRef(null);
  const avatarRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft' && avatarPosition > 0) {
        setAvatarPosition(avatarPosition - 10);
      } else if (event.key === 'ArrowRight' && avatarPosition < 350) {
        setAvatarPosition(avatarPosition + 10);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [avatarPosition]);

  useEffect(() => {
    dropFruit();
    return () => clearInterval(intervalRef.current);
  }, [0]);

  const dropFruit = () => {
    intervalRef.current = setInterval(() => {
      setFruitTop((prevTop) => {
        const newTop = prevTop + 5;
        if (newTop >= 550) {
          resetFruit();
          return 0;
        }
        checkCatch(newTop);
        return newTop;
      });
    }, 50);
  };

  const checkCatch = (newTop) => {
    const fruitRect = fruitRef.current.getBoundingClientRect();
    const avatarRect = avatarRef.current.getBoundingClientRect();

    if (
      fruitRect.bottom >= avatarRect.top &&
      fruitRect.top <= avatarRect.bottom &&
      fruitRect.left <= avatarRect.right &&
      fruitRect.right >= avatarRect.left
    ) {
      setScore((prevScore) => prevScore + 1);
      changeFruit();
      resetFruit();
    }
  };

  const resetFruit = () => {
    clearInterval(intervalRef.current);
    setFruitTop(0);
    setFruitPosition(Math.random() * 350);
    dropFruit();
  };

  const changeFruit = () => {
    const newFruit = fruits[Math.floor(Math.random() * fruits.length)];
    setCurrentFruit(newFruit);
  };

  return (
    <div className={styles.gamecontainer}>
      <div className={styles.score}>Puntos: {score}</div>
      <div
        className={styles.avatar}
        ref={avatarRef}
        style={{ left: `${avatarPosition}px` }}
      ></div>
      <div
        className={styles.fruit}
        ref={fruitRef}
        style={{ top: `${fruitTop}px`, left: `${fruitPosition}px` }}
      >
        {currentFruit}
      </div>
    </div>
  );
};

export default JuegoFood;
