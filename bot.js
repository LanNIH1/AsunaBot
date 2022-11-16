// 載入env變量
require("dotenv").config();
// 健康狀態
require("./jsHome/healthCheck.js").start();
// 定時作業工具
const cornTask = require("./jsHome/cronTask.js");
// discord library
const Discord = require("discord.js");
const client = new Discord.Client();

// 聊天字典(DB)

const messageData = require("./messageData.json");

//嵌入內容
const { EmbedBuilder } = require("discord.js");


// messageData 訊息查找&回答
client.on("message", msg => {
  for (let i = 0; i < messageData?.length; i++) {
    if (msg.content === messageData[i]?.content) {
      msg.replay(messageData[i]?.reply);
      break;
    }
  }
});



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

client.on("message", message => {
  //メッセージを入る
  if (message.content === "sgo floor") {
    const embed = new Discord.MessageEmbed()
    //タイトルを設定する
    .setTitle("SGO CBT2 樓層怪物一覽")
    //エっジカーラーを設定する
    .setColor(0x660099)
    //内容を設定する
    .setDescription(
      "**資料仍有缺漏，僅供參考**" + "\n" + "\n" +"\n" +
      "指令請輸入「sgo xF」"+"\n" +"\n" +
      "－－－－－－－－－" + "\n" + "\n" +  "\n" +
      "第一層：大草原" + "　　" +"\n" + "\n" +
      "第二層：猛牛園" + "　　" + "\n" + "\n" +
      "第三層：兒童樂園" + "　　" +"\n" + "\n" +
      "第四層：蘑菇園" + "　　" + "\n" + "\n" +
      "第五層：圓明園" + "　　" +"\n" + "\n" +
      "第六層：封測限定對戰塔" + "　　" + "\n" + "\n") 
    //作者のアイコン、タイトル、url
    .setAuthor("Argo", "https://imgur.com/bDEucFO.jpg", "https://swordgale.online/")
    //右上のサムネイルがどこかわからない
    //.setThumbnail(https://imgur.com/LKMOgsP.jpg)
    //下の文字、画像
    .setFooter("Writen by Argo","https://imgur.com/bDEucFO.jpg")
    //時間表示
    .setTimestamp(Date.now())
    //タイトルURL
    //.setURL("https://www.youtube.com/");
    //設定圖片
    .setImage("https://imgur.com/pdA0tf1.jpg");
    message.channel.send(embed);
  }});

    
  client.on("message", message => {
    //メッセージを入る
    if (message.content === "sgo help") {
      const embed = new Discord.MessageEmbed()
      //タイトルを設定する
      .setTitle("SGO CBT2 資訊一覽")
      //エっジカーラーを設定する
      .setColor(0x660099)
      //内容を設定する
      .setDescription(
        "**各種資訊導引**" + "\n" + "\n" +  "\n" + "\n"+
        "**樓層指南**" +"\n" +
        "sgo floor" + "\n" + "\n" +
        "**Makusi的攻略情報**" +"\n" + "\n"+
        "請輸入「makusi XX」"+ "\n"+ "\n"+
        "新手鍛造入門" + "　　" +"前期短刀維生" + "　　" + "開局走向" +"\n" + "\n" + "\n"+
        "**資料仍有缺漏，僅供參考**" + "\n" + "\n" +"\n" ) 
      //作者のアイコン、タイトル、url
      .setAuthor("Argo", "https://imgur.com/bDEucFO.jpg", "https://swordgale.online/")
      //右上のサムネイルがどこかわからない
      .setThumbnail("https://imgur.com/pdA0tf1.jpg")
      //下の文字、画像
      .setFooter("Writen by Argo","https://imgur.com/bDEucFO.jpg")
      //時間表示
      .setTimestamp(Date.now())
      //タイトルURL
      //.setURL("https://www.youtube.com/");
      //圖片を設定する
      //.setImage("https://imgur.com/pdA0tf1.jpg");
      message.channel.send(embed);
    }});


    ///每一層資訊
    //第一層





/////SAO    






    client.on("message", message=> {
      if (message.content === "亞絲娜 轉生"){
        message.channel.send("https://imgur.com/TxQ6uhn.jpg")
      }}
        );

    client.on("message", message=> {
      if (message.content === "亞絲娜 help"){
        message.channel.send("```沒特別註明都是亞絲娜加一個空白鍵\n閃光穿刺、四重痛楚、努西、料理技能\nMusic Start、Special Stage、大螃蟹\nMVP、星屑飛濺、抱抱、洗澡\n骸骨獵殺者、否定、部長、晚餐\n笨蛋、母女、吃、騙人的吧、死人、好吃\n報廢、自主訓練、啾、轉生、晚安\n難吃、上香、重擊、克萊因、金色牛頭人\n啾啾、罵我、開心、微笑、決鬥、擁抱\n事後、得意、三角刺擊、感動、仰望\n聖母聖詠、登出、微笑、揉胸、接吻、生氣、閃耀魔眼\n桐人：\n　釣魚、星爆氣流斬、日蝕、水平四方斬、轉圈圈、騙人的吧、星爆、蜂鳴八度\n詩乃：\n　哼，我就知道會這樣、搧我耳光、詩乃（只有詩乃）、貓耳、Prone Shot\n莉法：\n　戰鬥、妖精之舞、打起精神、開心\n直葉：\n躺、直葉(只有直葉)\n有紀：\n　拜託你了、回眸一笑、Yeah、拔劍、跑、難過、聖母聖詠、登出、回頭、躲子彈、垂直四方斬\n愛麗絲：\n　綻放吧！花朵們！、旋轉吧！花朵們！、饅頭、起床\n西莉卡：\n　潑水、唱歌、落淚、觸手、臉紅\n幸\n莉茲貝特：\n開心```")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 聖母聖詠"){
        message.channel.send("https://i.imgur.com/HcPXs7G.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 四重痛楚"){
        message.channel.send("https://i.imgur.com/cp2SpMY.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 努西"){
        message.channel.send("https://i.imgur.com/JyncfQH.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 料理技能"){
        message.channel.send("https://i.imgur.com/ojblPbJ.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "桐人 星爆氣流斬"){
        message.channel.send("https://i.imgur.com/uI7NZFd.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 斜斬"){
        message.channel.send("https://i.imgur.com/T4XQqAf.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "桐人 日蝕"){
        message.channel.send("https://i.imgur.com/yvQS13N.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "桐人 水平四方斬"){
        message.channel.send("https://i.imgur.com/g5YMoTW.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 Music Start"){
        message.channel.send("https://i.imgur.com/hAqHbFW.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 Special Stage"){
        message.channel.send("https://i.imgur.com/UquWi3w.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 大螃蟹"){
        message.channel.send("https://i.imgur.com/jVyfKLr.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 洗澡"){
        message.channel.send("https://i.imgur.com/nFHsTpT.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "詩乃 Prone Shot"){
        message.channel.send("https://i.imgur.com/Az7qvQz.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "愛麗絲 綻放吧！花朵們！"){
        message.channel.send("https://i.imgur.com/zVcyuCu.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "愛麗絲 旋轉吧！花朵們！"){
        message.channel.send("https://i.imgur.com/EyDuRk4.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "愛麗絲 饅頭"){
        message.channel.send("https://i.imgur.com/RyAHZeO.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "莉法 妖精之舞"){
        message.channel.send("https://i.imgur.com/tdVpPEa.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 MVP"){
        message.channel.send("https://i.imgur.com/9j0i1be.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "詩乃 貓耳"){
        message.channel.send("https://imgur.com/JjSBAm5.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 星屑飛濺"){
        message.channel.send("https://imgur.com/Zh1WkFV.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "直葉"){
        message.channel.send("https://imgur.com/11XQfGR.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 抱抱"){
        message.channel.send("https://imgur.com/uFFlx2C.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 骸骨獵殺者"){
        message.channel.send("https://imgur.com/EYnpEqU.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 否定"){
        message.channel.send("https://i.imgur.com/VLPtpGO.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "西莉卡 潑水"){
        message.channel.send("https://i.imgur.com/W00uUDr.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 轉生"){
        message.channel.send("https://imgur.com/TxQ6uhn.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 部長"){
        message.channel.send("https://i.imgur.com/W00uUDr.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 笨蛋"){
        message.channel.send("https://imgur.com/kNTcSDr.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 母女"){
        message.channel.send("https://imgur.com/2Ac1h0t.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 吃"){
        message.channel.send("https://imgur.com/tOnq8ER.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 騙人的吧"){
        message.channel.send("https://imgur.com/yQkyfV0.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 死人"){
        message.channel.send("https://imgur.com/Quyd5Vf.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 好吃"){
        message.channel.send("https://imgur.com/i1VIA3b.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 難吃"){
        message.channel.send("https://imgur.com/Gs5gVpY.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 上香"){
        message.channel.send("https://imgur.com/ZFpDq75.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 重擊"){
        message.channel.send("https://imgur.com/JxOFEXP.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 克萊因"){
        message.channel.send("https://imgur.com/iKSv24t.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 金色牛頭人"){
        message.channel.send("https://imgur.com/sGDXqLW.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 啾啾"){
        message.channel.send("https://imgur.com/Os9AFMr.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "詩乃 搧我耳光"){
        message.channel.send("https://i.imgur.com/KXUOxyV.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "詩乃"){
        message.channel.send("https://i.imgur.com/wED7nV2.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 擁抱"){
        message.channel.send("https://i.imgur.com/bs1TyUx.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 開心"){
        message.channel.send("https://imgur.com/y0ycYdu.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 微笑"){
        message.channel.send("https://imgur.com/dWuQTZK.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 拜託你了"){
        message.channel.send("https://i.imgur.com/2NcTb6Y.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 回眸一笑"){
        message.channel.send("https://i.imgur.com/bGfZAHZ.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 Yeah"){
        message.channel.send("https://i.imgur.com/v62yVFP.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 拔劍"){
        message.channel.send("https://i.imgur.com/JbbpBHd.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 跑"){
        message.channel.send("https://i.imgur.com/skAWYcz.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 難過"){
        message.channel.send("https://i.imgur.com/HLYfi2i.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 聖母聖詠"){
        message.channel.send("https://i.imgur.com/tHx7Ibe.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 登出"){
        message.channel.send("https://i.imgur.com/1Dx9iKg.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 回頭"){
        message.channel.send("https://i.imgur.com/pJkZMdA.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 決鬥"){
        message.channel.send("https://i.imgur.com/vMnvUCI.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 擁抱"){
        message.channel.send("https://i.imgur.com/XmBBZld.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "莉法 戰鬥"){
        message.channel.send("https://i.imgur.com/YK25I8z.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 登出"){
        message.channel.send("https://imgur.com/pMsJVcy.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "桐人 釣魚"){
        message.channel.send("https://imgur.com/nwPSH9R.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 事後"){
        message.channel.send("https://imgur.com/PGWJiWw.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 得意"){
        message.channel.send("https://imgur.com/EP9WccE.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 三角刺擊"){
        message.channel.send("https://imgur.com/lxx0M9Q.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 感動"){
        message.channel.send("https://imgur.com/Fax8DY8.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 仰望"){
        message.channel.send("https://imgur.com/g88vGyo.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 笑顏"){
        message.channel.send("https://imgur.com/turLGah.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 揉胸"){
        message.channel.send("https://imgur.com/tDkXCdr.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "愛麗絲 起床"){
        message.channel.send("https://imgur.com/f7hZ5gG.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "桐人 轉圈圈"){
        message.channel.send("https://imgur.com/Kvedi4h.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "西莉卡 唱歌"){
        message.channel.send("https://imgur.com/A5mgrp9.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "桐人 騙人的吧"){
        message.channel.send("https://imgur.com/a/ZHGNhEr.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 剛睡醒"){
        message.channel.send("https://imgur.com/EjUszlq.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 接吻"){
        message.channel.send("https://imgur.com/ENm95Wx.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "幸"){
        message.channel.send("https://imgur.com/sOc3zY6.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "桐人 蜂鳴八度"){
        message.channel.send("https://imgur.com/UVdWrT4.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 生氣"){
        message.channel.send("https://imgur.com/Fpf4Rus.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "有紀 垂直四方斬"){
        message.channel.send("https://imgur.com/LOrQZcs.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "莉法 打起精神"){
        message.channel.send("https://imgur.com/vB74FES.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "直葉 躺"){
        message.channel.send("https://imgur.com/kls2oAJ.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "亞絲娜 閃耀魔眼"){
        message.channel.send("https://imgur.com/n2lv9CN.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "莉法 開心"){
        message.channel.send("https://imgur.com/pE3HB7p.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "西莉卡 觸手"){
        message.channel.send("https://imgur.com/RtNslSR.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "西莉卡 臉紅"){
        message.channel.send("https://imgur.com/bnLZ8us.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "莉茲貝特 開心"){
        message.channel.send("https://imgur.com/6XtF9aK.gif")
      }}
        )
    ;

///// 公車之恥相關指令







    client.on("message", message=> {
      if (message.content === "品質"){
        message.channel.send("https://imgur.com/v4vB21Z.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "被幹"){
        message.channel.send("https://imgur.com/5poV5HU.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "舔"){
        message.channel.send("https://imgur.com/Z1alk58.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "小三"){
        message.channel.send("https://imgur.com/vbJ9YnK.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "龜頭"){
        message.channel.send("https://imgur.com/8eY8Kug.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "馬眼"){
        message.channel.send("https://imgur.com/U2jOYb3.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "風暴鷲獅"){
        message.channel.send("https://imgur.com/6rLGFhL.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "陽痿"){
        message.channel.send("https://imgur.com/JMF0GFy.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "降層"){
        message.channel.send("https://imgur.com/NcF8hY5.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "閉嘴"){
        message.channel.send("https://imgur.com/bvJTbAC.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "農點"){
        message.channel.send("https://imgur.com/Ddz5hQY.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "陽痿"){
        message.channel.send("https://imgur.com/pCWT927.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "跳起來2"){
        message.channel.send("https://imgur.com/7h09e23.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "跳起來"){
        message.channel.send("https://imgur.com/BcQvV4h.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "路標"){
        message.channel.send("https://imgur.com/0NrYBms.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "足交"){
        message.channel.send("https://imgur.com/VDvWeJW.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "變身"){
        message.channel.send("https://imgur.com/Lr6XV2f.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "團長語綠"){
        message.channel.send("https://imgur.com/9L3lfN7.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "螃蟹修復"){
        message.channel.send("https://imgur.com/DGQhyq6.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "螃蟹"){
        message.channel.send("https://imgur.com/0ubPcxl.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "藏"){
        message.channel.send("https://imgur.com/oZLvRff.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "蓄力"){
        message.channel.send("https://imgur.com/7DaQLRA.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "落淚"){
        message.channel.send("https://imgur.com/Tf05WNB.gif")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "茅場晶彥"){
        message.channel.send("https://imgur.com/5tSGon2.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "舔下來"){
        message.channel.send("https://imgur.com/BTb4MlQ.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "發情"){
        message.channel.send("https://imgur.com/yl5eX6m.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "腿開開"){
        message.channel.send("https://imgur.com/S33yZrX.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "腦子"){
        message.channel.send("https://imgur.com/ToqBApE.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "聽不到"){
        message.channel.send("https://imgur.com/P4uYZju.jpg")
      }}
        )
    ;

    client.on("message", message=> {
      if (message.content === "聖龍聯合"){
        message.channel.send("https://imgur.com/wOvNzps.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "聖母"){
        message.channel.send("https://imgur.com/FXR68Wp.jpg")
      }}
        )
    ; client.on("message", message=> {
      if (message.content === "綁"){
        message.channel.send("https://imgur.com/8fz5dzW.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "私房錢"){
        message.channel.send("https://imgur.com/7l1ZBwY.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "破鳥"){
        message.channel.send("https://imgur.com/KxWJTQN.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "發洩"){
        message.channel.send("https://imgur.com/GjoySAk.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "現世報"){
        message.channel.send("https://imgur.com/4q9uEu0.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "爽一下"){
        message.channel.send("https://imgur.com/Dq4LpNH.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "沒那麼雖2"){
        message.channel.send("https://imgur.com/2GgDT8s.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "沒那麼雖"){
        message.channel.send("https://imgur.com/JdGcpa4.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "欠幹"){
        message.channel.send("https://imgur.com/Cfyx4Ro.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "榨"){
        message.channel.send("https://imgur.com/uVah9yk.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "松鼠"){
        message.channel.send("https://imgur.com/22XGBUD.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "暴雷"){
        message.channel.send("https://imgur.com/3ORKwHx.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "拷貝狗"){
        message.channel.send("https://imgur.com/i5eRksg.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "打斷"){
        message.channel.send("https://imgur.com/o5yADly.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "打手槍"){
        message.channel.send("https://imgur.com/mPTjwrl.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "打我啊"){
        message.channel.send("https://imgur.com/NGX4C0d.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "不會懷孕"){
        message.channel.send("https://imgur.com/OK16lWI.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "憤怒螃蟹"){
        message.channel.send("https://imgur.com/H64jm9Y.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "憤怒班長"){
        message.channel.send("https://imgur.com/mPTjwrl.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "憤怒毛"){
        message.channel.send("https://imgur.com/AeJmXfv.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "破關"){
        message.channel.send("https://imgur.com/PrPHWKn.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "dirty talk"){
        message.channel.send("https://imgur.com/P6eqOzJ.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "peko叫"){
        message.channel.send("https://imgur.com/nwr5P81.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "UU"){
        message.channel.send("https://imgur.com/v5xHzdf.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "緹潔"){
        message.channel.send("https://imgur.com/Jp8EiLd.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "忍耐"){
        message.channel.send("https://imgur.com/4nZBfpN.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "夾"){
        message.channel.send("https://imgur.com/CQOeFtX.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "射精"){
        message.channel.send("https://imgur.com/rSV69z3.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "狠狠D"){
        message.channel.send("https://imgur.com/ES6372S.jpg")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "飛天螃蟹"){
        message.channel.send("https://streamable.com/w4bkp4")
      }}
        )
    ;
    client.on("message", message=> {
      if (message.content === "憤怒羽毛"){
        message.channel.send("https://imgur.com/7GaOj67.jpg")
      }}
        )
    ;

        
