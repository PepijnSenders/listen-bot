import yargs from 'yargs';
import Ingredient from './lib/Ingredient';
import Bot from './lib/Bot';

const argv = yargs.argv;

var ingredient = new Ingredient(argv.ingredient);
var bot = new Bot(ingredient.fetch());

bot.getNewPosts();
