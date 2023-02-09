# Examples

## All available interfaces 
```vue
<template>
    <calendrier :calendar="'gregory'" :date="new Date()" :week-start="'saturday'">
        <template #calendar="{date}">
            {{ date }}
        </template>
        <template #day="{date}">
            {{ date.getDate() }}
        </template>
    </calendrier>
</template>
```