<template>
    <div class="weeks-content-day">
        <h2>{{getWeekDay}}</h2>
        <h3>{{getDay}} {{getMonth}}</h3>
        <img :src="require(`@/assets/img/${day.weather[0].main}.svg`)" alt="">
        <span>+{{ Math.round(day.temp.day)}}°</span>
        <span>+{{ Math.round(day.feels_like.day)}}°</span>
        <p>{{day.weather[0].description}}</p>
        
    </div>
</template>

<script>
import unix from '@/timestamp.js'
    export default {
        props: ['day'],
        computed: {
            getWeekDay(){
                return unix(this.day.dt, 'weekday')
            },
            getDay(){
                return unix(this.day.dt, 'day')
            },
            getMonth(){
                return unix(this.day.dt, 'month')
            },
        }
    }
</script>

<style>

</style>