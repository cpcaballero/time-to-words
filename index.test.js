const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles less than 30 - 2:22", () => {
    const timeInWords = convertTimeToWords("2:22");
    expect(timeInWords).toBe("twenty two past two");
  });

  it("Handles whole hour - 8:00", () => {
    const timeInWords = convertTimeToWords("8:00");
    expect(timeInWords).toBe("eight o'clock");
  });

  it("Handles times after 15 mins - 2:15", () => {
    const timeInWords = convertTimeToWords("2:15");
    expect(timeInWords).toBe("quarter past two");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles times after not 45 mins - 2:43", () => {
    const timeInWords = convertTimeToWords("2:43");
    expect(timeInWords).toBe("seventeen to three");
  });

  it("Handles military time ", () => {
    const timeInWords = convertTimeToWords("13:00");
    expect(timeInWords).toBe("one o'clock");
  });
});
