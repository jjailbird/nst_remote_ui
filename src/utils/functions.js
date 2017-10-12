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
