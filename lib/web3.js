var Web3 = require('web3');

module.exports = function (provider) {
  provider = provider || 'http://localhost:8545';
  return new Web3(new Web3.providers.HttpProvider(provider));
}
