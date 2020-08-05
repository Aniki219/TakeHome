/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.
// Note: For this exercise DO NOT use the class keyword.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts parameters and assigns properties for length, width, and height
*/
function CuboidMaker(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
}

/* == Step 2: Volume Method ==
  Create a method on CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height

  Formula for cuboid volume: length * width * height
*/
CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
};

/* == Step 3: Surface Area Method ==
  Create another method on CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height.
  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};

/* == Step 4: Create a new instance of the CuboidMaker object ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.
*/
const cuboid = new CuboidMaker(4, 5, 5);

/* == Step 5: In your own words, explain why the prototype is used and why it is best practice to create methods on the prototype.
  Your Explanation:
  The constructor is used to define all of the properties an Object will possess.
  While it is possible to define methods within the constructor, adding methods on the prototype allows for better readability as the methods and properties are visually compartmentalized into sections.
  Additionally, adding methods on the prototype requires less memory because instead of creating duplicate instances each method inside of every Object of the same type, each Object will simply point to the same instance of the method.
*/

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
