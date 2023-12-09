import React from 'react';
import './style.css';

const BoardComponent = (props) => {
  const {
    boards,
    setCurrentBoard,
    setCurrentItem,
    currentBoard,
    currentItem,
    setBoards,
  } = props;
  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === 'item') {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    console.log(board, item);
    setCurrentItem(item);
  }

  function dragMenuItemStartHandler(e, item) {
    setCurrentItem(item);
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dropHandler(e, board, item) {
    e.preventDefault();
    e.stopPropagation();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
    e.target.style.boxShadow = 'none';
  }

  function dropMenuItemHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    setBoards(
      boards.map((b) => {
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
    e.target.style.boxShadow = 'none';
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem);
    e.stopPropagation();
    /*const currentIndex = currentBoard.items.indexOf(currentItem);
            currentBoard.items.splice(currentIndex, 1);*/

    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        /*if (b.id === currentBoard.id) {
                            return currentBoard;
                          }*/
        return b;
      }),
    );
    e.target.style.boxShadow = 'none';
  }
  return (
    <div className="board">
      {boards.map((board) => (
        <div
          className="cells"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}
        >
          {board.items.map((item) => (
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              className="item"
              draggable={true}
            >
              <img src={item.title} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardComponent;
