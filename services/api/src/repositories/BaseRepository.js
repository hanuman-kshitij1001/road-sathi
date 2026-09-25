/**
 * Base Repository Interface / Abstract Class
 * 
 * Enforces the Repository pattern across Road-Sathi data access layers.
 * Decouples the business logic (Services) from specific database querying mechanisms.
 */
export class BaseRepository {
  /**
   * @param {string} entityName
   */
  constructor(entityName) {
    if (this.constructor === BaseRepository) {
      throw new Error('BaseRepository is an abstract class and cannot be instantiated directly.');
    }
    this.entityName = entityName;
  }

  async findById(_id) {
    throw new Error(`findById() not implemented for repository ${this.entityName}`);
  }

  async find(_filter = {}) {
    throw new Error(`find() not implemented for repository ${this.entityName}`);
  }

  async create(_data) {
    throw new Error(`create() not implemented for repository ${this.entityName}`);
  }

  async update(_id, _data) {
    throw new Error(`update() not implemented for repository ${this.entityName}`);
  }

  async delete(_id) {
    throw new Error(`delete() not implemented for repository ${this.entityName}`);
  }
}
