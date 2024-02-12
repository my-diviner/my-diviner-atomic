import { JSX } from "preact";
import { classSet } from "../src.deps.ts";

export type LogoProps = JSX.HTMLAttributes<HTMLImageElement>;

export function Logo(props: LogoProps): JSX.Element {
  return (
    <img
      src="/my-diviner-icon-alpha.png"
      alt="My Diviner"
      {...props}
    /> // class={classSet(props, "my-6")}
  );
}
