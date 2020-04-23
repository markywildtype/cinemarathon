<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/listings">Cinema Listings</router-link> |
      <router-link to="/planner">Marathon Planner</router-link>
    </div>
    <transition appear name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  background-color: black;
  height: 100vh;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.red-text {
  color: red;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(30px);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
