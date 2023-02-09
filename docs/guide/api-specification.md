# API specification

## Props

| prop      | description                                                              | default   |
| --------- | ------------------------------------------------------------------------ | --------- |
| calendar  | Type of the calendar, can either be `jalali` or `gregory`                | `gregory` |
| weekStart | What day is the start of the week, can eaither be `sunday` or `saturday` | `sunday`  |

## Slots

### `#Calendar` slot

A general slot exposing general information about internal calendar state and some functionality to change it.

### `#Day` slot

A specific slot for each day on the calendar, exposing state for that specific date.

## Events
