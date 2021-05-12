const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var embed2 = new Discord.MessageEmbed()
        .setTitle('Merhaba, ' + message.author.tag)
        .setDescription('Bu Komudu Sadece Sahibim Kullanabilir!')
        .setColor('RED')

    if(message.author.id !== "794721378724741120") return message.channel.send(embed2)
    message.delete();
    message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Reboot').setDescription('Eğer Kabul Ediyorsan => `onay` <=').setFooter('15 Saniye İçinde İptal!', client.user.avatarURL).setTimestamp())
    .then(() => {
    message.channel.awaitMessages(response => response.content === 'onay', {
    max: 1,
    time: 15000,
    errors: ['time'],
    })
    .then((collected) => {
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('```YENIDEN BASLATILIYORUM```').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter(message.author.tag, message.author.displayAvatarURL()).setTimestamp()).then(msg => {
    console.log(`Yeniden Başlatılıyor...`);
    process.exit(0);
    })
    })
    .catch(() => {
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Yeniden Başlatma').setDescription('Komut İptal Edildi!').setFooter(message.author.tag, message.author.displayAvatarURL()).setTimestamp())
    });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['trbot'],
  permLevel: 4
};

exports.help = {
  name: 'treboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};