# Styling

Using [BEM CSS methodology](https://getbem.com/introduction/), you can easily apply your own CSS to all of the calendar component sub parts.

If you're using SASS or SCSS use the following code snippet to customize the calendar.

```scss
.Calendrier {
    &__calendar {

    }
    &__days {
        &__day {
            &--weekend {

            }
            &--today {

            }
        }
    }
}
```
