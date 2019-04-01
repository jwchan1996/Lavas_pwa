<template>
    <div class="detail-wrapper">
        <article class="detail-content">
            <header class="detail-title">
                Detail {{$route.params.id}}
            </header>
            <!-- link to another detail -->
            <router-link 
                :to="{
                    name: 'detailId',
                    params: {
                        id: Number($route.params.id) + 1
                    }
                }">Detail {{Number($route.params.id) + 1}}
            </router-link>
            <p>
            Progressive Web Apps are user experiences that have the reach of the web, and are:
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
            </p>
            <!-- link to index -->
            <router-link to="/">Back to home</router-link>
        </article>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'detail-_id',
        // 内容省略，和第四节相同
        async asyncData() {
            let result = await axios(`https://www.apiopen.top/weatherApi?city=%E5%B9%BF%E5%B7%9E`)
            let condition = result.data.data

            console.log(`Weather of ${condition.city} : ${condition.wendu}°C`)
        }
    }
</script>

<style lang="stylus" scoped>

    .detail-content
        font-size 16px
        line-height 30px
        margin-top 30px

        .detail-title
            margin-bottom 20px
            padding 10px 0
            font-size 36px
            font-weight bold

</style>