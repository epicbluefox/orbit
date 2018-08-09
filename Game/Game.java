import java.util.Scanner;
import java.awt.desktop.QuitHandler;
import java.util.*;
import java.util.Arrays;

public class Game{

    private static final String COMPUTER_SYMBOL = "*";
    private static boolean quit = false;
    private static boolean point = false;
    final static int WIDTH = 6;
    final static int HEIGHT = 6;
    final static int BOTTOM_ROW = WIDTH - 1;
    static char[][] board = new char[WIDTH][HEIGHT];

    //creates scanner
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        // two dimentional array
        // chatbot
       
        Scanner input = new Scanner(System.in);

        System.out.print("What is your name?");
        String name = input.next();
        System.out.println("Wow what a nice name");
        System.out.println();
        System.out.println("so which game do you want to play? Rock paper scissors (rpg) or tic tac toe (ttt) or hangman (hm) or connect four(cf)");
        String decision = input.next();
        if(decision.equalsIgnoreCase("hm")){
            System.out.println(
                "ok " + name + " nice to meet you");
            HangMan.main();
        }
        if(decision.equalsIgnoreCase("cf")){
            System.out.println(
                "ok " + name + " nice to meet you");
            Connect.main();
        }
        if (decision.equalsIgnoreCase("rpg")){
            System.out.println(
                "ok " + name + " nice to meet you");

            RPG.main();
        }
        else if(decision.equalsIgnoreCase("ttt")){
            System.out.println(
                "ok " + name + " nice to meet you, so what will you choose Single for 'P vs PC' or Double 'P vs P'");
        System.out.println();
        String choice = input.next();
        System.out.println("cool");
        System.out.println();
        if (choice.equalsIgnoreCase("single")) {
            Tictactoe.tic();
        } else if (choice.equalsIgnoreCase("double")) {
           Tictactoe.tac();
        }
        
    }
    input.close();

        }

       
        

   
   
        
}


    

