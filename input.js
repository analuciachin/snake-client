/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 // Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      } else if (key === 'w') {
        //console.log('up');
        conn.write('Move: up')
      } else if (key === 'a') {
        conn.write('Move: left');
      } else if (key === 's') {
        conn.write('Move: down');
      } else if (key === 'd') {
        conn.write('Move: right')
      }
    });
  }
  handleUserInput();
  return stdin;
}


module.exports = {setupInput};