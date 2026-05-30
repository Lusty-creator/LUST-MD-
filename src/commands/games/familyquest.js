// .familyquest command - Family adventure quest
module.exports = {
  name: 'familyquest',
  description: 'Start family adventure quest',
  usage: '.familyquest',
  category: 'Games',
  execute(message) {
    return `
╔════════════════════════════╗
║   Family Quest 🗺️          ║
╚════════════════════════════╝

📍 Quest: Treasure Hunt
🎯 Find 5 hidden treasures

⏳ Progress: [████░░░░░] 40%
👥 Team: 3/5 members
💰 Reward: 5000 coins
⏱️ Time: 1 hour

🏆 Difficulty: Hard
⭐ Completion: 40%

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};