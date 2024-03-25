---
title: Transferring Assets
metaTitle: Core - Transferring Assets
description: Learn how to transfer Assets on Core
---

The owner of an Asset can transfer ownership to another account by using the `transfer` instruction to the MPL Core program.

{% totem %}
{% totem-accordion title="Technical Instruction Details" %}
**Instruction Accounts List**

| Account       | Description                                     |
| ------------- | ----------------------------------------------- |
| asset         | The address of the MPL Core Asset.              |
| collection    | The collection to which the Core Asset belongs. |
| authority     | The owner or delegate of the asset.             |
| payer         | The account paying for the storage fees.        |
| newOwner      | The new owner to which to transfer the asset.   |
| systemProgram | The System Program account.                     |
| logWrapper    | The SPL Noop Program.                           |

Some of the accounts may be abstracted out and/or optional in our sdks for ease of use.
A full detailed look at the on chain instruction it can be viewed on [Github](https://github.com/metaplex-foundation/mpl-core/blob/5a45f7b891f2ca58ad1fc18e0ebdd0556ad59a4b/programs/mpl-core/src/instruction.rs#L139).
{% /totem-accordion %}
{% /totem %}

## Transfering an Asset

{% dialect-switcher title="Transfer an Asset" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { publicKey } from '@metaplex-foundation/umi'
import { transferV1 } from '@metaplex-foundation/mpl-core'

const asset = publicKey('11111111111111111111111111111111')

await transferV1(umi, {
  asset: asset,
  newOwner: newOwner.publicKey,
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}

## Transfering an Asset in a Collection

If you are transfering an Asset which has a collection you will need to pass the collection address in.
[How to tell if an asset is in a Collection?]()

{% dialect-switcher title="Transfer an Asset that is part of a Collection" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { publicKey } from '@metaplex-foundation/umi'
import { transferV1 } from '@metaplex-foundation/mpl-core'

const asset = publicKey('11111111111111111111111111111111')

await transferV1(umi, {
  asset: asset.publicKey,
  newOwner: newOwner.publicKey,
  collection: colleciton.publicKey,
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}

## What if I am the Transfer Delegate of an Asset?

If you are the Transfer Delegate of an Asset via the [Transfer Delegate](/core/plugins/transfer-delegate) plugin then you can call the `transferV1` function as you would if you were the owner of the Asset.
