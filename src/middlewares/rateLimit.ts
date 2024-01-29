import expressRateLimit from "express-rate-limit";

export default expressRateLimit({
  windowMs: 15 * 60 * 1000,
  max: (req, res) => {
    if (req.url === "/login" || req.url === "/register") {
      return 5;
    } else return 50;
  },
  skip: (req, res) => req.ip === "::1",
  message: {
    message: "So many request",
    success: false,
  },
  standardHeaders: true,
  legacyHeaders: false,
});
