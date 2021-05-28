<template>
    <div class="header">
        <div class="header__top">
            <v-row>
                <v-col md="8" sm="8" lg="8" cols="8">
                    <h4 class="header__top__location"><v-icon color="#708598">mdi-map-marker</v-icon> Волгоградская область</h4>
                </v-col>
                <v-col md="4" sm="4" lg="4" cols="4" align="start">
                    <ul class="header__top__menu">
                        <li>Тендеры</li>
                        <li>База подрядчиков</li>
                        
                        <v-menu offset-y>
                            <template v-slot:activator="{ attrs, on }">
                                <li v-bind="attrs" v-on="on">Другия услуги <v-icon>mdi-menu-down</v-icon></li>
                            </template>
                            <v-list style="padding:-5px;">
                                <v-list-item
                                    v-for="(katalog , index) in katalogs"
                                    :key="index"
                                    style="cursor:pointer"
                                >
                                <v-list-item-title 
                                    >{{katalog.name}}</v-list-item-title
                                >
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </ul>
                </v-col>
            </v-row>
        </div>
        <div class="header__main">
            <v-row>
                <v-col md="3" sm="4" lg="3" align="end">
                    <div class="header__main__logo">
                        <img src="../assets/Group.png" alt="">
                    </div>
                    
                </v-col>
                <v-col md="1" sm="2" lg="1" align="end">
                    <div class="header__main__katalog">
                        <v-menu offset-y>
                            <template v-slot:activator="{ attrs, on }">
                                <div v-bind="attrs" v-on="on">
                                    <v-btn class="header__main__katalog__btn" color="#FED83D"><v-icon class="mr-2">mdi-menu</v-icon> Каталог</v-btn>
                                </div>
                            </template>
                            <v-list style="padding:-5px;">
                                <v-list-item
                                    v-for="(katalog , index) in katalogs"
                                    :key="index"
                                    style="cursor:pointer"
                                >
                                <v-list-item-title 
                                    >{{katalog.name}}</v-list-item-title
                                >
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-col>
                <v-col md="5" sm="4" lg="5" align="end">
                    <div class="header__main__search">
                        <v-autocomplete placeholder="Хочу найти...." hide-no-data :items="katalogs" item-text="name" class=" mr-2 ml-3 header__main__search__autocomplete" append-icon="mdi-magnify" solo></v-autocomplete>
                    </div>
                </v-col>
                <v-col md="2" sm="2" lg="2" align="center">
                    <div class="header__main__spisok">
                        <v-btn @click="alert" text style="text-transform: capitalize;"><v-icon class="mr-2" color="#708598">mdi-clipboard-text</v-icon> Список</v-btn>
                    </div>
                </v-col>
                <v-col md="1" sm="2" lg="1" align="start">
                    <div class="header__main__user">
                        <v-menu offset-y>
                            <template v-slot:activator="{ attrs, on }">
                                <div class="header__user__div" v-bind="attrs" v-on="on">
                                    <v-avatar class="header__user__div__avatar">
                                        <img src="../assets/logo.png" alt="avatar"/>
                                    </v-avatar>
                                </div>
                            </template>
                            <v-list style="padding:-5px;">
                                <v-list-item @click="$router.push('/supplier/profile')">
                                <v-list-item-title 
                                    >Профиль</v-list-item-title
                                >
                                </v-list-item>
                    
                                <v-list-item @click="$router.push('/')">
                                    <v-list-item-title>Корзина</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="$router.push('/')">
                                <v-list-item-title 
                                    >Выйти</v-list-item-title
                                >
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-col>
            </v-row>
        
            
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            katalogs: [
                {
                    name: "Бетон, ЖБИ"
                },
                {
                    name: "Геоматериалы"
                },
                {
                    name: "Крепеж"
                },
                {
                    name: "Кровля"
                },
                {
                    name: "Металл и металлические изделия"
                },
                {
                    name: "Пены, герметики, клеи"
                },
                {
                    name: "Пиломатериалы"
                },
                {
                    name: "Сухие строительства"
                },
                {
                    name: "Сыпучие материалы"
                },
            ]
        };
    },
    methods: {
        alert() {
            alert('Вы нажали кнопку Список!!!');
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    background: #ffffff;
    align-items: center;
    position: fixed;
    color: black;
    -webkit-box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.08);
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    &__top{
        height: 40px;
        background: #FAFBFC;
        &__location {
            margin-left: 50px;
            color: #708598;
            font-weight: 400;
        }
        &__menu {
            list-style-type: none;
            color: #708598;
            
        }
    }
    &__main {
        width: 100%;
        border-top: 1px solid #ECEFF1;
        border-bottom: 1px solid #ECEFF1;
        height: 86px;
        padding-top: 15px;
        background: #ffffff;
        &__katalog {
            padding-top: 5px;
            &__btn {
                border: none;
                text-transform: capitalize;
                height: 40px !important;
                
            }
        }
        &__logo {
            padding: 0 auto;
           
        }
        &__search {
            margin-left: 20px;
            &__autocomplete {
                width: 600px;
                max-height: 40px !important;
                background: #FFFFFF;
                border: 1px solid #ECEFF1;
                border-radius: 4px;
            }   
        }
        &__spisok {
            padding-top: 5px;
            width: 120px;
            border: 1px solid #ECEFF1;
            box-sizing: border-box;
            border-radius: 4px;
            height: 46px;
            

        }
    }
    

}
ul li {
    display: inline;
    margin: 0px 10px;
}
.v-text-field.v-text-field--solo .v-input__control {
    max-height: 40px;
}
</style>