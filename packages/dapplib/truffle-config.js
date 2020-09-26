require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stone decrease sad hope hockey clog obtain skill'; 
let testAccounts = [
"0x541f7a9d8652cd5273ca935b53233a26f52c1d0ed5540ab7cb58e27640920893",
"0x29ff13b4eb1eff1c6bd1c1420dd79b38c2ba7f251e02adc90297e1f4f9988b5c",
"0x9275df4d36ded3958f3bd9129ec3d6ea5c3d98dac7cabf7121efc119eaf2ee5d",
"0x7c30c6e1d01e63941a07402af7ef9c3b474a51109b92e8ba70c7655de21c2299",
"0x3980b17298d27f93558f597bdec876c8eff860387952d915a601f72c3d8418be",
"0x252e72b974a81ab3c672393aeb06e51d1dda928c2afdc4337ea5c47fcb8c988b",
"0x0e6b8af9dbaf37076b4396e7431788ee82d7c0d9c28f1abecb8008b1165df383",
"0xd9ad4eccd87c778945d6d4425283f5800027da4bdd9cab6b89869d9f9f4de900",
"0x4d47857633a4662fe130c51ff41e92fd459767ed15306c3d8d1f36c766d5dc64",
"0xa469e4fae781731b13c43adb745358be6d5a996e597009c39260a0587d089cf0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
