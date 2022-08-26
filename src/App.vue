<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img
          alt="SMlogo"

          src="./assets/SmLogo.png"
          height="40"
          class="mr-2"
        />
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
  </div>
  <!-- <nav>
    <router-link to="/signup">Sign-Up</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Log-In</router-link> |
    <router-link to="/see-res">temp</router-link>
    <hr />
  </nav> -->
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          // url: "http://localhost:8080/",
          to: "/",
        },
        {
          label: "Genre",
          items: [
            {
              label: "Action",
              // icon: "pi pi-fw pi-align-left",
              // to: "/category/action/",
              url: "/category/action/",
            },
            {
              label: "Comedy",
              // icon: "pi pi-fw pi-align-right",
              // to: "category/comedy/",
              url: "/category/comedy/",
            },
            {
              label: "Drum",
              // icon: "pi pi-fw pi-align-center",
              // to: "category/drum/",
              url: "/category/drum/",
            },
            {
              label: "Horror",
              // icon: "pi pi-fw pi-align-justify",
              // to: "category/horror/",
              url: "/category/horror/",
            },
            {
              label: "Fantasy",
              // to: "category/fantasy/",
              url: "/category/fantasy/",
            },
          ],
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "Sign-Up",
              icon: "pi pi-fw pi-user-plus",
              // url: "http://localhost:8080/signup",
              to: "/signup",
            },
            {
              label: "Log-In",
              icon: "pi pi-fw pi-sign-in",
              // url: "http://localhost:8080/login",
              to: "/login",
            },
            {
              label: "Log-Out",
              icon: "pi pi-fw pi-sign-out",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-user-minus",
            },
          ],
        },
        {
          label: "Comment",
          icon: "pi pi-fw pi-comment",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-plus",
            },
            {
              label: "Edit",
              icon: "pi pi-fw pi-pencil",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-minus",
            },
          ],
        },
        {
          label: "temp",
          // url: "http://localhost:8080/see-res",
          to: "/see-res",
        },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
          url: "http://www.googel.com"
        },
      ],
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(232, 232, 232);
} */

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
