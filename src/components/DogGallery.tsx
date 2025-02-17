import styled from "styled-components";
import { Dog } from "../interfaces/Dog.ts";


const Card = styled.div`
    border: 0.5% solid #333; 
    padding: 3%; 
    margin: 1%; 
    border-radius: 5%;
    text-align: center;
    background-color: lightpink;
    width: 20%; 
    min-width: 15%; 
`;

const DogImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5%;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2%;
    width: 90%; 
    padding: 2%;
    margin: 0 auto; 
    background-color: lightblue;
    border-radius: 2%; 
`;

const Title = styled.h1`
    text-align: center;
    width: 100%;
    margin-bottom: 2%;
`;

export default function DogGallery(props: { data: Dog[] }) {
    return (
        <>
            <Title>Random Dog Images</Title>  
            <Container>
                {props.data.map((dog) => (
                    <Card key={dog.id}>
                        <h2>Awesome Dog #{dog.id}</h2>
                        <DogImage src={dog.image} alt={dog.breed} />
                        <h3>Awesome Breed: <br/>{dog.breed}</h3>
                    </Card>
                ))}
            </Container>
        </>
    );
}
