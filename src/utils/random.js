const { floor, random } = Math;
module.exports = messages => messages[floor(random() * messages.length)];
