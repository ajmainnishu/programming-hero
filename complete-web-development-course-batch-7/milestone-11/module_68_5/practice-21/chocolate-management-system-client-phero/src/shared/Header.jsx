import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Box textAlign={'center'} marginTop={8} marginBottom={9}>
            <Typography variant="h4" sx={{ background: 'radial-gradient(#DC8D48 0%, #D38745 4%, #91572B 37%, #5E3116 66%, #3F1A0A 88%, #331105 100%)' }} fontWeight={600} borderRadius={2} paddingY={2} paddingX={8} color={'white'} display={'inline-block'}>
                Chocolate Management System
            </Typography>
        </Box>
    );
};

export default Header;