import React from 'react';
import {Box, Grid} from "@mui/material";
export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                <object data="https://drive.google.com/file/d/181jYwKJCpskRkJpArtMnJojWKux3KnY-/preview" type="application/pdf" width="100%" height="950">
                    <p>Alternative text - include a link <a href="https://drive.google.com/file/d/181jYwKJCpskRkJpArtMnJojWKux3KnY-/preview">to the PDF!</a></p>
                </object>
            </Grid>
        </Box>
    );
};