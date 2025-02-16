import React from 'react';
import { Box, Grid } from "@mui/material";

const imageList = Array.from({ length: 24 }, (_, i) => `/images/${i + 2}.png`);

export default function Portfolio() {
    return (
        <Box>
            <Grid container spacing={1} justifyContent="center">
                {imageList.map((src, index) => (
                    <Grid item key={index} mt={2}> {/* Tambah margin-top */}
                        <img 
                            src={src} 
                            alt={`Portfolio ${index + 2}`}
                            width="800"
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
