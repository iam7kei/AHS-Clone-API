import { Router, Request, Response } from "express";
import * as argon2 from "argon2";
import { getUserByEmail } from "../../services/user.service";
import { User } from "../../../generated/prisma";

const authRoutes = Router();

export default authRoutes

authRoutes.post('/login', async (req: Request, res: Response) => {

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required." });
    }
    const user: User | null = await getUserByEmail(email);

    if (!user || user === null) {
      res.status(401).json({ message: "Invalid credentials." });
      return
    }

    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch) {
      res.status(401).json({ message: "Invalid credentials." }); 
    }

    const {password: currentPassword, ...rest} = user
    res.status(200).json({ message: "Login successful!", user: rest});
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error." });
  }

});
