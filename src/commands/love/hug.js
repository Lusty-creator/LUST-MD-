// .hug command - Hug interaction
module.exports = {
  name: 'hug',
  description: 'Hug someone',
  usage: '.hug [@user]',
  category: 'Love',
  execute(message, args) {
    if (!args || !args.includes('@')) {
      return '❌ Please mention someone!\n\nUsage: .hug @user';
    }
    
    return `
╔════════════════════════════╗
║   Hug! 🤗                  ║
╚════════════════════════════╝

🤗 Warm hug!

+50 Love Points
+10 Couple Points
+5 XP

💕 Feel the love! 💕

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};