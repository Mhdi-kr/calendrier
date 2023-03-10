# Quick Start

1. Make sure you have node and npm installed

2. Install the package in your project directory

```bash
# npm
npm install calendrier

# yarn
yarn add calendrier

# pnpm
pnpm add calendrier
```

3. Global registry

Make the component globally accessible

```typescript
import Calendrier from 'Calendrier'
...
app.component('Calendrier', Calendrier)
```

4. Dynamic loading (recommended)

Import the component where you need it

```vue
<template>
  <calendrier />
</template>

<!-- Options API -->
<script>
import Calendrier from 'Calendrier'
export default {
  components: {
    Calendrier,
  },
}
</script>

<!-- Or Composition API -->
<script lang="ts">
import { defineComponent } from 'vue'
import Calendrier from 'Calendrier'
export default defineComponent() {
    components: {
        Calendrier
    }
}
</script>

<!-- Or Composition API, setup variation -->
<script lang="ts" setup>
import Calendrier from 'Calendrier'
</script>
```
