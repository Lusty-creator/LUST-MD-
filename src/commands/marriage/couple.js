// .couple command - View couple profile
module.exports = {
  name: 'couple',
  description: 'View your couple profile',
  usage: '.couple',
  category: 'Marriage',
  execute(message) {
    return `
╔════════════════════════════╗
║   Couple Profile           ║
╚════════════════════════════╝

❤️ Status: Married
💑 Together: 145 days
💕 Love Points: 2,450
🏆 Rank: #1 Couple

📅 Anniversary: 30 days
💑 Couple Level: 45
🎁 Rewards Unlocked: 12

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};