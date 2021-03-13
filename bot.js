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
})

client.on("message", msg => {
if(msg.content === "Embed") {
    const embedmsg = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true }))
    .setTitle('This is a Test')
    .setDescription('My first Embed Test')
    .addField('Amazing', 'Cool')
    .addField('Sus Noodles', 'Server')
    .addFields({ name: 'Test', value: 'server'},
               { name: 'Ive', value: 'Done Something' },
               { name: 'Cool', value: 'fun', inline: true }
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
});

client.login(process.env.BOT_TOKEN)