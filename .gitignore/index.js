const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Command: *help");
    console.log("Connected");
});

bot.login("NjEwNTI0MjE4NzA2MTAwMjI0.XVGjNw.H8Edid87BoC-ArV28pebpYDeZz0");


bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.send("Listes des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

});
