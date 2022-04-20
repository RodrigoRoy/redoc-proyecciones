<template>
  <v-app>
    
    <Header/>

    <v-main class="my-n4">
      <SinglePage/>
    </v-main>

    <!-- <v-footer color="black darken-2"> -->
    <v-footer dark>
      <Footer/>
    </v-footer>

  </v-app>
</template>

<script>
import SinglePage from './components/SinglePage';
import Footer from './components/Footer';
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    SinglePage,
    Footer,
    Header
  }
};
</script>