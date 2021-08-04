<template>
  <div class="col-xs-8 col-sm-6 col-md-6 col-lg-3">
    <div class="card mt-4 w-75">
      <span class="border"></span>
      <div class="product-1 align-items-center p-2 text-center">
        <img src="../assets/imagens/produtos/farinha.png" alt="" class="rounded" width="120" />
        <h5>Farinha</h5>

        <!--card info-->
        <div class="m3-infor">
          <span class="text1 d-block">Marca: Dona Benta</span>
          <span class="text1">Peso: 1kg</span>
        </div>

        <div class="cost mt-3 text-dark">
          <span> R$ 05,00</span>
          <div class="star mt-3 align-items-center">
            <input
              class="button"
              type="button"
              name="mais"
              id="mais1"
              value="+"
              onclick="process(-1)"
            />
            <input
              class="button-input"
              type="text"
              name="format"
              value="0"
              id="format1"
              size="1"
            />
            <input
              class="button"
              type="button"
              name="menos"
              id="menos1"
              value="-"
              onclick="process(1)"
            />
            <button
              class="button-adc"
              type="submit"
              id="adicionar"
              value="0"
              onclick="adc()"
            >
              ADICIONAR
            </button>
          </div>
        </div>

        <!-- card infor ends here-->
      </div>
      <!--button card -->
      <div class="p-3 shoe text-center text-white mt-3 cursor">
        <!--<span class="text-uppercase">Comprar</span>-->
      </div>
    </div>
  </div>
</template>
<style>

</style>
