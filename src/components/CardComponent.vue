<template>
    <div class="card animate__animated animate__zoomIn">
        <div class="card__img">
            <img :src="imageURL" alt="not_found">
        </div>
        <div class="card__description">
            <h2 class="card__title">{{ card.title }}</h2>
            <div class="card__actions">
                <router-link :to="card.url" class="btn-link">View Demo</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: [
        'data'
    ],
    data(){
        return {
            'card':this.data
        }
    },
    computed: {
        imageURL(){
            return require(`../assets/images/${this.card.image}`)
        }
    }
}
</script>