<template>
    <div>
      <h2>Lector de Códigos de Barras</h2>
      <ImageBarcodeReader @decode="handleBarcodeDecode" />
      <p>Código de barras leído: {{ scannedBarcode }}</p>
    </div>
  </template>
  
  <script>
  import BarcodeReader from '../JS/Barcodereader.js';
  
  export default {
    mixins: [BarcodeReader],
  };
  </script>
  