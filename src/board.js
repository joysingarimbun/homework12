import React, { useState } from "react";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const renderSquare = (i) => (
    <Button size="lg" onClick={() => handleClick(i)} w="100%">
      {squares[i]}
    </Button>
  );
  const handleClick = (i) => {
    const newSquares = [...squares];
    if (calculateWinner(squares) || squares[i]) return;
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  const board = [];
  for (let row = 0; row < 3; row++) {
    const cols = [];
    for (let col = 0; col < 3; col++) {
      cols.push(renderSquare(row * 3 + col));
    }
    board.push(
      <Grid key={row} templateColumns="repeat(3, 1fr)">
        {cols}
      </Grid>
    );
  }

  return (
    <Box maxW="400px" mx="auto" textAlign="center">
      <Heading mb="4">Tic Tac Toe</Heading>
      <Text mb="4">{status}</Text>
      {board}
      <Button onClick={() => setSquares(Array(9).fill(null))} mt="4">
        Reset
      </Button>
    </Box>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
