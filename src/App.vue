<template>
  <div id="app">
    <div id="nav">
      <h1>
        Cine<span class="red-text">Marathon</span> <i class="fas fa-film"></i>
      </h1>
      <router-link to="/">Home</router-link>
      <router-link to="/listings">Cinema Listings</router-link>
      <router-link to="/planner">Marathon Planner</router-link>
    </div>
    <transition appear name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  height: 100%;
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

i {
  transform: rotate(20deg);
}

#nav {
  padding: 30px;
  display: inline;
}

#nav h1 {
  font-size: 3rem;
}

#nav a {
  font-weight: bold;
  color: darkred;
  padding: 0.5em;
  text-decoration: none;
}

#nav a:hover {
  color: red;
}

#nav a.router-link-exact-active {
  color: red;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
