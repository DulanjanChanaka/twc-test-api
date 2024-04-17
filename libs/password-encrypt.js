const CryptoJS = require("crypto-js");
require("dotenv").config();
// Encrypt
const passwordEncrypt = (password) =>
  CryptoJS.AES.encrypt(password, process.env.PASS_KEY).toString();

// Decrypt
const passwordDecypt = (encryptPass) =>
  CryptoJS.AES.decrypt(encryptPass, process.env.PASS_KEY).toString(
    CryptoJS.enc.Utf8
  );

module.exports = { passwordEncrypt, passwordDecypt };
