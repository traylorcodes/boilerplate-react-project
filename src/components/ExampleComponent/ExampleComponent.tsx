import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './ExampleComponent.module.css';
import Map from '../Map/Map';


interface ExampleComponentProps {
    exampleProp?: any
}

const ExampleComponent: FC<ExampleComponentProps> = (props: ExampleComponentProps) => {

    const [useStateExample, setUseStateExample] = useState<boolean>(true);
    const useRefExample = useRef<string>('This is a useRef example');

    useEffect(() => {
        console.log('Hello World!');
    }, [useStateExample])

    return (
        <Map></Map>
    );
}

export default ExampleComponent;