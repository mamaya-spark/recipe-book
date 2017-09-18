const config = require('../app.config.json');
const jwt    = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = {
  encryptPass(pass) {
    return crypto
      .createHash('sha256')
      .update(pass)
      .digest('base64');
  },

  validatePass(passHash, pass) {
    return passHash === this.encryptPass(pass);
  },

  generateJWT(payload) {
    return jwt.sign(
      payload,
      this.encodeSecret()
    );
  },

  generateToken() {
    return crypto
      .randomBytes(32)
      .toString('hex');
  },

  encodeSecret() {
    const secret = new Buffer(config.SECRET_TOKEN).toString('base64');
    return secret;
  }
}
