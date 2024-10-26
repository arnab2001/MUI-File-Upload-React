import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, Typography, Container } from '@mui/material';
import { CloudUploadRounded, CheckCircleOutlineOutlined, ErrorOutlineOutlined } from '@mui/icons-material';
import axios from 'axios';

export default function UploadForm() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileUpload = async (event) => {
    event.preventDefault();
    setUploadProgress(0); // Reset progress
    setUploadComplete(false); // Reset completion status
    setUploadError(null); // Reset error status

    const formData = new FormData();
    const file = event.target.elements.fileInput.files[0];
    formData.append('file', file);

    try {
      await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });
      setUploadComplete(true); // Set completion status
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadError('Failed to upload file. Please try again.'); // Set error message
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Upload Image
        </Typography>
        <form style={{ width: '100%' }} onSubmit={handleFileUpload}>
          <TextField
            type="file"
            variant="outlined"
            inputProps={{ accept: 'image/*', id: 'fileInput' }}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            size="large"
            startIcon={<CloudUploadRounded />}
            sx={{ mt: 3, mb: 2 }}
          >
            Upload
          </Button>
          {uploadProgress > 0 && uploadProgress < 100 && (
            <Typography variant="body2" color="textSecondary">
              Upload Progress: {uploadProgress}%
            </Typography>
          )}
          {uploadComplete && (
            <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
              Upload Complete <CheckCircleOutlineOutlined sx={{ ml: 1 }} />
            </Typography>
          )}
          {uploadError && (
            <Typography variant="body2" color="error" sx={{ display: 'flex', alignItems: 'center' }}>
              {uploadError} <ErrorOutlineOutlined sx={{ ml: 1 }} />
            </Typography>
          )}
        </form>
      </Box>
    </Container>
  );
}
