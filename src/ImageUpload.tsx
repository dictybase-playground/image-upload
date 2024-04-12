import { useUploadFileMutation } from "dicty-graphql-schema";
import { Container, InputLabel, Button } from "@material-ui/core";
import { useLogto } from "@logto/react";
import { useState } from "react";

const ImageUpload = () => {
  const [uploadMutation, result] = useUploadFileMutation();
  const [selectedFile, setSelectedFile] = useState<File>();
  const { getAccessToken } = useLogto();
  console.log(result);
  const onClick = async () => {
    const token = await getAccessToken(
      import.meta.env.VITE_APP_LOGTO_API_SECOND_RESOURCE,
    );
    uploadMutation({
      variables: { file: selectedFile },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  };

  return (
    <Container>
      <InputLabel htmlFor="image-upload">Choose an image to upload</InputLabel>
      <input
        type="file"
        id="image-upload"
        onChange={({ target: { validity, files } }) => {
          if (validity.valid && files && files[0]) setSelectedFile(files[0]);
        }}
      />
      <Button type="button" onClick={onClick}>
        Submit
      </Button>
    </Container>
  );
};

export { ImageUpload };
