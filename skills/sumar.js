//
// Enseñando al bot a sumar
//
module.exports = function (controller) {

    var numero1;
    var numero2;
    var resultado;

    controller.hears([/^sumar$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Te voy a ayudar a sumar dos números, es algo muy difícil.');

            convo.ask('Dime el primer número?', function (response, convo) {
                numero1 = response.text;
                //convo.say("Cool, I like '" + response.text + "' too!");
                convo.next();
            });
            
            convo.ask('Dime el segundo número?', function (response, convo) {
                numero2 = response.text;
                resultado = numero1 + numero2;
                convo.say(numero1 + " + " + numero2 + " es " + resultado);
                convo.next();
            });
            
        });

    });
};
