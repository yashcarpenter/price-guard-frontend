import React from "react";
import { Link } from 'react-router-dom';

export default function PleaseSignIn() {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Please Sign In</h1>
                <p style={styles.text}>
                    You need to sign in to access this page.
                </p>
                <Link to="/signin" style={styles.link}>Sign In</Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    text: {
        fontSize: '1.2rem',
        marginBottom: '20px',
    },
    link: {
        fontSize: '1.2rem',
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};
