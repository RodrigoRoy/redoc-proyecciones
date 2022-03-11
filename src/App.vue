<template>
  <v-app>
    <v-app-bar app dark dense elevation="8" hide-on-scroll> <!--color="green" -->
      <v-img src="@/assets/logo_ReDOC.png" href="https://redocinvestigacion.com/" max-width="90" contain class=" mr-2"></v-img>
      <!-- <span class="mr-2 text-capitalize font-weight-medium text-h5">Lenguas maternas</span> -->
      
      <!-- <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div> -->

      <v-spacer></v-spacer>

      <div v-if="language === 'es'">
        <v-btn text @click="$vuetify.goTo('#parallax1', options)">
          <span class="mr-2">{{ spanish.inicio }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax2', options)">
          <span class="mr-2">{{ spanish.lenguasMaternas }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax3', options)">
          <span class="mr-2">{{ spanish.matriarquia }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax4', options)">
          <span class="mr-2">{{ spanish.territorio }}</span>
        </v-btn>
      </div>

      <div v-if="language === 'en'">
        <v-btn text @click="$vuetify.goTo('#parallax1', options)">
          <span class="mr-2">{{ english.inicio }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax2', options)">
          <span class="mr-2">{{ english.lenguasMaternas }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax3', options)">
          <span class="mr-2">{{ english.matriarquia }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax4', options)">
          <span class="mr-2">{{ english.territorio }}</span>
        </v-btn>
      </div>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
          >
            Idiomas
          </v-btn>
        </template>
        <v-list class="pointerCursor">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title @click="changeLanguage(item.lang)">{{ item.language }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

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

export default {
  name: 'App',

  components: {
    SinglePage,
    Footer
  },

  data: () => ({
    items: [
      {
        language: 'Español',
        lang: 'es'
      },
      {
        language: 'English',
        lang: 'en'
      }
    ],
    // Configuración adicional para el movimiento de pantalla en menús de navbar
    options: {
      duration: 900,
      offset: 0,
      easing: 'easeInOutCubic',
    },
    spanish: {
      inicio: "Inicio",
      lenguasMaternas: "Lenguas Maternas",
      matriarquia: "Matriarquía",
      territorio: "Territorio"
    },
    english: {
      inicio: "Main",
      lenguasMaternas: "Mother Tongues",
      matriarquia: "Matriarchy",
      territorio: "Territory"
    },
    language: "es",
  }),
  methods: {
    changeLanguage(newLanguage){
      this.language = newLanguage;
    }
  }
};
</script>

<style scoped>
.pointerCursor{
  cursor: pointer;
}
</style>