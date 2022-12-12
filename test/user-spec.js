const { expect } = require('chai');

const User = require("../class/user.js");

// describe ('User class', function(){
//     it('should create sucessfuly', function(){
//         let user = new User();
//         expect(user).to.exist;
//     })

//     it('should set a username on creation', function(){
//         let user = new User('John_Doe');
//         expect(user.username).to.equal('John_Doe')
//     })
// });


// Using beforeEach hooks
describe ('User class', function () {

    let user;

    beforeEach(() => {
      user = new User("john_doe");
    });

    it('should create successfully', function () {
      expect(user).to.exist;
    });

    it('should set username on creation', function () {
      expect(user.username).to.equal("john_doe");
    });

  });
