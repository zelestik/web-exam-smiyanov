<template>
    <div id="CPU_cat" class="catalog">
        <h1>Процессоры</h1>
        <div class="input-form" v-if="input_visible === true">
            <p><label for="Manufacture">Производитель</label><input type="text" id="Manufacture" placeholder="Производитель" v-model="Current_CPU.Manufacture"></p>
            <p><label for="Model">Модель</label><input type="text" id="Model" placeholder="Модель" v-model="Current_CPU.Model"></p>
            <p><label for="Socket">Сокет</label><input type="text" id="Socket" placeholder="Сокет" v-model="Current_CPU.Socket"></p>
            <p><label for="Frequency">Частота</label><input type="number" size="2" step="0.01" id="Frequency" placeholder="Частота" v-model="Current_CPU.Frequency"></p>
            <p><label for="Cores">Ядер</label><input type="number" size="2" step="1" id="Cores" placeholder="Количество ядер" v-model="Current_CPU.Cores"></p>
            <p><label for="Price">Цена</label><input type="number" size="2" step="0.01" id="Price" placeholder="Цена" v-model="Current_CPU.Price"></p>
            <p><button class="btn btn-light" @click="add_CPU">Сохранить</button>
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
                    <th scope="col">Частота</th>
                    <th scope="col">Количество ядер</th>
                    <th scope="col">Цена</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="CPU in CPUs" :key="CPU.id">
                    <td>{{CPU.id}}</td>
                    <td>{{CPU.Manufacture}}</td>
                    <td>{{CPU.Model}}</td>
                    <td>{{CPU.Socket}}</td>
                    <td>{{CPU.Frequency}}</td>
                    <td>{{CPU.Cores}}</td>
                    <td>{{CPU.Price}}</td>
                    <td><button class="btn btn-light" @click="edit_CPU(CPU)">Изменить</button></td>
                    <td><button class="btn btn-light" @click="delete_CPU(CPU)">Удалить</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "CPU_cat",
        data(){
            return {
                input_visible: false,
                CPUs: {},
                Current_CPU: {
                    id: null,
                    Manufacture: "",
                    Model: "",
                    Socket: "",
                    Frequency: 0,
                    Cores: 0,
                    Price: 0
                }
            }
        },
        methods:{
            async add_CPU(){
                try {
                    if (this.Current_CPU.id == null)
                        await this.$http.post('http://localhost:3000/CPUs', this.Current_CPU);
                    else
                        await this.$http.put('http://localhost:3000/CPUs/' + this.Current_CPU.id, this.Current_CPU);
                    this.Current_CPU = {
                        id: null,
                        Manufacture: "",
                        Model: "",
                        Socket: "",
                        Frequency: 0,
                        Cores: 0
                    };
                    this.load_CPUs();
                    this.input_visible = false;
                }
                catch (e) {
                    console.log(e);
                    alert("Ошибка при добавлении записи");
                }
            },
            async edit_CPU(CPU){
                this.input_visible = true;
                this.Current_CPU = Object.assign({}, CPU);
            },
            async delete_CPU(CPU){
                await this.$http.delete('http://localhost:3000/CPUs/' + CPU.id);
                this.load_CPUs();
            },
            async load_CPUs(){
                try{
                    await this.$http.get('http://localhost:3000/CPUs').then((res)=> res.json()).then((res) => (this.CPUs = res))
                }
                catch (e){
                    console.log(e);
                    alert("Возникла ошибка при получении каталога");
                }
            }
        },
        async created(){
            await this.load_CPUs();
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