<template>
    <div class="login-container">
      <img src="../assets/img/logo2.png" alt="Imagen" class="img-fluid mx-auto d-block mt-4" id="Logo2">
      <form @submit.prevent="login" class="login-form">
        <h2 class="login-title">Iniciar sesión</h2>
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" v-model="username" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary login-button">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <style scoped>
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(.9);
  }
}
  
#Logo2{
  height: 20em;
  width: 20em;
  animation: heartbeat 10s infinite; /* Ajusta la duración y propiedades de la animación según tus preferencias */
}

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
  
  .login-form {
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 30px;
    width: 300px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .login-title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-control {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .login-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  
  <script src="../JS/Login.js"></script>
  