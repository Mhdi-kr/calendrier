<template>
    <!-- mx-auto w-96 -->
    <calendrier :week-start="'sunday'" :calendar="'gregory'" class="mx-auto w-96 bg-violet-900 p-4 text-sky-50 rounded shadow-lg">
        <template #calendar="{ month, year, day, handlePrevMonth, handleNextMonth }">
            <button class="ml-2" @click="handlePrevMonth">
                prev
            </button>
            <button class="ml-2" @click="handleNextMonth">
                next
            </button>
            <button>
                {{ month }}
            </button>
        </template>
        <template #week-day="{ title }">
            <div class="text-center uppercase">
                {{ title }}
            </div>
        </template>
        <template #day="{ date, isToday, isWeekend }">
            <div class="flex items-center justify-center h-10 bg-violet-500 hover:bg-violet-400 transition-all cursor-pointer rounded"
                :class="createDayClass(isWeekend, isToday)">
                {{ date.getDay() }}
            </div>
        </template>
    </calendrier>
</template>

<script lang="ts" setup>
import Calendrier from '@/components/Calendrier.vue'
const createDayClass = (isWeekend: boolean, isToday: boolean): string => {
    return (
        '' +
        (isWeekend ? 'bg-violet-100 text-black' : '') +
        (isToday ? 'border' : '')
    )
}
</script>
