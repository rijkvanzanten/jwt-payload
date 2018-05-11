const base64 = require('base-64');

module.exports = token => {
  const payloadBase64 = token
    .split(".")[1]
    .replace("-", "+")
    .replace("_", "/");
  const payloadDecoded = base64.decode(payloadBase64);
  const payloadObject = JSON.parse(payloadDecoded);

  return payloadObject;
}
