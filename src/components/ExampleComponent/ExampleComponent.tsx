import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './ExampleComponent.module.css';


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
        <div className={styles.container}>
            <span className={styles.text}>lets do this thing</span>
            <img className={styles.cat} src="https://media2.giphy.com/media/JVglf7QjxaZZM2tjfB/200w.gif?cid=82a1493b2az0mh1823afx77q9ocg0rhs0jd5squ1e5k2dvi7&ep=v1_gifs_related&rid=200w.gif&ct=s"></img>
        </div>
    );
}

export default ExampleComponent;