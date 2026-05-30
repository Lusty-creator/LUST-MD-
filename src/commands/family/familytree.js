// .familytree command - View family lineage
module.exports = {
  name: 'familytree',
  description: 'View family lineage',
  usage: '.familytree',
  category: 'Family',
  execute(message) {
    return `
╔════════════════════════════╗
║   Family Tree              ║
╚════════════════════════════╝

🌳 Your Complete Family Lineage

👑 Grandparents: Not set
👨‍👩‍👧‍👦 Parents: Not set
👤 Siblings: 2 members
👶 Children: Noah, Mia (2)
👨‍👩‍👧 Extended Family: 3 members

Total: 8 Family Members

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};