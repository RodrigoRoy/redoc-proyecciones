<template>
  <v-content>
    <!-- Acerca de las proyecciones -->
    <v-parallax src="@/assets/Background1.jpg" :height="initHeight" class="mt-n12" id="parallax1">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h1 font-weight-medium">
            {{ $t('acercaProyecciones.dialogosDocumentales') }}
          </h2>
          <h3 class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h2 font-weight-thin mt-4">
            <a class="white--text text-decoration-underline" @click="$vuetify.goTo('#parallax2', options)">
              {{ $t('acercaProyecciones.lengua') }}
            </a>, 
            <a class="white--text text-decoration-underline" @click="$vuetify.goTo('#parallax3', options)">
              {{ $t('acercaProyecciones.matriarquía') }}</a> {{ $t('acercaProyecciones.y') }} 
            <a class="white--text text-decoration-underline" @click="$vuetify.goTo('#parallax4', options)">
              {{ $t('acercaProyecciones.territorio') }}
            </a>
          </h3>
          <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 mt-12">
            {{ $t('acercaProyecciones.descripcion') }}
          </p>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Sala de proyecciones #1 -->
    <v-parallax src="@/assets/Background2.jpg" :height="parallaxHeight" id="parallax2">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h1 font-weight-medium">
            {{ $t('salaProyecciones1.titulo') }}
          </h2>
          <h3 class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h2 font-weight-thin mt-4">
            {{ $t('salaProyecciones1.fecha') }}
          </h3>
          <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 mt-10">
            {{ $t('salaProyecciones1.descripcion') }}
          </p>
          <p>
            <v-btn plain color="white" @click="show.lengua = !show.lengua" v-show="!show.lengua">{{ $t('mensajesGenerales.masInformacion') }}</v-btn>
          </p>

          <v-expand-transition>
            <div v-show="show.lengua">
              <h2 class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-regular mt-8"> 
                {{ $t('mensajesGenerales.conversatorio') }}
              </h2>
              <h3 class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h5 text-xl-h5 font-weight-light mb-2">
                {{ $t('salaProyecciones1.conversatorio.fechaLugar') }}
              </h3>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <strong>Guillermo Monteforte</strong> ({{ $t('salaProyecciones1.conversatorio.moderador') }})<br/> 
                <strong>Nute Kuijin</strong> ({{ $t('salaProyecciones1.conversatorio.realizadorDe') }} <em>Tu'un Savi</em>)<br/>
                <strong>Heny Cuesta</strong> ({{ $t('salaProyecciones1.conversatorio.cimarronesProducciones') }} <em>Guardianas resilientes desde el cuerpo y el alma</em>)<br/>
                <strong>Sergio Julián Caballero</strong> ({{ $t('salaProyecciones1.conversatorio.realizadorDe') }} <em>Justicia sin palabras</em>)<br/>
                <strong>Gabriel Sánchez Cruz</strong> ({{ $t('salaProyecciones1.conversatorio.interpreteCEPIADET') }})
              </p>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <v-btn class="ma-2" color="red" dark href="https://youtu.be/RSYKr9WunSg" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-youtube</v-icon>
                  {{ $t('mensajesGenerales.redocInvestigacion') }}
                </v-btn>
                <v-btn class="ma-2" color="indigo" dark href="https://www.facebook.com/Institutomora/videos/lais-y-redoc-investigaci%C3%B3n-invitan-al-ciclo-de-isla-tortuga-al-abya-yala/348878433782954" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-facebook</v-icon>
                  {{ $t('mensajesGenerales.institutoMora') }}
                </v-btn>
              </p>
            </div>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Sala de proyecciones #1 -->
    <v-expand-transition>
      <section id="sala1" v-show="show.lengua" class="cyan lighten-1 my-n12 py-4" style="background: linear-gradient(180deg, rgba(0,77,64,1) 0%, rgba(13,71,161,1) 100%);">
        <v-layout column wrap class="my-12 py-12" align-center>
          <v-flex xs12 class="text-center">
            <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2 mt-4 mb-4 white--text">
              {{ $t('mensajesGenerales.salaProyecciones') }}
            </h2>
          </v-flex>

          <!-- Carrusel con información del documental -->
          <v-flex xs12 class="text-center">
            <v-hover v-slot="{ hover }">
              <v-carousel v-model="carousel.lengua" delimiter-icon="mdi-movie" show-arrows-on-hover :cycle="!hover" hide-delimiters :show-arrows="false" interval="10000" class="py-0">
                <v-carousel-item v-for="(documental, i) in $t('salaProyecciones1.documentalesLengua')" :key="i">
                  <!-- Cada elemento del carrusel serán dos columnas con información e imagen -->
                  <v-sheet color="rgba(0,0,0,0.7)" height="100%" tile>
                    <!-- <v-row class="fill-height" align="center" justify="center"> -->
                      <div>
                        <v-container>
                          <v-row align="center">
                            <v-col xs="12" sm="12" md="5" offset-md="1">
                              <!-- Información del documental -->
                              <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-medium white--text">
                                <!-- <a v-if="documental.link" class="white--text text-decoration-underline" :href="documental.link" target="_blank"> -->
                                  {{ documental.name }}
                                <!-- </a> -->
                              </p>
                              <p v-if="documental.altName" class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 font-weight-light white--text my-n2">
                                {{ documental.altName }}
                              </p>
                              <p class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 my-4 white--text">
                                <v-icon color="white" v-if="documental.author">mdi-account-outline</v-icon><span v-if="documental.author" class="mr-6"> {{ documental.author }}</span>
                                <!-- <span v-if="documental.year">, {{ documental.year }}</span> 
                                <span v-if="documental.country">, {{ documental.country }}</span> 
                                <span v-if="documental.time">, {{ documental.time }} minutos</span> -->
                              </p>
                              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 white--text">
                                <span v-if="documental.year"><v-icon color="white">mdi-calendar</v-icon><span class="mr-6"> {{ documental.year }}</span></span>
                                <span v-if="documental.time"><v-icon color="white">mdi-clock-outline</v-icon><span class="mr-6"> {{ documental.time }} min.</span></span>
                                <span v-if="documental.country"><v-icon color="white">mdi-earth</v-icon><span class="mr-6"> {{ documental.country }}</span></span>
                                <span v-if="documental.language"><v-icon color="white">mdi-volume-high</v-icon><span class="mr-6"> {{ documental.language }}</span></span>
                                <span v-if="documental.subtitle"><v-icon color="white">mdi-closed-caption-outline</v-icon><span> {{ documental.subtitle }}</span></span>
                              </p>
                              <p v-if="documental.plot" class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 my-6 white--text">
                                {{ documental.plot }}
                              </p>

                              <v-divider class="mx-4 mb-4"></v-divider>

                              <!-- Información adicional (tags) -->
                              <v-chip v-for="(tag, i) in documental.tags" :key="i" color="secondary" class="mx-2">
                                {{ tag }}
                              </v-chip>
                            </v-col>

                            <!-- Imagen/animación del documental -->
                            <v-col xs="12" sm="12" md="5" align="center" justify="center">
                              <!-- <a :href="documental.link" target="_blank"> -->
                                <v-img max-height="350" contain :src="require('@/assets/' + documental.image)"></v-img>
                              <!-- </a> -->
                            </v-col>
                          </v-row>
                        </v-container>
                      </div>
                    <!-- </v-row> -->
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-hover>
          </v-flex>

          <!-- Listado de documentales en formato de v-cards -->
          <v-container xs12>
            <v-row align="center" justify="left">
              <v-col cols="12" xs="12" sm="6" md="3" xl="3" v-for="(documental, i) in $t('salaProyecciones1.documentalesLengua')" :key="i">
                <v-hover v-slot="{ hover }">
                  <v-card outlined shaped color="rgba(0,0,0,0.8)" @click="carousel.lengua = i" :class="{ 'on-hover': hover, 'my-selection': i == carousel.lengua, 'my-v-card': true }">
                    <v-card-text class="justify-center text-center text-h6 font-weight-bold white--text">
                      {{ documental.name }}
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
      </section>
    </v-expand-transition>

    <!-- Sala de proyecciones #2 -->
    <v-parallax src="@/assets/Background4.jpg" :height="parallaxHeight" id="parallax3">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h1 font-weight-medium">
            {{ $t('salaProyecciones2.titulo') }}
          </h2>
          <h3 class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h2 font-weight-thin mt-4">
            {{ $t('salaProyecciones2.fecha') }}
          </h3>
          <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 mt-10">
            {{ $t('salaProyecciones2.descripcion') }}
          </p>
          <p>
            <v-btn plain color="white" @click="show.matriarquia = !show.matriarquia" v-show="!show.matriarquia">{{ $t('mensajesGenerales.masInformacion') }}</v-btn>
          </p>

          <v-expand-transition>
            <div v-show="show.matriarquia">
              <h2 class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-regular mt-8">
                {{ $t('mensajesGenerales.conversatorio') }}
              </h2>
              <h3 class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h5 text-xl-h5 font-weight-light mb-2">
                {{ $t('salaProyecciones2.conversatorio.fechaLugar') }}
              </h3>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <strong>Sandra Luz López Barroso</strong> ({{ $t('salaProyecciones2.conversatorio.moderador') }})<br/> 
                <strong>Ana Bolena Rodríguez</strong> ({{ $t('salaProyecciones2.conversatorio.protagonistaDe') }} <em>Cartas para Ana</em>, Colombia)<br/>
                <strong>Mauri Balanta</strong> ({{ $t('salaProyecciones2.conversatorio.productora') }} <em>Cartas para Ana</em>, Colombia)<br/>
                <strong>Selene Yuridia Galindo</strong> ({{ $t('salaProyecciones2.conversatorio.antropologa') }})<br/>
                <strong>Iris Belén Villalpando</strong> ({{ $t('salaProyecciones2.conversatorio.documentalista') }})
              </p>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <v-btn class="ma-2" color="red" dark href="https://youtu.be/TqsGMkyGonk" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-youtube</v-icon>
                  {{ $t('mensajesGenerales.redocInvestigacion') }}
                </v-btn>
                <v-btn class="ma-2" color="indigo" dark href="https://www.facebook.com/Institutomora/videos/1005607473725791" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-facebook</v-icon>
                  {{ $t('mensajesGenerales.institutoMora') }}
                </v-btn>
              </p>
            </div>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Sala de proyecciones #2 -->
    <!-- <section id="sala1" style="background-color: rgba(0, 0, 0, 0.45)"> -->
    <v-expand-transition>
      <section id="sala2" v-show="show.matriarquia" class="cyan lighten-1 my-n12 py-4" style="background: linear-gradient(180deg, rgba(106,27,154,1) 0%, rgba(136,14,79,1) 100%);">
        <v-layout column wrap class="my-12 py-12" align-center>
          <v-flex xs12 class="text-center">
            <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2 mt-4 mb-4 white--text">
              {{ $t('mensajesGenerales.salaProyecciones') }}
            </h2>
          </v-flex>

          <!-- Carrusel con información del documental -->
          <v-flex class="text-center" :height="carruselHeight">
            <v-hover v-slot="{ hover }">
              <v-carousel v-model="carousel.matriarquia" fluid delimiter-icon="mdi-movie" show-arrows-on-hover :cycle="!hover" hide-delimiters :show-arrows="false" interval="10000" :height="carruselHeight" class="py-0">
                <v-carousel-item :height="carruselHeight" v-for="(documental, i) in $t('salaProyecciones2.documentalesMatriarquia')" :key="i">
                  <!-- Cada elemento del carrusel serán dos columnas con información e imagen -->
                  <v-sheet color="rgba(0,0,0,0.7)" tile>
                    <!-- <v-row class="fill-height" align="center" justify="center"> -->
                      <div>
                        <v-container class="text-center carruselHeight">
                          <v-row align="center" >
                            <v-col sm="12" md="5" offset-md="1">
                              <!-- Información del documental -->
                              <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-medium white--text">
                                <!-- <a class="white--text text-decoration-underline" :href="documental.link" target="_blank"> -->
                                  {{ documental.name }}
                                <!-- </a> -->
                              </p>
                              <p v-if="documental.altName" class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 font-weight-light white--text my-n2">
                                {{ documental.altName }}
                              </p>
                              <p class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 my-4 white--text">
                                <v-icon color="white" v-if="documental.author">mdi-account-outline</v-icon><span v-if="documental.author" class="mr-6"> {{ documental.author }}</span>
                                <!-- <span v-if="documental.year">, {{ documental.year }}</span> 
                                <span v-if="documental.country">, {{ documental.country }}</span> 
                                <span v-if="documental.time">, {{ documental.time }} minutos</span> -->
                              </p>
                              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 white--text">
                                <span v-if="documental.year"><v-icon color="white">mdi-calendar</v-icon><span class="mr-6"> {{ documental.year }}</span></span>
                                <span v-if="documental.time"><v-icon color="white">mdi-clock-outline</v-icon><span class="mr-6"> {{ documental.time }} min.</span></span>
                                <span v-if="documental.country"><v-icon color="white">mdi-earth</v-icon><span class="mr-6"> {{ documental.country }}</span></span>
                                <span v-if="documental.language"><v-icon color="white">mdi-volume-high</v-icon><span class="mr-6"> {{ documental.language }}</span></span>
                                <span v-if="documental.subtitle"><v-icon color="white">mdi-closed-caption-outline</v-icon><span> {{ documental.subtitle }}</span></span>
                              </p>
                              <p v-if="documental.plot" class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 my-6 white--text">
                                {{ documental.plot }}
                              </p>

                              <!-- <v-divider class="mx-4 mb-4"></v-divider> -->

                              <!-- Información adicional (tags) -->
                              <!-- <v-chip v-for="(tag, i) in documental.tags" :key="i" color="secondary" class="mx-2">
                                {{ tag }}
                              </v-chip> -->
                            </v-col>

                            <!-- Imagen/animación del documental -->
                            <v-col sm="12" md="5" align="center" justify="center">
                              <!-- <a :href="documental.link" target="_blank"> -->
                                <v-img max-height="350" contain :src="require('@/assets/' + documental.image)"></v-img>
                              <!-- </a> -->
                            </v-col>
                          </v-row>
                        </v-container>
                      </div>
                    <!-- </v-row> -->
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-hover>
          </v-flex>

          <!-- Listado de documentales en formato de v-cards -->
          <v-container xs12>
            <v-row align="center" justify="left">
              <v-col cols="12" xs="12" sm="6" md="3" xl="3" v-for="(documental, i) in $t('salaProyecciones2.documentalesMatriarquia')" :key="i">
                <v-hover v-slot="{ hover }">
                  <v-card outlined shaped color="rgba(0,0,0,0.8)" @click="carousel.matriarquia = i" :class="{ 'on-hover': hover, 'my-selection': i == carousel.matriarquia, 'my-v-card': true }">
                    <v-card-text class="justify-center text-center text-h6 font-weight-bold white--text">
                      {{ documental.name }}
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
      </section>
    </v-expand-transition>


    <!-- Sala de proyecciones #3 -->
    <v-parallax src="@/assets/Background5.jpg" :height="parallaxHeight" id="parallax4">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h1">
            {{ $t('salaProyecciones3.titulo') }}
          </h2>
          <h3 class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h2 font-weight-thin mt-4">
            {{ $t('salaProyecciones3.fecha') }}
          </h3>
          <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 mt-10">
            {{ $t('salaProyecciones3.descripcion') }}
          </p>

          <p>
            <v-btn plain color="white" @click="show.territorio = !show.territorio" v-show="!show.territorio">{{ $t('mensajesGenerales.masInformacion') }}</v-btn>
          </p>

          <v-expand-transition>
            <div v-show="show.territorio">
              <h2 class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-regular mt-8">
                {{ $t('mensajesGenerales.conversatorio') }}
              </h2>
              <h3 class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h5 text-xl-h5 font-weight-light mb-2">
                {{ $t('salaProyecciones3.conversatorio.fechaLugar') }}
              </h3>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <strong>Lionel Rossi</strong> ({{ $t('salaProyecciones3.conversatorio.moderador') }})<br/> 
                <strong>Ana Mauad</strong> ({{ $t('salaProyecciones3.conversatorio.traductora') }})<br/>
                <strong>Damba Matis</strong> ({{ $t('salaProyecciones3.conversatorio.realizadorDe') }} <em>Matses Muxan Akadakit</em>)<br/>
                <strong>Olinda Yawar Muniz Wanderley</strong> ({{ $t('salaProyecciones3.conversatorio.realizadoraDe') }} <em>Equilibrio</em>)<br/>
                <strong>José Luis Matias</strong> ({{ $t('salaProyecciones3.conversatorio.realizadorDe') }} <em>El mineral o la vida</em>)<br/>
                <strong>Zenaida Pérez Gutiérrez</strong> ({{ $t('salaProyecciones3.conversatorio.coordinadora') }})
              </p>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <v-btn class="ma-2" color="red" dark href="https://youtu.be/KHK6CMkimY0" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-youtube</v-icon>
                  {{ $t('mensajesGenerales.redocInvestigacion') }}
                </v-btn>
                <v-btn class="ma-2" color="indigo" dark href="https://www.facebook.com/Institutomora/videos/491801472626504" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-facebook</v-icon>
                  {{ $t('mensajesGenerales.institutoMora') }}
                </v-btn>
              </p>
            </div>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Sala de proyecciones #3 -->
    <!-- <section id="sala1" style="background-color: rgba(0, 0, 0, 0.45)"> -->
    <v-expand-transition>
      <section id="sala2" v-show="show.territorio" class="cyan lighten-1 my-n12 py-4" style="background: linear-gradient(180deg, rgba(124,179,66,1) 0%, rgba(0,77,64,1) 100%);">
        <v-layout column wrap class="my-12 py-12" align-center>
          <v-flex xs12 class="text-center">
            <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2 mt-4 mb-4 white--text">
              {{ $t('mensajesGenerales.salaProyecciones') }}
            </h2>
          </v-flex>

          <!-- Carrusel con información del documental -->
          <v-flex class="text-center" :height="carruselHeight">
            <v-hover v-slot="{ hover }">
              <v-carousel v-model="carousel.territorio" fluid delimiter-icon="mdi-movie" show-arrows-on-hover :cycle="!hover" hide-delimiters :show-arrows="false" interval="10000" :height="carruselHeight" class="py-0">
                <v-carousel-item :height="carruselHeight" v-for="(documental, i) in $t('salaProyecciones3.documentalesTerritorio')" :key="i">
                  <!-- Cada elemento del carrusel serán dos columnas con información e imagen -->
                  <v-sheet color="rgba(0,0,0,0.7)" tile>
                    <!-- <v-row class="fill-height" align="center" justify="center"> -->
                      <div>
                        <v-container class="text-center carruselHeight">
                          <v-row align="center" >
                            <v-col sm="12" md="5" offset-md="1">
                              <!-- Información del documental -->
                              <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-medium white--text">
                                <!-- <a class="white--text text-decoration-underline" :href="documental.link" target="_blank"> -->
                                  {{ documental.name }}
                                <!-- </a> -->
                              </p>
                              <p v-if="documental.altName" class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 font-weight-light white--text my-n2">
                                {{ documental.altName }}
                              </p>
                              <p class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 my-4 white--text">
                                <v-icon color="white" v-if="documental.author">mdi-account-outline</v-icon><span v-if="documental.author" class="mr-6"> {{ documental.author }}</span>
                                <!-- <span v-if="documental.year">, {{ documental.year }}</span> 
                                <span v-if="documental.country">, {{ documental.country }}</span> 
                                <span v-if="documental.time">, {{ documental.time }} minutos</span> -->
                              </p>
                              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 white--text">
                                <span v-if="documental.year"><v-icon color="white">mdi-calendar</v-icon><span class="mr-6"> {{ documental.year }}</span></span>
                                <span v-if="documental.time"><v-icon color="white">mdi-clock-outline</v-icon><span class="mr-6"> {{ documental.time }} min.</span></span>
                                <span v-if="documental.country"><v-icon color="white">mdi-earth</v-icon><span class="mr-6"> {{ documental.country }}</span></span>
                                <span v-if="documental.language"><v-icon color="white">mdi-volume-high</v-icon><span class="mr-6"> {{ documental.language }}</span></span>
                                <span v-if="documental.subtitle"><v-icon color="white">mdi-closed-caption-outline</v-icon><span> {{ documental.subtitle }}</span></span>
                              </p>
                              <p v-if="documental.plot" class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 my-6 white--text">
                                {{ documental.plot }}
                              </p>

                              <!-- <v-divider class="mx-4 mb-4"></v-divider> -->

                              <!-- Información adicional (tags) -->
                              <!-- <v-chip v-for="(tag, i) in documental.tags" :key="i" color="secondary" class="mx-2">
                                {{ tag }}
                              </v-chip> -->
                            </v-col>

                            <!-- Imagen/animación del documental -->
                            <v-col sm="12" md="5" align="center" justify="center">
                              <!-- <a :href="documental.link" target="_blank"> -->
                                <v-img max-height="350" contain :src="require('@/assets/' + documental.image)"></v-img>
                              <!-- </a> -->
                            </v-col>
                          </v-row>
                        </v-container>
                      </div>
                    <!-- </v-row> -->
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-hover>
          </v-flex>

          <!-- Listado de documentales en formato de v-cards -->
          <v-container xs12>
            <v-row align="center" justify="left">
              <v-col cols="12" xs="12" sm="6" md="3" xl="3" v-for="(documental, i) in $t('salaProyecciones3.documentalesTerritorio')" :key="i">
                <v-hover v-slot="{ hover }">
                  <v-card outlined shaped color="rgba(0,0,0,0.8)" @click="carousel.territorio = i" :class="{ 'on-hover': hover, 'my-selection': i == carousel.territorio, 'my-v-card': true }">
                    <v-card-text class="justify-center text-center text-h6 font-weight-bold white--text">
                      {{ documental.name }}
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
      </section>
    </v-expand-transition>

  </v-content>
</template>

<script>
export default {
  name: 'SinglePage',

  data: () => ({
    // Configuración adicional para el movimiento de pantalla en imagen de encabezado
    options: {
      duration: 900,
      offset: 0,
      easing: 'easeInOutCubic',
    },
    carousel: {
      lengua: 0,
      matriarquia: 0,
      territorio: 0
    }, // indice del elemento en carrusel que se muestra,
    show: { // muestra/oculta información adicional sobre un bloque o área
      lengua: false,
      matriarquia: false,
      territorio: false,
    },
    tab: null,
  }),
  computed: {
    initHeight: function(){
      switch (this.$vuetify.breakpoint.name){
        case 'xs': return 1100
        case 'sm': return 600
        case 'md': return 700
        case 'lg': return 700
        case 'xl': return 600
      }
      return 700
    },
    parallaxHeight: function(){
      switch (this.$vuetify.breakpoint.name){
        case 'xs': return 1100
        case 'sm': return 700
        case 'md': return 700
        case 'lg': return 700
        case 'xl': return 700
      }
      return 700
    },
    carruselHeight: function(){
      switch (this.$vuetify.breakpoint.name){
        case 'xs': return 660
        case 'sm': return 650
        case 'md': return 500
        case 'lg': return 500
        case 'xl': return 600
      }
      return 700
    }
  }
}
</script>

<style>
/* Efecto de aparición para documentales de sala de proyecciones */
.my-v-card {
  transition: opacity .4s ease-in-out;
}
/* Sin opacidad a documental seleccionado (se emplea en conjunto con evento hover) */
.my-selection {
  opacity: 1.0 !important;
}
/* Transparencia a documentales si no están seleccionados */
.my-v-card:not(.on-hover) {
  opacity: 0.4;
}

/* Altura para carrusel */
.carruselHeight{
  height: 1000px;
}

/* INICIO: lime darken-4 -> blue-grey darken-3 */
div#parallax1.v-parallax > .v-parallax__content{
  background: linear-gradient(180deg, rgba(130,119,23,0.8) 0%, rgba(55,71,79,0.8) 100%) !important;
}
/* LENGUAS: teal darken-4 -> blue darken-4 */
div#parallax2.v-parallax > .v-parallax__content{
  background: linear-gradient(180deg, rgba(13,71,161,0.7) 0%, rgba(0,77,64,0.7) 100%) !important;
}
/* MATRIARQUIA: purple darken-3 -> pink darken-4 */
div#parallax3.v-parallax > .v-parallax__content{
  background: linear-gradient(180deg, rgba(136,14,79,0.7) 0%, rgba(106,27,154,0.7) 100%) !important;
}
/* TERRITORIO: teal darken-4 -> light-green darken-1 */
div#parallax4.v-parallax > .v-parallax__content{
  background: linear-gradient(180deg, rgba(0,77,64,0.7) 0%, rgba(124,179,66,0.8) 100%) !important;
}
</style>
