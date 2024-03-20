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
A full detailed look at the on chain instruction it can be viewed on [Github](https://github.com/metaplex-foundation/mpl-core/blob/main/programs/mpl-core/src/processor/transfer.rs).
{% /totem-accordion %}
{% /totem %}

## Transfering an Asset

Here is how you can use our SDKs to transfer an asset on MPL Core.

{% dialect-switcher title="Transfer Assets" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { transferV1 } from '@metaplex-foundation/mpl-core'

await transferV1(umi, {
  asset: asset.publicKey,
  newOwner: newOwner.publicKey,
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}

## Transfering an Asset in a Collection

If you are transfering an Asset which has a collection you will need to pass the collection address in.
[How to tell if an asset is in a Collection?]()

{% dialect-switcher title="Transfer Assets" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { transferV1 } from '@metaplex-foundation/mpl-core'

await transferV1(umi, {
  asset: asset.publicKey,
  newOwner: newOwner.publicKey,
  collection: colleciton.publicKey,
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}

## Transfering a Delegated Asset

Transfering an asset via a delegate requires you to pass in the `authority` publicKey/signer.

{% dialect-switcher title="Transfer Assets" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { transferV1 } from '@metaplex-foundation/mpl-core'

await transferV1(umi, {
  asset: asset.publicKey,
  newOwner: newOwner.publicKey,
  authority: authority.publicKey, // Delegate
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}