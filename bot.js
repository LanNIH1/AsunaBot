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

const exampleEmbed = new EmbedBuilder()
	.setColor(9370DB)
	.setTitle('SGO CBT2 樓層情報')
	.setAuthor({ name: 'Argo', iconURL: 'https://imgur.com/LKMOgsP.jpg', url: 'https://swordgale.online/' })
	.setDescription('SGO CBT2 樓層怪物情報（非完整）')
	.setThumbnail('https://imgur.com/bDEucFO.jpg')
	.addFields(
		{ name: '封測樓層說明', value: '封測共開了六層，無奈實力不足只踏足了四層，且有許多未收集完整的情報' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '第一層', value: '大草原', inline: true },
		{ name: '第二層', value: '猛牛園', inline: true },
    { name: '第三層', value: '兒童樂園', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '第四層', value: '菇菇園', inline: true },
		{ name: '第五層', value: '圓明園', inline: true },
    { name: '第六層', value: '封測限定對戰塔', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'writen by Argo', iconURL: 'https://imgur.com/bDEucFO.jpg' });

channel.send({ embeds: ['SGO 樓層'] });

