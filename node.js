const Discord = require("discord.js")
const bot = new Discord.Client()
//const server = express(); //仍在考慮要不要加入

bot.on('ready',()=>
{
    console.log("我準備好了喔!!")
}
)
//bot.on('message',message=>
//{                                 //偵測
//    if (message.content ==='hi'); //偵測訊息是否為"hi"
//    /*以下為訊息發送*/
//    message.channel.send("hi!!")  //在原本的頻道發送"hi!!"
//    message.reply("Hi!")  //同上，但訊息前加上提及(Mention)
//    message.author.send("Hi")  //私訊(DM)用戶"Hi"
//    bot.channel.cache.get("id").send("Hi")  //抓取頻道並發送"Hi"(id=頻道ID)
//}

//bot.on('message',message=>   //message 後可加的參數
//{
//    if (message.author.bot); //偵測訊息是否為機器人
//    if (message.content ==='hi');//偵測訊息是否為"hi"
//    if (message.channel.id ==="123456");//偵測訊息頻道ID是否為"123456"
//    if (message.embeds);//偵測訊息是否有鑲入(embed)
//    if (message.author.id === "7891011");//偵測發送者的id是否為"7891011"
//}
bot.on('message',message=>
{
    if (message.content ==="Capoo 安安")
    {
        message.reply("安安呀~")
    }
    else if (message.content.startsWith("安安"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("安安嗄~")
    }
    else if (message.content ==="Capoo")
    {
        message.reply("你是不是叫我啊~")
    }
    else if (message.content.includes("蛤"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("蛤蛤??")
    }
    else if (message.content.includes("晚安"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("晚安~")
    }
    else if (message.content ==="Capoo 晚安")
    {
        message.reply("晚安R~")
    }
    else if (message.content ==="掰掰")
    {
        message.channel.send("拜拜~")
    }
    else if (message.content ==="各位掰掰")
    {
        message.channel.send("拜拜~")
    }
    else if (message.content ==="拜拜")
    {
        message.channel.send("再見~")
    }
    else if (message.content ==="各位拜拜")
    {
        message.channel.send("再見~")
    }
    else if (message.content ==="Capoo 掰掰")
    {
        message.reply("拜拜呀~")
    }
    else if (message.content ==="早安")
    {
        message.channel.send("早安~")
    }
    else if (message.content ==="早安呀各位")
    {
        message.channel.send("早安呀~")
    }
    else if (message.content ==="各位早安呀")
    {
        message.channel.send("早安呀~")
    }
    else if (message.content ==="大家早安")
    {
        message.channel.send("早安~")
    }
    else if (message.content ==="Capoo 早安")
    {
        message.channel.send("早安啊~ \n啊...我的早餐嘞??")
    }
    else if (message.content.startsWith("哈囉"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("哈囉哈XD")
    }
    else if (message.content.startsWith("嗨"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("嗨~~~^∀^")
    }
    else if (message.content ==="Capoo 哈囉")
    {
        message.channel.send("哈囉~ 有東西給我吃嗎XD")
    }
    else if (message.content ==="哈囉?")
    {
        message.channel.send("哈囉?哈囉??")
    }
    else if (message.content ==="幹")
    {
        message.reply("不要罵髒話喔")
    }
    else if (message.content ==="操")
    {
        message.reply("(ಠ ∩ಠ)")
    }
    else if (message.content ==="肏")
    {
        message.reply("(◣_◢)")
    }
    else if (message.content.includes("三小"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("(」°ロ°)」")
    }
    else if (message.content ==="靠杯")
    {
        message.channel.send("好喔~呵呵")
    }
    else if (message.content ==="靠背" )
    {
        message.channel.send("好喔~呵呵")
    }
    else if (message.content ==="你三小" )
    {
        message.reply("在問我嗎?QAQ")
    }
    else if (message.content.startsWith("幹嘛"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("(可以@SOMEBODY or 回覆SOMEBODY 喔~")
    }
    else if (message.content ==="幹啥?" )
    {
        message.channel.send("(可以@SOMEBODY or 回覆SOMEBODY 喔~")
    }
    else if (message.content.startsWith("幹嘛"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("(可以@SOMEBODY or 回覆SOMEBODY 喔~")
    }
    else if (message.content ==="他媽的" )
    {
        message.reply("不要講髒話喔~")
    }
    else if (message.content ==="幹你娘" )
    {
        message.reply("不要講髒話了喔~")
    }
    else if (message.content.includes("鬼"))
    {
        if (message.author.bot)return;/*這裡一定要偵測是否為機器人
                                        否則機器人一旦偵測到指令就會一直刷*/
        message.channel.send("(哪裡有鬼?!")
    }
    else if (message.content ==="不要生氣")
    {
        message.channel.send("對啊~和氣生財R")
    }
    else if (message.content ==="不要生氣啦")
    {
        message.channel.send("對嘛~不要生七七呀")
    }
    else if (message.content ==="不要哭")
    {
        message.channel.send("眼淚是珍珠~越哭越像豬~\n不然我也要哭嘍")
    }
    else if (message.content ==="不要哭了")
    {
        message.channel.send("不准你哭了!不然...我也要哭嘍")
    }
    else if (message.content ==="不要哭啦")
    {
        message.channel.send("不准你哭了!不然...我也要哭嘍")
    }
    else if (message.content ==="Capoo?這可以幹啥?")
    {
        message.channel.send("我不是物品或東西，我是 [Capoo testbot] \n我仍在開發階段，而目前只能與各位進行基本對話~\n未來期望能成為一個稱職的[Capoo Server Multi-function Service Bot]!!\n請持續給予我鼓勵，有一天能夠為大家服務")
    }
    else if (message.content ==="Capoo 你有什麼功能?")
    {
        message.channel.send("因目前我仍在開發階段，因此只能與各位進行基本對話~\n但我未來期望能成為一個稱職的[Capoo Server Multi-function Service Bot]!!\n請持續給予我鼓勵，有一天能夠為大家服務")
    }
    else if (message.content ==="Capoo 你可以幹嘛?")
    {
        message.channel.send("因目前我仍在開發階段，因此只能與各位進行基本對話~\n但我未來期望能成為一個稱職的[Capoo Server Multi-function Service Bot]!!\n請持續給予我鼓勵，有一天能夠為大家服務")
    }
    else if (message.content ==="Capoo 你未來有什麼功能?")
    {
        message.channel.send("我偷偷告訴你喔~ \n..................\n..................\n..................\n這是秘密（*´▽`*)嘿嘿")
    }       
    else if (message.content ==="Capoo 你之後可以幹嘛?")
    {
        message.channel.send("我偷偷告訴你喔~ \n..................\n..................\n..................\n這是秘密（*´▽`*)嘿嘿")
    }   
    else if (message.content ==="Capoo 你未來可以做啥?")
    {
        message.channel.send("我偷偷告訴你喔~ \n..................\n..................\n..................\n這是秘密（*´▽`*)嘿嘿")
    }  
    else if (message.guild) //偵測是否為伺服器
    {
        if(message.content === 'Capoo!serverinfo') 
        {
            let embed = new Discord.MessageEmbed() //定義embed
            .setTitle(message.guild.name+"的伺服器資料") 
            .setDescription(message.guild.id) //伺服器ID
            .setThumbnail(message.guild.iconURL()) //伺服器頭貼
            .addField("服主",message.guild.owner.nickname)
            .addField("伺服器區域",message.guild.region)
            .addField("成員數",message.guild.memberCount)
            .addField("頻道數",message.guild.channels.cache.size)
            .addField("表情數",message.guild.emojis.cache.size)
            .addField("身分組數",message.guild.roles.cache.size)
            .addField("創群日期",message.guild.createdAt.toUTCString())
            message.channel.send(embed)
        }
    
    }                    
});
bot.on('message',message=> {
    if(message.guild) {//偵測是否為伺服器
    if(message.content.startsWith('Capoo!say')) {//偵測指令
    let text = message.content.replace('Capoo!say',"") //去除指令
    if(text === null) return; //偵測是否為空
    message.channel.send(text)
}
}});



bot.login('ODQ2MDU0NDAwMjg3MzA5ODU0.YKp7jw.w88zPQhRalifv_iM1LzED7l4sIA')