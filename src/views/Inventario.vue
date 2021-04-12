<template>
  <div class="">
    <h1>VueJS</h1>
    <table class="table">
      <thead>
        <tr class="text-light bg-dark">
          <th scope="col " class="col-1"></th>
          <th scope="col " class="col-6">Descripción</th>
          <th scope="col " class="col-3">Monto</th>
          <th scope="col " class="col-2">¿Pagado?</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td></td>
          <td><input class="" type= "text" v-model= "nuevonombre"></td>
          <td><input class="" type= "number" v-model= "nuevocosto"></td>
          <td><div class="btn btn-outline-success" v-on:click="$store.commit('agregarItem')">Agregar</div></td>
        </tr>
        <tr v-for= "(item, index) in items" :key= "index" v-bind:class= "[item.pagado ? 'table-success' : 'table-danger']">
          <td><button class="btn btn-danger btn-sm mx-1" @click= "showModal = true ; updateindexreference(index);">x</button></td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.costo }}</td>
          <td>
            <input type="checkbox" v-model="item.pagado">
          </td>
        </tr>
        <tr class="text-success">
          <td></td>
          <td></td>
          <td>Pagado:</td>
          <td> {{ costePagado }}</td>
        </tr>
        <tr class="text-danger">
          <td></td>
          <td></td>
          <td>Por Pagar:</td>
          <td>{{ costePorPagar }}</td>
        </tr>
        <tr class="text-info">
          <td></td>
          <td></td>
          <td>Coste Total:</td>
          <td>{{ costeTotal }}</td>
        </tr>
        </tbody>
      </table>    
      <delconfirm id="show-modal" v-if= "showModal" @close= "showModal = false">
              <h3 slot="header">Los datos de este Item serán eliminados.</h3>
      </delconfirm>           
  </div>
</template>
<script>
import Vuex, { mapState } from 'vuex'
import delconfirm from "../components/Delconfirm.vue";

export default {
  name: 'Inventario',
  components: {
    delconfirm
    
  },
  computed: {
  ...Vuex.mapState(['items','nuevonombre','nuevocosto', 'indexreference']),
   //getters y setters adición de items
   nuevonombre: {
    get () {
      return this.$store.state.nuevonombre
    },
    set (value) {
      this.$store.commit('updateNuevonombre', value)
    }},
    nuevocosto: {
    get () {
        return this.$store.state.nuevocosto
    },
    set (value) {
        this.$store.commit('updateNuevocosto', value)
    }},
    costeTotal(){
  let total = 0;
  this.items.forEach((item, i) => {
       total += item.costo;
  });
      return total;
      
      
 },
   costePorPagar() {
  let total = 0;
    this.items.forEach((item) => {
      if (item.pagado == false)
        total += item.costo;
  });
      return total;
      
    },
  costePagado(){
  let total = 0;
  this.items.forEach((item) => {
    if (item.pagado == true)
       total += item.costo;
  });
      return total;
      
 }
    /* ...Vuex.mapGetters(['costeTotal']), */

            
},
methods:{
    ...Vuex.mapMutations(['updateNuevonombre','updateNuevocosto','delItem', 'updateindexreference']),
    },
data: function () {
    return {
        showModal: false,
        search: '',       
    }
},
}
</script>
