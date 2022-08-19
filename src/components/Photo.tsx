import React, {useEffect, useState} from 'react';
import {apiRoutes} from "../consts";

const Photo = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const loader = async (): Promise<void> => {
        const response = await Promise.all(new Array(2).fill(apiRoutes.randomBoolean).map(async url => {
            const res = await fetch(url)
            return res.json()
        }))
        const isReady = response[0] % 2 === 0 && response[1] % 2 === 0
        isReady ? setIsLoading(false) : await loader();
    }

    useEffect(() => {
        isLoading && loader()
    }, [isLoading])

    return (
        <div className={"photo"}>
            {isLoading ? <div>wait for the image</div> : <img src={"./image.jpg"} alt={""}/>}
        </div>
    );
};

export default Photo;
