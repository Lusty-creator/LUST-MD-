// .divorce command - End relationship
module.exports = {
  name: 'divorce',
  description: 'End your relationship',
  usage: '.divorce',
  category: 'Marriage',
  execute(message) {
    return `
╔════════════════════════════╗
║   Divorce Confirmation     ║
╚════════════════════════════╝

⚠️ Are you sure?

This action will:
• End your marriage
• Divide assets equally
• Return to single status
• Reset couple level

❓ Type .confirmdiv to confirm
❌ Type .cancel to cancel

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};