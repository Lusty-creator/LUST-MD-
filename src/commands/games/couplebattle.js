// .couplebattle command - Couple battle game
module.exports = {
  name: 'couplebattle',
  description: 'Battle with your couple',
  usage: '.couplebattle [@partner]',
  category: 'Games',
  execute(message, args) {
    if (!args || !args.includes('@')) {
      return '❌ Please mention your partner!\n\nUsage: .couplebattle @user';
    }
    
    return `
╔════════════════════════════╗
║   Couple Battle ⚔️         ║
╚════════════════════════════╝

⚔️ BATTLE STARTED!

❤️ Your HP: 100
❤️ Their HP: 100

💪 Your Attack: +25 Damage
🛡️ Block Chance: 30%

🎮 Round 1 - Fight!

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};