import { Link, useLoaderData } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Swal from 'sweetalert2';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        color: "rgba(20.19, 20.10, 20.10, 0.60)",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
        // color: theme.palette.action.rgba(20.19, 20.10, 20.10, 0.60)

    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const Home = () => {
    // fetch all chocolates data
    const loadingChocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadingChocolates);
    // delete single chocolate data from mongodb server
    const handleDelete = _id => {
        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted',
                        'Data Deleted Successfully',
                        'success'
                    )
                    // show all chocolated data without user deleted
                    const remaining = chocolates.filter(choco => choco._id !== _id);
                    setChocolates(remaining);
                }
            })
    }
    return (
        <Container>
            <Link to={`/new-chocolate`}><Button variant="outlined"><AddIcon /> &nbsp; New Chocolate</Button></Link>
            <Box marginTop={4} marginBottom={8}>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Image</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Country</StyledTableCell>
                                <StyledTableCell align="center">Category</StyledTableCell>
                                <StyledTableCell align="center">Available</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* chocolates mapping */}
                            {chocolates.map((chocolate) => (
                                <StyledTableRow key={chocolate._id}>
                                    <StyledTableCell align='center'>
                                        <img style={{ width: "70px", height: '70px', borderRadius: '4px' }} src={chocolate.photo} alt="chocolate image" loading="lazy" />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{chocolate.name}</StyledTableCell>
                                    <StyledTableCell align="center">{chocolate.country}</StyledTableCell>
                                    <StyledTableCell align="center">{chocolate.category}</StyledTableCell>
                                    <StyledTableCell align="center">{chocolate.available}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Link to={`/edit-chocolate/${chocolate._id}`}><Button variant='outlined' sx={{ marginRight: '10px' }}><EditOutlinedIcon /></Button></Link>
                                        <Button onClick={() => handleDelete(chocolate._id)} variant='outlined'>X</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default Home;