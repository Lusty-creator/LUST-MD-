// WhatsApp Message Formatter
class MessageFormatter {
  static formatProfile(userId) {
    return `
╔════════════════════════════╗
║   Player Profile           ║
╚════════════════════════════╝

👤 ID: ${userId}
⚡ Level: 45
💰 Balance: 1,250,000 coins
❤️ Status: Married
👨‍👩‍👧‍👦 Family: Shadow Dynasty

📊 Stats:
• Love Points: 2,450
• Battles Won: 87
• Days Active: 245

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
}

module.exports = MessageFormatter;