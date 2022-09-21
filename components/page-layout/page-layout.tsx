import Menu from "../menu/menu"
import styles from "./page-layout.module.css"

type Props = {
    menuSelection?: string
    children: React.ReactNode
}

const PageLayout = (props: Props) => {
    const { menuSelection, children } = props
    return (
        <div className={styles["page-layout"]}>
          <Menu selection={menuSelection} />
          {children}
        </div>
    )
}

export default PageLayout