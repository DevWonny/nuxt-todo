<template>
  <div>
    <Input></Input>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import List from "@/components/List.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Input,
    List,
    Footer,
  },
};
</script>
