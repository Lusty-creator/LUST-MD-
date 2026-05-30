// .adopt command - Adopt family member
module.exports = {
  name: 'adopt',
  description: 'Adopt someone as family',
  usage: '.adopt [@user]',
  category: 'Family',
  execute(message, args) {
    if (!args || !args.includes('@')) {
      return '❌ Please mention someone to adopt!\n\nUsage: .adopt @user';
    }
    
    return `
╔════════════════════════════╗
║   Adoption Request         ║
╚════════════════════════════╝

✅ Adoption request sent!

👨‍👩‍👧‍👦 Waiting for their response...

⏰ Expires in: 24 hours

💬 They can:
.acceptadopt - Accept
.declineadopt - Decline

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};