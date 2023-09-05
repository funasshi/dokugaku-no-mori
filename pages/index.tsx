import type { NextPage } from 'next';
import { Header, Footer } from 'Component';
import { Container } from 'react-bootstrap';

const Home: NextPage = () => {
    return (
        <Container>
            <Header />
            <Footer year={2023} />
        </Container>
    );
};

export default Home;
