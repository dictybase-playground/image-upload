import { useLogto } from "@logto/react";
import { IconButton, SvgIcon, Typography } from "@material-ui/core";

type LoginButtonProperties = { redirectUri: string };

/**
 * Renders a login button component.
 */
const LoginButton = ({ redirectUri }: LoginButtonProperties) => {
  const { signIn } = useLogto();
  return (
    <IconButton onClick={() => signIn(redirectUri)}>
      <Typography variant="subtitle2">Login</Typography>
      <SvgIcon>
        <path d="M14 12L10 8V11H2V13H10V16M22 12A10 10 0 0 1 2.46 15H4.59A8 8 0 1 0 4.59 9H2.46A10 10 0 0 1 22 12Z" />
      </SvgIcon>
    </IconButton>
  );
};

export { LoginButton };
