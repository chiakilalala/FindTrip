<template>
  <div>
    <v-facebook-login v-model="model" @sdk-init="handleSdkInit" />
    <button v-if="scope.logout && model.connected" @click="scope.logout">
      Logout
    </button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      FB: {},
      model: {},
      scope: {}
    }),
    methods: {
      handleSdkInit({ FB, scope }) {
        this.FB = FB
        this.scope = scope
      }
    }
  }
</script>

<script>
/* eslint-disable */

export default {
  data(){
    return {
      connected: false,
      username: '',
      picture: '',
    };
  },
  methods:{
    connect(){
      FB.login(this.statusGet);
    },
    statusGet(result){
      if(result.status === 'connected'){
        this.connected = true;
        FB.api('/me', 'GET', {
          fields:['picture', 'name'],
        }, rs => {
          this.userID = rs.id;
          this.username = rs.name;
          this.picture = rs.picture.data.url;
        });
      }
    },
    submit(){
    },
  },
  mounted(){
    FB.init({
      appId: 702263037187512,
      version: 'v7.0',
    });
    FB.getLoginStatus(this.statusGet);
  },
};
</script>
