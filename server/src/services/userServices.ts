/** @format */

import { IUser } from "../interfaces/index";
import * as userRepo from "../repos/userRepo";

export const createUser = async (user: IUser) => {
  try {
    if (
      !user.fname ||
      !user.lname ||
      !user.email ||
      !user.password ||
      !user.contact
    ) {
      throw new Error("First name, last name, and email are required");
    }
    console.log("User data:", user);
    const newUser = await userRepo.createUser(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};
