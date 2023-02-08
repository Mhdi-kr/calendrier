<template>
    {{ new Date() }}
    {{ new Intl.Locale('fa') }}
    {{ new CustomDate().add({ days: 1}) }}
    <!-- <section>
        <slot
            name="controls"
            :year="date.year()"
            :month="date.calendar(props.calendar).month()"
            :date="date"
            :prev-month="date.subtract(1, 'month').month()"
            :next-month="date.add(1, 'month').month()"
            :on-prev-month-clicked="() => changeMonth('subtract')"
            :on-next-month-clicked="() => changeMonth('add')"
        />
        <div class="container">
            <div
                class="text-center"
                style="font-size: 0.7rem"
                v-for="name in names"
            >
                {{ name }}
            </div>
            <div v-for=", in offsets" />
            <time
                v-for="day in date.daysInMonth()"
                :date="date.clone().set('date', day).format('YYYY-MM-DD')"
            >
                <slot name="day" :date="date.clone().set('date', day)"></slot>
            </time>
        </div>
    </section> -->
</template>

<script lang="ts" setup>
import { CustomDate } from '@/lib/CustomDate'
// import { ref, computed, watch } from 'vue'
// import dayjs, { Dayjs } from "dayjs";

// interface IJalaaliCalProps {
//     calendar: Parameters<typeof calFunc>[0];
// }
// const props = defineProps<IJalaaliCalProps>();
// const calFunc = dayjs().calendar;
// const emits = defineEmits<{
//     (event: "calendarUpdate", date: Dayjs): void;
// }>();

// const date = ref(dayjs().calendar(props.calendar).startOf("month"));
// const names = computed(() =>
//     ["sat", "sun", "mon", "tue", "wed", "thu", "fri"]
// );
// const offsets = computed(() => date.value.startOf("month").day() + 1);

// const translateMonthName = (index: number, locale: string) =>
//     months.at(index)![locale as "fa" | "en"];

// function changeMonth(type: "add" | "subtract") {
//     date.value = dayjs(date.value).calendar(props.calendar)[type](1, "month");
// }

// watch(date, (updatedDate) => emits("calendarUpdate", updatedDate), {
//     immediate: true,
// });
</script>

<style scoped>
.container {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
}
</style>
