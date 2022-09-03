<template>
  <div class="image">
    <img :src="image" />
  </div>
</template>
<script>
const images = [
  "https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/343/724/32/the-lion-king-2019-movie-poster-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/579/921/292/amazing-spider-man-new-marvel-s-the-amazing-spider-man-movie-poster-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg",
];
export default {
  name: "App",
  data() {
    return { index: 0, image: images[0] };
  },
  methods: {
    next() {
      this.index = (this.index + 1) % images.length;
      this.image = images[this.index];
    },
    autoChangeSlide() {
      setInterval(() => {
        this.next();
      }, 5000);
    },
  },
  beforeMount() {
    this.autoChangeSlide();
  },
};
</script>

<style scoped>
.image {
    width: min-content;
    height: min-content;
}
</style>
