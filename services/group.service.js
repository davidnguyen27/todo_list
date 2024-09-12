const GroupModel = require("../models/group.model");
const UserModel = require("../models/user.model");
module.exports = {
  createGroupService: (groupName, ownerId, members) =>
    new Promise(async (resolve, reject) => {
      try {
        members = members || [];
        members.push({ memberId: ownerId, role: "edit" });
        const newGroup = await GroupModel.create({
          groupName,
          ownerId,
          members,
        });
        resolve({
          status: 201,
          ok: true,
          message: "Tạo nhóm thành công",
          group: newGroup,
        });
      } catch (error) {
        reject({
          status: 500,
          ok: false,
          message: error.message || "Tạo thất bại",
        });
      }
    }),

  addMemberToGroupService: (groupId, userId) =>
    new Promise(async (resolve, reject) => {
      try {
        const group = await GroupModel.findById(groupId);
      } catch (error) {}
    }),
};
