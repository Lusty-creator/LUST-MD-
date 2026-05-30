// .marry command - Propose marriage
module.exports = {
  name: 'marry',
  description: 'Propose marriage',
  usage: '.marry [@user]',
  category: 'Marriage',
  execute(message, args) {
    if (!args || !args.includes('@')) {
      return '❌ Please mention someone to marry!\n\nUsage: .marry @user';
    }
    
    return `
╔════════════════════════════╗
║   Marriage Proposal        ║
╚════════════════════════════╝

💍 Will you marry me?

✅ Proposal sent!

⏳ Waiting for response...
⏰ Expires in: 24 hours

They can:
.acceptmarry - Accept
.declinemarry - Decline

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};