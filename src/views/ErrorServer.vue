<template>
    <ErrorComponent :headerTitle="error.errorStatus"
        :title="error.titleStatus"
        :description="error.description"
        :image="error.imageStatus"
        btnText="REPORT BUG" 
    ></ErrorComponent>
</template>

<script>
import ErrorComponent from '@/components/ErrorComponent.vue'

export default {
    name: 'ErrorServer',    
    components: {
        ErrorComponent
    },
    data (){
        return{
            error:{
                'errorStatus' : '500 Server Error',
                'titleStatus' : 'Oops!, something happened with the request',
                'description': 'An internal error occurred on the server. Try again',
                'imageStatus': 'server-error.svg'
            }
        }
    }
}
</script>