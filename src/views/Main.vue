<template>
    <div class="main">
        <Header></Header>
        <Hello></Hello>
    </div>
</template>
<script>
import Header from '../components/Header';
import Hello from '../components/HelloWorld'
export default {
    components: {
        Header,
        Hello
    }
}
</script>
<style lang="scss">
.main {
    padding-top: 106px;
}
</style>