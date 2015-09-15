describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Harley", "Quinn");
    expect(testContact.firstName).to.equal("Harley");
    expect(testContact.lastName).to.equal("Quinn");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Dick", "Grayson");
    expect(testContact.fullName()).to.equal("Dick Grayson");
  });
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("555 Joker Lane", "Gotham City", "WA", "98685");
    expect(testAddress.street).to.equal("555 Joker Lane");
    expect(testAddress.city).to.equal("Gotham City");
    expect(testAddress.state).to.equal("WA");
    expect(testAddress.zip).to.equal("98685");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("555 Joker Lane", "Gotham City", "WA", "98685");
    expect(testAddress.fullAddress()).to.equal("555 Joker Lane, Gotham City, WA 98685");
  });
});
