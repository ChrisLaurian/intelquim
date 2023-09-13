import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.hidraquimsrv.com.mx:444/SurtidoHQ.svc", // Reemplaza con la URL de tu API
  timeout: 50000, // Tiempo de espera para las solicitudes (en milisegundos)
});

// Agrega interceptores u otras configuraciones si es necesario

export default instance;
