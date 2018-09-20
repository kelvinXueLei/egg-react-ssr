const crypto = require('crypto');
const secret = 'mysecret';
class Helper {
    static generateRandomChar(length, mode) {
        let _value = '';
        let _set = [];
        switch (+mode) {
            case 1:
                _set = Helper.alphabetLower;
                break;
            case 2:
                _set = Helper.alphabetUpper;
                break;
            case 4:
                _set = Helper.number;
                break;
            case 3:
                _set = _set.concat(Helper.alphabetLower, Helper.alphabetUpper);
                break;
            case 5:
                _set = _set.concat(Helper.alphabetLower, Helper.number);
                break;
            case 6:
                _set = _set.concat(Helper.alphabetUpper, Helper.number);
                break;
            case 7:
                _set = _set.concat(Helper.alphabetLower, Helper.alphabetUpper, Helper.number);
                break;
            default:
                _set = Helper.alphabetLower;
        }
        for (let i = 0; i < length; i++) {
            _value += _set[Math.floor(Math.random() * _set.length)];
        }
        return _value;
    }

    static stringToAscii(str) {
        return str.charCodeAt(0).toString(16);
    }

    static asciiToString(asccode) {
        return String.fromCharCode(asccode);
    }
    static encrypt(str){
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

Helper.alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
Helper.alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
Helper.number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

module.exports = Helper