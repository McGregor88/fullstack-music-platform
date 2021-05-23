import { Container } from '@material-ui/core';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container sx={{ pt: 12 }}>
                { children }
            </Container>
        </>
    );
};

export default MainLayout;