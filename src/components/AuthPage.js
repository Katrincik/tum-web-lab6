import React, { useState } from 'react';
import {useAuth} from "./AuthContext";

export default function AuthPage() {
    const { login, register } = useAuth();
    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [err, setErr] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            setErr(error.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            setMsg('Registered! You can now log in.');
        } catch (err) {
            setMsg(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            {showLogin ? (
                <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h2 className="text-lg font-bold mb-4 text-center">Login</h2>
                    {err && <p className="text-red-500 mb-2 text-center">{err}</p>}
                    <input
                        className="border p-2 mb-4 w-full"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="border p-2 mb-4 w-full"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-black text-white p-2 w-full">
                        Login
                    </button>
                </form>
            ) : (
                <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h2 className="text-lg font-bold mb-4 text-center">Register</h2>
                    {msg && <p className="text-blue-500 mb-2 text-center">{msg}</p>}
                    <input
                        className="border p-2 mb-4 w-full"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="border p-2 mb-4 w-full"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-black text-white p-2 w-full">
                        Register
                    </button>
                </form>
            )}

            <button
                onClick={() => setShowLogin(!showLogin)}
                className="text-red px-4 py-2"
            >
                Switch to {showLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
}
