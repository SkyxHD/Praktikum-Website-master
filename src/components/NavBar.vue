<template>
  <nav>
    <div class="menu-item"><a href="/">Home</a></div>
    <Dropdown title="Einteiltung" :items="einleitungdropdown" />
    <Dropdown title="Hauptteil" :items="hauptteildropdown" />
    <Dropdown title="Schluss" :items="schlussdropdown" />
  </nav>
</template>

<script>
import Dropdown from './DropDown.vue';

export default {
  name: 'NavBar',
  components: {
    Dropdown
  },
  data () {
    return {
      einleitungdropdown:[
        {
          title: 'Suche nach dem Praktikum',
          link:'/suche',
        },
        {
          title: 'Erwartungen',
          link: '/',
        }
      ],
      hauptteildropdown: [
        {
          title: 'Informationen',
          link: '/',
        },
        {
          title: 'Tätigkeit',
          link:'/',
        },
      ],
      schlussdropdown: [
        {
          title:'Bewertung',
          link:'/'
        }
      ],
    }
  }
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>