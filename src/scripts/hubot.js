const { answer } = require('../');
const ANYTHING = /.*/i;

async function parseMessage(res) {
    const userMessage = res.match.input;
    try {
        const response = await answer(userMessage);
        res.send(response);
    } catch (error) {
        console.error(error);
        res.send(error);
    }
}
module.exports = robot => {
    robot.hear(ANYTHING, parseMessage);
};
