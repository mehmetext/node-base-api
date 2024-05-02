import rateLimit from "express-rate-limit";

export default rateLimit({
  windowMs: 15 * 60 * 1000,
  max: (req, res) => {
    return 10;
  },
  // skip: (req, res) => req.ip === "::1",
  message: {
    status: false,
    message: "Too many requests.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
