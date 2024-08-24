---
layout: page
title: Wordle Solver
description: Solving the popular word game, Wordle
img:
importance: 1
category: work
giscus_comments: true
---
# Overview

This project has been something I'd been thinking about since I started playing Wordle back in 2022. I'd always be guessing subptoimal words and making mistakes that I knew a computer wouldn't be susceptible to. After being reinspired by 3Blue1Brown's video about using information theory to solve Wordle, I decided to take a crack at it myself. My main goal with this project was to create an efficient solution, aiming solely to minimize the number of attempts, while also serving as a good introduction to reinforcement learning.

## Technical Structure

- **Reinforcement Learning Agent:** The core agent in this algorithm is Q-learning reinforcement agent that learns from both positive and negative rewards. The reward structure is tuned to heavily weight correct letters in the right locations, and bias against guessing any incorrect letters. At this point in time, there is more work to be done in terms of tuning parameters for the agent.

- **Probabilistic Word Selection:** Each possible word is "ranked" probabalistically based off a couple factors. I had done some initial Exploratory Data Analysis(EDA) and found that out of the ~15k possible answers, there was a list of ~3k common words that seemed to be the right answer around 85% of the time. Accounting for this fact, as well as observing which letters appeared in which positions the most often, the words are ordered in terms of how likely they are to be the very next guess. 

<div class="container">
    <style>
        /* Adjust the size of the images */
        .img-fluid {
            width: 200%; /* Increase image size */
            height: auto;
            max-width: 1200px; /* Adjust as needed */
        }

        /* Add margin between rows */
        .row {
            margin-bottom: 2rem;
        }
    </style>

    <div class="row">
        <div class="col-sm-4 mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/wordle/letter_frequencies.png" title="Letter Frequencies" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>


- **Cuckoo Filter Integration:** Cuckoo filters are space-efficient probabalistic data structures created in 2014 by professors at CMU. They allow for quick membership validity checks which was ideal for this scenario where I repeately check if words are still valid based off their letter positionings. This data strucure is implemented in C++ for extremely fast lookup.

<div class="container">
    <style>
        /* Adjust the size of the images */
        .img-fluid {
            width: 200%; /* Increase image size */
            height: auto;
            max-width: 1200px; /* Adjust as needed */
        }

        /* Add margin between rows */
        .row {
            margin-bottom: 2rem;
        }
    </style>

    <div class="row">
        <div class="col-sm-4 mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/wordle/cuckoo_filter.png" title="Cuckoo Filter" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

## Applications and Takeaways

This solver currently solves any given word in about 4.4753 guesses – not terrible – but not great either. Future work includes picking a more optimal guesing strategy for the first word (currently using words rated 97+ by the NYT). Let me know if you have any questions or improvements to make!
