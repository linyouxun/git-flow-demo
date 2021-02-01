const CryptoJS = require("crypto-js");
const data = require("./data2");
var child = require("child_process");
let jsKey = CryptoJS.enc.Utf8.parse("ZVqAI6jw54IkfLZH");

const str = `echo ${data} > 1.txt`;
child.exec(str, function () {
  console.log("done");
});

// function aesDecrypt(encrypted, key) {
//   let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7,
//   });
//   decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
//   return decrypted;
// }
// const src = "data:image/png;base64," + aesDecrypt(data + "", jsKey);

// console.log(src);
