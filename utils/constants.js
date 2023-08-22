const { NODE_ENV } = process.env;
const { JWT_SECRET } = process.env;
const { MONGODB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  MONGODB_URL,
};
