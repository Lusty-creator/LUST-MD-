// .help command - Show all commands
module.exports = {
  name: 'help',
  description: 'Show all available commands',
  usage: '.help',
  category: 'Info',
  execute(message) {
    return `
╔════════════════════════════╗
║   LUST MD Commands 📚      ║
╚════════════════════════════╝

*💍 Marriage*
.marry .acceptmarry .couple .divorce

*❤️ Love*
.love .kiss .hug .date

*👶 Family*
.brother .sister .family .familytree
.adopt .children

*🎮 Games*
.couplequiz .couplebattle .familyquest

*🏆 Leaderboards*
.topcouples .topfamilies .richest

*📱 Info*
.owner .contact .help

✨ POWERED BY LUST DEV
Beyond the clouds, beyond the limits ✨
    `;
  }
};