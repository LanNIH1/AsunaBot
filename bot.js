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
        message.channel.send("https://imgur.com/jvdM9yr.jpg")
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


