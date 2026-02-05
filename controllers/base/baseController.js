export class BaseController {
  constructor(service) {
    this.service = service;

    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async create(req, res) {
    try {
      const created = await this.service.create(req.body);
      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al crear", error });
    }
  }

  async getAll(req, res) {
    try {
      const list = await this.service.findAll();
      return res.json(list);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al listar", error });
    }
  }

  async getById(req, res) {
    try {
      const item = await this.service.findById(req.params.id);
      if (!item) return res.status(404).json({ mensaje: "No encontrado" });
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al obtener", error });
    }
  }

  async update(req, res) {
    try {
      const updated = await this.service.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ mensaje: "No encontrado" });
      return res.json(updated);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al actualizar", error });
    }
  }

  async remove(req, res) {
    try {
      const ok = await this.service.delete(req.params.id);
      if (!ok) return res.status(404).json({ mensaje: "No encontrado" });
      return res.json({ mensaje: "Eliminado correctamente" });
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al eliminar", error });
    }
  }
}
