<template>
  <div id="edit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input v-model="name" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Price</label>
      <input v-model="price" type="number" class="form-control" min="0" />
    </div>

    <button v-on:click="postPost" class="btn btn-primary">Submit</button>

    <!-- <button v-on:click="postPost">hello</button> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProduct",
  data() {
    return {
      name: "",
      price: "",
      id:'',
      errors: [],
    };
  },

  // Gửi request lên server khi mà postPost() được gọi
  methods: {
    postPost() {

      
         axios.post(
          `http://127.0.0.1:8000/api/product/update`,
          {
            name: "heloo"
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
      .then(res => console.log(res))
       .catch (e =>{
        this.errors.push(e);
       })
      }
    },
  }

</script>