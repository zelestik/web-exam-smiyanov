<template>
    <div id="my_footer" class="my_footer">
        <footer>
            <div class="about_me">
                <p><b>Смиянов Денис Александрович</b></p>
                <p><b>181-361 22.06.2020</b></p>
                <p><b>22.06.2020</b></p>
            </div>
            <div class="sources">
                <p><a href="https://bootstrap-vue.org/" class="text-light" target="_blank">Bootstrap-Vue</a></p>
                <p><a href="https://getbootstrap.com/" class="text-light" target="_blank">Bootstrap</a></p>
                <p><a href="https://fcenter.ru/" class="text-light" target="_blank">Ф-Центр</a></p>
                <p><a href="http://htmlbook.ru/" class="text-light" target="_blank">HTML Book</a></p>
                <p><a href="https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff" class="text-light" target="_blank">Копирование объектов</a></p>
                <p><a href="https://msiter.ru/tutorials/html5/semantic_elements" class="text-light" target="_blank">Теги HTML5</a></p>
                <p><a href="https://webformyself.com/adaptivnye-podskazki-dlya-izobrazhenij-s-pomoshhyu-w-deskriptora/" class="text-light" target="_blank">W Дескрипторы</a></p>
            </div>
            </footer>
    </div>
</template>

<script>
    export default {
        name: "my_footer"
    }
</script>

<style scoped>
    footer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        color: white;
        text-align: center;
        background-color: darkslategray;
    }
</style>