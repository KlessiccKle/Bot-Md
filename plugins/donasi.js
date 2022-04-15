let handler = async (m, { conn, command }) => conn.sendHydrated(m.chat, `
┌ 「 Donasi • Pulsa 」
│ • Telkomsel: [081211006838]
│ • Telkomsel: [081375275038]
└──

┌ 「 Donasi • Non Pulsa 」
│ • OVO: [081375275038]
└──`.trim(), wm, fla + 'donasi', instagram, 'Instagram', null, null, [['Back To Menu', '.menu']], m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
