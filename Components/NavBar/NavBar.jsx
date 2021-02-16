import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <div style={{ display: "flex", width: '100%', background: "black", color: "white", height: "10vh" }}>
            <Link href="/">Home </Link>
            <Link href="/createProject">Create your Project</Link>
        </div>
    );
}

export default NavBar;