describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Harley","Quinn");
    expect(testContact.firstName).to.equal("Harley");
    expect(testContact.lastName).to.equal("Quinn");
    expect(testContact.addresses).to.eql([]);
  });
});
