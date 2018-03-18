pragma solidity ^0.4.17;

contract SimpleStorage {
  // uint myVariable;
  string imageHash;

  function set(string x) public {
    imageHash = x;
}

  function get() constant public returns (string) {
    return imageHash;
  }
}