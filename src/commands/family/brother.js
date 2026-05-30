// .brother command - View family member profile
module.exports = {
  name: 'brother',
  description: 'View family member profile',
  usage: '.brother [@user]',
  category: 'Family',
  execute(message, args, client) {
    const userId = message.sender.id;
    
    return `
╔════════════════════════════╗
║   Brother Profile          ║
╚════════════════════════════╝

👨‍👦 Player ID: ${userId}
⚡ Level: 25
👥 Family: Shadow Dynasty
📅 Member Since: 145 days
🟢 Status: Online

❤️ Love Points: 1,250
🏆 Battles Won: 45

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};