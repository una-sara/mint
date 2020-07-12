<template>
   <div>
      <div class="product-app">
          <!--此div表示一个商品 循环-->
          <div class="goods-item">
              <!--商品图片-->
              <img src="http://127.0.0.1:8080/01.jpg"/>
              <!--商品名称-->
              <h1>小辣椒</h1>
              <!--商品价格-->
              <div class="info">1199.00</div>
              <!--加入购物车-->
              <mt-button>加入购物车</mt-button>
          </div>
      </div>
   </div>
</template>
<style scoped>
/**1:最外层父元素：弹性布局 */
.product-app{
    display:flex;/**弹性布局 */
    flex-wrap:wrap;/**指定子元素换行 */
    justify-content: space-between;/**两端对齐 */
    padding:4px;/**内边距 */
}
/**2:修饰当前商品 49% */
/**3:修饰当前商品中图片 */
/**4:修饰当前商品价格 */
</style>