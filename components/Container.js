import styles from '../styles/Container.module.css';

const Container = ({
  children,
  main,
  firstScreen,
  secondScreen,
  contact,
  buttons,
  buttonsAndTitle,
  firstScreenContent,
}) => {
  let Tag, style;

  if (main) {
    Tag = 'div';
    style = styles.main;
  } else if (firstScreen) {
    Tag = 'section';
    style = styles.firstScreen;
  } else if (secondScreen) {
    Tag = 'section';
    style = styles.secondScreen;
  } else if (contact) {
    Tag = 'div';
    style = styles.contact;
  } else if (buttons) {
    Tag = 'nav';
    style = styles.buttons;
  } else if (buttonsAndTitle) {
    Tag = 'div';
    style = styles.buttonsAndTitle;
  } else if (firstScreenContent) {
    Tag = 'div';
    style = styles.firstScreenContent;
  }

  return <Tag className={style}>{children}</Tag>;
};

export default Container;
