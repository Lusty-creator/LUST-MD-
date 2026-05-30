// .richest command - Richest players
module.exports = {
  name: 'richest',
  description: 'View richest players',
  usage: '.richest',
  category: 'Leaderboard',
  execute(message) {
    return `
╔════════════════════════════╗
║   Richest Players 💰       ║
╚════════════════════════════╝

🥇 #1: 5,000,000 coins
🥈 #2: 4,250,000 coins
🥉 #3: 3,750,000 coins
4️⃣  #4: 3,200,000 coins
5️⃣  #5: 2,850,000 coins

💎 Total Server Wealth:
   87,500,000 coins

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};