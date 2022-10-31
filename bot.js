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

//嵌入內容
const { EmbedBuilder } = require('discord.js');

//前綴
const prefix = require('./jsHome/prefix.json');

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

client.on('message',msg => {
 
  //前置判斷
  try{
    if (!msg.guild || !msg.member) return;
    if (!msg.member.user) return;
    if (msg.member.user.bot) return;
  } catch (err) {
    return;
  }

})
//字串分析
try {
  let temPrefix = "-1";
  const prefixED = Object.keys(prefix);//前綴符號定義
  prefixED.forEach(element => {
    if (msg.content.substring(0, prefix[element].Value.length) === prefix[element].Value) {
      temPrefix = element;
    }
  });

  if(temPrefix === '-1')return;//無符合前綴則跳出
  else {
    const cmd = msg.content.substring(prefix[temPrefix].Value.length).split(' ');//以空白分割
  };


switch(temPrefix) {
  case '1':
    switch(cmd[1]) {
      export.HelpMessage4 = function (RichEmbed, callback) {
const embed = new Discord.MessageEmbed()
      .setColor('9370DB')
      .setTitle('SGO CBT2 樓層情報')
      .setAuthor('Argo', 'https://imgur.com/LKMOgsP.jpg', 'https://swordgale.online/')
      .setDescription('SGO CBT2 樓層怪物情報（非完整）')
      .setThumbnail('https://imgur.com/bDEucFO.jpg')
      .addField('封測樓層說明', '封測共開了六層，無奈實力不足只踏足了四層，且有許多未收集完整的情報')
      .addField('\u200B', '\u200B')
      .addField('第一層', '大草原', true)
      .addField('第二層', '猛牛園', true)
      .addField('第三層', '兒童樂園', true)
      .addField('\u200B', '\u200B')
      .addField('第四層', '菇菇園', true)
      .addField('第五層', '圓明園', true)
      .addField('第六層', '封測限定對戰塔', true)
      .setImage('https://i.imgur.com/AfFp7pu.png')
      .setTimestamp()
      .setFooter('writen by Argo', 'https://imgur.com/bDEucFO.jpg');
    callback(embed);
      }};



      case 'floor':
        MessageManager.HelpMessage4(Discord.RichEmbed, function
          (embed) {
            msg.channel.send(embed);
          })
          break;
          
