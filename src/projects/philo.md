### Tech Stack: C

### Overview

This project is a **text-based simulation** for [the dining philosophers problem](https://en.wikipedia.org/wiki/Dining_philosophers_problem) with a little twist of adding sleeping in the mix.

### What is the dining philosophers problem

The dining philosophers problem is a classic computer science scenario illustrating concurrency issues like **deadlock** and **starvation** where one or more philosophers sit around a round table. There is a large bowl of spaghetti in the middle of the table.
 - The philosophers aternatively **eat, think or sleep**
 - There are as many forks on the table as there are philosophers
 - A philosopher can only eat their spaghetti when they have both their left and right fork
 - When a philosopher has finished eating they put their forks back on the table and start sleeping. Once awake they start thinking again until they can start eating
 
 The simulation stops when a philosopher dies of starvation

### What I learned

During this project I learned how to build a **multitasking program using threads**, use **mutexes to ensure safety** and to **prevent data races and deadlocks**.