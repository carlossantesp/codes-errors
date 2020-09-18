<template>
    <footer class="footer">
        <div class="container">
            <p class="footer__copy animate__animated animate__fadeIn">
                {{ name }} &copy; 2020 {{ job }}
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    props: [
        'footer'
    ],
    data() {
        return {
            name: this.footer.name,
            job: this.footer.job
        }
    }
}
</script>