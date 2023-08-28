import Quagga from 'quagga';

export default {
  data() {
    return {
      scannedBarcode: '',
      scanning: false,
      scannerInitialized: false,
    };
  },
  methods: {
    initScanner() {
      if (!this.scannerInitialized) {
        Quagga.init(
          {
            inputStream: {
              name: 'Live',
              type: 'LiveStream',
              target: '#scanner-container',
            },
            decoder: {
              readers: ['ean_reader'],
            },
          },
          (err) => {
            if (err) {
              console.error('Error al inicializar Quagga:', err);
              return;
            }
            this.scannerInitialized = true;
          }
        );
      }
    },
    startScan() {
      if (!this.scanning) {
        this.scanning = true;
        this.initScanner();
        Quagga.start();
        Quagga.onDetected(this.onBarcodeDetected);
      }
    },
    onBarcodeDetected(result) {
        console.log('Resultado de Quagga:', result); // Muestra el objeto de resultado en la consola
        if (result && result.codeResult && result.codeResult.attachData) {
          this.scannedBarcode = result.codeResult.attachData;
          this.stopScan();
        } else {
          console.error('Resultado de Quagga no válido');
        }
      },
  },
};
