export function getHostName() {
  // return '192.168.1.2';
  return window.location.hostname;
}

export function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

export function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

export function getToggledValues(values, value) {
  const i = values.indexOf(value);
  if (i === -1)
    values.push(value);
  else
    values.splice(i,1);
  return values;
}

export function getSocketCommand(tagId, value) {
  let commandFormat = "#{0},{1};$";
  return commandFormat.format(tagId, value);
}

export function sendCommandToDevice(command, connnectionReplace) {
  const hostname = getHostName();
  const connectionString = connnectionReplace ? `ws://${connnectionReplace}/` : `ws://${hostname}:8181/`;
  const ws = new WebSocket(connectionString);
  
  const waitForConnection = (callback, interval) => {
    if (ws.readyState === 1) {
      callback();
    } else {
      var that = this;
      // optional: implement backoff for interval here
      setTimeout(() => {
          waitForConnection(callback, interval);
      }, interval);
    }
  };

  const send = (message, callback) => {
    waitForConnection(() => {
        ws.send(message);
        ws.close();
        if (typeof callback !== 'undefined') {
            callback();
        }
    }, 100);
  };

  send(command);
}