export class BaseService {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return this.model.create(data);
  }

  async findAll() {
    return this.model.findAll();
  }

  async findById(id) {
    return this.model.findByPk(id);
  }

  async update(id, data) {
    const item = await this.model.findByPk(id);
    if (!item) return null;
    await item.update(data);
    return item;
  }

  async remove(id) {
    const item = await this.model.findByPk(id);
    if (!item) return null;
    await item.destroy();
    return true;
  }
}
