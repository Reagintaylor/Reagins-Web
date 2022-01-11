const { Food } = require('../models');

const foodData = [
    {
      dish_name: "Gingerbread Cookies",
      description: "Delicious cookies to bring warmth to your holiday season!",
      ingredients: `3/4 cup butter, softened, 1 cup packed brown sugar, 1 large egg room temperature, 3/4 cup molasses, 4 cups all-purpose flour, 2 teaspoons ground ginger,
      1-1/2 teaspoons baking soda, 1-1/2 teaspoons ground cinnamon, 3/4 teaspoon ground cloves, 1/4 teaspoon salt, Vanilla frosting of your choice, Red and green paste food coloring`,
      has_nuts: false
    },
    {
      dish_name: "Birthday Cake",
      description: "The perfect cake to blow the candles out on!",
      ingredients: `1 cup unsalted butter room temperature, 1/3 cup vegetable oil, 1-3/4 cups sugar, 3 large eggs, room temperature, 3 large egg whites, room temperature, 1 tablespoon vanilla extract, 3 cups cake flour, 2 teaspoons baking powder, 1 teaspoon salt, 1 cup buttermilk, room temperature, 1/4 cup rainbow sprinkles
      BUTTERCREAM: 1-1/2 cups unsalted butter, softened, 4-1/2 cups confectioners' sugar, sifted, 3 tablespoons heavy whipping cream, 2 teaspoons clear vanilla extract, Soft pink paste food coloring`, 
      has_nuts: false
    },
    {
      dish_name: "Meatballs",
      description:
        "Quick and easy for any party",
      ingredients: `2 large eggs, 1/4 cup water, 1 small onion, finely chopped, 1-1/3 cups soft bread crumbs, 2/3 cup grated Parmesan cheese, 2 garlic cloves, minced, 2 teaspoons Italian seasoning, 1-1/2 teaspoons salt, 1/4 teaspoon pepper, 2 pounds ground beef`,
      has_nuts: false
    },
    {
      dish_name: "Oreo truffles",
      description: "Sweet tooth snacks for everyone to enjoy",
      ingredients: `1 (16 ounce) package OREO Chocolate Sandwich Cookies divided,
      1 (8 ounce) package PHILADELPHIA Cream Cheese, softened,
      2 (8 ounce) packages BAKER'S Semi-Sweet Baking Chocolate, melted`,
      has_nuts: false
    },
    {
      dish_name: "Pigs in a blanket",
      description: `Cozy sausage wrapped in a blanket of crescent rolls`,
      ingredients: `1 tube (8 ounces) refrigerated crescent rolls, 8 lil smokes smoked sausages, 1 large egg lightly beaten, 1 tablespoon water`,
      has_nuts: false
    },
    {
      dish_name: "Peanut Caramel Slice ",
      description:
        `peanut caramel slice`,
      ingredients: ` Base 125 g butter softened, ½ cup sugar, 1 egg, 1 cup plain flour, 2 Tbsp custard powder, ¼ cup self-raising flour, Toppings: ½ cup brown sugar, 2 Tbsp golden syrup 90g butter, 150g toasted peanuts`,
      has_nuts: true
    },
  ]

const seedFood = () => Food.bulkCreate(foodData);
module.exports = seedFood;

