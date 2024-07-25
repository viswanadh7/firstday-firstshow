import React, { createContext, useContext, useState } from 'react'

const ImageContext = createContext()

function ImageProvider({ children }) {
    const [images, setImages] = useState()
    // console.log(images)
    return (
        <ImageContext.Provider value={{ images, setImages }}>{children}</ImageContext.Provider>
    )
}
export const useImages = () => { return useContext(ImageContext) }
export default ImageProvider
