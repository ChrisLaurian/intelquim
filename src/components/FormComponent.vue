<template>
  <div class="container mt-5">
    <h2 class="mt-4">IntelAgro</h2>
    <form @submit.prevent="submitForm" class="mt-3 custom-form">
      <h2 class="form-title">Formulario de Registro</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre" class="form-control" pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+" title="Solo se permiten letras y espacios" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" v-model="apellidos" class="form-control" pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+" title="Solo se permiten letras y espacios" required>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="edad">Edad:</label>
            <input type="number" id="edad" v-model="edad" class="form-control" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Genero:</label>
            <select v-model="genero" class="form-control" required>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="domicilio">Domicilio:</label>
        <textarea id="domicilio" v-model="domicilio" class="form-control" required></textarea>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" v-model="telefono" class="form-control" pattern="[0-9]+" title="Solo se permiten números" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="curp">CURP:</label>
            <input type="text" id="curp" v-model="curp" class="form-control" pattern="^[A-Za-z0-9]{18}$" title="La CURP debe tener 18 caracteres alfanuméricos" required>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="rfc">RFC:</label>
        <input type="text" id="rfc" v-model="rfc" class="form-control" pattern="^[A-Za-z0-9]{12,13}$" title="El RFC debe tener entre 12 y 13 caracteres alfanuméricos" required>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellidos: '',
      edad: null,
      genero: '',
      curp: '',
      domicilio: '',
      telefono: '',
      rfc: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Formulario enviado:', this.nombre, this.apellidos, this.edad, this.genero, this.curp, this.domicilio, this.telefono, this.rfc);
    }
  }
};
</script>

<style scoped>
.custom-form {
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

</style>
