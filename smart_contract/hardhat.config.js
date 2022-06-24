require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/PiurPzoUUYEjgm1JYJnTHkhNzznIZOC_',
      accounts: ['3fba22aa32e2816c2f41d766909c59c6577101abd02d6040ebd0c6fb3aad9f59']
    }
  }
}