// export * from "../../../fathym-deno/atomic/mod.ts";
// import FATC from "../../../fathym-deno/atomic/tailwind.components.ts";
// export * from "../../../fathym-deno/atomic-chat/mod.ts";
// export * from "../../../fathym-deno/atomic-social/mod.ts";

export * from "https://deno.land/x/fathym_common@v0.0.137/mod.ts";

export * from "https://deno.land/x/fathym_atomic@v0.0.130/mod.ts";
export * from "https://deno.land/x/fathym_atomic_chat@v0.0.29/mod.ts";

import FATC from "https://deno.land/x/fathym_atomic@v0.0.130/tailwind.components.ts";
export const FathymAtomicTailwindComponents = FATC;

import FACTC from "https://deno.land/x/fathym_atomic_chat@v0.0.29/tailwind.components.ts";
export const FathymAtomicChatTailwindComponents = FACTC;
