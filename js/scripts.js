function Contact(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state, zip){
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street").val("");
  $("input#new-city").val("");
  $("input#new-state").val("");
  $("input#new-zip").val("");
}

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control" id="new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control" id="new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control" id="new-state">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-zip">Zip</label>' +
                                   '<input type="text" class="form-control" id="new-zip">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input#new-street").val();
      var inputtedCity = $(this).find("input#new-city").val();
      var inputtedState = $(this).find("input#new-state").val();
      var inputtedZip = $(this).find("input#new-zip").val();

      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedZip);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");

      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();
  });
});
