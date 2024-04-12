import { Grid } from "@material-ui/core";
import { LoginButton } from "./LoginButton";
import { ImageUpload } from "./ImageUpload";
import { useLogto } from "@logto/react";

const Home = () => {
  const { isAuthenticated } = useLogto();
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        {isAuthenticated ? (
          <>Logged in.</>
        ) : (
          <LoginButton redirectUri="http://localhost:3004/callback" />
        )}
      </Grid>
      <Grid item>
        <ImageUpload />
      </Grid>
    </Grid>
  );
};

export { Home };
