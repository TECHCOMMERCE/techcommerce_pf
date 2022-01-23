import React, { useEffect, useState } from "react";

import s from "../../assets/styles/admin/Users.module.css";

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {

    }, [users]);

    return(
        <div className={s.container}>
            
        </div>
    )
}

export default Users;