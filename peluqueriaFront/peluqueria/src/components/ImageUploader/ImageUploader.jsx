import  { useState } from 'react';
import axios from "../axios/Axios";


const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('/upload', formData);
      console.log('Image uploaded successfully:', response.data.filename);
      // Puedes actualizar el estado o realizar otras operaciones aquí
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>

      {selectedImage && (
        <div>
          <h2>Preview:</h2>
          <img src={`http://localhost:3001/uploads/${selectedImage.name}`} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;