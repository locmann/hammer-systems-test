import React, { useState } from 'react';
import './styles.css';
import boardData from '../../../assets/data/board.json';
import menuItemsData from '../../../assets/data/menuItem.json';
import BoardComponent from '../../../components/shared-components/BoardComponent';

const Plans = () => {
  const [menuItems, setmenuItems] = useState(menuItemsData);
  const [boards, setBoards] = useState(boardData);
  const [currentBoard, setCurrentBoard] = useState();
  const [currentItem, setCurrentItem] = useState();

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

  function dropCardHandler(e, board) {
    board.items.push(currentItem);
    e.stopPropagation();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

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
  return (
    <div className="app">
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
    </div>
  );
};

export default Plans;

/*<div className="menu">
        {menuItems.map((item) => (
          <div
            className="cells"
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, item)}
          >
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragMenuItemStartHandler(e, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropMenuItemHandler(e)}
              className="item"
              draggable={true}
            >
              <img src={item.title} />
            </div>
          </div>
        ))}
      </div>*/
