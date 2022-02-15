import { useMoralis } from 'react-moralis';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NBNavbar from '../components/Navbar';

const Connect = () => {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) router.replace('/');
    }, [isAuthenticated]);

    return (
        <div className="connectWeb3">
            <Head>
                <title>Login screen</title>
                <meta name="description" content="This is a login screen example"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NBNavbar />
            {!isAuthenticated ? (
                    <Button
                        onClick={() => authenticate({
                            chainId: 97,
                            signingMessage: "Authenticate your wallet with Moralis"
                        })}
                    >
                        Authenticate Wallet
                    </Button>
            ) : (
                <div>
                    <h1>Hey {user.get('ethAddress')}</h1>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            )}
        </div>  
    );
}
 
export default Connect;