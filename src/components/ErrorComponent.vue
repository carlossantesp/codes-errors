<template>
  <div class="wrapper">
        <HeaderComponent :title="headerTitle"></HeaderComponent>
        <main class="main">
            <div class="container">
                <div class="hero">
                    <div class="hero__img animate__animated animate__zoomIn">
                        <img :src="imageURL" :alt="headerTitle">
                    </div>
                    <div class="hero__description animate__animated animate__zoomIn">
                        <h1 class="hero__title">
                            {{ title }}
                        </h1>
                        <p class="hero__details">
                            {{ description }}
                        </p>
                        <div class="hero__btn animate__animated animate__zoomIn animate__delay-1s">
							<router-link class="btn-hero" to="/">{{ btnText }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <FooterComponent :footer="footer"></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
    name: 'ErrorComponent',
    components: {
        HeaderComponent,
        FooterComponent
    },
    props:[
        'title',
        'headerTitle',
        'description',
        'btnText',
        'image'
    ],
    data() {
        return{
            'footer': {
                'name': 'Carlos Santillan Espinoza',
                'job': 'Web Developer'
            }
        }
    },
    computed:{
        imageURL(){
            return require(`../assets/images/${this.image}`);
        }
    }
}
</script>