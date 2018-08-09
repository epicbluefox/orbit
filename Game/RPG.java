import java.util.*;

public class RPG {
   public static void main () {
      int quit = 0;
      Random rand = new Random();
      int computerRandomNum;
      String[] computerRPS = {"rock","paper","scissors"};
      String computerInput;
      Scanner userInput = new Scanner(System.in);
      String userValue;
   
     
     
      while( quit != -1) {
         System.out.println("Type \"rock\"for rock, \"paper\" for paper, \"scissors\" for scissors");
         System.out.println("or type quit to quit");
      
      // user's input
         userValue = userInput.nextLine();
         if (userValue.equals("quit")){
            quit = -1;
            break;
            }
            
      // computer's input
         computerRandomNum = rand.nextInt(3);
         System.out.println("computerRandomNum = " + computerRandomNum);
         computerInput = computerRPS[computerRandomNum];
         System.out.println("computerInput = " + computerInput);
         
         
      // compare userInput and computerInput
         if (userValue.equals("scissors") && computerInput.equals("paper"))
            System.out.println("You Win");
            else if (userValue.equals("rock") && computerInput.equals("scissors"))      
            System.out.println("You Win");
         else if (userValue.equals("paper") && computerInput.equals("rock"))
            System.out.println("You Win");
         else if (userValue.equals(computerInput)){
            System.out.println("boolean = " + userInput.equals(computerInput));
            System.out.println("Tie");
         }   
         else
            System.out.println("Computer Wins!");
      } // end of while  
   } // end of main

}  // end RockPaperScissors
