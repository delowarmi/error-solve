import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const {pathname} = useLocation();
    const pathnames = pathname.split("/").filter((x) => x);

    let crumbPath ="";


    return (
        <div className='breadcrumbs'>
            {pathnames.length> 0 && <Link to='/'> Home</Link>}

            {pathnames.map((name, index) => {
                crumbPath += `/${name}`;
                const isLast = index === pathnames.length -1;

                return isLast ? (
                    <span key={crumbPath}> / {name}</span>
                ) : (
                    <span key={crumbPath}> 
                    / <Link to={crumbPath}> {name}</Link>
                    </span>
                );
            })}
        </div>
    )
}

export default Breadcrumbs