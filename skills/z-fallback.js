//
// Fallback Command
//
module.exports = function (controller) {

    controller.hears([".*"], 'direct_message,direct_mention', function (bot, message) {
        var mardown = "Lo siento, no entiendo lo que quieres decir.<br/>Intenta con "
            + bot.appendMention(message, "ayuda");
            
        bot.reply(message, mardown);
    });
}
