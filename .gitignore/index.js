const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

var prefix = ("vbi");

client.on("message", (message) -> {

    if(message.content === "bonjour") {
        message.channel.send("Salutation!")
    }

    if(message.content === prefix + "help"){
        message.channel.Send("Veux-tu de l'aide?")
    }


});
