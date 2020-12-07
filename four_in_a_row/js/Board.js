class Board
{
  constructor()
  {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
    this.leftArrow = document.createElement('button');
    this.rightArrow = document.createElement('button');
    this.downArrow = document.createElement('button');
  }

  /** 
   * Generates 2D array of spaces. 
   * @return  {Array}     An array of space objects
   */

  createSpaces()
  {
    const spaces = [];

    for (let x = 0; x < this.columns; x++)
    {
      const column = [];

      for (let y = 0; y < this.rows; y++)
      {
        const space = new Space(x, y);
        column.push(space);
      }

      spaces.push(column);
    }
    return spaces;
  }

  drawHTMLBoard()
  {
    for (let column of this.spaces)
    {
      for (let space of column)
      {
        space.drawSVGSpace();
      }
    }
  }

  addArrows()
  {
    this.leftArrow.setAttribute('class', 'arrow');
    this.leftArrow.setAttribute('id', 'leftArrow');
    const leftImg = document.createElement('img');
    leftImg.setAttribute('src', 'img//circle_left.svg');
    document.querySelector('.table').appendChild(this.leftArrow).appendChild(leftImg);
    this.leftArrow.addEventListener('click', () => { game.activePlayer.activeToken.moveLeft() });

    this.rightArrow.setAttribute('class', 'arrow');
    this.rightArrow.setAttribute('id', 'rightArrow');
    const rightImg = document.createElement('img');
    rightImg.setAttribute('src', 'img//circle_right.svg');
    document.querySelector('.table').appendChild(this.rightArrow).appendChild(rightImg);
    this.rightArrow.addEventListener('click', () => { game.activePlayer.activeToken.moveRight(game.board.columns); })

    this.downArrow.setAttribute('class', 'arrow');
    this.downArrow.setAttribute('id', 'downArrow');
    const downImg = document.createElement('img');
    downImg.setAttribute('src', 'img//circle_down.svg');
    document.querySelector('.table').appendChild(this.downArrow).appendChild(downImg);
    this.downArrow.addEventListener('click', () => { game.playToken() });

  }
}
