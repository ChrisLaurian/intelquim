<template>
  <div id="Lector">
    <div class="container d-flex flex-column align-items-center mt-5">
      <h2 class="mb-4">Lector de Código de Barras</h2>
      <div class="scanner-wrapper mb-4">
        <div id="scanner-container">
          <video id="video" class="camera-stream" autoplay="autoplay" playsinline></video>
        </div>
      </div>
      <button @click="startScan" class="btn btn-primary">Comenzar Escaneo</button>
      <p class="mt-3">Código de barras escaneado: {{ scannedBarcode }}</p>
    </div>
  </div>
  </template>
  
  <script>
  import BarcodeScannerLogic from '../JS/BarcodeScannerLogic'; // Cambia la ruta según corresponda
  
  export default {
    mixins: [BarcodeScannerLogic],
  };
  </script>
  
  <style scoped>

  #Lector{
    margin-top: 6em;
  }
  .container {
    max-width: 600px;
  }
  
  .scanner-wrapper {
    width: 100%;
    max-width: 300px;
    border: 2px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .camera-stream {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  
  </style>
  