const constant = require("../utils/constants");

exports.motivation_message = async (req, res) => {
  try {
    const moti = [
      "A penny saved is worth two pennies earned . . . after taxes.",
      "Don't argue with a fool, future will teach him some lessons",
      "Do not save what is left after spending; instead spend what is left after saving.",
      "Savings, remember, is the prerequisite of investment."
    ];
    const x = moti[Math.floor(Math.random() * 4)];
    res.json({ motivation_message: x });
  } catch (error) {
    res.json({
      error: true,
      message: error.message
    });
    Logger.debug("Error happen in check_balance method");
    Logger.debug(error);
    res.end();
  }
};
