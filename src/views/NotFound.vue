<template>
    <ErrorComponent :headerTitle="error.errorStatus"
        :title="error.titleStatus"
        :description="error.description"
        :image="error.imageStatus"
        btnText="BACK TO HOMEPAGE" 
    ></ErrorComponent>
</template>

<script>
import ErrorComponent from '@/components/ErrorComponent.vue'

export default {
    name: 'NotFound',    
    components: {
        ErrorComponent
    },
    data (){
        return{
            error:{
                'errorStatus' : '404 Not Found',
                'titleStatus' : 'I have bad news for you',
                'description': "The page you are looking for might be removed or is temporarily unavailable",
                'imageStatus': 'not_found.svg'
            }
        }
    }
}
</script>