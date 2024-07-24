# vue-beercss-navigation
##### A Vue.js component that provides a customizable navigation rail or drawer, with support to configure entries with icons and labels, with a focus on responsiveness and following Material Design 3 guidelines, implemented with BeerCSS.
### Installation

```bash
npm install vue-beercss-navigation
```
Include BeerCSS in your application:
Add the following lines to your main.js or app.js file to include BeerCSS and Material Dynamic Colors:

```javascript
import 'beercss'
import 'material-dynamic-colors'
```
### Usage
Here's how to use the VueBeercssNavigation component in your Vue.js application:
```html
<template>
  <div>
    <VueBeercssNavigation :modelValue="navigationEntries" @close="handleClose" @activeteEntry="handleActiveEntry">
      <template v-slot:top>
        <!-- Custom content for the top slot -->
      </template>
      <template v-slot:bottom>
        <!-- Custom content for the bottom slot -->
      </template>
    </VueBeercssNavigation>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationEntries: [
        { name: 'home', label: 'Home', icon: 'home', path: '/' },
        {
          name: 'settings',
          label: 'Settings',
          icon: 'settings',
          entrys: [
            { name: 'profile', label: 'Profile', icon: 'person', path: '/profile' },
            { name: 'account', label: 'Account', icon: 'account_circle', path: '/account' }
          ]
        }
      ]
    };
  },
  methods: {
    handleClose() {
      console.log('Navigation closed');
    },
    handleActiveEntry(entry) {
      console.log('Active entry:', entry);
    }
  }
};
</script>
```
### Props
| Prop | Type | Default | Description |
|-----------------|-----------------|-----------------|-----------------|
| modelValue     | Array     | []     | The array of navigation entries.

#### Object entry
| Prop         | Type   | Description|
|--------------|--------|------------------------------------------|
| path         | String | The route path for the navigation entry. |
| icon         | String | The icon for the navigation entry.       |
| label        | String | The label for the navigation entry.      |
| name         | String | The unique name for the navigation entry.|
| entrys       | Array  | An array of child navigation entries.    |

### Events
The component emits the following events:
| Event         | Description                            |
|---------------|----------------------------------------|
| @close         | Emitted when the navigation is closed.|
| @activeteEntry | Emitted when an entry is activated. The event payload contains the activated entry object.|


### Slots
| Slot  | Description                                                          |
|-------|----------------------------------------------------------------------|
| top   | Slot for custom content to be placed at the top of the navigation.   |
| bottom| Slot for custom content to be placed at the bottom of the navigation.|


### License
This project is licensed under the MIT License.



