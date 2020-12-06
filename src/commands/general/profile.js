const {Command} = require('discord-akairo')

module.exports = class extends Command {
    constructor() {
        super('general__profile', {
            aliases: ['프로필', 'profile'],
            args: [
                {
                    default: (msg) => msg.author,
                    type: 'user',
                    id: 'user'
                }
            ]
        })
    }

    async exec(msg, {user: {id}}) {
        const u = await this.client.db('users').where({id}).then(r=>r[0])
        if (!u) {
            if (msg.author.id === id) {
                await msg.channel.send('프로필이 등록되지 않았습니다. DM을 확인해주세요.')
                await msg.author.send(`"${this.client.commandHandler.prefix}계정" 명령어로 프로필을 등록하세요.`)
            } else {
                await msg.channel.send('해당 유저는 페이몬 서비스에 가입하지 않았습니다.')
            }


            return
        }
        const Name = u.name, Money = u.money, Gem = u.gem, Molv = u.Mlv, CharacterLvl = u.Clv, Damage = u.damage, Defence = u.defence, NowHp = u.nowhp, Maxhp = u.maxhp
        const res = await this.client.db('characters').where({id, have:true})
        console.log(res)
    }
}