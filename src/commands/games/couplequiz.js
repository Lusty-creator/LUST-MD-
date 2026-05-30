// .couplequiz command - Couple quiz game
module.exports = {
  name: 'couplequiz',
  description: 'Play couple quiz game',
  usage: '.couplequiz',
  category: 'Games',
  execute(message) {
    return `
╔════════════════════════════╗
║   Couple Quiz 💑           ║
╚════════════════════════════╝

How well do you know each other?

❓ Question 1/10
⏱️ Time: 30 seconds

💯 Points per correct: +100
🏆 Win streak bonus

Good luck! 🍀

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};