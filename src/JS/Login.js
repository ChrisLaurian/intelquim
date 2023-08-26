

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", ".ASPXAUTH=DA7659051793CDD13FB1B254608E63C37852E9B785BCB5D7F5B3D4C959BAD1645746FB2A310485206255C6A5E9681BCADF648D7529777B3C0D4EDC76012E4DC2A15F9789E1CBEDE2593D7F00D4793577A0C37D544501C78BF0F5C267185FF71A346453A82076BFF32C132F8010098D778CF9ABD70E2AA9F69B181A890628B50EE2D745A0AB81691FEDD8DF3C6FA3E09A2AFBF350159D260028F4DC18FB58DBACD8125CAC3968F8AFF12572C3FB96B062; ASP.NET_SessionId=rh11fgcnpjjtptgbqeybm303");
        
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        const response = await fetch(`http://187.216.140.74:81/SurtidoHQ.svc/Login/${this.username}/${this.password}`, requestOptions);
        const result = await response.text();
        
        console.log('Respuesta GET:', result);
        // Aquí puedes manejar la respuesta de la solicitud GET
      } catch (error) {
        console.error('Error al realizar la solicitud GET:', error);
        // Aquí puedes manejar los errores
      }
    }
  }
};

