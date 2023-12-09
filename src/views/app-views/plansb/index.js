import React, { useEffect, useState } from 'react';
import './styles.css';
import boardData from '../../../assets/data/board.json';
import menuItemsData from '../../../assets/data/menuItem.json';
import { Button } from 'antd';

const Plans = () => {
  const [menuItems, setmenuItems] = useState(menuItemsData);
  const [boards, setBoards] = useState(boardData);
  const [currentBoard, setCurrentBoard] = useState();
  const [currentItem, setCurrentItem] = useState();
  const saveChanges = () => {
    localStorage.setItem('planData', JSON.stringify(boards));
  };
  const importData = () => {
    const data = localStorage.getItem('planData');
    setBoards(JSON.parse(data));
  };
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

  function dragMenuItemStartHandler(e, item) {
    setCurrentItem(item.item);
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dropHandler(e, board) {
    e.preventDefault();
    e.stopPropagation();
    setBoards(
      boards.map((b) => {
        if (b.id === board?.id) {
          board.item = currentItem;
          return board;
        }
        if (b.id === currentBoard?.id) {
          currentBoard.item = '';
          return currentBoard;
        }
        return b;
      }),
    );
    e.target.style.boxShadow = 'none';
  }

  return (
    <>
      <div
        className="app"
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
      >
        <div className="board">
          {boards.map((board) => (
            <div
              className="cells"
              onDragOver={(e) => dragOverHandler(e)}
            >
              <div
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) =>
                  dragStartHandler(e, board, board.item)
                }
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board)}
                className="item"
                draggable={true}
              >
                {board.item ? <img src={board.item} /> : null}
              </div>
            </div>
          ))}
        </div>
        <div className="menu">
          {menuItems.map((item) => (
            <div className="cells">
              <div
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragMenuItemStartHandler(e, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e)}
                className="item"
                draggable={true}
              >
                <img src={item.item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="func">
        <Button
          type="primary"
          className="ml-2"
          onClick={saveChanges}
        >
          Save
        </Button>
        <Button
          className="ml-2"
          onClick={importData}
        >
          Import
        </Button>
      </div>
    </>
  );
};

export default Plans;
