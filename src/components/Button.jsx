import React from 'react';
import Button from '@mui/material/Button';
import { CloudUploadOutlined } from '@mui/icons-material';

export default function UploadButton() {
  return (
    <Button
  variant="contained"
  color="secondary"
  startIcon={<CloudUploadOutlined />}
  sx={{ margin: 2, padding: '10px 20px' }}
>
  Upload
</Button>
  );
}
