
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },

methods: {
  async iniciarSesion() {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json"); // Indica que estás enviando datos JSON
      

    //  const requestData = {
    //    username: this.username,
    //    password: this.password,
    //  };

      const raw = JSON.stringify({
        username: this.username,
        password: this.password,
      });

      const requestOptions = {
        method: 'POST', // Cambia el método a POST
        headers: myHeaders,
        body: raw, 
        redirect: 'follow',
      };

      const response = await fetch('https://www.hidraquimsrv.com.mx:444/SurtidoHQ.svc/LoginP', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error, requestOptions));

      // Verificar el estado de la respuesta
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
      throw error;
    }
  },
  async login() {
    try {
      const result = await this.iniciarSesion();

      if (result && result.LoginOk) {
        // Guardar datos en el Local Storage
        localStorage.setItem('UserId', result.UserId);
        localStorage.setItem('Token', result.Token);
        localStorage.setItem('UserName', result.UserName);

        // Redirigir u otras acciones en caso de inicio de sesión exitoso
        // Puedes usar el enrutamiento de Vue para redirigir a otra página, por ejemplo.
      } else {
        alert('Usuario o contraseña incorrectos. Inténtalo nuevamente.');
      }
    } catch (error) {
      alert('Ocurrió un error al iniciar sesión. Inténtalo nuevamente más tarde.');
      console.log(error);
      // Puedes manejar errores específicos aquí
    }
  }
}
}


/*
import axios from "../Axios"; // Asegúrate de que la ruta sea correcta

export default {
  data() {
    return {
      usuario: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async iniciarSesion() {
      try {
        const respuesta = await axios.post("/LoginP", this.usuario);
         if (respuesta.status === 200 && respuesta.data.authenticated) {
          // Inicio de sesión exitoso, realiza acciones adicionales si es necesario
          alert("Inicio de sesión exitoso");
        } else {
          // El inicio de sesión falló, muestra un mensaje de error
          alert("Inicio de sesión fallido");
        }
        // Resto del código para el inicio de sesión
      } catch (error) {
        // Manejo de errores
        console.error("Error al iniciar sesión:", error);
        console.log(this.usuario);
        alert("Ocurrió un error al iniciar sesión");
      }
    },
  },
};

*/

