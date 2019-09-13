import React, { useState, Fragment } from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage, checkCollision } from './gameHelpers';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';

import { StyledTetris, StyledTetrisWrapper } from '../styled/StyledTetris';

const Tetris = () => {

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =

  useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }

  };

  const startGame = () => {
    // reset
    console.log('start');

    setDropTime(500);
    setStage(createStage());
    resetPlayer();
    setGameOver(false);

    setLevel(0);
    setScore(0);
    setRows(0);
  };

  const drop = () => {

    // up level when user cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }


    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      //  game over
      if (player.pos.y < 1) {
        console.log('GAME OVER');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }

  };


  const keyUp = ({ keyCode }) => {
    if (gameOver) return;
    if (keyCode === 40) {
      setDropTime(1000 / (level + 1) + 200);
    }
  };


  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };


  const move = ({ keyCode }) => {

    if (gameOver) return;

    if ((keyCode === 37) || (keyCode === 65)) {
      movePlayer(-1);
    } else if ((keyCode === 39)) {
      movePlayer(1);
    } else if ((keyCode === 40)) {
      dropPlayer();
    } else if ((keyCode === 38)) {
      playerRotate(stage, 1);
    }

  };


  useInterval(() => {
    drop();
  }, dropTime);

  //check reRender
  console.log('re-render');

  return (
    <StyledTetrisWrapper
      role='button'
      tabIndex='0'
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage}/>
        <aside>
          {
            gameOver ? (
              <Display text='Game Over' gameOver={gameOver}/>
            ) : (
              <>
                {/*Todo aDD sCORE LOGIC*/}
                {/*<Display text={`Score:  ${score}`}/>*/}
                <Display text={`Rows: ${rows}`}/>
                <Display text={`Level: ${level}`}/>
              </>
            )
          }
          <StartButton callback={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

Tetris.propTypes = {};

export default Tetris;
