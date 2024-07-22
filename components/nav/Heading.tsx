import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton onClick={() => window.open("https://drive.google.com/file/d/1W4BUs5HaakP7smKhFLRJtK_lhc1BwEh4/view?usp=sharing")}>
        My resume
      </OutlineButton>
    </header>
  );
};
