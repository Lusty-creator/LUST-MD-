// .topcouples command - Top couples leaderboard
module.exports = {
  name: 'topcouples',
  description: 'View top couples leaderboard',
  usage: '.topcouples',
  category: 'Leaderboard',
  execute(message) {
    return `
╔════════════════════════════╗
║   Top Couples 💑           ║
╚════════════════════════════╝

🥇 #1: 2,450 Love Points
      145 days together

🥈 #2: 2,120 Love Points
      98 days together

🥉 #3: 1,890 Love Points
      78 days together

4️⃣  #4: 1,650 Love Points
      56 days together

5️⃣  #5: 1,420 Love Points
      42 days together

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};