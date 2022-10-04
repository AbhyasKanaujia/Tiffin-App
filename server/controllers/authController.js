import asyncHandler from "express-async-handler";

const loginUser = asyncHandler(async (req, res) => {
  res.json({ token: "1345698764312654715" });
});

export { loginUser };
