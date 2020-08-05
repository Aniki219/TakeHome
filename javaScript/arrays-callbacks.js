// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];

  /* Request 1: .forEach()
  The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
  */
  const displayNames = [];
  zooAnimals.forEach(animal => displayNames.push(`Name: ${animal.animal_name}, Scientific: ${animal.scientific_name}.`));
  console.log(displayNames);

  /* Request 2: .map()
  The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.
  */

  const lowCaseAnimalNames = zooAnimals.map((animal) => animal.animal_name.toLowerCase());
  console.log(lowCaseAnimalNames);

  /* Request 3: .filter()
  The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.
  */
  const lowPopulationAnimals = zooAnimals.filter((animal) => animal.population < 5)
  console.log(lowPopulationAnimals);

  /* Request 4: .reduce()
  The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.
  */
  let populationTotal = zooAnimals.reduce((acc, obj) => acc + obj.population, 0)
  console.log(populationTotal);

  // /* Request 5: Higher Order Functions

  //    Step 1: In your own words please descibe what a "Higher order function" is
  //    Your Answer:

  //    JavaScript treats functions as Objects, allowing them to be assigned as values or operated upon by other functions.
  //    A function is considered "Higher order" either if it accepts another function as an input parameter, or if it returns a function as output.
  //    The .forEach() array method is an example of a higher order function because it accepts a callback function as an input.
  //    This method returns the cummulative result of passing each element of the array to the callback function individually.

  //    Step 2: Below, please create a working example of a higher order function (including an accompanying callback function).
        //Here we'll use the forEach method to compute the distance from each element of an array of points to a point named 'home'.
        //We could ofcourse make a Point class but in this example I am keeping it simple.
        const home = {tag: "Home", x:2, y:-2};
        const locations = [
          {tag: "Mall", x:1, y:4},
          {tag: "Post Office", x:4, y:3},
          {tag: "Library", x:-3, y:0},
        ];

        //Higher order function, forEach.
        locations.forEach((loc) => {
          console.log(`${loc.tag}: ${computeDistance(loc, home).toFixed(1)}m`)
        });

        //Callback function
        //Computes the distance between two point objects which have an x and a y property
        function computeDistance(pointA, pointB) {
          let dx = pointA.x - pointB.x;
          let dy = pointA.y - pointB.y;
          return Math.sqrt(dx * dx + dy * dy);
        }
  // */
