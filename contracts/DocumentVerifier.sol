pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DocumentVerifier is Ownable {

  string public documentHash; 
  address public signer; 
  uint256 public signDate; 

  constructor (address _owner, string memory _documentHash, address _signer) {
    signer = _signer;
    signDate = block.timestamp;
    documentHash = _documentHash;

    transferOwnership(_owner);
  }
}