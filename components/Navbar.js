import { useRouter } from 'next/router';
import Navbar from 'react-bootstrap/navbar';
import Image from 'next/image';

const NBNavbar = () => {
    const router = useRouter();
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className="tw-fixed tw-top-0 tw-w-full tw-items-start tw-bg-[#1c1c1c]"
        >
            Hey 
        </Navbar>
    );
}
 
export default NBNavbar;
