const plnParser = require('./wit');
const { greetings, random } = require('./answers/static');

const functionEntities = {
    greetingFunc: () => random(greetings)
};

const answerBasedOnEntities = entities => {
    if (!entities.intent) {
        throw new Error("Não entendi");
    }

    result = entities.intent.reduce((prev, entity) => {
        if(prev.value != entity.value) {
            functionName = entity.value + "Func";
            if(functionName) {
                prev.result = functionEntities[functionName]()
            }
        }

        prev.value = entity.value
        return prev
    }, {});

    return result
};

exports.answer = async message => {
    const parsedMessage = await plnParser.message(message, {});
    const entities = parsedMessage.entities;
    try {
        return answerBasedOnEntities(entities).result;
    } catch ({ message }) {
        return message;
    }
};

