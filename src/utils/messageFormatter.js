// WhatsApp Message Formatter
// No character names, just game functions

class MessageFormatter {
  static profile(userId) {
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

  static couple(player1, player2) {
    return `
╔════════════════════════════╗
║   Couple Profile           ║
╚════════════════════════════╝

❤️ Player 1 ID: ${player1}
❤️ Player 2 ID: ${player2}

💑 Status: Married
📅 Together: 145 days
💕 Love Points: 2,450
🏆 Rank: #1 Couple

🎯 Next Anniversary: 30 days

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }

  static family(familyName, membersCount) {
    return `
╔════════════════════════════╗
║   Family Profile           ║
╚════════════════════════════╝

👨‍👩‍👧‍👦 Family: ${familyName}
📊 Members: ${membersCount}
⚡ Level: 45
💰 Balance: 1,250,000 coins
🏆 Rank: #1

👑 Leader: Admin
📅 Founded: 145 days ago

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }

  static leaderboard(type) {
    if (type === 'couples') {
      return `
╔════════════════════════════╗
║   Top Couples              ║
╚════════════════════════════╝

🥇 #1: 2,450 Love Points
🥈 #2: 2,120 Love Points
🥉 #3: 1,890 Love Points
4️⃣ #4: 1,650 Love Points
5️⃣ #5: 1,420 Love Points

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
      `;
    }
    
    if (type === 'families') {
      return `
╔════════════════════════════╗
║   Top Families             ║
╚════════════════════════════╝

🥇 #1: Level 45 - 1.25M coins
🥈 #2: Level 42 - 980K coins
🥉 #3: Level 39 - 750K coins
4️⃣ #4: Level 36 - 620K coins
5️⃣ #5: Level 33 - 480K coins

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
      `;
    }
  }

  static game(gameType) {
    if (gameType === 'quiz') {
      return `
╔════════════════════════════╗
║   Couple Quiz              ║
╚════════════════════════════╝

❓ Question 1/10
⏱️ Time: 30 seconds

💯 Points per correct: +100

Good luck! 🍀

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
      `;
    }
  }
}

module.exports = MessageFormatter;
