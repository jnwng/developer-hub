---
title: Fetching Assets
metaTitle: Core - Fetching Assets
description: Learn how to fetch the various on-chain accounts of your assets on Core
---

## Fetch a single asset

{% dialect-switcher title="Fetch a single asset" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { fetchAsset } from '@metaplex-foundation/mpl-core'

const asset = await fetchAsset(umi, assetAddress.publicKey)
```

{% /dialect %}
{% /dialect-switcher %}

## GPA fetch assets by owner

      {% dialect-switcher title="GPA fetch assets by owner" %}

{% dialect title="JavaScript" id="js" %}

```ts
import { getAssetGpaBuilder } from '@metaplex-foundation/mpl-core'

const assetsByOwner = await getAssetGpaBuilder(umi)
  .whereField('owner', owner.publicKey)
  .getDeserialized()
```

{% /dialect %}
{% /dialect-switcher %}

## GPA fetch assets by collection

         {% dialect-switcher title="GPA fetch assets by collection" %}

{% dialect title="JavaScript" id="js" %}

```ts
import { getAssetGpaBuilder } from '@metaplex-foundation/mpl-core'

const assetsByCollection = await getAssetGpaBuilder(umi)
  .whereField(
    'updateAuthority',
    updateAuthority('Collection', [collectionAddress.publicKey])
  )
  .getDeserialized()
```

{% /dialect %}
{% /dialect-switcher %}

## DAS

Coming Soon!