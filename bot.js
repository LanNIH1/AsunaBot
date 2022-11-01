// 載入env變量
require('dotenv').config();
require("dotenv").config();
// 健康狀態
require('./jsHome/healthCheck.js').start();
require("./jsHome/healthCheck.js").start();
// 定時作業工具
const cornTask = require('./jsHome/cronTask.js');
const cornTask = require("./jsHome/cronTask.js");
// discord library
const Discord = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client();

// 聊天字典(DB)
const messageData = require('./messageData.json');
const messageData = require("./messageData.json");

//嵌入內容
const { EmbedBuilder } = require('discord.js');


// 登入
client.login(process.env.TOKEN);

// 登入成功後觸發一次
client.on('ready', () => {
  cornTask.cronCallMysell();
  console.log(`Logged in as ${client.user.tag}!`);
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

