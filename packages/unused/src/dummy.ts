// Copyright 2020 @polkadot/wasm authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface Dummy {
  dummy: string;
}

export default function dummy (): void {
  console.error('unused');
}
