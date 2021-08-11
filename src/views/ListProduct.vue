<template>
 


<!-- <div class="alert alert-danger">
Ban chua dang nhap
</div> -->
<div class= "container">
<div class="row row-cols-4">
<ul v-if="products && products.length">
    <div v-for="product of products" :key="product.id">
        <div class="card col" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{product.iD}}</h5>
<h5 class="card-title">{{product.name}}</h5>
<p class="card-text">
{{product.price}}
</p>
<router-link :to="`/editProduct/${product.iD}`" class="btn btn-primary">Edit</router-link>
<router-link to="/delete" class="btn btn-primary">Delete</router-link>
</div>
</div>
<br>
</div>
</ul>
</div>
</div>


  <!-- <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{ error.message }}
    </li>
  </ul> -->
</template>

<script>
import axios from "axios";

export default {
    name:'ListProduct',
  data() {
    return {
      products: [
      
      ],
      errors: [],
    };
  },

  // lấy dữ liệu khi component được tạo thành công
  mounted() {
      console.log('hello')
    axios
      .get(`http://127.0.0.1:8000/api/listProduct`)
      .then((response) => {
          console.log(response);
         
        this.products = response.data;

      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>