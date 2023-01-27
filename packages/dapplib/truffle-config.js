require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remind modify good private orange gesture'; 
let testAccounts = [
"0x578359cc5fab67c95b584d7044e55a635c311c1c032a32d1d62305517e4c85d9",
"0xcf4eac88fe74df8db8673787c03ed39fcf3664b149aeef31e628ad7862bdd6da",
"0xb221eda84c2a303001e4511432cc8b8b705033848c80e9a16305055615dc015b",
"0x4cf7d910e0d5130bf28e037089b05c508fd0f08f99c1510c72d268f94e881fbf",
"0xa9b8b486373b604b05b8eb7b3b687218d4841fcfa9bedb52446521ac19aff801",
"0x4c22664e298cb47befb3ec2cbba06e6b0b155f7e4315b0541496041ebee49007",
"0xab15e7ed425a9ce725ef23fe04a66fa4848a84d133b47e74495aca5a0e5bef9f",
"0x5957c286456819505aa6c681d102172fb28d58b78d1009eb7a7f193739fa6325",
"0x2b4689b027d1f347b8f6ca248598b7e042497eeea52dd928174ddfbf607c9e8c",
"0x6c436777f2778063a908c7858cf945bfac7f537854d52daa404a7647b1bc7f40"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

