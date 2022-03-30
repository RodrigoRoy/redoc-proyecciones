<template>
  <v-content>
    <!-- Acerca de las proyecciones -->
    <v-parallax src="@/assets/Background1.jpg" :height="initHeight" class="mt-n12" id="parallax1">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2 font-weight-medium">
            Diálogos documentales de Isla Tortuga al Abya Yala
          </h2>
          <h3 class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3 font-weight-thin mt-4">
            <a class="white--text text-decoration-underline" @click="$vuetify.goTo('#parallax2', options)">Lengua</a>, <a class="white--text text-decoration-underline" @click="$vuetify.goTo('#parallax3', options)">matriarquía</a> y <a class="white--text text-decoration-underline" @click="$vuetify.goTo('#parallax4', options)">territorio</a>
          </h3>
          <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 mt-12">
            La lucha y resistencia de los pueblos originarios que habitan Isla Tortuga y el Abya Yala, así como los pueblos afrodescendientes en las Américas, se ha dirigido a problemáticas comunes en función de sus particularidades geopolíticas en permanente cambio. Entre ellas, la conservación del territorio, la revitalización de la lengua y la participación de las mujeres en las estrategias de cohesión y empoderamiento. En las últimas décadas, una estrategia recurrente de estos pueblos ha sido el empleo del video y el cine documental como herramientas no violentas de resistencia política y soberanía representacional que buscan visibilizar las problemáticas que enfrentan. Es así que desde la perspectiva de la investigación sobre el documental, como campo de estudio expandido, nos parece relevante suscitar espacios de reflexión y sensibilización en torno al irreductible papel que adquiere el empleo de estas herramientas en la organización e interacción política de estas comunidades, así como su lucha por la soberanía.
          </p>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Sala de proyecciones #1 -->
    <v-parallax src="@/assets/Background2.jpg" :height="parallaxHeight" id="parallax2">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2 font-weight-medium">
            Lenguas maternas
          </h2>
          <h3 class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3 font-weight-thin mt-4">
            14 al 28 de febrero de 2022
          </h3>
          <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 mt-10">
            La lengua materna es aquella que se enseña desde el nacimiento, con la que se conoce el mundo, se interactúa y se desarrolla el pensamiento. Las lenguas son signo de identidad y pertenencia, se crean y transmiten en comunidad. Tienen dimensiones cognitivas individuales y sociales, de trascendencia psicológica y política. A través de ellas se expresa y transmite cultura, saberes, ideología, religión, tradiciones, costumbres, valores, creencias, etc. Como señala Nidia López García (poeta Tuún Savi) “Una lengua no sólo te permite comunicarte sino ser poseedora de una herencia; es otra forma de hacer mundo.” Se estima que en el mundo existen alrededor de 7079 lenguas, de las que el 43% se encuentra en peligro de desaparición. La totalidad de éste porcentaje corresponde a lenguas nativas, es decir, aquellas que son habladas por pueblos originarios de un territorio. Este ciclo celebra la diversidad de las lenguas y su soberanía.
          </p>
          <p>
            <v-btn plain color="white" @click="show.lengua = !show.lengua" v-show="!show.lengua">Más información</v-btn>
          </p>

          <v-expand-transition>
            <div v-show="show.lengua">
              <h2 class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-regular mt-8"> 
                Conversatorio en línea
              </h2>
              <h3 class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h5 text-xl-h5 font-weight-light mb-2">
                23 de febrero, 16 hrs. (Ciudad de México)
              </h3>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <strong>Guillermo Monteforte</strong> (moderador, Ojo de Agua Comunicación)<br/> 
                <strong>Nute Kuijin</strong> (realizador de <em>Tu'un Savi</em>)<br/>
                <strong>Henry Cuesta</strong> (Cimarrones Producciones, realizadora de la serie <em>Guardianas resilientes desde el cuerpo y el alma</em>)<br/>
                <strong>Sergio Julián Caballero</strong> (realizador de <em>Justicia sin palabras</em>)<br/>
                <strong>Gabriel Sánchez Cruz</strong> (intérprete de CEPIADET y guionista)
              </p>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <v-btn class="ma-2" color="red" dark href="https://youtu.be/RSYKr9WunSg" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-youtube</v-icon>
                  ReDOC Investigación
                </v-btn>
                <v-btn class="ma-2" color="indigo" dark href="https://www.facebook.com/Institutomora/videos/lais-y-redoc-investigaci%C3%B3n-invitan-al-ciclo-de-isla-tortuga-al-abya-yala/348878433782954" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-facebook</v-icon>
                  Instituto Mora
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
              Sala de proyecciones
            </h2>
          </v-flex>

          <!-- Carrusel con información del documental -->
          <v-flex xs12 class="text-center">
            <v-hover v-slot="{ hover }">
              <v-carousel v-model="carousel.lengua" delimiter-icon="mdi-movie" show-arrows-on-hover :cycle="!hover" hide-delimiters :show-arrows="false" interval="10000" class="py-0">
                <v-carousel-item v-for="(documental, i) in documentalesLengua" :key="i">
                  <!-- Cada elemento del carrusel serán dos columnas con información e imagen -->
                  <v-sheet color="rgba(0,0,0,0.7)" height="100%" tile>
                    <!-- <v-row class="fill-height" align="center" justify="center"> -->
                      <div>
                        <v-container>
                          <v-row align="center">
                            <v-col xs="12" sm="12" md="5" offset-md="1">
                              <!-- Información del documental -->
                              <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-medium white--text">
                                <a class="white--text text-decoration-underline" :href="documental.link" target="_blank">
                                  {{ documental.name }}
                                </a>
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
                              <a :href="documental.link" target="_blank">
                                <v-img max-height="350" contain :src="require('@/assets/' + documental.image)"></v-img>
                              </a>
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
              <v-col cols="12" xs="12" sm="6" md="3" xl="3" v-for="(documental, i) in documentalesLengua" :key="i">
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
          <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2 font-weight-medium">
            Matriarquía
          </h2>
          <h3 class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3 font-weight-thin mt-4">
            14 al 28 de marzo de 2022
          </h3>
          <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 mt-10">
            De Isla Tortuga al Abya Yala, las mujeres nos encontramos en un proceso de transformación plural y crítico, de denuncia, organización y reivindicación, como respuesta y rechazo a una posición de subordinación y desigualdad que hemos padecido históricamente. Reconocer la complejidad de la maternidad y la necesidad de rechazarla como institución ha sido parte de la transición en que nos encontramos. Así mismo, entender la maternidad como la capacidad generadora del cuerpo de las mujeres, concibiéndolo como fuente de placer, vínculos, saberes y poder privativamente femeninos ha sido fundamental. La noción de matriarquía permite poner de relieve la experiencia y sabiduría de las mujeres, pero también la autoridad y reconocimiento que tienen en sus comunidades. Los documentales aquí agrupados reflejan diversas configuraciones -individuales y colectivas- de este proceso transformador.
          </p>
          <p>
            <v-btn plain color="white" @click="show.matriarquia = !show.matriarquia" v-show="!show.matriarquia">Más información</v-btn>
          </p>

          <v-expand-transition>
            <div v-show="show.matriarquia">
              <h2 class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-regular mt-8">
                Conversatorio en línea
              </h2>
              <h3 class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h5 text-xl-h5 font-weight-light mb-2">
                23 de marzo, 16 hrs. (Ciudad de México)
              </h3>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <strong>Sandra Luz López Barroso</strong> (moderadora, realizadora y antropóloga)<br/> 
                <strong>Ana Bolena Rodríguez</strong> (protagonista de <em>Cartas para Ana</em>, Colombia)<br/>
                <strong>Mauri Balanta</strong> (productora de <em>Cartas para Ana</em>, Colombia)<br/>
                <strong>Selene Yuridia Galindo</strong> (Tohono O'odham, antropóloga y realizadora, México)<br/>
                <strong>Iris Belén Villalpando</strong> (Yoreme, documentalista, México)
              </p>
              <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1">
                <v-btn class="ma-2" color="red" dark href="https://youtu.be/TqsGMkyGonk" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-youtube</v-icon>
                  ReDOC Investigación
                </v-btn>
                <v-btn class="ma-2" color="indigo" dark href="https://www.facebook.com/Institutomora/videos/1005607473725791" target="_blank">
                  <v-icon large dark right class="ml-2 mr-4">mdi-facebook</v-icon>
                  Instituto Mora
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
              Sala de proyecciones
            </h2>
          </v-flex>

          <!-- Carrusel con información del documental -->
          <v-flex class="text-center" :height="carruselHeight">
            <v-hover v-slot="{ hover }">
              <v-carousel v-model="carousel.matriarquia" fluid delimiter-icon="mdi-movie" show-arrows-on-hover :cycle="!hover" hide-delimiters :show-arrows="false" interval="10000" :height="carruselHeight" class="py-0">
                <v-carousel-item :height="carruselHeight" v-for="(documental, i) in documentalesMatriarquia" :key="i">
                  <!-- Cada elemento del carrusel serán dos columnas con información e imagen -->
                  <v-sheet color="rgba(0,0,0,0.7)" tile>
                    <!-- <v-row class="fill-height" align="center" justify="center"> -->
                      <div>
                        <v-container class="text-center carruselHeight">
                          <v-row align="center" >
                            <v-col sm="12" md="5" offset-md="1">
                              <!-- Información del documental -->
                              <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 font-weight-medium white--text">
                                <a class="white--text text-decoration-underline" :href="documental.link" target="_blank">
                                  {{ documental.name }}
                                </a>
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
                              <a :href="documental.link" target="_blank">
                                <v-img max-height="350" contain :src="require('@/assets/' + documental.image)"></v-img>
                              </a>
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
              <v-col cols="12" xs="12" sm="6" md="3" xl="3" v-for="(documental, i) in documentalesMatriarquia" :key="i">
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
    <v-parallax src="@/assets/Background1.jpg" :height="parallaxHeight" id="parallax4">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2">
            Territorio
          </h2>
          <h3 class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3 font-weight-thin mt-4">
            11 al 25 de abril de 2022
          </h3>
          <p class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 mt-10">
            En Isla Tortuga y Abya Yala los territorios han sido objeto de disputa desde la llegada de los colonizadores europeos, para quienes los territorios han sido predominantemente proveedores de recursos y de riqueza económica y material. En cambio, las y los habitantes de Isla Tortuga y Abya Yala, han establecido relaciones sociales, culturales y espirituales, además de económicas, con las tierras, lagos y ríos, e igualmente con sus piedras, los minerales del subsuelo, el aire y todos los animales que ahí convergen: en armonía con la Madre Tierra. Desafortunadamente, hoy día la explotación irracional de recursos ha generado contaminación y problemas medioambientales. Tomando en cuenta la diversidad de cosmovisiones de los pueblos de Isla Tortuga y Abya Yala, en general, el derecho al territorio es fundamental, porque sin él, no hay espacio en donde ellas y ellos se asienten a ejercer derechos fundamentales como el derecho a la vida y a la expresión de su cultura. 
          </p>
        </v-col>
      </v-row>
    </v-parallax>

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
      // territorio: 0
    }, // indice del elemento en carrusel que se muestra,
    show: { // muestra/oculta información adicional sobre un bloque o área
      lengua: false,
      matriarquia: false,
      // territorio: false
    },
    documentalesLengua: [ // documentales para sala de proyecciones (Lengua)
      {
        name: 'Tu’un Savi',
        altName: '',
        author: 'Nute Kuijin (Uriel López España)',
        year: '2020',
        country: 'México',
        time: '40',
        genre: '',
        plot: 'A los 15 años abandoné mi hogar en Ñuu Savi, salí y recorrí mundos distintos al mío. Comencé mi formación como documentalista y, tras ello, el interés de aprender el idioma que habla mi familia, ya que me fue prohibido desde la infancia. Ahora que regreso, mi padre ha fallecido; y con él su lengua. En este documental hago una búsqueda de Tu’un Savi a través de sus hablantes.',
        link: 'https://vimeo.com/677777101/08fb625c00',
        image: 'Lengua/Tu un savi/thumbnail_TUUN SAVI 03.png',
        color: 'indigo',
        language: 'Tu’un Savi',
        subtitle: 'Español',
        tags: ['Migración', 'Pedagogía']
      },
      {
        name: 'Tejiendo Resistencia, trenzador',
        altName: 'Guardianas. Resilientes desde el cuerpo y el alma',
        author: 'Heny Cuesta',
        year: '2020',
        country: 'Colombia',
        time: '5',
        genre: '',
        plot: 'Emilia Eneyda Valencia nacida en Andagoya, Chocó, Colombia, es una mujer afrocolombiana, docente, investigadora y gestora cultural. Fundadora de la Asociación de mujeres Afrocolombianas - AMAFROCOL y creadora del proyecto Tejiendo Esperanzas. Ella resiste a través del saber ancestral del trenzado inspirado a la comunidad afrocolombiana por medio de la aceptación y el autoreconocimiento.',
        link: 'https://www.youtube.com/watch?v=30LvIJVYGt0',
        image: 'Lengua/Tejiendo resistencia/Banner-Guardianas.png',
        color: 'teal',
        language: 'Español',
        subtitle: '',
        tags: ['Lenguaje corporal', 'Resistencias', 'Mujeres']
      },
      {
        name: 'Justicia sin palabras',
        altName: '',
        author: 'Sergio Julián Caballero',
        year: '2011',
        country: 'México',
        time: '29',
        genre: '',
        plot: 'Un documental que pone luz sobre las graves injusticias causadas por la falta de traductores/as indígenas en los procesos judiciales, permitiendo generar conciencia y respeto hacia los derechos lingüísticos de los pueblos indígenas. Se muestran testimonios de diversos actores, presos indígenas y sus familiares, operadores del sistema de justicia y académicos; quienes nos dan una idea del estado que guardan estos derechos.',
        link: 'https://vimeo.com/101926553',
        image: 'Lengua/Justicia sin palabras/Justicia sin palabras 1.png',
        color: 'indigo',
        language: 'Zapoteco, Ombeayuts, Triqui',
        subtitle: 'Español',
        tags: ['Justicia social', 'Legislación', 'Denuncia']
      },
      {
        name: 'O verbo se fez carne',
        altName: 'El verbo se hizo carne',
        author: 'Ziel Karapotó',
        year: '2019',
        country: 'Brasil',
        time: '7',
        genre: 'Experimental',
        plot: 'La invasión de los europeos a Abya Yala continente nos dejó cicatrices. Ziel Karapotó usa su cuerpo para denunciar cinco siglos de colonización.',
        link: 'https://drive.google.com/file/d/1W0YzV8CVDYxUbjQymyYP40ZuwTfFYMfv/view?usp=sharing',
        image: 'Lengua/O verbo se fez carne/Foto1.png',
        color: 'orange',
        language: 'Portugués',
        subtitle: 'Español',
        tags: ['Experimental', 'Arte', 'Decolonización']
      },
      {
        name: 'The Amendment',
        altName: 'La enmienda',
        author: 'Kevin Papatie',
        year: '2007',
        country: 'Canadá',
        time: '4',
        genre: '',
        plot: 'En la comunidad Kitcisakik, el idioma Algonquin se está extinguiendo, apenas cuatro generaciones después de que entrara en vigor la política de asimilación del gobierno federal.',
        link: 'https://www.nfb.ca/film/amendment/',
        image: 'Lengua/La enmienda/Screen Shot 2022-01-25 at 1.12.14 PM.png',
        color: 'orange',
        language: 'Algonquin',
        subtitle: 'Inglés',
        tags: ['Revitalización']
      },
      {
        name: 'Jimmy Qirqqut. Gjoa Haven Elder',
        altName: 'Jimmy Qirqqut. Gjoa Haven Anciana',
        author: 'Kadence Kikoak',
        year: '2019',
        country: 'Canadá',
        time: '3',
        genre: '',
        plot: 'Jimmy Qirqqut es un hablante de Inuktitut. Él expresa la dificultad de conectarse con la generación más joven, que habla "la lengua del hombre blanco". Jimmy nunca fue a una escuela residencial y, en cambio, creció en la tierra: cazando, pescando y construyendo Iglus como le enseñó su padre',
        link: 'https://www.youtube.com/watch?v=QZWhakJ6v00',
        image: 'Lengua/Jimmy Qirqqut - Gjoa Haven Elder/Jimmy_1.png',
        color: 'teal',
        language: 'Inuktitut',
        subtitle: 'Inglés',
        tags: ['Intergeneracional']
      },
      {
        name: 'Binan Wassa: Pia e Tawa',
        altName: 'Arco y flecha',
        author: 'Damë Bëtxun Matis, Chawa Wassa Matis, Damë Matis, Kaxë Mentuk Matis, Shapu Sibo Matis, Dani Matis, Damba Matis, Chawa atsa Matis, Tumi Reili Matis',
        year: '2019',
        country: 'Brasil',
        time: '6',
        genre: '',
        plot: 'Este corto metraje documental se realizó a través de un taller audiovisual con varios jóvenes Matis de la Tierra indígena del valle del Yavarí  entrevistaron a los ancianos sobre las técnicas de caza ancestrales. Aquí, Tumi Reili, entrevista al cacique Binan Wassa sobre el uso tradicional del arco.',
        link: 'https://vimeo.com/252948517',
        image: 'Lengua/Pia e tawa/Imagen 02 Tumi Reili y Binan Wassa.png',
        color: 'purple',
        language: 'Matis',
        subtitle: 'Portugués',
        tags: ['Intergeneracional']
      }
    ],
    documentalesMatriarquia: [ // documentales para sala de proyecciones (Matriarquia)
    // TODO: Falta atributo "tags"
      { // 1
        name: 'Her silent life',
        altName: 'Su vida silenciosa',
        author: 'Lindsay McIntyre',
        year: '2012',
        country: 'Canadá',
        time: '31',
        genre: '',
        plot: 'Tres generaciones de mujeres se revelan en este viaje intuitivo al pasado de una familia. Combinando técnicas cinematográficas analógicas con entrevistas personales, la directora Lindsay McIntyre crea una exploración impresionista de su herencia mixta inuit y las controversias que rodean la historia de su familia.',
        link: 'https://vimeo.com/41359172',
        image: 'Matriarquía/Her silent life/her silent life 1LG.jpg',
        color: 'indigo',
        language: 'Inglés',
        subtitle: 'Inglés',
        tags: ['', '']
      },
      { // 2
        name: 'KaYaMenTa',
        altName: 'Sharing Truths About Menopause',
        author: 'Jules Koostachin',
        year: '2020',
        country: 'Canadá',
        time: '19',
        genre: '',
        plot: 'Cinco mujeres indígenas se reúnen para compartir comida e historias sobre una etapa de la vida con poco apoyo o conocimiento compartido. KaYaMenTa invita a nuestras hermanas y a nuestros televidentes a enfrentar sus propios miedos de envejecer y aborda el tabú en torno a la menopausia a través de la lente de una mujer indígena, una que se involucra con la sexualidad, el envejecimiento, la espiritualidad y la curación.',
        link: 'https://youtu.be/iIb3fd9jGkY',
        image: 'Matriarquía/Kayamenta/Poster 1.jpg',
        color: 'indigo',
        language: 'Inglés',
        subtitle: 'Inglés',
        tags: ['', '']
      },
      { // 3
        name: 'Ati-wîcahsin (It’s Getting Easier)',
        altName: 'Ati-wîcahsin (Cada vez es más fácil)',
        author: 'Tessa Desnomie',
        year: '2007',
        country: 'Canadá',
        time: '6',
        genre: '',
        plot: 'En este cortometraje, la cineasta Tessa Desnomie celebra la vida y la época de su abuela, Jane Merasty. Nacida y criada en la trampa, esta mujer Woodlands Cree ha sido testigo de cambios significativos a lo largo de sus vigorosos 80 años.',
        link: 'https://www.nfb.ca/film/first_stories_its_getting_easier/',
        image: 'Matriarquía/Ati-wîcahsin (It’s Getting Easier)/Screen Shot 2022-02-16 at 11.59.39 AM.jpg',
        color: 'indigo',
        language: 'Inglés',
        subtitle: 'Inglés',
        tags: ['', '']
      },
      { // 4
        name: 'Mother of Many Children',
        altName: 'Madre de muchos hijos',
        author: 'Alanis Obomsawin',
        year: '1977',
        country: 'Canadá',
        time: '57',
        genre: '',
        plot: 'Un álbum de la feminidad indígena, retrata orgullosas culturas matriarcales que durante siglos han sido presionadas para adoptar los estándares y costumbres de la sociedad dominante. Revela cómo las mujeres indígenas han luchado por recuperar un sentido de igualdad, inculcaron el orgullo cultural en sus hijos y transmitieron sus historias y su idioma a las nuevas generaciones.',
        link: 'https://www.nfb.ca/film/mother_of_many_children/',
        image: 'Matriarquía/Mother of Many Children/Screen Shot 2022-02-21 at 11.33.19 AM.jpg',
        color: 'indigo',
        language: 'Inuit, cree',
        subtitle: 'Inglés',
        tags: ['', '']
      },
      { // 5
        name: 'I am Hitkoak',
        altName: 'Yo soy Hitkoak',
        author: 'Adine Tabitha',
        year: '2018',
        country: 'Canadá',
        time: '6',
        genre: '',
        plot: 'Hitkoak describe su juventud: la comida que comía, los juguetes con los que creció y los valores que aprendió de sus mayores. Ahora, los transmite a los jóvenes de su comunidad.',
        link: 'https://youtu.be/TxmnBzUVStc',
        image: 'Matriarquía/I am Hitkoak/Hitkoak2-3.jpg',
        color: 'indigo',
        language: 'Inuit',
        subtitle: 'Inglés',
        tags: ['', '']
      },
      { // 6
        name: 'Cartas para Ana',
        altName: '',
        author: 'Lina Gaitán',
        year: '2021',
        country: 'Colombia',
        time: '25',
        genre: '',
        plot: 'En este volumen, Ana Bolena Rodríguez, una mujer afrocolombiana y madre de un adolescente en el trastorno del espectro autista (TEA), relata los múltiples retos que enfrenta en una sociedad excluyente y discapacitante.',
        // link: 'https://youtu.be/78oSDeeb3lw',
        link: 'https://vimeo.com/525869880',  // Subtítulos en inglés
        image: 'Matriarquía/Cartas para Ana/cartas Ana 1.jpg',
        color: 'indigo',
        language: 'Español',
        subtitle: 'Inglés',
        tags: ['', '']
      },
      { // 7
        name: 'Los que están por nacer',
        altName: '',
        author: 'Yovegami Ascona Mora, Sinhué Ascona Mora',
        year: '2018',
        country: 'México',
        time: '11',
        genre: '',
        plot: 'Los rituales de la cultura ayuuk que dan la bienvenida a una nueva vida, ahora están haciendo eco en el futuro incierto de la Tierra. En la región mixe de Oaxaca, una abuela está preocupada por el mundo en que nacerá su bisnieto.',
        link: 'https://vimeo.com/674246433',
        image: 'Matriarquía/Los que están por nacer/LQEPN_IMAGEN2.jpg',
        color: 'indigo',
        language: 'Mixe',
        subtitle: 'Español',
        tags: ['', '']
      },
      { // 8
        name: 'Yãmĩyhex: As mulheres espírito',
        altName: 'Yãmĩyhex: Las mujeres espíritu',
        author: 'Sueli Maxakali, Isael Maxakali',
        year: '2019',
        country: 'Brasil',
        time: '116',
        genre: '',
        plot: 'Sueli e Isael Maxakali son una pareja de cineastas del pueblo indígena Tikmũ\'ũn (Maxakali), habitantes de Vale do Mucuri, Minas Gerais, Brasil. En los últimos años, la pareja se ha dedicado a filmar la historia y los rituales de su pueblo. Juntas codirigieron las películas "Cuando los yãmĩy vienen a bailar con nosotros" (2011) y "Yãmĩyhex: las mujeres espíritu" (2019).',
        link: 'https://vimeo.com/687940877',
        image: 'Matriarquía/Yamiyhex As Mulheres-Espírito/yãmiyhex.divulgação.jpg',
        color: 'indigo',
        language: 'Maxakali',
        subtitle: 'Portugués',
        tags: ['', '']
      }
    ],
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

/* Tamaño de letra para cada sección */
.my-section{
  font-size: 1.2rem !important;
}
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
