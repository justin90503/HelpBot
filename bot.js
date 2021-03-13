require("dotenv").config()

const Discord = require ("discord.js")
const client = new Discord.Client()

const BOT_PREFIX = "$"

client.on("ready", () => {
    console.log("We are online!!!!")
});

client.on ("message", msg => {
    if (msg.content == '$ping') {
        msg.reply('Pong!');
    }
    if(msg.content === "Embed") {
        const embedmsg = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(`${msg.author.tag})`, msg.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Embed Is Fun')
        .setDescription('I Have No Idea')
        .addField('Field Title', 'Field Des')
        .addField('Yeet', 'We go YEET!!!')
        .addFields({ name: 'TITLE', value: 'Des'},
                   { name: '/u2000', value: '**test** | __test__ | ~test~ | test' },
                   { name: 'Inline Field', value: 'Inline Des', inline: true }
                 )
        .setTimestamp()
        .setFooter('IM AMAZING')
        msg.channel.send(embedmsg);     
       }
});

client.on("message", msg => {
    if (msg.content == "I love you") {
        msg.react("❤️")
    }
})

client.login(process.env.BOT_TOKEN)