import { getAuth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { NextApiRequest, NextApiResponse } from "next"; // Import Next.js types

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = await clerkClient.users.getUser(userId);
    res.status(200).json({ firstName: user.firstName });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
}
