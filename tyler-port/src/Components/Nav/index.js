import React from "react";

function Nav(props) {
    const pages = ['About', 'Projects', 'Contact', 'Resume']
  return (
    <header className='port-head'>
        
    <ul className='nav-item'>
        {pages.map(pages => (
            <li className='nav-item-list' key={pages}>
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
    </header>
  );
}

export default Nav;
