<template>
    <!-- Pie de página con logos -->
     <v-layout row wrap align-center justify-center class="mb-4">
        <v-flex xs12>
            <div class="d-flex grey--text text--darken-2 ml-4 text-center justify-center">
                <p class="text-body-1 mt-6 mb-4">
                    <span class="text-h6">{{ $t('footer.encabezado') }}</span> <br>
                    Sarah Shamash <span class="font-weight-light">(Universidad de Columbia Británica) </span><br>
                    Lilia García Torres <span class="font-weight-light">(LAIS-Instituto Mora) </span><br>
                    Oswaldo A. Lara Orozco <span class="font-weight-light">(FCPyS-UNAM) </span><br>
                    Alberto Cuevas Martínez <span class="font-weight-light">(UNAM) </span><br>
                    Liliana Cordero Marines <span class="font-weight-light">(CISAN-UNAM)</span>
                </p>
            </div>
        </v-flex> 
        <v-flex xs12>
            <div class="d-flex grey--text text--darken-3 text-center justify-center">
                <p class="text-body-1 mb-6">
                    <span class="text-h6">{{ $t('footer.desarrolloWeb') }}</span> <br>
                    Rodrigo Colín <span class="font-weight-light">(LAIS-Instituto Mora) </span><br>
                    Emmanuel Hernández <span class="font-weight-light">(LAIS-Instituto Mora) </span>
                </p>
            </div>
        </v-flex>
        <v-flex xs4 sm2>
            <div class="d-flex grey--text text--darken-2 ml-4 text-center justify-center">
            <a href="https://redocinvestigacion.com/">
                <v-img src="@/assets/logo_ReDOC.png" height="75" max-width="100" contain class="mx-1 my-2"></v-img>
            </a>
            </div>
        </v-flex>
        <v-flex xs4 sm2>
            <div class="d-flex grey--text text--darken-2 ml-4 text-center justify-center">
            <a href="http://lais.mora.edu.mx/" target="_blank">
                <v-img src="@/assets/lais_logo.png" height="75" max-width="100" contain class="mx-1 my-2"></v-img>
            </a>
            </div>
        </v-flex>
        <v-flex xs4 sm2>
            <div class="d-flex grey--text text--darken-2 ml-4 text-center justify-center">
            <a href="https://www.institutomora.edu.mx/Inicio.html" target="_blank">
                <v-img src="@/assets/logo_Mora.png" height="75" max-width="100" contain class="mx-1 my-2"></v-img>
            </a>
            </div>
        </v-flex>
        <v-flex xs4 sm2>
            <div class="d-flex grey--text text--darken-2 ml-4 text-center justify-center">
            <a href="http://www.cisan.unam.mx/" target="_blank">
                <v-img src="@/assets/CISAN-logo.png" height="75" max-width="100" contain class="mx-1 my-2"></v-img>
            </a>
            </div>
        </v-flex>
        <v-flex xs4 sm2>
            <div class="d-flex grey--text text--darken-2 ml-4 text-center justify-center">
            <a href="https://www.unam.mx/" target="_blank">
                <v-img src="@/assets/logo_UNAM.png" height="75" max-width="100" contain class="mx-1 my-2"></v-img>
            </a>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'Footer',

    data: () => ({
        // Configuración adicional para el movimiento de pantalla en imagen de encabezado
        options: {
            duration: 900,
            offset: 0,
            easing: 'easeInOutCubic',
        },
    }),
}
</script>
