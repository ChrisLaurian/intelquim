import Quagga from 'quagga';

export default {
  data() {
    return {
      scannedBarcode: '',
    };
  },
  methods: {
    startScan() {
      const scannerContainer = document.getElementById('scanner-container');
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: scannerContainer,
          },
          decoder: {
            readers: [
              'ean_reader',
              'code_128_reader',
              'code_39_reader'
              // Agrega aquí otros lectores que desees
            ],
          },
        },
        (err) => {
          if (err) {
            console.error('Error al inicializar Quagga:', err);
            return;
          }
          Quagga.start();
          Quagga.onDetected(this.onBarcodeDetected);
        }
      );
    },
    onBarcodeDetected(result) {
      this.scannedBarcode = result.codeResult.code;
      Quagga.stop();
    },
  },
  beforeUnmount() {
    Quagga.stop();
  },
};
