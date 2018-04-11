<template>
    <div class="comment">
        <scroll
                class="list-wrap"
                ref="scroll"
                :data="items"
                :pullDownRefresh = "pullDownRefresh"
                :pullUpLoad="pullUpLoad"
                @pullingDown = "onPullingDown"
                @pullingUp="onPullingUp"
            > 
        </scroll>
    </div>
</template>


<script>
import Scroll from 'common/scroll/scroll'

export default {
    name:'comment',
    components:{
       Scroll
    },
    data() {
        return {
            items:[1,2,3,4,5,6],
            pullDownRefresh:{
				txt:'更新成功',
                stop:40,
                threshold:90
            },
            pullUpLoad:{
                txt:{
                    more:'玩命加载中',
                    noMore:'没有更多数据'
                },
                threshold:0
            },
        }
    },
    methods:{
        onPullingDown() {
            // 模拟更新数据
            console.log('pulling down and load data')
            setTimeout(() => {
            if (this._isDestroyed) {
                return
            }
            if (Math.random() > 0.5) {
                // 如果有新数据
                this.items.unshift(new Date())
            } else {
                // 如果没有新数据
                this.$refs.scroll.forceUpdate()
            }
            }, 2000)
        },
        onPullingUp() {
            // 更新数据
            console.log('pulling up and load data')
            setTimeout(() => {
            if (this._isDestroyed) {
                return
            }
            if (Math.random() > 0.5) {
                // 如果有新数据
                let newPage = []
                for (let i = 0; i < 10; i++) {
                newPage.push(this.itemIndex)
                }

                this.items = this.items.concat(newPage)
            } else {
                // 如果没有新数据
                this.$refs.scroll.forceUpdate()
            }
            }, 1500)
        }

    }
}
</script>


<style lang="stylus" scoped>
.comment
    position absolute
    top 260px
    left 0
    right 0
    bottom 80px
</style>
