const mongoose = require("mongoose");

const gameSessionSchema = new mongoose.Schema(
  {
    currentGameState: {
      gameState: {
        playCount: Number,
        roundNo: Number,
        playerTurn: Number,
        firstTurn: Number,
      },
      playerState: {
        player1Name: Number,
        player2Name: Number,
        player1Wins: Number,
        player2Wins: Number,
        player1Losses: Number,
        player2Losses: Number,
        draw: Number,
        player1Side: String,
        player2Side: String,
      },
      boardState: {
        boardState: [String],
      },
    },
    matchHistory: [
      {
        boardState: [String],
        winner: String,
        winnerPlayerNumber: Number,
        textColor: String,
        player1Name: String,
        player2Name: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
