---
title: 'Cards'
lang: 'en'
---

The `card` is a versatile component that provides a simple interface for headings, text, images, icons, and more.

## Basic Card

::component-resolver{component-name="BaseCard" component-type="containments" class="mb-4"}
:::component-resolver{component-name="BaseCardHeader" component-type="containments"}
Heading
:::

:::component-resolver{component-name="BaseCardContent" component-type="containments"}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque
cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
:::

:::component-resolver{component-name="BaseCardFooter" component-type="containments"}
::::component-resolver{component-name="BaseButton" component-type="containments" variant="ghost" size="sm"}
Cancel
::::
::::component-resolver{component-name="BaseButton" component-type="containments" variant="primary" size="sm"}
Learn more
::::
:::
::

::component-resolver{component-name="BaseCard" component-type="containments" class="mb-4"}
:::component-resolver{component-name="BaseCardContent" component-type="containments"}

[Basic Card]{.flex.mb-3.font-bold.leading-normal}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque
cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
:::
::

## Link Card

::component-resolver{component-name="BaseCard" component-type="containments" class="mb-4" href="#link-card"}
:::component-resolver{component-name="BaseCardContent" component-type="containments"}
[Link Card]{.flex.mb-3.font-bold.leading-normal}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque
cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
:::
::

## Custom Card

::component-resolver{component-name="BaseCard" component-type="containments" class="mb-4 bg-neutral-50"}
:::component-resolver{component-name="BaseCardHeader" component-type="containments" class="border-b dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white"}
Welcome to Librarium
:::

:::component-resolver{component-name="BaseCardContent" component-type="containments"}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque
cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
:::

:::component-resolver{component-name="BaseCardFooter" component-type="containments" class="border-t dark:border-gray-700"}
::::component-resolver{component-name="BaseButton" component-type="containments" variant="ghost" size="sm"}
Cancel
::::
::::component-resolver{component-name="BaseButton" component-type="containments" variant="primary" size="sm"}
Learn more
::::
:::
::

::component-resolver{component-name="BaseCard" component-type="containments" class="mb-4"}
:::component-resolver{component-name="BaseCardImage" component-type="containments" src="/img/placeholders/image-3@2x.jpg"}
:::

:::component-resolver{component-name="BaseCardContent" component-type="containments"}
[Image Card]{.flex.mb-3.font-bold.leading-normal}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque
cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
:::

:::component-resolver{component-name="BaseCardFooter" component-type="containments"}
::::component-resolver{component-name="BaseButton" component-type="containments" variant="ghost" size="sm"}
Cancel
::::
::::component-resolver{component-name="BaseButton" component-type="containments" variant="primary" size="sm"}
Learn more
::::
:::
::
