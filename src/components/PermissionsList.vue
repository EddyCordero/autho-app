<template>
  <div class="row">
    <div class="col-md-12">
              <h4>Permisos</h4>
        <div class="row">
        <div class="col-md-10">
            <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Escriba el nombre para buscar..."
                    v-model="fullname"/>
                    <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"
                        @click="searchByName"
                    >
                        Buscar
                    </button>
                    </div>
                </div>
        </div>
            
        <div class="col-md-2"><a href="/add-permission" class="btn btn-primary">Crear</a></div>
    </div>
      
    </div>
    <div class="col-md-12">
      <table id="tasks" class="ui celled compact table">
          <thead class="thead-light">
              <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Tipo</th>
                  <th>Desde</th>
                  <th>Hasta</th>
                  <th><i class="edit icon"></i></th>
                  <th><i class="trash icon"></i></th>
                  <th colspan="3"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in permissions" v-bind:key="item.id" >
                    <th>{{ item.firstName }}</th>
                    <td>{{ item.lastName }}</td>
                    <td>{{ item.permissionTypeId }}</td>
                    <td>{{ item.dateFrom }}</td>
                    <td>{{ item.dateTo }}</td>
                    <td><a class="btn btn-warning" :href="'/permission/' + item.id">Editar</a></td>
                    <td><button type="button" class="btn btn-danger" @click="removePermission(item.id)">Elmiminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import PermissionService from "../services/PermissionService";

export default {
  name: "permission-list",
  data() {
    return {
      permissions: [],
      currentPermission: null,
      currentIndex: -1,
      fullname: ""
    };
  },
  methods: {
    retrieveTutorials() {
      PermissionService.getAll()
        .then(response => {
          this.permissions = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentPermission = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(permision, index) {
      this.currentPermission = permision;
      this.currentIndex = index;
    },

    removePermission(permissionId) {
      var answer = confirm("Esta seguro que desea elminar este registro?");

        if(!answer)
            return;

      PermissionService.delete(permissionId)
        .then(response => {
          console.log(response.data);
          this.$router.push('/');
          alert("Se a eliminado exitosamente");
          
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchByName() {
      PermissionService.findByName(this.fullname)
        .then(response => {
          this.permissions = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
