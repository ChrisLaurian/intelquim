<template>
  <LoginComponent></LoginComponent>
  <BarcodeReaderComponent></BarcodeReaderComponent>
  
</template>

<script>


import LoginComponent from './components/LoginComponent.vue';
import BarcodeReaderComponent from './components/BarcodeReaderComponent.vue';

export default {
  name: 'App',
  components: {
    LoginComponent,
    BarcodeReaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.drawingBuffer{
    display: none;
  }
</style>
