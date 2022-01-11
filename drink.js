const { Drinks } = require('../models');

const drinksData = [
    {
      drink_name: "Mojito",
      description: "Minty refreshment",
      ingredients: "Fresh mint, white rum, simple syrup, lime juice, club soda or sparkling water, ice",
      hasAlcohol: true
    },
    {
      drink_name: "Eggnog",
      description: "eggnog",
      "ingredients": `6 large egg yolks, 3/4 cup sugar, 2 cups milk, 2 whole cloves, Pinch cinnamon, 1 cup heavy cream, 1 teaspoon freshly grated nutmeg (lightly packed), 1 1/2 teaspoons vanilla extract, 2 tablespoons bourbon, or to taste, 2 tablespoons rum, or to taste, 4 egg whites, optional`,
      hasAlcohol: false
    },
    {
      drink_name: "Hot Chocolate",
      description: "Rich chocolatey goodness",
      ingredients: "1 Swiss Miss hot chocolate packet, milk or water",
      hasAlcohol: false
    },
    {
      drink_name: "Boozy Grinch Punch",
      description: "boozy grinch punch",
      ingredients: `1 (0.13-oz.) packet Kool-Aid Lemon Lime mix, 4 c.  water, 4 c. ice, 3 c. lemon-lime soda, 2 c. pineapple juice, 2 c. vodka, 1 c. ginger ale, Lime wedges, for rimming, Red sanding sugar, for rimming `,
      hasAlcohol: true
    },
    {
      drink_name: "Perfect Mudslide",
      description: "perfect mudslide",
      ingredients: `Chocolate syrup, for glass, 4 oz. vodka, 2 oz. Kahlua, 2 oz. Baileys, 4 c. heavy cream, Ice, Chocolate shavings, for garnish`,
      hasAlcohol: false
    },
    {
      drink_name: "Apple Ginger Sour Mocktail with Rosemary",
      description: "for kids",
      ingredients: `1/2 tablespoon cranberry juice concentrate ,1/2 tablespoon fresh lemon juice, 1/2 ounce whiskey sour mixer, 1-ounce maple whiskey sour mixer, 3 1/2  ounces apple ginger juice, garnish with a sprig of fresh rosemary, ice`,
      hasAlcohol: true
    },
  ]

const seedDrink = () => Drinks.bulkCreate(drinksData);
module.exports = seedDrink;

