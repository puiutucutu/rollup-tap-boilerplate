import test from "tape";
import { add } from "../src/add";

test("add", function(assert) {
  assert.equal(add(1, 2), 3, "Returns expected value when adding 1 + 2");
  assert.equal(add(2, 3), 5, "Returns expected value when adding 2 + 3");

  try {
    add("2", "3");
  } catch (err) {
    assert.equal(
      err instanceof TypeError,
      true,
      "Error must be instance of TypeError"
    );

    assert.equal(
      err.message,
      "Supplied arg `x` or `y` is not a valid number",
      "Expected error message"
    );
  }

  assert.throws(
    () => add("2", "3"),
    /^TypeError: Supplied arg `x` or `y` is not a valid number$/,
    "Throws TypeError with expected error message when args are not numbers (using tape's `assert.throws()`)"
  );

  assert.end();
});
