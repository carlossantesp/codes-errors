<template>
    <div class="app-section">
        <div v-for="(cardInfo, index) in cardInformations" :key="index">
            <CardComponent :data="cardInfo"></CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
    components: {
        CardComponent
    },
    data(){
        return {
            cardInformations: []
        }
    },
    created(){
        this.cardInformations = [
            {
                'title': "404 Not Found",
                'url': '/404',
                'image': 'not_found.svg'
            },
            {
                'title': "500 Server Error",
                'url': '/500',
                'image': 'server-error.svg'
            },
            {
                'title': "403 Forbidden",
                'url': '/403',
                'image': 'denied.svg'
            },
            
        ]
    }
}
</script>