//
// Enseñando al bot a restar
//
module.exports = function (controller) {

    var numero1 = 0;
    var numero2 = 0;
    var resultado = 0;

    controller.hears([/^resta$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Te voy a ayudar a restar dos números.');

            convo.ask('Dime el primer número', function (response, convo) {
                numero1 = parseInt(response.text,10);
                convo.next();
            });
            
            convo.ask('Dime el segundo número', function (response, convo) {
                numero2 = parseInt(response.text,10);
                resultado = numero1 - numero2;
                convo.say(numero1 + " menos " + numero2 + " es " + resultado);
                convo.next();
            });
            
        });

    });
};
