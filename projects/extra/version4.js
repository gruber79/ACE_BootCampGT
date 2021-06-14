/**Sorta Secret Advanced Challenge**/

function presschenge(){ 

b = p = 1
a = z = n = m = h = h1 = 0
import time
star = time.time()

    guess  prompt("How many guess are going to play":))
    if guess > 10:
    print("Too High")
        b += 1
    elif guess < 2:
        print("Too low")
        b+= 1
    else:
        print("It took you " + str(b) + " tries to put the acceptable number of players")
        b = a
print(" ")
roll = int(input("How many rolls are you want to play: "))
print(str(roll) + " rolls for each player")
print("Start the Game")

input("Pres Enter to star")

import random
while z < guess: /* again while is using to run the game for each player. */  
    dice = random.randint(1, 2)/*The computer takes a number to play.*/
    print(" ")#
    print("Dice number " + str(dice))
    for x in range(roll):
        user = random.randint(1, 2)/*The computer takes a number for the player.*/
        print("ram " + str(user))
        if user == dice: /* a condition where it is compared to the winning number.*/  
            a += 1
        else:
            b += 1
    z += 1
    r = int(100/roll)
    if a > b: /* a condition where shows and counts the the winner */
        print("Player " + str(z) + " Your score is " + str(a*r) + "% Your win ") 
        n +=1
    elif a == b:
         print("Player " + str(z) + " it is Draw") 
        
    else:
        print("Player " + str(z) + " Your score is " + str(a*r) + "% Your lose ") 
    m += 1
    a = b = 0
    if z == guess: /* this condition is for chenge the variable of z if cotinue the player.*/
        ask = str(input("Pres Y if you want continue to play?"))
        if ask == "y" or ask == "Y":
            roll = int(input("How many rolls are you want to play: "))
            p += 1
            print(" ")
            print("/-/-/-/-/-/-/Play Game " + str(p) + " -/-/-/-/-/-/-/-/-/")
            z = 0     
    print("  ")
    
    print("You won " + str(n) + " rolls of " + str(n + m) + " The Score is " + str(n*r))
    if n > m: /* A condition where the total calculation of the winners is shown.*/
        print("The house lose")	
        h += 1
    elif n == m:
        print("this is a Draw - The House Won")
    else:
        print("The House Won")
    h1 += 1    
    n = m = 0
print(" ")          
r2 = int(100/p)
print("You play " + str(p) + " games with different rolls - you win " + str(h) + " games - The total Score in the whole game is "+ str(h*r2) + "%")

end = time.time()
w = int(end - star)
print("the whole game took " + str(w) + " seconds")
print("Good luck next time")
print(" ")

star = time.time()
user = str(input("From 1 to 10, how difficult was the game"))
end = time.time()
w = int(end - star)
print("from 1 to 10 you answer was " + str(user))
print("and the time answering was " + str(w) + " seconds")
};