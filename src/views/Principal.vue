<template>
  <Menu />
  <Options />
  <div class="container mb-12 mt-12">
    <div class="row">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
  </div>
</template>
<script>
import Options from "../components/Options.vue";
import Menu from "../components/Menu.vue";
import Item from "../components/Item.vue";
export default {
  components: {
    Options,
    Menu,
    Item,
  },
};
</script>
<style >

header{
    text-align: center;
    background-color: #034786;
}

body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 1300px;
    background-image: linear-gradient(to right top, #2F4858, #2F4858, #2F4858, #2F4858, #2F4858, #2F4858, #2F4858, #2F4858, #2F4858, #2F4858, #2F4858, #2F4858);
    box-sizing: border-box;
}

/*afastamento dos botões*/
.nav-item {
    margin: 0 20px;
    text-decoration-color: #FFF;
    border: #FFF;
}

.card{
border: #FFF;
outline: none;
border-radius: 20px;
}
.card:hover{
    transform: scale(1.1);
    position: static;
}

li a{
    text-decoration:#FFF;
    color: #FFF;
    background-color: #009067;
    border-radius: 5px;
    border:none;
    margin-bottom: 1px;
    padding: 5px 70px;
}
li a:hover{
    background-color: #006D78;
    text-decoration:#FFF;
    color: #FFF;

}

.linha-vertical {
    border-left: 2px solid;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
    box-sizing: border-box;
    background-color: #FFF;
}
h1{
    padding-top: 50px;
}
.div-display {
    display: contents;
}
.button-adc {
    background-color: #009067;
    border: none;
    color: white;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    display: inline;
    font-size: 10px;
    margin: 4px 2px;
    cursor: pointer;
}
.button {
    align-items: center;
    background-color: #009067;
    border: none;
    color: #fff;
    padding: 7px 12px;
    text-align: center;
    text-decoration: none;
    display: inline;
    font-size: 10px;
    cursor: pointer;
}
button:hover {
    background-color: #006D78;
    color:white;
}
.button-input{
    align-items: center;
    background-color: #fff;
    border: 1px solid #009067;
    color: #000;
    padding: 6px 10px;
    text-align: center;
    text-decoration: none;
    display: inline;
    font-size: 10px;
    margin: -6px;
    cursor: pointer;
}
.button-input:hover{
    border: 1px solid #006D78;
}
</style>
