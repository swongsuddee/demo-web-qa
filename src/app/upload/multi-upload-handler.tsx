'use client'

import React, { useState } from 'react';

interface ImageFile {
    file: File;
    preview: string;
}

const MultipleImageUploadPage: React.FC = () => {
    const [selectedImages, setSelectedImages] = useState<ImageFile[]>([]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newSelectedImages: ImageFile[] = [];
            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newSelectedImages.push({
                        file,
                        preview: reader.result as string,
                    });
                    setSelectedImages(() => [...newSelectedImages]);
                };
                reader.readAsDataURL(file);
                console.log(`Attach image: ${file}`)
            });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the form submission logic here
        console.log('Images uploaded:', selectedImages);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl mb-4">Upload and Preview Multiple Images</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    multiple
                    className="mb-4"
                />
                <div className="grid grid-cols-3 gap-4 mb-4">
                    {selectedImages.map((imageFile, index) => (
                        console.log(`Preview image index ${index} : `, imageFile),
                        <div key={index} className="mb-4">
                            <img
                                src={imageFile.preview}
                                width={30}
                                alt={`Image Preview ${index + 1}`}
                                className="w-64 h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default MultipleImageUploadPage;
