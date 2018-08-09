import java.util.Scanner;
import java.awt.desktop.QuitHandler;
import java.util.*;
import java.util.Arrays;

public class Tictactoe{

    private static final String COMPUTER_SYMBOL = "*";
    private static boolean quit = false;
    private static boolean point = false;
    private static String symbol1;
    private static String symbol2;

        public static void tic() {
            int n = 3;
            String[][] array = new String[n][n];
    
            Scanner player = new Scanner(System.in);
            while (!quit) {
                System.out.println("WELCOME TO THE GAME: choose a shape - x or o ");
                symbol1 = player.next();
                symbol2 = COMPUTER_SYMBOL;
                System.out.println(" you've choosen: " + symbol1);
                while(!point){
                System.out.println(" Now choose your x-coordinate from 0 to 2");
                
                int x = player.nextInt();
                System.out.println("Now choose your y-coordinate from 0 to 2");
                int y = player.nextInt();
                Position playerPos = new Position(x, y);
                play(array, playerPos, symbol1);

                Position computerPos = calculateComputerPos(array);
                play(array, computerPos, symbol2);
                }
            }
            player.close();
        }

        private static void placeSymbolOnPos(String[][] array, Position pos, String symbol) {
            array[pos.x][pos.y] = symbol;
        }

        private static void play(String[][] array, Position pos, String symbol) {
            placeSymbolOnPos(array, pos, symbol);
            printArraySymbol(array);
            gameOver2(array, symbol1, symbol2);
            if (quit && point) {
                return;
            }
        }
    
        // calculates computer position
        public static Position calculateComputerPos(String[][] array) {
            Random rand = new Random();
            int x = rand.nextInt(2);
            int y = rand.nextInt(2);
            while (array[x][y] != null) {
                x = rand.nextInt(2);
                y = rand.nextInt(2);
            }
            return new Position(x, y);
        }
    
        public static void printArray(String[][] array) {
            for (int i = 0; i < array.length; i++) {
                for (int j = 0; j < array.length; j++) {
                    if (array[i][j] == null) {
                        System.out.print(" ");
                    } else {
                        System.out.print(array[i][j]);
                    }
                }
                System.out.println();
            }
        }
    
        public static void printArraySymbol(String array[][]) {
            for (int i = 0; i < array.length; i++) {
                for (int j = 0; j < array.length; j++) {
                    String printSymbol = null;
                    if (j < 2 && i < 2) { // if top,left,right,bottom line then this...
                        if (array[i][j] == null) {
                            printSymbol = "_|";
                        } else {
                            printSymbol = array[i][j] + "|";
                        }
                    } else if (j == 2 && i < 2) {
                        if (array[i][j] == null) {
                            printSymbol = "_";
                        } else {
                            printSymbol = array[i][j];
                        }
                    } else if (i == 2 && j < 2) { // if not border line then this...
                        if (array[i][j] == null) {
                            printSymbol = " |";
                        } else {
                            printSymbol = array[i][j] + "|";
                        }
                    } else {
                        if (array[i][j] == null) {
                            printSymbol = " ";
                        } else {
                            printSymbol = array[i][j];
                        }
                    }
                    System.out.print(printSymbol);
                }
                System.out.println("");
            }
            // test forloop
    
        }
    
        // for two players
        public static void tac() {
            int r = 3;
            String[][] array = new String[r][r];
            Scanner players = new Scanner(System.in);
            while (!quit) {
                System.out.println("WELCOME TO THE GAME player 1: choose a shape - x or o ");
                symbol1 = players.next();
                System.out.println(" you've choosen: " + symbol1);
                System.out.println("WELCOME TO THE GAME player2: choose a shape - v or u");
                symbol2 = players.next();
                System.out.println(" you've choosen: " + symbol2);
                while (!point){
                    System.out.println(" player1 - Now choose your x-coordinate from 0 to 2");
                    int xcoor1 = players.nextInt();
                    System.out.println(" player1 - Now choose your y-coordinate from 0 to 2");
                    int ycoor1 = players.nextInt();
                    play(array, new Position(xcoor1, ycoor1), symbol1);
                
                    System.out.println(" player2 - Now choose your x-coordinate from 0 to 2");
                    int xcoor2 = players.nextInt();
                    System.out.println(" player2 - Now choose your y-coordinate from 0 to 2");
                    int ycoor2 = players.nextInt();
                    play(array, new Position(xcoor2, ycoor2), symbol2);
                }
    
            }
            players.close();
        }
    
        ////////// GAME OVER FOR DOUBLE PLAYERS
        public static void gameOver2(String array2[][], String symbol1, String symbol2) {
           
            
            for (int k = 0; k < array2.length; k++) {
                for (int l = 0; l < array2.length; l++) {
                    
                    if ((array2[0][0] == symbol1 && array2[0][1] == symbol1 && array2[0][2] == symbol1)
                            || (array2[1][0] == symbol1 && array2[1][1] == symbol1 && array2[1][2] == symbol1)
                            || (array2[2][0] == symbol1 && array2[2][1] == symbol1 && array2[2][2] == symbol1)
                            || (array2[0][0] == symbol1 && array2[1][0] == symbol1 && array2[2][0] == symbol1)
                            || (array2[0][1] == symbol1 && array2[1][1] == symbol1 && array2[2][1] == symbol1)
                            || (array2[0][2] == symbol1 && array2[1][2] == symbol1 && array2[2][2] == symbol1)
                            || (array2[2][0] == symbol1 && array2[1][1] == symbol1 && array2[0][2] == symbol1)
                            || (array2[0][0] == symbol1 && array2[1][1] == symbol1 && array2[2][2] == symbol1)
                            || (array2[0][0] == symbol2 && array2[0][1] == symbol2 && array2[0][2] == symbol2)
                            || (array2[1][0] == symbol2 && array2[1][1] == symbol2 && array2[1][2] == symbol2)
                            || (array2[2][0] == symbol2 && array2[2][1] == symbol2 && array2[2][2] == symbol2)
                            || (array2[0][0] == symbol2 && array2[1][0] == symbol2 && array2[2][0] == symbol2)
                            || (array2[0][1] == symbol2 && array2[1][1] == symbol2 && array2[2][1] == symbol2)
                            || (array2[0][2] == symbol2 && array2[1][2] == symbol2 && array2[2][2] == symbol2)
                            || (array2[2][0] == symbol2 && array2[1][1] == symbol2 && array2[0][2] == symbol2)
                            || (array2[0][0] == symbol2 && array2[1][1] == symbol2 && array2[2][2] == symbol2)) {
    
                        System.out.println("gameover");
                        System.out.println("do you want to play again: 'yes' , 'no', 'sure'");
                        Scanner playing = new Scanner(System.in);
                        String user1 = playing.nextLine();
                        if (user1.equalsIgnoreCase("yes")) {
                            tac();
                        } 
                        else if (user1.equalsIgnoreCase("sure")) {
                            tic();
                        }else if (user1.equalsIgnoreCase("no")) {
                            playing.close();
                            point = true;
                            quit = true;
                            return;
                        }
                        
                    }
                }
            }
        }
    }
