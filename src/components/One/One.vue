<template>
    <div class="one">
        <div class="from">
            <div class="logo ani" ></div>            
            <div class="bt-1 ani" ></div>
            <div class="bt-2 ani" ></div>
            <div class="bt-3 ani" ></div>
            <div class="bt-4 ani" ></div>
            <div class="text-1">
                关注魅力881官方微信，申请电子卡券，凭卡券用餐尊享魅力881粉丝福利折扣。
            </div>
            <div class="text-2">
                截至4月30日 尊享66折！
            </div>
            <img src="./qrcode-channel.png" alt="" class="qrcode">
        </div>                
       
    </div>
</template>

<script>


export default {
  name:'one'
}
</script>


<style lang="stylus" scoped>
.qrcode
    position absolute
    top 850px
    left 275px
    width 200px
.one
    width 100%
    height 100%
    background-color #121532
    .logo
        position absolute
        top 20px
        left 0
        width 100%
        height 120px
        background url('./icon-hndt-channel.png') center center no-repeat
        background-size contain
    .title
        position absolute
        top 180px
        left 0
        width 100%
        font-size 42px
        color #0bc0fb
        text-align center
        letter-spacing 10px
    .title-bottom
        position absolute
        top 210px
        left 0
        width 100%
        height 34px        
        background url('./title-border.png') center center no-repeat
        background-size contain
    #form
        position absolute
        top 360px
        left 145px
        width 460px
        .item
            width 100%
            height 66px
            display flex
            align-items center
            margin-bottom 40px
            .label
                width 100px
                font-size 36px
                color rgb(11, 192, 251)
            .ipt
                flex 1
                align-self stretch
                background none 
                border 1px solid #0ca9e0
                outline none
                box-sizing border-box
                padding-left 24px
                font-size 26px
                color #99cce8
        .sub-btn
            display block
            width 300px
            height 70px
            text-align center
            margin 100px auto 0
            background linear-gradient(#f29a39,#e05712)
            outline none
            border none 
            border-radius 70px
            font-size 30px
            letter-spacing 0.3em
            color #ffffff
    .bt-1
        position absolute
        bottom 55px
        left 0px
        width 295px
        height 241px        
        background url('./bt-1.png') center center no-repeat
        background-size cover
    .bt-2
        position absolute
        bottom 72px
        right 0px
        width 345px
        height 224px        
        background url('./bt-2.png') center center no-repeat
        background-size cover
    .bt-3
        position absolute
        bottom 0px
        left 0px
        width 375px
        height 139px        
        background url('./bt-3.png') center center no-repeat
        background-size cover
    .bt-4
        position absolute
        bottom 0px
        right 0px
        width 492px
        height 217px        
        background url('./bt-4.png') center center no-repeat
        background-size cover
    .qr-wrap
        position absolute
        top 180px
        left 181px
        width 388px
        height 777px        
        text-align center
        background url('./qr-bg.png') center center no-repeat
        background-size cover
        .title
            position relative
            top -80px
            font-size 40px
            .str
                color #f00
                font-size 18px
                letter-spacing 0
        .logoc
            position absolute
            top 60px
            left 0
            width 100%
            height 60px            
            background url('./logo.png') center center no-repeat
            background-size contain
        .qr
            position absolute            
            bottom 100px            
            margin 0 auto
            margin-left 50%
            transform translateX(-50%)
        .user-info
            position absolute
            top 150px
            left 34px
            width 320px
            border 1px solid #6bb3da
            border-radius 12px
            padding 12px 0
            box-sizing border-box
            font-size 26px
            .item
                line-height 1.8
                display flex
                .tag
                    width 110px
                .text
                    flex 1
                    text-align left
</style>

