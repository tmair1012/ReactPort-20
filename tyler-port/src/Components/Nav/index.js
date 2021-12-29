import React from "react";

function Nav(props) {
    const pages = ['Home', 'About', 'Projects', 'Contact']
  return (
    <header className='port-head'>
        <h2>Tyler Mair</h2>
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
