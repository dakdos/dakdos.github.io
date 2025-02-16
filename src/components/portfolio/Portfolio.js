import React, { useState } from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const imageList = Array.from({ length: 24 }, (_, i) => `/images/${i + 2}.png`);

export default function Portfolio() {
    const [loadedImages, setLoadedImages] = useState(
        new Array(imageList.length).fill(false)
    );

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    return (
        <Box>
            <Grid container spacing={1} justifyContent="center">
                {imageList.map((src, index) => (
                    <Grid item key={index} mt={2}>
                        {!loadedImages[index] && (
                            <Skeleton 
                                variant="rectangular" 
                                width={800} 
                                sx={{ borderRadius: "8px" }} 
                            />
                        )}
                        <img
                            src={src}
                            alt={`Portfolio ${index + 2}`}
                            width="800"
                            style={{
                                objectFit: "cover",
                                borderRadius: "8px",
                                display: loadedImages[index] ? "block" : "none"
                            }}
                            onLoad={() => handleImageLoad(index)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
