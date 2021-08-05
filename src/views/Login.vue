<template>
  <section>
    <div align="middle">
      <img
        src="../assets/imagens/logo/logo_iMart_.png"
        alt="Logo"
        width="170"
        height="70"
      />
      
    </div>
    <div class="formulario-login">
      <div><h1>Faça seu login</h1></div>
      <form id="form" name="formulario">
        <div class="input-container">
          <input class="input" id="inpUsuario" type="text" pattern=".+" required />
          <label class="label" for="inpUsuario">Usuário</label>
        </div>
        <div class="input-container">
          <input class="input" id="inpSenha" type="password" pattern=".+" required />
          <label class="label" for="inpSenha">Senha</label>
        </div>
      </form>

      <button class="button btn">Login</button>
      <div class="foot">
        <a href="#">Esqueceu sua senha?</a>
      </div>

      <div class="foot">
        <a href="#">Ainda não sou cliente</a>
      </div>
      <router-link to="/cadastrar-usuario">
        <button>Não sou cadastrado</button>
      </router-link>
      <router-view />
    </div>
  </section>
</template>
<style scoped>
html {
  height: 100%;
  background-image: linear-gradient(
    to right top,
    #009067,
    #008a70,
    #008476,
    #007d79,
    #00767a,
    #057078,
    #0e6a75,
    #166472,
    #1f5d6d,
    #265667,
    #2c4f60,
    #2f4858
  );
}
h1 {
  color: #006d78;
  margin-left: 33px;
  margin-bottom: 30px;
  font-family: sans-serif;
  text-align: center;
}
.formulario-login {
  align-items: center;
  width: 200px;
  height: 100px;
  margin: 0px auto;
  margin-top: -20px;
  padding: 15px 50px 75px 10px;
}
.foot {
  align-items: center;
  margin: 0 0;
  width: 225px;
  height: 25px;
  text-align: center;
  margin-left: 5px;
}
a {
  text-decoration: none;
  color: #006d78;
}
button {
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid #006d78;
  line-height: 1;
  margin: 30px;
  margin-top: 15px;
  padding: 0.8em 5em;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 700;
  color: #006d78;
  border-radius: 20px;
}
.button:hover,
.button:focus {
  color: #fff;
  outline: 0;
}
.btn {
  border-color: #006d78;
  color: #006d78;
  background-image: -webkit-linear-gradient(45deg, #006d78 50%, transparent 50%);
  background-image: linear-gradient(45deg, #006d78 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
}
.btn:hover {
  background-position: 0;
}
input {
  margin-bottom: 25px;
  width: 200px;
  align-items: center;
}

.input-container {
  position: relative;
}

input {
  border: 0;
  border-bottom: 2px solid #006d78;
  outline: none;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
}

input:valid,
input:focus {
  border-bottom: 2px solid #009067;
}

input:valid + label,
input:focus + label {
  color: #009067;
  font-size: 0.8rem;
  top: -16px;
  pointer-events: none;
}

label {
  top: 0;
  left: 0;
  right: 0;
  color: #006d78;
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 1rem;
  font-family: sans-serif;
  cursor: text;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
}

input,
label {
  width: 120%;
  height: 2rem;
  font-size: 0.85rem;
}
section {
  width: 300px;
  height: 450px;
  margin: 90px auto;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
}
</style>
