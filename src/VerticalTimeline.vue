<template>
  <div
    v-if="sortedData.length"
    class="timeline">
    <div
      class="timeline__item"
      v-for="item in sortedData"
      :key="item._id"
    >
      <div class="content">
        <h2
          v-if="item.title.length"
          class="content__heading">
          {{ item.title }}
        </h2>
        <p v-if="item.text.length">{{ item.text }}</p>
        <p
          v-if="item.date.length"
          class="content__date">
          {{ item.date }}
        </p>
        <div v-if="item.tags.length">
          <span
            class="content__tag"
            v-for="tag in item.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalTimeline',

  props: {
    inputData: {
      type: Array,
      required: true,
      default: () => [],
    },
    reversed: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    sortedData() {
      const inputData = this.inputData

      inputData.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })

      if (this.reversed) inputData.reverse()

      return inputData
    }
  }
}
</script>

<style scoped lang="scss">

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  & * {
    box-sizing: border-box;
  }

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #0b5184;
    top: 0;
    bottom: 0;
    left: 90%;
    margin-left: -3px;

    @media screen and (min-width: 1024px) {
      left: 50%;
    }
  }

  &__item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 90%;

    @media screen and (min-width: 1024px) {
      width: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      right: -19px;
      background-color: white;
      border: 6px solid #0B5184;
      top: calc(50% - 16px);
      border-radius: 50%;
      z-index: 1;

      @media screen and (min-width) {
        top: calc(50% - 16px);
      }
    }

    &:nth-child(odd) {
      left: 0;

      @media screen and (min-width: 520px) {
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 50%;
          z-index: -1;
          height: 6px;
          background-color: #0B5184;
        }
      }

      .content {
        @media screen and (min-width: 520px) {
          padding: 20px 50px 20px 30px;
          margin-right: 60px;

          &::before {
            content: '';
            position: absolute;
            height: 15px;
            width: 15px;
            top: 50%;
            right: -5px;
            background-color: #0B5184;
            border: 6px solid #0B5184;
            top: calc(50% - 10px);
            border-radius: 50%;
            z-index: 1;
          }
        }
      }
    }

    &:nth-child(even) {
      @media screen and (min-width: 520px) {
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 50%;
          z-index: -1;
          height: 6px;
          background-color: #0B5184;

          @media screen and (min-width: 1024px) {
            left: 0;
          }
        }
      }

      @media screen and (min-width: 1024px) {
        left: 50%;
      }

      .content {
        @media screen and (min-width: 520px) {
          padding: 20px 50px 20px 30px;
          margin: 0 60px 0 0;

          &::before {
            content: '';
            position: absolute;
            height: 15px;
            width: 15px;
            top: 50%;
            right: -5px;
            background-color: #0B5184;
            border: 6px solid #0B5184;
            top: calc(50% - 10px);
            border-radius: 50%;
            z-index: 1;

            @media screen and (min-width: 1024px) {
              left: -5px;
            }
          }
        }

        @media screen and (min-width: 1024px) {
          padding: 20px 30px 20px 50px;
          margin: 0 0 0 60px;
        }
      }

      &::after {
        @media screen and (min-width: 1024px) {
          left: -18px;
        }
      }
    }
  }

  .content {
    background-color: white;
    position: relative;

    &__heading {
      color: #0b5184;
    }

    &__date {
      font-style: italic;
    }

    &__tag {
      padding: 5px 10px;
      margin-right: 5px;
      background-color: #0b5184;
      font-size: 10px;
      color: #FFF;
      border-radius: 5px;
    }
  }
}
</style>
