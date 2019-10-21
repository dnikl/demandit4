<template>
  <div class="home-layout">
    <Navbar />
    <b-container class="bv-example-row mt-5">
      <b-row>
        <b-col>
          <slot/>
        </b-col>
      </b-row>
    </b-container>
    <Footer />  
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'default-layout',
  components: {
    Navbar,
    Footer
  }
}
</script>
