<template>
  <div class="hello">
      <img alt="Vue logo" src="../assets/eth-logo.png" style="width:200px;">
    <h1>{{ msg }}</h1>
    <p>
        This tool was created to easily recover a private key from a ETH-based BIP32 HD wallet using a recovery phrase.  

        This entire page is run locally, and nothing is transmitted to any server. We advise for added security to download, and run locally for added safety.
    </p>
    <h3>Mnemonic</h3>
    
    <p>Enter an existing BIP39 mnemonic. The words require a particular structure with the last word containing a checksum.</p>
    <textarea v-model="mnemonic" style="width:500px;" placeholder="12 or 24 word recovery phrase"></textarea><br />
    <button v-on:click="getMnemonic">I'm Ready To Get Key</button>
    <hr />
    <h3>Result</h3>
    
    
    <h5>Wallet Private Key is:</h5>
    <p style="white-space: pre-line;">{{ privateKey }}</p>
    <h5>Receiving Address:</h5>
    <p style="white-space: pre-line;">{{ address }}</p>
<hr />
<h3>Import To Metamask</h3>
<p>
    <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489331-Importing-an-Account">Follow this walk-through to import the private key into your metamask.</a>
    </p>

    
    
  
    <h3>Resources</h3>
    <ul>
        <li><a href="https://metamask.zendesk.com/hc/en-us" target="_blank" rel="noopener">Metamask Support</a></li>
      <li><a href="https://iancoleman.io/bip39/" target="_blank" rel="noopener">bip39 Mnemonic Utility</a></li>
      <li><a href="https://github.com/ethereumjs/ethereumjs-wallet" target="_blank" rel="noopener">Implementing BIP32 HD Wallets in Eth</a></li>
      <li><a href="https://github.com/bitcoinjs/bip39#readme" target="_blank" rel="noopener">Implementing BIP39 Standard</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
    </ul>
  </div>
</template>

<script>
const bip39 = require('bip39');
const hdKey = require('ethereumjs-wallet/hdkey');

export default {
  name: 'Wallet',
  data() {
      return{
          mnemonic: "",
          privateKey: "",
          address: "",

      }
  },
  methods:{
      getMnemonic() {
          try {
              console.info(this.mnemonic);
            const seed = bip39.mnemonicToSeed(this.mnemonic);
            const root = hdKey.fromMasterSeed(seed);
            
            this.privateKey = root.getWallet()._privKey.toString('hex');
            this.address = root.getWallet().getChecksumAddressString();

        } catch (err) {
            console.log(err);
            throw new Error('Failed to initialize wallet');
        }
      }
  },
  props: {
    msg: String,
    methods: {
        go() {
            console.log(this.mnemonic);
        }
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
