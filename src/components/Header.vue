<template>
    <v-app-bar app dark dense elevation="8" hide-on-scroll> <!--color="green" -->
      <v-img src="@/assets/logo_ReDOC.png" href="https://redocinvestigacion.com/" max-width="90" contain class=" mr-2"></v-img>
      <!-- <span class="mr-2 text-capitalize font-weight-medium text-h5">Lenguas maternas</span> -->
      
      <!-- <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div> -->

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

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on" >
                    <v-icon dark >
                        mdi-translate
                    </v-icon>
                    <!-- {{ $t('header.idioma') }} -->
                </v-btn>
            </template>
            <v-list class="pointerCursor" dark>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="switchLocale(item.lang)">{{ item.language }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text >
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn> -->
      </div>

      <!-- Version movil -->
      <div class="d-md-none">

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
            >
               <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
            </template>
            <v-list class="pointerCursor">
            <v-list-item>
                <v-list-item-title>
                    <v-btn text @click="$vuetify.goTo('#parallax1', options)">
                        <span class="mr-2">{{ $t('header.inicio') }}</span>
                    </v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-btn text @click="$vuetify.goTo('#parallax2', options)">
                        <span class="mr-2">{{ $t('header.lenguasMaternas') }}</span>
                    </v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-btn text @click="$vuetify.goTo('#parallax3', options)">
                        <span class="mr-2">{{ $t('header.matriarquia') }}</span>
                    </v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-btn text @click="$vuetify.goTo('#parallax4', options)">
                        <span class="mr-2">{{ $t('header.territorio') }}</span>
                    </v-btn>
                </v-list-item-title>
            </v-list-item>

            <!-- <v-list-item>
                <v-list-item-title>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                        >
                            {{ $t('header.idioma') }}
                        </v-btn>
                        </template>
                        <v-list class="pointerCursor">
                        <v-list-item v-for="(item, index) in items" :key="index">
                            <v-list-item-title @click="switchLocale(item.lang)">{{ item.language }}</v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item-title>
            </v-list-item> -->

            <!-- <v-list-item>
                <v-list-item-title>
                    <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text >
                        <span class="mr-2">Latest Release</span>
                        <v-icon>mdi-open-in-new</v-icon>
                    </v-btn>
                </v-list-item-title>
            </v-list-item> -->
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
.pointerCursor{
  cursor: pointer;
}
.pointerCursor :hover{
  background-color: #E4E0E0;
}
</style>