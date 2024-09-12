const GroupService = require("../services/group.service");

module.exports = {
  createGroupController: async (req, res) => {
    try {
      const { groupName, members } = req.body;
      const ownerId = req.user.id;
      if (!groupName) {
        return res.status(400).json({ message: "Yêu cầu có tên nhóm" });
      }
      const result = await GroupService.createGroupService(
        groupName,
        ownerId,
        members
      );
      return res.status(201).json(result);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ ok: false, message: "Lỗi server" });
    }
  },

  addMemberToGroupController: async (req, res) => {
    try {
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ ok: false, message: "Lỗi server" });
    }
  },
};
