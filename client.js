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


  return conn;
}

module.exports = {connect};

// console.log('Connecting ...');
// connect();