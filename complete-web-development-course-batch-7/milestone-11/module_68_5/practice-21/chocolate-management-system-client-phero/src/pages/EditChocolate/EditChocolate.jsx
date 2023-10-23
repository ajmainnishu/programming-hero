import { useLoaderData } from "react-router-dom";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import useTitle from "../../hooks/useTitle";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditChocolate = () => {
    // website dynamic title
    useTitle('Edit');
    // single chocolate data fetch
    const chocolate = useLoaderData();
    const { _id, name, country, photo, category, available } = chocolate;
    // single chocolate data update
    const handleEditChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const available = form.available.value;
        const info = { name, country, category, photo, available };
        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // modal
                    Swal.fire(
                        'Updated',
                        'Data Updated Successfully',
                        'success'
                    )
                }

            })
    }
    return (
        <Container>
            <Link to={`/`}><Button sx={{ marginBottom: '32px' }} variant="outlined"><ArrowBackIcon /> &nbsp; All Chocolates</Button></Link>
            <hr />
            <Box marginTop={4} marginBottom={8} paddingX={14} paddingY={6} bgcolor={"rgba(20, 20, 20, 0.05)"} borderRadius={2}>
                <Typography variant="h6" textAlign={"center"} fontWeight={600}>
                    Edit Chocolate
                </Typography>
                <Typography variant="subtitle1" textAlign={"center"} marginBottom={5}>
                    Use the below form to Edit a new product
                </Typography>
                <form onSubmit={handleEditChocolate}>
                    {/* name field */}
                    <Box marginBottom={4} bgcolor={"white"}>
                        <TextField
                            id=""
                            label="Name"
                            defaultValue={name}
                            type="text"
                            name="name"
                            fullWidth
                        />
                    </Box>
                    {/* country field */}
                    <Box marginBottom={4} bgcolor={"white"}>
                        <TextField
                            id=""
                            label="Country"
                            type="text"
                            name="country"
                            defaultValue={country}
                            fullWidth
                        />
                    </Box>
                    {/* photo url field */}
                    <Box marginBottom={4} bgcolor={"white"}>
                        <TextField
                            id=""
                            label="Photo URL"
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            fullWidth
                        />
                    </Box>
                    {/* category field */}
                    <Box marginBottom={4} bgcolor={"white"}>
                        <FormControl fullWidth>
                            <InputLabel id="">Category</InputLabel>
                            <Select
                                labelId=""
                                id=""
                                name="category"
                                defaultValue={category}
                                label="Category"
                            >
                                <MenuItem value='Premium'>Premium</MenuItem>
                                <MenuItem value='Average'>Average</MenuItem>
                                <MenuItem value='Below'>Below</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {/* available field */}
                    <Box marginBottom={4}>
                        <FormControl>
                            <FormLabel id="">Available</FormLabel>
                            <RadioGroup
                                row aria-labelledby=""
                                name="available" defaultValue={available}>
                                <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
                                <FormControlLabel value={'No'} control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    {/* button */}
                    <Box bgcolor={"#91572B"} borderRadius={2} color={"white"}>
                        <Button type="submit" variant="" sx={{ paddingY: '17px' }} fullWidth>Update</Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default EditChocolate;