import { forwardRef, ReactNode, MouseEventHandler } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
    children: ReactNode;
    href: string;
    className:string;
    onClick:MouseEventHandler<HTMLAnchorElement>
};
type Ref = HTMLAnchorElement;
const CustomButtonLink = forwardRef<Ref, Props>(({
  className, href, onClick, children,
}, ref) => (
  <Button href={href} className={className} onClick={onClick} ref={ref}>
    { children }
  </Button>
));
export default CustomButtonLink;
