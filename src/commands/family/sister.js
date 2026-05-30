// .sister command - View family member profile
module.exports = {
  name: 'sister',
  description: 'View family member profile',
  usage: '.sister [@user]',
  category: 'Family',
  execute(message, args, client) {
    const userId = message.sender.id;
    
    return `
╔════════════════════════════╗
║   Sister Profile           ║
╚════════════════════════════╝

👩‍👧 Player ID: ${userId}
⚡ Level: 22
👥 Family: Shadow Dynasty
📅 Member Since: 120 days
🟢 Status: Online

❤️ Love Points: 980
🏆 Battles Won: 38

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};