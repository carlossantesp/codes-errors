<template>
    <header class="header">
        <div class="container">
            <h2 :class="center ? 'app-title text-center' : ''"
                class="header__title animate__animated animate__fadeIn">
                {{ titleHeader }}
            </h2>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: [
        'title',
        'center'
    ],
    data () {
        return {
            'titleHeader': this.title,
        }
    },
}
</script>