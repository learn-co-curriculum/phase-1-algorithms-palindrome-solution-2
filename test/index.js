const chai = require("chai");
global.expect = chai.expect;
const isPalindrome = require("../index");

describe("isPalindrome", () => {
  it("returns true for 'abba'", () => {
    expect(isPalindrome("abba")).to.be.true;
  });
  it("returns true for 'racecar'", () => {
    expect(isPalindrome("racecar")).to.be.true;
  });
  it("returns true for 'a'", () => {
    expect(isPalindrome("a")).to.be.true;
  });
  it("returns false for 'robot'", () => {
    expect(isPalindrome("robot")).to.be.false;
  });
  it("returns false for 'ab'", () => {
    expect(isPalindrome("ab")).to.be.false;
  });
});
