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
    name: 'Forbidden',    
    components: {
        ErrorComponent
    },
    data (){
        return{
            error:{
                'errorStatus' : '403 Forbidden',
                'titleStatus' : 'No access to this page',
                'description': "You don't have sufficient permissions to view this page",
                'imageStatus': 'denied.svg'
            }
        }
    }
}
</script>