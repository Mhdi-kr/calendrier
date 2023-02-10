<template>
  <section class="calendrier">
    <slot
      name="calendar"
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
        <slot name="week-day" :title="dayName" />
      </div>
      <div v-for="offset in prevMonthOffset" />
      <time v-for="date in currentMonth" :date="date.formatted">
        <slot
          name="day"
          :date="date.object"
          :is-weekend="date.isWeekend"
          :is-today="date.isToday"
        ></slot>
      </time>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, watch, withDefaults, defineProps, onMounted } from 'vue'
import { CustomDate } from '@/lib/CustomDate'

onMounted(() => {
  const container = document
    .getElementsByClassName('calendrier__container')
    .item(0)! as HTMLElement
  container.style.display = 'grid'
  container.style.gap = '.5rem'
  container.style.gridTemplateColumns = 'repeat(7, 1fr)'
})

type Calendar = 'jalali' | 'gregory'

type CalendrierProps = {
  calendar: Calendar
  weekStart: 'sunday' | 'saturday'
}

type CalendrierEmits = {
  (event: 'update', date: Date): void
}

const props = withDefaults(defineProps<CalendrierProps>(), {
  calendar: 'gregory',
  weekStart: 'sunday',
})

const emits = defineEmits<CalendrierEmits>()

const monthStartDay = ref(new CustomDate().startOf('month'))

const computedState = computed(() => ({
  year: monthStartDay.value.date.getFullYear(),
  month: monthStartDay.value.date.getMonth(),
  day: monthStartDay.value.date.getDay(),
  date: monthStartDay.value.date as Date,
  prevMonth: '',
  nextMonth: '',
}))

const handlePrevMonth = () => {
  monthStartDay.value.add({ months: -1 })
}

const handleNextMonth = () => {
  monthStartDay.value.add({ months: +1 })
}

const isWeekend = (date: Date, weekend: 'saturday' | 'sunday'): boolean => {
  const weekendIndex =
    weekend === 'saturday' ? 6 : weekend === 'sunday' ? 0 : -1
  return date.getDay() === weekendIndex
}

const isToday = (date: Date): boolean => {
  const today = new Date()

  return false
}

watch(
  () => monthStartDay,
  (updatedDate) => emits('update', updatedDate.value.date),
  {
    immediate: true,
  }
)

const prevMonthOffset = computed(() => 5)

const daysInCurrentMonth = computed(() => monthStartDay.value.daysInMonth())

const currentMonth = computed(() =>
  new Array(monthStartDay.value.daysInMonth())
    .fill(0)
    .map((_, index) => index + 1)
    .map((day) => monthStartDay.value.clone().add({ days: day }))
    .map((customDate) => ({
      object: customDate.date,
      formatted: customDate.format('YYYY-MM-DD'),
      isWeekend: isWeekend(customDate.date, props.weekStart),
      isToday: isToday(customDate.date),
    }))
)

const weekDays = computed(() =>
  props.weekStart === 'saturday'
    ? ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri']
    : props.weekStart === 'sunday'
    ? ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    : ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri']
)
</script>
