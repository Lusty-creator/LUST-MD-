// .love command - Send love points
module.exports = {
  name: 'love',
  description: 'Send love points',
  usage: '.love [@user]',
  category: 'Love',
  execute(message, args) {
    if (!args || !args.includes('@')) {
      return '❌ Please mention someone!\n\nUsage: .love @user';
    }
    
    return `
╔════════════════════════════╗
║   Love Sent ❤️             ║
╚════════════════════════════╝

💕 +50 Love Points sent!

🎁 You received bonus:
+10 Couple Points
+5 XP

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};