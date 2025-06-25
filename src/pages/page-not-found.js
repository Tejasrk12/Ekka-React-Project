import React, { useEffect } from 'react'


function usePageTitle(title){
    useEffect(()=>{
        document.title = title;
    },[title])
}
function PageNotFound(){
    usePageTitle("Page Not Found - Ekka");
    return(
        <>
            <h1>Page Not Found</h1>
        </>
    );
}

export default PageNotFound;