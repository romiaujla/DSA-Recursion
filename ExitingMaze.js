/*

  You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

*/

let mySmallMaze = [
  [' ', ' ', '*'],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let otherMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


const checkRight = (maze, x, y) => {
  // check we are already at the boundary 
  if(y < maze[0].length-1)
    if([' ', 'e'].includes(maze[x][y+1]))
      return true;
  
  return false;
}

const checkDown = (maze, x, y) => {
  // check we are already at the boundary 
  if(x < maze.length-1)
    if([' ', 'e'].includes(maze[x+1][y]))
      return true;
  
  return false;
}

const checkLeft = (maze, x, y) => {
  // check we are already at the boundary 
  if(y)
    if([' ', 'e'].includes(maze[x][y-1]))
      return true;
  
  return false;
}

const checkUp = (maze, x, y) => {
  // check we are already at the boundary 
  if(x)
    if([' ', 'e'].includes(maze[x-1][y]))
      return true;
  
  return false;
}


// functions to check for boundaries and 
// if a character can move or not
const exitMaze = (maze, x=0, y=0, path='') => {
  
  // Base Case
  if(maze[x][y] === 'e'){
    path = '';
    return path;
  }

  if(!x && !y && maze[x][y] === 'c'){
    path = '';
    return path;
  }

  if(maze[x][y] === ' '){
    maze[x][y] = 'c';
  }

  console.log(`\n`)
  for(let i = 0; i < maze.length; i++){
      console.log(maze[i]);
  }

  if(checkRight(maze, x, y)){
    path = 'R' + exitMaze(maze, x, y+1, path);
    // return path;
  }

  if(checkDown(maze, x, y)){
    path = 'D' + exitMaze(maze, x+1, y, path);
    // return path;
  }

  if(checkLeft(maze, x, y)){
    path = 'L' + exitMaze(maze, x, y-1, path);
    // return path;
  }

  if(checkUp(maze, x, y)){
    path = 'U' + exitMaze(maze, x-1, y, path);
    // return path;
  }

  return path;
}

// console.log(`First Maze Exit Path: ${exitMaze(mySmallMaze)}`);
// console.log(`\n\nSecond Maze Exit Path: ${exitMaze(otherMaze)}`);
console.log(`\n\nExit Path: ${exitMaze(bigMaze)}`);
// exitPath(maze);
