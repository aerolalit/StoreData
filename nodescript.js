
Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
web3.eth.accounts
// console.log(web3.eth.accounts)
var fs = require('fs');
code = fs.readFileSync('./contracts/Store.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)
abiDefinition = JSON.parse(compiledCode.contracts[':SimpleStorage'].interface)
SimpleStorageContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':SimpleStorage'].bytecode
// console.log(byteCode)
deployedContract = SimpleStorageContract.new("hello",{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})

// contractInstance = SimpleStorageContract.at(deployedContract)
// console.log(contractInstance)
// contractInstance.set("hello1");
// console.log(contractInstance.get());


// console.log(deployedContract.address)
// contractInstance.set('hellothere');
// console.log( contractInstance.get() );

process.argv.forEach(function (val, index, array) {
    // console.log(index + ': ' + val);
    deployedContract = SimpleStorageContract.new(val,{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
    console.log("Pushed hash to blockChain: " + val)
  });

