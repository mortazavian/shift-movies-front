<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img alt="SMlogo" src="../assets/SmLogo.png" height="40" class="mr-2" />
      </template>
      <template #end>
        <InputText
          placeholder="Search"
          type="text"
          v-model="search"
          v-on:keyup.enter="searchMovie()"
        />
        <!-- <Button label="GO!" @click="searchMovie" /> -->
      </template>
    </Menubar>
  </div>
  <router-view />
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          url: "http://localhost:8080/",
          // to: "/",
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
        // {
        //   label: "Users",
        //   icon: "pi pi-fw pi-user",
        //   items: [
        //     {
        //       label: "Sign-Up",
        //       icon: "pi pi-fw pi-user-plus",
        //       // url: "http://localhost:8080/signup",
        //       to: "/signup",
        //     },
        //     {
        //       label: "Log-In",
        //       icon: "pi pi-fw pi-sign-in",
        //       // url: "http://localhost:8080/login",
        //       to: "/login",
        //     },
        //     // {
        //     //   label: "Log-Out",
        //     //   icon: "pi pi-fw pi-sign-out",
        //     // },
        //     {
        //       label: "Delete",
        //       icon: "pi pi-fw pi-user-minus",
        //     },
        //   ],
        // },
        // {
        //   label: "Comment",
        //   icon: "pi pi-fw pi-comment",
        //   items: [
        //     {
        //       label: "New",
        //       icon: "pi pi-fw pi-plus",
        //     },
        //     {
        //       label: "Edit",
        //       icon: "pi pi-fw pi-pencil",
        //     },
        //     {
        //       label: "Delete",
        //       icon: "pi pi-fw pi-minus",
        //     },
        //   ],
        // },
        {
          label: "temp",
          // url: "http://localhost:8080/see-res",
          to: "/see-res",
        },
        // {
        //   label: "Log-In",
        //   icon: "pi pi-fw pi-sign-in",
        //   // url: "http://localhost:8080/login",
        //   to: "/login",
        // },
        // {
        //   label: "Log-Out",
        //   icon: "pi pi-fw pi-sign-out",
        //   to: "/logout",
        //   // method: this.logOut(),
        // },
      ],
      movies: [],
      movie: null,
      search: "",
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/home/",
    })
      .then((response) => {
        this.movies = response.data;
      })
      .catch((error) => console.log("No results found!"));
  },
  methods: {
    searchMovie() {
      // console.log("in searchMovie method");
      let index = this.movies.length;
      console.log(index);
      for (let i = 0; i < index; i++) {
        if (this.movies[i].name.toLowerCase() === this.search.toLowerCase()) {
          this.movie = this.movies[i];
          this.$router.push({
            path: "/single-movie",
            query: { id: this.movie.id },
          });
          break;
        }
      }
      // Refresh the page for continuous searches
      window.location.href =
        "http://localhost:8080/single-movie?id=" + this.movie.id;

      if (this.movie === null) {
        window.alert("Movie Not Found :(");
      }
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      this.items.push(
        {
          label: "Log-Out",
          icon: "pi pi-fw pi-sign-out",
          to: "/logout",
          // method: this.logOut(),
        },
        {
          label: "Upload-Film",
          to: "/upload-movie",
        }
      );
    } else {
      this.items.push({
        label: "Log-In",
        icon: "pi pi-fw pi-sign-in",
        // url: "http://localhost:8080/login",
        to: "/login",
      });
    }
  },
  // methods: {
  //   logOut() {
  //     localStorage.removeItem("token");
  //     this.$router.push("/");
  //   },
  // },
};
</script>
