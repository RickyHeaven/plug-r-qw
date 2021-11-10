<template>
  <ul class="groupBoxRP">
    <li :class="{dropItemRP:item.children}" v-for="(item,i) of data" :key="item.path+i">
      <div
        class="menuTxtR" :class="getClass(item)" @click="handleClick($event,item)"
        :style="{paddingLeft: item.level*20+'px'}"
      >
        {{item.name||'-- no name --'}}
      </div>
      <sideMenuGroup :data="item.children" v-if="item.children" :path-name="pathName"/>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "sideMenuGroup",
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      pathName: {
        type: String,
        default: ''
      }
    },
    methods: {
      getClass(item) {
        return item.path.indexOf(this.pathName) > -1 ? 'active' : ''
      },
      handleClick(e, item) {
        e.preventDefault()
        let target = e.target

        if (!item.children && !target.classList.contains('active')) {
          this.$router.push(item.path)
          return
        }
        let parent = target.parentNode
        let siblings = this.siblingElems(parent)
        for (let item of siblings) {
          item.classList.remove('open') //手风琴效果
          const child = item.querySelectorAll('.open')
          for (let e of child) {
            e.classList.remove('open')
          }
        }
        parent.classList.toggle('open')
      }
    }
  }
</script>
