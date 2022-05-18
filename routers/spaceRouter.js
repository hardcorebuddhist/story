const { Router } = require("express");

const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await Space.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
