import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Scan = () => {
  const [data, setData] = useState(null);
  const [domain, setDomain] = useState('');
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/CyberScope'); // Login page
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchData = async (e) => {
    e.preventDefault();
    if (!domain.trim()) {
      setError('Please enter a domain');
      return;
    }

    setLoading(true);
    setError('');
    setData(null);
    setIp('');

    try {
      const dnsRes = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
      const dnsData = await dnsRes.json();
      if (!dnsData.Answer || dnsData.Answer.length === 0) throw new Error('No IP found');

      const resolvedIp = dnsData.Answer[0].data;
      setIp(resolvedIp);

      const shodanRes = await fetch(`https://internetdb.shodan.io/${resolvedIp}`);
      if (!shodanRes.ok) throw new Error('Shodan request failed');

      const shodanData = await shodanRes.json();
      setData(shodanData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/CyberScope'); // Redirect to login
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <main className="w-1/2 flex flex-col gap-10 justify-center items-center m-auto p-10">
      
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <form className="flex flex-col justify-center items-center gap-10" onSubmit={fetchData}>
        <div className="relative w-full max-w-md font-mono">
          <label className="mb-3 text-[#A7FF18] text-sm tracking-wider flex items-center" htmlFor="domain">
            <span className="mr-2 text-green-600">➜</span>
            <span className="text-[#A7FF18] font-bold">Domain Name</span>
            <span className="ml-2 opacity-75 animate-pulse">▋</span>
          </label>

          <input
            className="w-fit bg-transparent text-red-500 text-base border-2 border-[#A7FF18] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#A7FF18] focus:border-[#A7FF18] placeholder-[#d4ff8f] pr-10"
            placeholder="➤ ENTER DOMAIN"
            id="domain"
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />

          <div className="mt-4 flex flex-col gap-2">
            <p className="text-xs text-[#A7FF18] opacity-80 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>
                <span className="text-red-400">WARNING:</span> FOR PERSONAL USAGE ONLY!
              </span>
            </p>
          </div>
        </div>

        <button type="submit" className="relative cursor-pointer px-8 py-3 text-[#A7FF18] font-semibold rounded-lg border-2 border-[#A7FF18] hover:border-[#A7FF18] transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(167,255,24,0.6)] active:scale-95 active:shadow-[0_0_20px_10px_rgba(167,255,24,0.6)] group">
          <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-6 h-6 text-[#A7FF18] group-hover:text-white transition-colors duration-300">
              <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
            <span>Scan</span>
          </span>
        </button>
      </form>

      <div className={`p-4 rounded-tl-3xl rounded-br-3xl w-fit ${error ? 'text-red-200' : 'text-red-500 border-2 border-[#A7FF18]'}`}>
        {loading && <p>Loading...</p>}
        {error && <p className="w-60"><strong className="text-[#A7FF18]">Error:</strong> {error}</p>}
        {data && (
          <div className="flex flex-col gap-2 cursor-crosshair">
            <p><strong className="text-[#A7FF18]">Domain:</strong> {domain}</p>
            <p><strong className="text-[#A7FF18]">Resolved IP:</strong> {ip}</p>
            <p><strong className="text-[#A7FF18]">Hostnames:</strong> {data.hostnames?.length ? data.hostnames.join(', ') : 'None'}</p>
            <p><strong className="text-[#A7FF18]">Open Ports:</strong> {data.ports?.length ? data.ports.join(', ') : 'None'}</p>
            <p><strong className="text-[#A7FF18]">Vulns:</strong> {data.vulns?.length ? data.vulns.join(', ') : 'None'}</p>
            <p><strong className="text-[#A7FF18]">Tags:</strong> {data.tags?.length ? data.tags.join(', ') : 'None'}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Scan;
