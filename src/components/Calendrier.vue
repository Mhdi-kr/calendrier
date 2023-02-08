<template>
    <section class="calendrier">
        <slot
            name="calendrier"
            :year="computedState.year"
            :month="computedState.month"
            :day="computedState.day"
            :date="computedState.date"
            :prev-month="computedState.prevMonth"
            :next-month="computedState.nextMonth"
            :handlePrevMonth="handlePrevMonth"
            :handleNextMonth="handleNextMonth"
        />
        <div class="calendrier__container">
            <div v-for="dayName in weekDays">
                {{ dayName }}
            </div>
            <div v-for="offset in prevMonthOffset" />
            <time
                v-for="day in daysInCurrentMonth"
                :date="
                    monthStartDay
                        .clone()
                        .add({ days: day })
                        .format('YYYY-MM-DD')
                "
            >
                <slot
                    name="day"
                    :is-weekend="false"
                    :date="monthStartDay.clone().add({ days: day }).date"
                ></slot>
            </time>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, computed, watch, withDefaults, defineProps } from "vue";
import { CustomDate } from "@/lib/CustomDate";

type Calendar = "jalali" | "gregory";

type CalendrierProps = {
    calendar: Calendar;
    weekStart: "sunday" | "saturday";
};

type CalendrierEmits = {
    (event: "update", date: Date): void;
};

const props = withDefaults(defineProps<CalendrierProps>(), {
    calendar: "gregory",
    weekStart: 'sunday'
});

const emits = defineEmits<CalendrierEmits>();

const monthStartDay = ref(new CustomDate().startOf("month"));

const computedState = computed(() => ({
    year: monthStartDay.value.date.getFullYear(),
    month: monthStartDay.value.date.getMonth(),
    day: monthStartDay.value.date.getDay(),
    date: monthStartDay.value.date as Date,
    prevMonth: "",
    nextMonth: "",
}));

const handlePrevMonth = () => {
    monthStartDay.value.add({ months: -1 });
};

const handleNextMonth = () => {
    monthStartDay.value.add({ months: +1 });
};

const isWeekend = () => {}

watch(
    () => monthStartDay,
    (updatedDate) => emits("update", updatedDate.value.date),
    {
        immediate: true,
    }
);

const prevMonthOffset = computed(() => 5);

const daysInCurrentMonth = computed(() => monthStartDay.value.daysInMonth());

const weekDays = computed(() => [
    "sat",
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
]);
</script>

<style scoped>
/* .calendrier {
    
} */
.calendarium__container {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
}
</style>
