"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 3000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <ul style={container}>
            {order.map((img) => (
                <motion.li
                    key={img}
                    layout
                    transition={spring}
                    style={{ ...item, border: "2px solid #ff6347", display: "flex", alignItems: "center", justifyContent: "center" }}

                >
                    <img src={img}
                        className="w-45 p-8 "
                    />
                </motion.li>
            ))}
        </ul>
    )
}

const initialOrder = [
    "https://pngimg.com/uploads/php/php_PNG43.png",
    "https://pngimg.com/uploads/mysql/mysql_PNG22.png",
    "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png",
    "https://logospng.org/download/java/logo-java-2048.png",
    "https://logospng.org/download/laravel/logo-laravel-icon-1024.png",
    "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png",
    "https://cdn.iconscout.com/icon/free/png-256/postgresql-9-1175120.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",

]

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
    return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const item: React.CSSProperties = {
    width: 250,
    height: 250,
    borderRadius: "10px"
}