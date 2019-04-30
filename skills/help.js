//
// Comando: ayuda.
//
module.exports = function (controller) {

    controller.hears([/^ayudame$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Hola, esto es lo que sé hacer:";
        text += "\n- " + bot.appendMention(message, "suma") + "; suma dos números";
        text += "\n- " + bot.appendMention(message, "resta") + "; resta dos números";
        text += "\n- " + bot.appendMention(message, "multiplica") + "; multiplica dos números";
        text += "\n- " + bot.appendMention(message, "divide") + "; divide dos números";
        text += "\n- " + bot.appendMention(message, "ayudame") + ": te digo las cosas que se hacer";
        bot.reply(message, text);
    });
}
