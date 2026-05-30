// .family command - View family profile
module.exports = {
  name: 'family',
  description: 'View your family profile',
  usage: '.family',
  category: 'Family',
  execute(message) {
    return `
╔════════════════════════════╗
║   Family Profile           ║
╚════════════════════════════╝

👨‍👩‍👧‍👦 Family: Shadow Dynasty
📊 Members: 8
⚡ Level: 45
💰 Balance: 1,250,000 coins
👑 Leader: Admin
📅 Founded: 245 days ago
🏆 Rank: #1 Server

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};