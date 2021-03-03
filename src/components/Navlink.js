import React from "react";
import Link from "next/link";

const Navlink = ({ linkTo, children }) => {
    return (
        <div>
            <Link href={linkTo}>
                <a>{children}</a>
            </Link>
        </div>
    );
};

export default Navlink;
