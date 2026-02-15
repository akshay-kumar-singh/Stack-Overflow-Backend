import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedData?.id;

    next();
  } catch (error) {
    console.log("Auth error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default auth;
