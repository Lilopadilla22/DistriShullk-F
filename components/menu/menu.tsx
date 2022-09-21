import Link from 'next/link'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import styles from "./menu.module.css";

type Props = {
    selection?: string
}

const Menu = (props: Props) => {
    const { selection } = props
    return (
        <nav className={styles["left-navbar"]}>
            <h2> <Link href='/'>DistriShullk</Link></h2>
            <span className={`${styles["menu"]} ${selection === "provider" ? styles["selected"] : ""}`}><HowToRegIcon/> <Link href='/provider'>Proveedores</Link></span>
            <span className={`${styles["menu"]} ${selection === "clients" ? styles["selected"] : ""}`}> <AccessibilityNewIcon/> <Link href='/clientes'>Clientes</Link></span>
            <span className={`${styles["menu"]} ${selection === "goods" ? styles["selected"] : ""}`}> <AllInboxIcon/> <Link href='/mercancia'>Mercancias</Link></span>
        </nav>
    )
}



export default Menu