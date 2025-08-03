import React, { useState, useEffect } from 'react';
import HomePage from './pages/home.jsx';
import TerminalPage from './pages/terminal.jsx';
import { Portfolio } from './entities/Portfolio';
import { Button } from './components/ui/button';
import { TerminalSquare, User } from 'lucide-react';

export default function Layout() {
    const [mode, setMode] = useState('gui'); // 'gui' or 'terminal'
    const [portfolioData, setPortfolioData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = window.location.pathname;

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location]);

    useEffect(() => {
        const fetchPortfolioData = async () => {
            setIsLoading(true);
            try {
                const data = await Portfolio.list();
                if (data.length > 0) {
                    setPortfolioData(data[0]);
                }
            } catch (error) {
                console.error("Failed to fetch portfolio data:", error);
            }
            setIsLoading(false);
        };
        fetchPortfolioData();
    }, []);

    const Header = () => (
        <header className="bg-[#111111] text-white p-4 sticky top-0 z-50 shadow-md">
            <div className="mx-auto max-w-5xl flex justify-between items-center">
                <div className="font-bold text-lg">
                    {portfolioData?.name}.dev
                </div>
                <Button
                    variant="outline"
                    className="bg-transparent border-gray-600 hover:bg-gray-800 hover:text-white"
                    onClick={() => setMode(mode === 'gui' ? 'terminal' : 'gui')}
                >
                    {mode === 'gui' ? (
                        <>
                            <TerminalSquare className="w-4 h-4 mr-2" />
                            Terminal Mode
                        </>
                    ) : (
                         <>
                            <User className="w-4 h-4 mr-2" />
                            GUI Mode
                        </>
                    )}
                </Button>
            </div>
        </header>
    );

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Inter:wght@400;500;700;900&display=swap');

                body, #root {
                    font-family: 'Inter', sans-serif;
                    background-color: #111111;
                    color: #E6EDF3;
                }
                .font-mono {
                    font-family: 'Fira Code', monospace;
                }
            `}</style>
            <main className="w-full min-h-screen bg-[#111111]">
                {mode === 'gui' ? (
                    <>
                        <Header />
                        {isLoading ? (
                            <div className="text-center p-10">Loading...</div>
                        ) : (
                            <HomePage portfolioData={portfolioData} />
                        )}
                    </>
                ) : (
                    <TerminalPage portfolioData={portfolioData} switchToGui={() => setMode('gui')} />
                )}
            </main>
        </>
    );
}
