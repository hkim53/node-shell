var commands = require("./commands.js");


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' '); // remove the newline
  commands[cmd[0]](cmd);
  process.stdout.write('\nprompt > ');
});
