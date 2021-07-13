# SDET-Test

The purpose of this project is to complete all tasks from the SDET-test challenge and to be able to test all requested scenarios.

Lets discuss the project with more depth:

JS, Node.js and React was my stack of choice for this challenge. This stack allowed me to display the photos on different components that
added detailed information for each picture. Also gives us a view that lets us compare the photos by looking at the results given by
NASA APIs, in order to comply with the first 3 tasks of this challenge. Test scenario 4 is validated using a unit test assertion
that sends an alarm message. src/data/getImages.js file has functionality comments on all methods and fuctions used for this challenge.

## Challenge
Create pilot JavaScript test framework for testing NASA's open API.

NASA has an open API: https://api.nasa.gov/index.html#getting-started. It grants access to different features e.g: Astronomy Picture of the Day, Mars Rover Photos, etc.

We would like to test different scenarios that the API offers:
1. Retrieve the first 10 Mars photos made by "Curiosity" on 1000 Martian sol.
2. Retrieve the first 10 Mars photos made by "Curiosity" on Earth date equal to 1000 Martian sol.
3. Retrieve and compare the first 10 Mars photos made by "Curiosity" on 1000 sol and on Earth date equal to 1000 Martian sol.
4. Validate that the amounts of pictures that each "Curiosity" camera took on 1000 Mars sol is not greater than 10 times the amount taken by other cameras on the same date.

# What could be improved in this project?

- Hash API Key in order to improve security.
- Frontend could be optimized and refactored in order to display the photos with a more detailed view. 
- Warnings because of duplicated IDs when displaying pictures side by side (will be fixed in the next push).
- Always open to advice from colleagues so shoot away!

## How to run this test?

Download/clone this project and execute the following commands:

- ### `npm install`
- ### `npm start`
