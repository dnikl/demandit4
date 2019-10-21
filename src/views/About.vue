<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
  export default {
    methods: {
        
    },
    data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    }
  }
</script>
