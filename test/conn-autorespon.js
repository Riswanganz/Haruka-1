    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `
┌「 *Undang Bot ke Grup* 」
├ 7 Hari / Rp 5,000
├ 30 Hari / Rp 10,000
├ 60 Hari / Rp 15,000
├ 90 Hari / Rp 25,000
├ 100 Hari / Rp 30,000
├ izin sama owner = permanen
└────
https://instagram.com/memes.lucu01
`.trim(), '© Wanz', 'owner', ',owner', m)
    }
