const { userService } = require("../services");

const userController = {
  async getAll(req, res, next) {
    try {
      res.json(await userService.findAllUsers());
    } catch(err) {
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch(err) {
      next(err);
    }
  },
  async getById(req, res, next) {
    try {
      res.json(await userService.findUserById(req.params.id));
    } catch (err) {
      next(err);
    }
  },
  async updateById(req, res, next) {
    try {
      res.json(await userService.updateUser(req.params.id, req.body));
    } catch (err) {
      next(err);
    }
  },
  async deleteById(req, res, next) {
    try {
      await userService.deleteUser(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = { userController };