import React from "react";
import Link from "next/link";

const Navlink = ({ linkTo, children }) => {
    return (
        <Link href={linkTo} passHref>
            {children}
        </Link>
    );
};

export default Navlink;
