// .kiss command - Kiss interaction
module.exports = {
  name: 'kiss',
  description: 'Kiss someone',
  usage: '.kiss [@user]',
  category: 'Love',
  execute(message, args) {
    if (!args || !args.includes('@')) {
      return '❌ Please mention someone!\n\nUsage: .kiss @user';
    }
    
    return `
╔════════════════════════════╗
║   Kiss! 😘                 ║
╚════════════════════════════╝

💋 Kissed!

+75 Love Points
+15 Couple Points
+10 XP

💝 Sweet moment! 💕

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};