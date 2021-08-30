const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKeyPath = "./AuthKey_8Q229V4M9U.p8";
const privateKey = fs.readFileSync(privateKeyPath).toString();
const teamId = "W9M9PTV3RJ";
const keyId = "8Q229V4M9U";
const token = jwt.sign({}, privateKey, {
  algorithm: "ES256",
  expiresIn: "180d",
  issuer: teamId,
  header: {
    alg: "ES256",
    kid: keyId,
  },
});

console.log(token);
