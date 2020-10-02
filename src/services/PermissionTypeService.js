import http from "../http-common";

class PermissionTypeService {
  getAll() {
    return http.get("/PermisionsType");
  }

  get(id) {
    return http.get(`/PermisionsType/${id}`);
  }

  create(data) {
    return http.post("/PermisionsType", data);
  }

  update(id, data) {
    return http.put(`/PermisionsType/${id}`, data);
  }

  delete(id) {
    return http.delete(`/PermisionsType/${id}`);
  }
}

export default new PermissionTypeService();
