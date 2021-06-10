import { forwardRef, ReactNode, MouseEventHandler } from 'react';

export type Props = {
    children: ReactNode;
    href?: string;
    className?:string;
    onClick?:MouseEventHandler<HTMLAnchorElement>
};
type Ref = HTMLAnchorElement;
const CustomLink = forwardRef<Ref, Props>(({
  className, href, onClick, children,
}, ref) => (
  <a href={href} className={className} onClick={onClick} ref={ref}>
    { children }
  </a>
));
export default CustomLink;
