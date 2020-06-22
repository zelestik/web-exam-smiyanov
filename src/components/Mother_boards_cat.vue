<template>
    <div id="Mother_boards_cat" class="catalog">
        <h1>Материнские платы</h1>
        <div class="input-form" v-if="input_visible === true">
            <p><label for="Manufacture">Производитель</label><input type="text" id="Manufacture" placeholder="Производитель" v-model="Current_MB.Manufacture"></p>
            <p><label for="Model">Модель</label><input type="text" id="Model" placeholder="Модель" v-model="Current_MB.Model"></p>
            <p><label for="Socket">Сокет</label><input type="text" id="Socket" placeholder="Сокет" v-model="Current_MB.Socket"></p>
            <p><label for="Chipset">Чипсет</label><input type="text" id="Chipset" placeholder="Чипсет" v-model="Current_MB.Chipset"></p>
            <p><label for="Price">Цена</label><input type="number" size="2" step="0.01" id="Price" placeholder="Цена" v-model="Current_MB.Price"></p>
            <p><button class="btn btn-light" @click="add_MB">Сохранить</button>
                <button class="btn btn-light" @click="input_visible = false" v-if="input_visible === true">Скрыть панель</button></p>
        </div>
        <button class="btn btn-light" @click="input_visible = true" v-if="input_visible === false">Добавить новый товар</button>
        <table class="catalog-table table text-light table-responsive">
            <thead class="thead">
            <tr>
                <th scope="col">Идентификатор</th>
                <th scope="col">Производитель</th>
                <th scope="col">Модель</th>
                <th scope="col">Сокет</th>
                <th scope="col">Чипсет</th>
                <th scope="col">Цена</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="MB in MBs" :key="MB.id">
                <td>{{MB.id}}</td>
                <td>{{MB.Manufacture}}</td>
                <td>{{MB.Model}}</td>
                <td>{{MB.Socket}}</td>
                <td>{{MB.Chipset}}</td>
                <td>{{MB.Price}}</td>
                <td><button class="btn btn-light" @click="edit_MB(MB)">Изменить</button></td>
                <td><button class="btn btn-light" @click="delete_MB(MB)">Удалить</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "mother_boards_cat",
        data(){
            return {
                input_visible: false,
                MBs: {},
                Current_MB: {
                    id: null,
                    Manufacture: "",
                    Model: "",
                    Socket: "",
                    Chipset: "",
                    Price: 0
                }
            }
        },
        methods:{
            async add_MB(){
                try {
                    if (this.Current_MB.id == null)
                        await this.$http.post('http://localhost:3000/MBs', this.Current_MB);
                    else
                        await this.$http.put('http://localhost:3000/MBs/' + this.Current_MB.id, this.Current_MB);
                    this.Current_MB = {
                        id: null,
                        Manufacture: "",
                        Model: "",
                        Socket: "",
                        Chipset: "",
                        Price: 0
                    };
                    this.load_MBs();
                    this.input_visible = false;
                }
                catch (e) {
                    console.log(e);
                    alert("Ошибка при добавлении записи");
                }
            },
            async edit_MB(MB){
                this.Current_MB = Object.assign({}, MB);
                this.input_visible = true;
            },
            async delete_MB(MB){
                await this.$http.delete('http://localhost:3000/MBs/' + MB.id);
                this.load_MBs();
            },
            async load_MBs(){
                try{
                    await this.$http.get('http://localhost:3000/MBs').then((res)=> res.json()).then((res) => (this.MBs = res))
                }
                catch (e){
                    console.log(e);
                    alert("Возникла ошибка при получении каталога");
                }
            }
        },
        async created(){
            await this.load_MBs();
        }
    }
</script>

<style scoped>
    .catalog{
        color: white;
        background-color: mediumspringgreen;
    }
    .btn-light{
        color: mediumaquamarine;
    }
    .btn-light:hover{
        color: mediumaquamarine;
    }
    input{
        background-color: aqua;
    }
</style>