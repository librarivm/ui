---
title: 'Bottom Sheets'
lang: 'en'
---

# Bottom Sheets

The bottom sheet is a dialog component that slides from the bottom of the screen.

### Default

::component-resolver{component-name="BlockPanel" component-type="containments"}
::component-resolver{component-name="BottomSheet" component-type="containments"}
:::component-resolver{component-name="BaseCard" component-type="containments" class="p-8"}
Content in the Bottom Sheets are capable of being displayed as HTML, and can be **bold**, or _italic_, or even
[colored]{.text-primary}!

### More Content

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto aspernatur autem beatae
consequuntur eaque eveniet explicabo hic, iste laborum mollitia non nostrum quasi qui quis repellendus vel veniam?
:::

#activator
:::component-resolver{component-name="BaseButton" component-type="containments"}
Show Bottom Sheet
:::
::
::

```html

<BottomSheet>
  <template v-slot:activator>
    <BaseButton>Show Bottom Sheet</BaseButton>
  </template>
  <BaseCard>
    <BaseCardContent>
      Content in the Bottom Sheets are capable of being displayed as HTML, and can be **bold**, or _italic_, or even
      [colored]{.text-primary}!
    </BaseCardContent>
  </BaseCard>
</BottomSheet>
```

### Inset

::component-resolver{component-name="BlockPanel" component-type="containments"}
::component-resolver{component-name="BottomSheet" component-type="containments" inset .mx-auto.text-center}
:::component-resolver{component-name="BaseCard" component-type="containments" class="p-8"}
Content in the Bottom Sheets are capable of being displayed as HTML, and can be **bold**, or _italic_, or even
[colored]{.text-primary}!

### More Content

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto aspernatur autem beatae
consequuntur eaque eveniet explicabo hic, iste laborum mollitia non nostrum quasi qui quis repellendus vel veniam?
:::

#activator
:::component-resolver{component-name="BaseButton" component-type="containments"}
Show Bottom Sheet
:::
::
::

### Music Player

::component-resolver{component-name="BlockPanel" component-type="containments"}
::component-resolver{component-name="BottomSheet" component-type="containments" inset .mx-auto.text-center}
:::component-resolver{component-name="BaseCard" component-type="containments" class="p-8"}
player
:::

#activator
:::component-resolver{component-name="BaseButton" component-type="containments" .bg-red-500.text-white}
Play
:::
::
::
