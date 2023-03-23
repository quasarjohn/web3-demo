import "./DocumentVerifier.sol";

contract DocumentVerifierFactory {
  mapping(string => address) private documents;

   function createDocument(address owner, string memory documentHash) public {
    DocumentVerifier verifier = new DocumentVerifier(owner, documentHash, msg.sender);

    documents[documentHash] = address(verifier);
  }

  function getDocument(string memory documentId) public view returns (address) {
    return documents[documentId];
  }

} 