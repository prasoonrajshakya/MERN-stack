import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit"); //can be user specific or IP specific

    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    }
    next();
  } catch (error) {
    console.error("Error occurred while checking rate limit:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default rateLimiter;
