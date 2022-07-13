# Project
PROJECT 1 - CONNECT 4

👋 Hi, I’m @Justingrant94
</br>
👀 I’m interested in music, all things media, automation, cycling and cocktails.
</br>
🌱 My first project using HTML, Javascript and CSS, just currently everything 🤣 
</br>
💞️ I’m looking to collaborate on any music related projects
</br>
📫 How to reach me justingrant373@gmail.com

Game’s Link: 

https://justingrant94.github.io/ProjectOne---Connect4/

Overview and concept:

I had a week to create a grid based game using Javascript, HTML and CSS. I chose to create the old school game Connect 4, my game is quite simple, it's a two player game. 

**Technologies used:** 

**HTML**

1. H1 consisting of the header
2. H2 ID tag being the winner
3. DIV ID being the board.

<img width="347" alt="Screenshot 2022-07-11 at 17 10 59" src="https://user-images.githubusercontent.com/73545574/178309261-86d27361-4960-4273-b585-361564ad6610.png">

**CSS**
1. Using flex-box
2. Colours for the counters Red and Blue
3. Styling for the slots to appear as circles.

<img width="347" alt="Screenshot 2022-07-11 at 17 14 34" src="https://user-images.githubusercontent.com/73545574/178309976-e43ec159-fe3e-4c7c-8d24-414c8f85437d.png">


**Javascript**
1. Starting with the red counter first
2. Understanding that I had to create an empty board and cells array and also track them.

<img width="291" alt="Screenshot 2022-07-11 at 17 19 08" src="https://user-images.githubusercontent.com/73545574/178310810-44855190-5554-4085-89da-531cbd30bf6e.png">


**The approach taken:**

The first thing I had to do was create the grid in which the Connect 4 game can run. To do this I used DOM manipulation which allowed me to push the empty cells into the empty div that you can see has been created. I opted for 7 rows and 6 columns in height, and used the loop function to create the grid which you can see below.

<img width="408" alt="Screenshot 2022-07-13 at 11 44 13" src="https://user-images.githubusercontent.com/73545574/178716684-c45d8a3a-af48-4cb9-a5f9-1f3c50b3c0a2.png">

**Day 1:** As this was my first project, my wireframe helped as I had direction as to how I needed to start, my understanding on how to create a wireframe was quite limited which is quite evident with what was created.

**the link for wireframe:**

https://excalidraw.com/#json=XlkZCNJ4gu3N2D2oDLYqb,rOFVjY0Y1bjnCeZWcixJmQ

**Day 2:** I created the grid in Javascript which was quite straight forward as I referred to the notes that I had made previously in class, as I also knew the width and row I had to create a variable for that too.

**Day 3:** I then realised my wireframe/plan wasn't well thought through as I needed to alternate between the two counters which I did research for and there were resources online which made this do-able.

**Day 4:** I created the function checkWinner which was the most challenging part of the game as I needed to make sure that if four counters are matching that the user is notified that they are the winner, with multiple arguments which was added to the function that if any of the below match the game will then need to be reset.

Above I created an if statement that if any of the rows and columns do match what instance I would like to happen, any time a slot is clicked on it will check if there is already a counter there.

I then had to create the gameWon function below. If one of the users are the winners an alert message pops up on the screen congratulating the winner.

**Day 5 & 6:** After understanding how to create the Vertical and Horizontal checks the diagonal checks were a little different as the logic was a little more complicated. After looking into various articles I came across an article that explained the logic in a way I understood what to do.

**Day 7:** **DEADLINE DAY** just making sure the final bits are done and the styling is how I see fit.

**When the game starts:** When the games start it's the player's turn which is the red counter.

**Key Learnings:**

Learned how to use Flexbox from scratch -
which I referred to https://jonitrythall.com/flexbox-cheatsheet for much aided support throughout my styling.

I used the alert pop up to notify the user that won.

**Challenges:**

**1.** One of my main challenges was displaying the four counters that won. What I faced was as soon as the user wins the counters disappear, which I believe is down to the remove function that I created. However, when I uncommented the remove function it then displayed the counters but the game continued so I couldn't figure out how to stop that from happening.

**2.** The second challenge was creating a set timer that disappeared after 5 seconds.

**3.** I wanted the user to have an option to play again once this has been completed which I failed to achieve. 

**Future Improvements:**

**1.** I would like to make it more personal so a pop up of the username.

**2.** Create a prompt so the user can add their 

**Bugs:**

**1** The user is notified quite late that they are the winner and disappears quite quickly which is set up from the function that I had created which could be amended by delaying the setTimeout function as it disappears after four seconds.




**2** When the game has been restarted by refreshing the browser the red counter doesn’t appear but it states that yellow has won, with the yellow counter appearing and disappearing after four seconds.


