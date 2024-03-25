---
title: Attribute Plugin
metaTitle: Core - Attribute Plugin
description: Learn about the MPL Core Attribute Plugin
---

The Attribute Plugin is a `Authority Managed` plugin that can store key value pairs of data within the asset.

The Attribute Plugin will work in areas such as:

- Storing on chain attributes/traits of the Asset which can be read by on chain progams.
- Storing health and other statistical data that can be modified by a game/program.

## Works With

|                     |     |
| ------------------- | --- |
| MPL Core Asset      | ✅  |
| MPL Core Collection | ✅  |

## Arguments

| Arg           | Value                               |
| ------------- | ----------------------------------- |
| attributeList | Array<{key: string, value: string}> |

## AttributeList

The attribute list constists of an Array[] then an object of key-value pairs `{key: "value"}` string value pairs.

{% dialect-switcher title="AttributeList" %}
{% dialect title="JavaScript" id="js" %}

```ts
const attributes = [
  { key: 'key0', value: 'value0' },
  { key: 'key1', value: 'value1' },
]
```

{% /dialect %}
{% /dialect-switcher %}

## Adding the Attributes Plugin to an Asset

{% dialect-switcher title="Adding a Attribute Plugin to an MPL Core Asset" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { publicKey } from '@metaplex-foundation/umi'
import { addPluginV1, createPlugin } from '@metaplex-foundation/mpl-core'

const asset = publicKey('11111111111111111111111111111111')

await addPluginV1(umi, {
  asset: asset.publicKey,
  plugin: createPlugin({
    type: 'Attributes',
    data: {
      attributeList: [
        { key: 'key0', value: 'value0' },
        { key: 'key1', value: 'value1' },
      ],
    },
  }),
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}

## Updating the Attributes Plugin on an Asset

{% dialect-switcher title="Updating the Attributes Plugin on an Asset" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { publicKey } from '@metaplex-foundation/umi'
import { updatePluginV1, createPlugin } from '@metaplex-foundation/mpl-core'

const asset = publicKey('11111111111111111111111111111111')

await updatePluginV1(umi, {
  asset: asset,
  plugin: createPlugin({
    type: 'Attributes',
    data: {
      attributeList: [
        { key: 'key0', value: 'value0' },
        { key: 'key1', value: 'value1' },
      ],
    },
  }),
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}
