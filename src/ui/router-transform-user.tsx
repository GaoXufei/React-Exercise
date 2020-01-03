import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
// import { UserRouter } from './styled';

export default ({ children }: any) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
    return () => {
      setShow(false)
    }
  }, [])
  return (
    <CSSTransition
      in={show}
      timeout={2000}
      appear={true}
      unmountOnExit
      classNames={{
        enter: 'animated',
        enterActive: 'fadeInUp',
        exit: 'animated',
        exitActive: 'fadeOutDown'
      }}
    >
      {children}
    </CSSTransition>
  );
}