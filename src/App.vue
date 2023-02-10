<template>
    <calendrier :week-start="'sunday'" :calendar="'gregory'" class="w-96 mx-auto bg-violet-900 p-4 text-sky-50 rounded shadow-lg">
        <template #calendar="{ month, year, day, handlePrevMonth }">
            <button @click="handlePrevMonth">
                {{ month }}
            </button>
        </template>
        <template #week-day="{ title }">
            <div class="text-center uppercase">
                {{ title }}
            </div>
        </template>
        <template #day="{ date, isToday, isWeekend }">
            <div
                class="flex items-center justify-center h-10 bg-violet-500 hover:bg-violet-400 transition-all cursor-pointer rounded"
                :class="isWeekend && 'bg-violet-100 text-black'"
                >
                {{ isToday }}
                {{ isWeekend }}
            </div>
        </template>
    </calendrier>
</template>

<script lang="ts" setup>
import Calendrier from '@/components/Calendrier.vue'
</script>
