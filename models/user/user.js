import User from "./schema";

class UserDBModel {
  async getAllUsers() {
    return await User.find({});
  }
  async getUserById(userId) {
    return User.findById(userId);
  }
}

export const useUserDbModel = () => new UserDBModel();
