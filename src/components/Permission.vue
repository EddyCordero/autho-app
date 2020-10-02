<template>
  <div class="edit-form">
    <h4>Editar Permiso</h4>
 <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="firstName">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          required
          v-model="permission.firstName"
          name="firstName"
        />
      </div>

      <div class="form-group">
        <label for="lastName">Apellido</label>
        <input
          class="form-control"
          id="lastName"
          required
          v-model="permission.lastName"
          name="lastName"
        />
      </div>

 <div class="form-group">
            <label for="dateFrom">Tipo</label>
            <select class="form-control" v-model="permission.permissionTypeId" v-if="permissionsTypes.length">
            <option v-for="option in permissionsTypes" :key="option.id" v-bind:value="option.id">{{ option.description }}</option>
    </select>
      </div>

      <div class="form-group">
        <label for="dateFrom">Desde</label>
         <input type="date" class="form-control" 
        required
        v-model="permission.dateFrom"
        name="dateFrom">
      </div>
      <div class="form-group">
        <label for="dateTo">Hasta</label>

        <input type="date" class="form-control" 
        required
        v-model="permission.dateTo"
        name="dateTo">
      </div>
      <a href="/" class="btn btn-light" style="margin-left: 15px;">Cancelar</a>
      <button @click="updatePermission" class="btn btn-success">Guardar</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPermission">Editar</button>
    </div>
  </div>
  </div>
</template>

<script>
import PermissionService from "../services/PermissionService";

export default {
  name: "permission",
  data() {
    return {
      permission: {
        id: null,
        firstName: "",
        lastName: "",
        permissionTypeId: null,
        dateFrom: "",
        dateTo: "",
      },
      permissionsTypes: [],
      submitted: false,
    };
  },
  methods: {
    getPermission(id) {
      PermissionService.get(id)
        .then(response => {
            console.log("Me ejecute");
            console.log(response);
          let data = response.data;

          this.permission.firstName = data.firstName;
          this.permission.lastName = data.lastName;
          this.permission.permissionTypeId = data.permissionTypeId;
          this.permission.dateFrom = data.dateFrom.substr(0, 10);
          this.permission.dateTo = data.dateTo.substr(0, 10);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getPermissionsType() { 
        PermissionService.getAllPermissionsType()
        .then(response => {
          this.permissionsTypes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePermission() {
        let data = {
        id: this.$route.params.id,
        firstName: this.permission.firstName,
        lastName: this.permission.lastName,
        dateFrom: this.permission.dateFrom,
        dateTo: this.permission.dateTo,
        permissionTypeId: this.permission.permissionTypeId
      };

      PermissionService.update(data)
        .then(response => {
          console.log(response.data);
          alert('The permission was updated successfully!');
          this.$router.push('/');
        })
        .catch(e => {
          alert(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getPermission(this.$route.params.id);
    this.getPermissionsType();
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
