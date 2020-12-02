const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // conn.on('connect', connect => {
  //   console.log('successfuly connected')
  // })

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', connect => {
    console.log('Successfully connected to game server');
    conn.write('Name: ALC');
  });

  // conn.on('connect', () => {
  //   for (let i = 0; i < 100; i++) {
  //     setTimeout(() => {
  //       if (i % 2 === 0) {
  //         conn.write('Move: up');
  //       } else if (i % 3 === 0) {
  //         conn.write('Move: up');
  //       } else if (i % 5 === 0) {
  //         conn.write('Move: down');
  //       } else {
  //         conn.write('Move: right');
  //       }
  //     }, i * 800)}
  // })

  return conn;
}


module.exports = {connect};

