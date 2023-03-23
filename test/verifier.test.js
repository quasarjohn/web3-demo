const DocumentVerifierFactory = artifacts.require("./DocumentVerifierFactory.sol");
const DocumentVerifier = artifacts.require("./DocumentVerifier.sol");

contract("Document verifier", (accounts)=> {

  let factory;
  const ownerAddress = "0x31fCf33801A73D1ad6Cd066531B124Af7357268B";

  before(async ()=> {
    factory = await DocumentVerifierFactory.deployed();
  })

  function isNotEmpty(val) {
    assert.notEqual(val, "");
    assert.notEqual(val, "0x0");
    assert.notEqual(val, null);
    assert.notEqual(val, undefined);
  }

  describe("Document verifier contract", ()=> {
    it("deploys successfully", ()=> {
      isNotEmpty(factory.address);
      console.log(`Factory contract address: ${factory.address}`)
    })

    it("creates a new document", async ()=> {
      await factory.createDocument(ownerAddress, "AABB")
    })

    it("fetches the document", async()=> {
      const documentAddress = await factory.getDocument("AABB")
      const document = await  DocumentVerifier.at(documentAddress)

      const owner = await document.owner()
      const hash = await document.documentHash()
      const signer = await document.signer()

      assert.equal(owner.toString(), ownerAddress)
      assert.equal(hash.toString(), "AABB")
      assert.equal(signer.toString(), accounts[0])

      console.log(owner, hash, signer)
    })

  })
})