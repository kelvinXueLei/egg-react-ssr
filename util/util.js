const crypto = require('crypto');
const secret = 'mysecret';

class Util {
    static encrypt(str) {
        let cipher = crypto.createCipher('aes192', secret);
        let enc = cipher.update(str, 'utf8', 'hex');
        enc += cipher.final('hex');
        return enc;
    }
    static decrypt(str) {
        let decipher = crypto.createDecipher('aes192', secret);
        let dec = decipher.update(str, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
}

module.exports = Util