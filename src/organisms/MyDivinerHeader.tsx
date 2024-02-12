import { Logo } from "../atoms/Logo.tsx";
import {
  Action,
  ActionStyleTypes,
  classSet,
  Header,
  HeaderProps,
} from "../src.deps.ts";

export function MyDivinerHeader(props: HeaderProps) {
  return (
    <Header
      logo={
        <Action
          href="/"
          actionStyle={ActionStyleTypes.Link | ActionStyleTypes.Rounded}
        >
          <Logo />
        </Action>
      }
      {...props}
    />
  );
}
