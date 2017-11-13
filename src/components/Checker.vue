<template>
  <div>
    <div>
      <h2><img src="../assets/icons/btc/icon_128x128.png" width="64" alt="bitcoin"></h2>
      <div>{{ rate }}</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        rate: 0
      }
    },
    created: function () {
      setInterval(() => {
        this.getRate()
      }, 1000)
    },
    methods: {
      getRate () {
        axios.get('http://localhost:7777/rate')
          .then((response) => {
            this.rate = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>
