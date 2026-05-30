// .topfamilies command - Top families leaderboard
module.exports = {
  name: 'topfamilies',
  description: 'View top families leaderboard',
  usage: '.topfamilies',
  category: 'Leaderboard',
  execute(message) {
    return `
╔════════════════════════════╗
║   Top Families 👨‍👩‍👧‍👦     ║
╚════════════════════════════╝

🥇 #1: Level 45 | 8 Members
      Balance: 1.25M coins

🥈 #2: Level 42 | 7 Members
      Balance: 980K coins

🥉 #3: Level 39 | 6 Members
      Balance: 750K coins

4️⃣  #4: Level 36 | 5 Members
      Balance: 620K coins

5️⃣  #5: Level 33 | 5 Members
      Balance: 480K coins

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};