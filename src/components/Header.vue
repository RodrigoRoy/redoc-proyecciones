<template>
    <v-app-bar app dark dense elevation="10"> <!--hide-on-scroll -->
      <v-img src="@/assets/logo_ReDOC.png" href="https://redocinvestigacion.com/" max-width="90" contain class=" mr-2"></v-img>
      <v-spacer></v-spacer>

      <!-- Nav web -->
      <div class="d-none d-md-block">
        <v-btn text @click="$vuetify.goTo('#parallax1', options)">
            <span class="mr-2">{{ $t('header.inicio') }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax2', options)">
            <span class="mr-2">{{ $t('header.lenguasMaternas') }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax3', options)">
            <span class="mr-2">{{ $t('header.matriarquia') }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#parallax4', options)">
            <span class="mr-2">{{ $t('header.territorio') }}</span>
        </v-btn>

        <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" dark>
                    <v-icon> mdi-translate </v-icon>
                </v-btn>
            </template>
            <v-list dark>
                <div v-for="(item, index) in items" :key="index" link>
                    <v-list-item @click="switchLocale(item.lang)">
                        <v-list-item-title>{{ item.language }}</v-list-item-title>
                    </v-list-item>
                </div>
            </v-list>
        </v-menu>
      </div>

      <!-- Version movil -->
      <div class="d-md-none">

        <v-menu v-model="movilMenu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on">
                    <v-icon> mdi-menu </v-icon>
                </v-btn>
            </template>
            <v-list dark>
                <v-list-item @click="$vuetify.goTo('#parallax1', options);movilMenu = false;">
                    <v-list-item-title >
                        {{ $t('header.inicio') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="$vuetify.goTo('#parallax2', options);movilMenu = false;">
                    <v-list-item-title>
                        {{ $t('header.lenguasMaternas') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="$vuetify.goTo('#parallax3', options);movilMenu = false;">
                    <v-list-item-title>
                        {{ $t('header.matriarquia') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="$vuetify.goTo('#parallax4', options);movilMenu = false;">
                    <v-list-item-title>
                        {{ $t('header.territorio') }}
                    </v-list-item-title>
                </v-list-item>

                <v-list-group :value="false" prepend-icon="mdi-translate" active-class="pink--text text--lighten-2">
                    <template v-slot:activator>
                        <v-list-item-title>
                            {{ $t('header.idioma') }}
                        </v-list-item-title>
                    </template>

                    <v-list-item v-for="(item, index) in items" :key="index" link>
                        <v-list-item-title @click="switchLocale(item.lang);movilMenu = false;">
                            {{ item.language }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-menu>
        
      </div>
    </v-app-bar>
</template>

<script>

export default {
  name: 'Header',

  data: () => ({
    // Configuración adicional para el movimiento de pantalla en menús de navbar
    options: {
      duration: 900,
      offset: 0,
      easing: 'easeInOutCubic',
    },
    // Menú exclusivo de vista en moviles
    movilMenu: false,
    // Idiomas del sistema
    items: [
      {
        language: 'Español',
        lang: 'es'
      },
      {
        language: 'English',
        lang: 'en'
      },
      {
        language: 'Português',
        lang: 'pt'
      }
    ],
  }),
  methods: {
    // Cambia el idioma del sistema
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  }
};
</script>

<style scoped>
</style>