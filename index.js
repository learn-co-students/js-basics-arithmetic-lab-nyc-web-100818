/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/
// const oldID = Math.floor(Math.random() * 100) + 1;

// const ages = [26.4, 21, 49.5, 83, 99, 53.3, 74, 94.9, 40, 56.2];

// const currentAge = ages[Math.floor(Math.random() * ages.length)];

// const currentAgeIsInteger = Number.isInteger(currentAge);

// const spyOnNumberIsInteger = sinon.stub(Number, 'isInteger').returns(currentAgeIsInteger);

// const randNum = Math.random();

// const spyOnMathRandom = sinon.stub(Math, 'random').returns(randNum);

// Write your code below this line!

// describe('index.js', function() {
//   describe('newID', function() {
//     it('converts IDs from the old style to the new style', function() {
//       expect(newID).to.eq(1000000000 + oldID);
//     });
//   });

  // describe('ageIsValid', function() {
  //   it("contains 'true' when the value in 'currentAge' is a valid integer", function() {
  //     if (currentAgeIsInteger) {
  //       expect(ageIsValid).to.be.true;
  //     } else {
  //       expect(ageIsValid).to.be.false;
  //     }
  //   });

  //   it("invokes 'Number.isInteger()'", function() {
  //     expect(spyOnNumberIsInteger.called).to.be.true;
  //   });
  // });
  
var newID = 1000000000 + oldID;

var ageIsValid = Number.isInteger(currentAge);

var randomNumber = Math.floor(Math.random(0, 20));

var randomInteger = Math.floor(randomNumber);

var randomUserID = randomInteger + 1000000001;

