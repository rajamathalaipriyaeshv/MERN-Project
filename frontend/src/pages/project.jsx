import './project.css'
import world from '../assets/world.webp'
function Project(){
    return(
        <>
        <div className="text-white flex justify-evenly items-start gap-10">

        <div className="ml-10 mt-10 w-7xl">

        <div className='bg-slate-800 rounded-2xl pl-3 py-2'>
            <h1 className="font-bold">1. Fake News & Deepfake Detection</h1>
            <p className="mr-4">A python System that detects fake news and deepfakes using user prompt and uploaded image or video file</p>
            <a href="https://github.com/rajamathalaipriyaeshv/Fake-news-and-deepfake-detection" target="_blank" className="text-blue-300 hover:underline hover:text-blue-400">Link</a>
        </div><br></br>

        <div className='bg-slate-800 rounded-2xl pl-3 py-2'>
            <h1 className="font-bold">2. Password Manager</h1>
            <p className="mr-10">QuantumVault is a modern, responsive, single-page web application designed for high-end digital asset management and password isolation. Combining a sleek, neon-cyberpunk "glassmorphism" interface with professional-grade user workflows, QuantumVault acts as a localized, high-security vault for enterprise and personal credentials.</p>
            <a href="https://github.com/rajamathalaipriyaeshv/Password-Manager" target="_blank" className="text-blue-300 hover:underline hover:text-blue-400">Link</a>
        </div><br></br>

        <div className='bg-slate-800 rounded-2xl pl-3 py-2'>
            <h1 className="font-bold">3. Omni Grid AI</h1>
            <p className="mr-10">OmniGrid AI is an intelligent Multi-Agent Reinforcement Learning (MARL) traffic management system built on top of SUMO micro-simulations. It replaces traditional static and greedy signaling with adaptive tabular Q-learning agents optimized for multi-intersection grids.</p>
            <a href="https://github.com/rajamathalaipriyaeshv/Omni-Grid" target="_blank" className="text-blue-300 hover:underline hover:text-blue-400">Link</a>
        </div><br></br>

        <div className='bg-slate-800 rounded-2xl pl-3 py-2'>
            <h1 className="font-bold">4. FinPulse AI</h1>
            <p className="mr-10">FinPulse AI is a real-time crypto forecasting engine designed to eliminate emotional retail trading. It pairs FinBERT to score live headline sentiment with a PyTorch Bi-LSTM neural network to predict 24h price trends from historical OHLCV data. Built with FastAPI and TradingView charts, it turns raw market noise into clear, visual signals.</p>
            <a href="https://github.com/rajamathalaipriyaeshv/FinPulse-AI" target="_blank" className="text-blue-300 hover:underline hover:text-blue-400">Link</a>
        </div><br></br>

        <div className='bg-slate-800 rounded-2xl pl-3 py-2'>
            <h1 className="font-bold">5. Vault</h1>
            <p className="mr-10">A system that encrypts a local folder in your pc and decrypt it using passkey or password that you'll enter during encryption. Enter the folder path to select the folder and then enter the option to encrypt or decrypt and do the task as I said before. This is useful to encrypt any private doc, pic or vid in your pc, but don't forgot your password</p>
            <a href="https://github.com/rajamathalaipriyaeshv/Vault" target="_blank" className="text-blue-300 hover:underline hover:text-blue-400">Link</a>
        </div><br></br>

        <div className='bg-slate-800 rounded-2xl pl-3 py-2'>
            <h1 className="font-bold">6. Blood Bank</h1>
            <p className="mr-10">A simple Spring Boot & MySQL web application to track blood bank unit inventory, enforce donor eligibility rules, and manage unit expiration dates.</p>
            <a href="https://github.com/rajamathalaipriyaeshv/BloodBank" target="_blank" className="text-blue-300 hover:underline hover:text-blue-400">Link</a>
        </div>

        </div>

        <div className="w-full md:w-1/2 md:sticky md:top-6 mb-5">
        <img src={world} className='w-auto h-auto rounded-xl object-cover mt-10 shadow- shadow-slate-500'></img>
        </div>

        </div>
        </>
    )
}

export default Project