# Introduction

Calendrier _(french for calendar)_ is a calendar component that you can install and use in your vue 3 projects.

> TLDR; Calendrier helps you build your own calendar using the UI Library you already have in your project, exposing all functionalities you expect from a calendar.

## The philosophy behind the project

Searching for Calendar components for frontend development, you quickly find out there are some problems in installing those packages:

### Problems with existing calendar solutions

1. They are either part of a large UI library different from which you're already using
2. They bring their own CSS and styling into your application
3. They also bring large NPM dependencies for date manipulation and etc such as `moment.js` or `day.js`
4. Support for other kinds of calendars such as `jalali` calendars is virtually absent


When I was faced with this issue I decided to solve it and make it open-source.

### How Calendrier solves these issues

Calendrier is a small library containing the main calendar component only. 

It does not have any sort of opinionated styling (hence no css file inclusion necessary) and a few lines of styling it has is implemented through javascript and is highly customizable through props it exposes.

It does not include any date manipulation dependency, every thing is achieved using native JavaScript `Date` and `Intl` Objects.

## How do I get up and running?

Please refer to [Quick Start](/guide/quick-start)