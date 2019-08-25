<template>
  <div>
    這是測試頁面
  </div>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
