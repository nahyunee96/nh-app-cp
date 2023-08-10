import { ReactNode } from 'react';
import ReactDom from 'react-dom';
 

interface Props {
    children : ReactNode;
}

const PopupDom = ({ children }: Props) => {
    const el = document.getElementById('popupDom') as HTMLElement;
    return ReactDom.createPortal(children, el);
};


 
export default PopupDom;