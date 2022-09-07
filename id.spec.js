const calculator = require('./index')

describe("First group of tests", () => {
  test("Jest is working", () => {
    expect(0).toBe(calculator.add(""));
  });
});

describe("Second group of tests", () => {
  test("Jest is working", () => {
    expect(6).toBe(calculator.add("1,2,3"));
  });
});

describe("Third group of tests", () => {
  test("Jest is working", () => {
    expect(6).toBe(calculator.add("1\n2,3"));
  });
});

describe("Fourth group of tests", () => {
  test("Jest is working", () => {
    expect(6).toBe(calculator.add("//;\n1;2;3"));
  });
});

describe("Fifth group of tests", () => {
  test("Jest is working", () => {
    expect(2).toBe(calculator.add("1001,2"));
  });
});

describe("Sixth group of tests", () => {
  test("Jest is working", () => {
    expect(6).toBe(calculator.add("//[**]\n1**2**3"));
  });
});

describe("Seventh group of tests", () => {
  test("Jest is working", () => {
    expect(6).toBe(calculator.add("//[*][%]\n1*2%3"));
  });
});

describe("Eighth group of tests", () => {
  test("Jest is working", () => {
    expect(6).toBe(calculator.add("//[..][%%]\n1..2%%3"));
  });
});

describe("Ninth group of tests", () => {
  test("Jest is working", () => {
    expect(2).toBe(calculator.add("-1,-3,2"));
  });
});
