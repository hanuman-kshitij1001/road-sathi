/**
 * Base Service Class
 * 
 * Foundation for business logic services in Road-Sathi.
 * Services orchestrate domain validation, external integrations, transactions,
 * and coordinate multiple repositories.
 */
export class BaseService {
  /**
   * @param {string} serviceName
   */
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
}
