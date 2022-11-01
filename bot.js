// 載入env變量
require("dotenv").config();
// 健康狀態
require("./jsHome/healthCheck.js").start();
// 定時作業工具
const cornTask = require('./jsHome/cronTask.js');
// discord library
const Discord = require("discord.js");
const client = new Discord.Client();

// 聊天字典(DB)
const messageData = require("./messageData.json");
//嵌入內容
const { EmbedBuilder } = require("discord.js");


// 登入
client.login(process.env.TOKEN);

// 登入成功後觸發一次
client.on("ready", () => {
	cornTask.cronCallMysell();
	client.user.setActivity("輸入 亞絲娜 help 可以看到指令喔~", {
		type: "WATCHING",
	});
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

client.on('message', message => {
  //メッセージを入る
  if (message.content === 'sgo floor') {
    const embed = new Discord.MessageEmbed()
    //タイトルを設定する
    .setTitle('SGO CBT2 樓層怪物一覽')
    //エっジカーラーを設定する
    .setColor(0x660099)
    //内容を設定する
    .setDescription(
      '**資料仍有缺漏，僅供參考**' + '\n' + '\n' +'\n' +
      '－－－－－－－－－' + '\n' + '\n' +  '\n' +
      '第一層：大草原' + '　　' +'\n' + '\n' +
      '第二層：猛牛園' + '　　' + '\n' + '\n' +
      '第三層：兒童樂園' + '　　' +'\n' + '\n' +
      '第四層：蘑菇園' + '　　' + '\n' + '\n' +
      '第五層：圓明園' + '　　' +'\n' + '\n' +
      '第六層：封測限定對戰塔' + '　　' + '\n' + '\n') 
    //作者のアイコン、タイトル、url
    .setAuthor('Argo', 'https://imgur.com/bDEucFO.jpg', 'https://swordgale.online/')
    //右上のサムネイルがどこかわからない
    //.setThumbnail(https://imgur.com/LKMOgsP.jpg)
    //下の文字、画像
    .setFooter('Writen by Argo','https://imgur.com/bDEucFO.jpg')
    //時間表示
    .setTimestamp(Date.now())
    //タイトルURL
    //.setURL('https://www.youtube.com/');
    //設定圖片
    .setImage('https://imgur.com/pdA0tf1.jpg');
    message.channel.send(embed);
  }});

    
  client.on('message', message => {
    //メッセージを入る
    if (message.content === 'sgo help') {
      const embed = new Discord.MessageEmbed()
      //タイトルを設定する
      .setTitle('SGO CBT2 資訊一覽')
      //エっジカーラーを設定する
      .setColor(0x660099)
      //内容を設定する
      .setDescription(
        '**各種資訊導引**' + '\n' + '\n' +  '\n' + '\n'+
        '**樓層指南**' +'\n' +
        'sgo floor' + '\n' + '\n' +
        '**Makushi的攻略情報**' +'\n' +
        '新手鍛造入門' + '　　' +'前期短刀維生' + '　　' + '開局走向' +'\n' + '\n' + '\n'+
        '**資料仍有缺漏，僅供參考**' + '\n' + '\n' +'\n' ) 
      //作者のアイコン、タイトル、url
      .setAuthor('Argo', 'https://imgur.com/bDEucFO.jpg', 'https://swordgale.online/')
      //右上のサムネイルがどこかわからない
      .setThumbnail('https://imgur.com/pdA0tf1.jpg')
      //下の文字、画像
      .setFooter('Writen by Argo','https://imgur.com/bDEucFO.jpg')
      //時間表示
      .setTimestamp(Date.now())
      //タイトルURL
      //.setURL('https://www.youtube.com/');
      //設定圖片
      //.setImage('https://imgur.com/pdA0tf1.jpg');
      message.channel.send(embed);
    }});
  
