function testThrow(exception) {
  try {
    throw exception;
  } catch (error) {
    console.log("Caught: " + error);
  }
}
testThrow(5);
testThrow("Test");
testThrow(new Error("An error happened"));
