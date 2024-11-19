export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await fetch('http://localhost:5000/api/files/upload', {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error('Failed to upload file');
    }
  
    return await response.json();
  };
  