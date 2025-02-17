import DogGallery from "./components/DogGallery.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Dog} from "./interfaces/Dog.ts";


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Dog[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
                const rawData = await fetch("https://dog.ceo/api/breeds/image/random/10");
                const {message} : {message: string[]} = await rawData.json();
 
                // need to convert into structured data so it matches my Dog TypeScript interface
                const dogArray: Dog[] = message.map((url, index) => ({
                    id: index + 1, // start index at 1 instead of 0
                    image: url,
                    breed: url // getting the breed from URL since we need 3 fields
                        .split("/")[4]
                        .split("-")
                        .reverse()
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
                        .join(" ")
                }));
                setData(dogArray);
            }
            fetchData()
                .then(() => console.log("Data fetched successfully"))
                .catch((e: Error) => console.log("There was the error: " + e));

    }, [data.length]);

    return(
        <ParentDiv>
            <DogGallery data={data}/>
        </ParentDiv>
    )
}