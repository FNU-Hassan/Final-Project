
// const userService = require('./userService');

// const getDataControllerFn = async (req, res) => {
//   try {
//     const employees = await userService.getDataFromDBService();
//     res.send({ status: true, data: employees });
//   } catch (error) {
//     res.send({ status: false, message: 'Error retrieving data' });
//   }
// };

// const createUserControllerFn = async (req, res) => {
//   try {
//     await userService.createUserDBService(req.body);
//     res.send({ status: true, message: 'User created successfully' });
//   } catch (error) {
//     res.send({ status: false, message: 'Error creating user' });
//   }
// };

// const updateUserController = async (req, res) => {
//   try {
//     const result = await userService.updateUserDBService(req.params.id, req.body);
//     res.send({ status: true, message: 'User updated successfully' });
//   } catch (error) {
//     res.send({ status: false, message: 'Error updating user' });
//   }
// };

// const deleteUserController = async (req, res) => {
//   try {
//     const result = await userService.removeUserDBService(req.params.id);
//     res.send({ status: true, message: 'User deleted successfully' });
//   } catch (error) {
//     res.send({ status: false, message: 'Error deleting user' });
//   }
// };

// module.exports = {
//   getDataControllerFn,
//   createUserControllerFn,
//   updateUserController,
//   deleteUserController,
// };
const userService = require('./userService');

const getDataControllerFn = async (req, res) => {
  try {
    const employees = await userService.getDataFromDBService();
    res.send({ status: true, data: employees });
  } catch (error) {
    res.send({ status: false, message: 'Error retrieving data' });
  }
};

const createUserControllerFn = async (req, res) => {
  try {
    await userService.createUserDBService(req.body);
    res.send({ status: true, message: 'User created successfully' });
  } catch (error) {
    res.send({ status: false, message: 'Error creating user' });
  }
};

const getUserController = async (req, res) => {
  try {
    const user = await userService.getUserFromDBService(req.params.id);
    res.send({ status: true, data: user });
  } catch (error) {
    res.send({ status: false, message: 'Error retrieving user' });
  }
};

const updateUserController = async (req, res) => {
  try {
    const result = await userService.updateUserDBService(req.params.id, req.body);
    res.send({ status: true, message: 'User updated successfully' });
  } catch (error) {
    res.send({ status: false, message: 'Error updating user' });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const result = await userService.removeUserDBService(req.params.id);
    res.send({ status: true, message: 'User deleted successfully' });
  } catch (error) {
    res.send({ status: false, message: 'Error deleting user' });
  }
};

module.exports = {
  getDataControllerFn,
  createUserControllerFn,
  getUserController,
  updateUserController,
  deleteUserController,
};
