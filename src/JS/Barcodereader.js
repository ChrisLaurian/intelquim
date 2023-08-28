import { ImageBarcodeReader } from 'vue-barcode-reader';

export default {
  components: {
    ImageBarcodeReader,
  },
  data() {
    return {
      scannedBarcode: '',
    };
  },
  methods: {
    handleBarcodeDecode(decodedData) {
      this.scannedBarcode = decodedData;
      console.log("El codigo es: ", this.decodedData);
      // Aquí puedes realizar acciones con el código de barras leído
    },
  },
};
