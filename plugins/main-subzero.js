function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd
} = require("../command");
cmd({
  'pattern': 'hansinc',
  'desc': "All About The Bot & Dev",
  'category': 'fun',
  'react': '🦄',
  'filename': __filename
}, async (_0x1d77c6, _0x3bc605, _0x33505d, {
  reply: _0x149ecd
}) => {
  try {
    await _0x1d77c6.sendMessage(_0x33505d.chat, {
      'image': {
        'url': "https://i.ibb.co/VvQnKvV/hanstztech.jpg"
      },
      'caption': "  *⟣────────────⟢*\n    *[ • Developer: 𝐻𝐴𝑁𝑆𝑇𝑍 ]*\n *⟣────────────•⟢*\n              \n      *⟣┈───────────────⟢*\n            🗂️ *REPOSITORY*\n       https://github.com/mrhanstz/MATRIX-XMD\n      \n      *⟣┈───────────────•*\n            🔗 *PROJECT NAME*\n           MATRIX-XMD W.A BOT\n      \n      *⟣┈───────────────•*\n             👨‍💻 *DEVELOPER*\n     https://github.com/mrhanstz\n       \n      *⟣┈───────────────•*\n             🧮 *RELEASE DATE*\n            15 December 2024 \n       \n      *⟣┈───────────────•*\n            📩 *SUPPORT GROUP* \n      https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31\n    \n      *⟣┈───────────────•*\n           🎀 *SUPPORT CHANNEL*\n      https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31\n        \n        ◦🪄  Hit Me Here :wa.me/255760774888* \n      *⟝┈───────────────⟞*\n        *⟣────────────•⟢*\n    ".trim()
    }, {
      'quoted': _0x3bc605
    });
  } catch (_0x175db9) {
    console.error(_0x175db9);
    _0x149ecd("❌ *An error occurred while fetching the family list. Please try again.*");
  }
});