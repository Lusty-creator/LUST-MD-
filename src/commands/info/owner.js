// .owner command - Contact owner
module.exports = {
  name: 'owner',
  description: 'Get owner contact information',
  usage: '.owner',
  category: 'Info',
  execute(message) {
    return `
╔════════════════════════════╗
║   Owner Contact 👑         ║
╚════════════════════════════╝

📱 WhatsApp: +1 (849) 444-4305
👤 Name: LUST DEV
⏰ Available: 24/7

💬 Contact for:
• Bug Reports
• Feature Requests
• Support Issues
• Partnerships

⚡ Response Time: <1 hour

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};