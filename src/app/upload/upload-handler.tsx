'use client'

import React, { useState } from 'react';

const ImageUploadPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the form submission logic here
        console.log('Image uploaded:', selectedImage);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <h1 className="text-2xl mb-4">Upload and Preview Single Image</h1>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-4"
                />
                {preview && (
                    <div className="mb-4">
                        <img src={preview} alt="Image Preview" className="w-64 h-64 object-cover" />
                    </div>
                )}
            </form>
        </div>
    );
};

export default ImageUploadPage;
