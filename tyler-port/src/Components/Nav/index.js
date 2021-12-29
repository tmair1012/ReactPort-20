import React from "react";

function Nav(props) {
    const pages = ['Home', 'About', 'Projects', 'ContactMe']
  return (
    <ul className='nav-item'>
        {pages.map(pages => (
            <li className='nav-item' key={pages}>
                <a
                href={'#' + pages.toLowerCase()}
                onClick={() => props.pageChanger(pages)}
                className={
                    props.currentPage === pages ? 'nav-link active' : 'nav-link'
                }
                >
                    {pages}
                </a>
            </li>
        ))}
    </ul>
  );
}

export default Nav;
