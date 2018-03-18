truffle develop
SimpleStorage.deployed().then(function(instance){return instance.set("hello");});