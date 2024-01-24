<template>
  <div>
    <header>
      <h1>ร้านขายสินค้าและบริการ</h1>
    </header>

    <section>
      <h2>สินค้าและบริการ</h2>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!-- รายการสินค้า -->
          <div class="swiper-slide" v-for="(product, index) in products" :key="index">
            <img :src="product.image" :alt="'Product ' + (index + 1)">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>ราคา: {{ product.price }} บาท</p>
            <button class="order-btn">สั่งซื้อ</button>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </section>

    <footer>
      <p>&copy; 2024 ร้านขายสินค้าและบริการ</p>
    </footer>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';

export default {
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });
  },
  data() {
    return {
      products: [
        {
          name: 'สินค้าที่ 1',
          description: 'รายละเอียดสินค้าที่นี่',
          price: 100.00,
          image: 'product1.jpg',
        },
        {
          name: 'สินค้าที่ 2',
          description: 'รายละเอียดสินค้าที่นี่',
          price: 150.00,
          image: 'product2.jpg',
        },
        // เพิ่มรายการสินค้าเพิ่มเติมตามต้องการ
      ],
    };
  },
};
</script>

<style scoped>
/* สไตล์ CSS สำหรับการจัดรูปแบบหน้าเว็บไซต์ */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

section {
  padding: 20px;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* สไตล์ CSS สำหรับรายการสินค้า */
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
}

.product img {
  max-width: 100%;
  border-radius: 5px;
}

/* สไตล์ CSS สำหรับปุ่มสั่งซื้อ */
.order-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-btn:hover {
  background-color: #45a049;
}
</style>
