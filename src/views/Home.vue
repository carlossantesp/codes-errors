<template>
  <div class="wrapper">
    <HeaderComponent :title="title" center=true></HeaderComponent>
    <main class="main">
      <div class="container">
        <ListCardsComponent></ListCardsComponent>
      </div>
    </main>
    <FooterComponent :footer="footer"></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ListCardsComponent from '@/components/ListCardsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    FooterComponent,
    ListCardsComponent
  },
  data() {
    return{
      title: "CODES ERRORS",
      'footer': {
        'name': 'Carlos Santillan Espinoza',
        'job': 'Web Developer'
      }
    }
  }
}
</script>
