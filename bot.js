// 載入env變量
require('dotenv').config();
// 健康狀態
require('./jsHome/healthCheck.js').start();
// 定時作業工具
const cornTask = require('./jsHome/cronTask.js');
// discord library
const Discord = require('discord.js');
const client = new Discord.Client();

// 聊天字典(DB)
const messageData = require('./messageData.json');

// 登入
client.login(process.env.TOKEN);

// 登入成功後觸發一次
client.on('ready', () => {
  cornTask.cronCallMysell();
  console.log(`Logged in as ${client.user.tag}!`);
});

// messageData 訊息查找&回答
client.on('message', msg => {
  for (let i = 0; i < messageData?.length; i++) {
    if (msg.content === messageData[i]?.content) {
      msg.reply(messageData[i]?.reply);
      break;
    }
  }
});


class embed{

  get color('##9370db')
  get title('SGO CBT 2 樓層情報')
  get field()
  get description('封測前四層樓層情報')

};


const embed = new Discord.MessageEmbed()
      .setColor('##9370db')
      .setTitle('SGO CBT 2 樓層情報')
      .setAuthor('Author', 'Author2', 'Author3')
      .setDescription('封測前四層樓層情報')
      .setThumbnail('thumbnail')
      .addField('Regular field title', 'Some value here')
      .addField('\u200B', '\u200B')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
msg.channel.send(embed);