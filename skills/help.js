//
// Comando: ayuda.
//
module.exports = function (controller) {

    controller.hears([/^ayuda$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Hola, esto es lo que sé hacer:";
        text += "\n- " + bot.appendMention(message, "sumar") + "; suma dos números";
        text += "\n- " + bot.appendMention(message, "restar") + "; resta dos números";
        text += "\n- " + bot.appendMention(message, "ayuda") + ": te digo las cosas que se hacer";
        bot.reply(message, text);
    });
}
