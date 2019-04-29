<template>
  <div class="star" :class="starType">
    <span v-for="(clazz,index) in clazzs"
          :class="clazz"
          :key="index"
          class="star-item">
    </span>
  </div>
</template>

<script>
  const [LENGTH, CLAZZ_ON, CLAZZ_HALF, CLAZZ_OFF] = [5, 'on', 'half', 'off']

  export default {
    name: 'star',
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return `star-${this.size}`
      },
      clazzs () {
        let result = []
        const score = Math.floor(this.score * 2) / 2
        const hasDecimal = score % 1 === 0
        const integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          result.push(CLAZZ_ON)
        }
        if (hasDecimal) {
          result.push(CLAZZ_HALF)
        }
        while (result.length < LENGTH) {
          result.push(CLAZZ_OFF)
        }
        return result
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/mixin.styl"

  .star
    display flex
    align-items center
    justify-content center

    .star-item
      background-repeat no-repeat

    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px

        &:last-child
          margin-right 0

        &.on
          bg-image('star48_on')

        &.half
          bg-image('star48_half')

        &.off
          bg-image('star48_off')

    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px

        &:last-child
          margin-right 0

        &.on
          bg-image('star36_on')

        &.half
          bg-image('star36_half')

        &.off
          bg-image('star36_off')

    &.star-36
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px

        &:last-child
          margin-right 0

        &.on
          bg-image('star24_on')

        &.half
          bg-image('star24_half')

        &.off
          bg-image('star24_off')
</style>
