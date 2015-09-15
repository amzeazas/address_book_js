describe('Contact', function() {
  it("creates a new contact with the given specifications", funtion() {
    var testContact = new Contact("Harley", "Quinn");
    expect(testContact.firstName).to.equal("Harley");
    expect(testContact.lastName).to.equal("Quinn");
    expect(testContact.addresses).to.equal([]);
  });
});
