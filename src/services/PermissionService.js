import http from "../http-common";

class PermissionService {
  getAll() {
    return http.get("/Permisions");
  }

  get(id) {
      console.log("me ejecute "+ id);
    return http.get(`/Permisions/${id}`);
  }

  create(data) {
    return http.post("/Permisions", data);
  }

  update(data) {
    return http.put("/Permisions/", data);
  }

  delete(id) {
    return http.delete(`/Permisions/${id}`);
  }

  findByName(name) {
    return http.get(`/Permisions?name=${name}`);
  }

  getAllPermissionsType() {
    return http.get("/PermisionsType");
  }
}

export default new PermissionService();
