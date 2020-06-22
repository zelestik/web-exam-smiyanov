<template>
    <div id="My_header" class="header">
        <header>
            <img src="logo_small.png" srcset="logo_small.png 750w, logo.svg 1500w" alt="logo" class="logo">
            <button class="btn btn-light main_button" @click="$router.push('/')">Главная</button>
            <button class="btn btn-light CPUs_button" @click="$router.push('/CPUs')">ЦП</button>
            <button class="btn btn-light MBs_button" @click="$router.push('/Mother_boards')">Материнские платы</button>
        </header>
    </div>
</template>

<script>
    export default {
        name: "My_header"
    }
</script>

<style scoped>
    header{
        background-color: mediumspringgreen;
        display: grid;
        grid-template-areas: "logo main_button CPUs_button MBs_button";
    }
    .main_button{
        grid-template-areas: "main_button";
    }
    .CPUs_button{
        grid-template-areas: "CPUs_button";
    }
    .MBs_button{
        grid-template-areas: "MBs_button";
    }
    .btn{
        border-color: transparent;
        background-color: white;
        color: mediumaquamarine;
        margin: 10px 30px 10px 30px;
    }
    .logo{
        margin: 10px 30px 10px 30px;
    }
    .btn:hover{
        color: mediumaquamarine;
    }
    .logo{
        transition: 1s;
    }
    .logo:hover{
        transform: scale(1.2);
    }
    @media screen and (max-width: 768px) {
        header{
            grid-template-areas: "logo main_button"
                                "CPUs_button MBs_button";
        }
    }
</style>