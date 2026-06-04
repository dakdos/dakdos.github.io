import React, { useState, useEffect, useMemo } from 'react';

export default function GitHubStats() {
  const username = "dakdos";
  const [githubData, setGithubData] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch ALL history from a more complete API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(false);
        // Using this API because it provides full historical data and supports CORS
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        if (!data || !data.contributions) throw new Error('Invalid data');
        setGithubData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
        setError(true);
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  // Process data for the selected year and calculate streaks
  const processedData = useMemo(() => {
    if (!githubData || !githubData.contributions) return null;

    // Filter contributions for the selected year
    const yearDays = githubData.contributions
      .filter(day => day.date.startsWith(selectedYear.toString()))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Find total for that year from the 'total' summary in JSON
    const totalForYear = githubData.total ? (githubData.total[selectedYear.toString()] || 0) : 0;

    // Calculate streaks using the entire sorted history
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    const today = new Date().toISOString().split('T')[0];
    const sortedAllDays = [...githubData.contributions].sort((a, b) => new Date(a.date) - new Date(b.date));

    // Calculate Longest Streak
    sortedAllDays.forEach(day => {
      if (day.count > 0) {
        tempStreak++;
        if (tempStreak > longestStreak) longestStreak = tempStreak;
      } else {
        tempStreak = 0;
      }
    });

    // Calculate Current Streak
    const reversedAllDays = [...sortedAllDays].reverse();
    let foundStart = false;
    for (const day of reversedAllDays) {
      if (day.date > today) continue; // Skip future
      if (day.count > 0) {
        currentStreak++;
        foundStart = true;
      } else if (foundStart) {
        break;
      } else if (day.date === today) {
        continue;
      } else {
        break;
      }
    }

    // Group days into weeks for the grid
    const weeks = [];
    let currentWeek = [];
    
    // To align properly like GitHub, we should probably handle the starting day of the week
    // but a simple 7-day grouping is usually sufficient for a portfolio look.
    yearDays.forEach((day, i) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || i === yearDays.length - 1) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    return {
      weeks,
      totalForYear,
      currentStreak,
      longestStreak,
      availableYears: githubData.total ? Object.keys(githubData.total).map(y => parseInt(y)).sort((a, b) => b - a) : [new Date().getFullYear()]
    };
  }, [githubData, selectedYear]);

  if (error) {
    return (
      <section className="py-24 bg-zinc-950">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="p-12 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] text-center">
            <p className="text-zinc-500 mb-4">Gagal memuat riwayat GitHub. Silakan coba lagi nanti.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-accent text-white rounded-full text-sm font-bold"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="reveal p-8 md:p-12 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] overflow-hidden min-h-[450px] flex flex-col">
          {loading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-2 block">Developer Activity</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Live Contribution History</h2>
                  <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
                    Menampilkan seluruh riwayat aktivitas GitHub saya sejak tahun {Math.min(...(processedData?.availableYears || [2020]))}. 
                    Data ini ditarik langsung dan bersifat dinamis.
                  </p>
                </div>
                
                <div className="relative inline-block">
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    className="appearance-none bg-zinc-950 border border-zinc-800 text-white text-xs font-bold py-2 px-6 pr-10 rounded-xl focus:outline-none focus:border-accent transition-colors cursor-pointer"
                  >
                    {processedData?.availableYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                {/* Heatmap Grid */}
                <div className="lg:col-span-2 p-6 bg-zinc-950/50 border border-white/5 rounded-2xl overflow-x-auto">
                  <div className="min-w-[750px]">
                    <div className="flex justify-between items-center mb-6">
                       <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">GitHub Heatmap</span>
                         <span className="text-[10px] text-accent font-bold uppercase">Year {selectedYear}</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <span className="text-[10px] text-zinc-500">Less</span>
                         <div className="flex gap-1">
                            <div className="w-2.5 h-2.5 rounded-[2px] bg-zinc-800"></div>
                            <div className="w-2.5 h-2.5 rounded-[2px] bg-accent/30"></div>
                            <div className="w-2.5 h-2.5 rounded-[2px] bg-accent/60"></div>
                            <div className="w-2.5 h-2.5 rounded-[2px] bg-accent"></div>
                         </div>
                         <span className="text-[10px] text-zinc-500">More</span>
                       </div>
                    </div>
                    
                    <div className="flex gap-[3px]">
                       {processedData?.weeks.map((week, weekIndex) => (
                         <div key={weekIndex} className="flex flex-col gap-[3px]">
                            {week.map((day) => {
                              // Map intensity (0-4) to accent color opacities
                              const intensity = day.level !== undefined ? parseInt(day.level) : parseInt(day.intensity || 0);
                              const opacities = [
                                "bg-zinc-800/40",
                                "bg-accent/30",
                                "bg-accent/60",
                                "bg-accent/80",
                                "bg-accent"
                              ];
                              return (
                                <div 
                                  key={day.date}
                                  title={`${day.count} contributions on ${day.date}`}
                                  className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-300 hover:scale-150 hover:z-10 cursor-pointer ${opacities[intensity] || opacities[0]}`}
                                ></div>
                              );
                            })}
                         </div>
                       ))}
                    </div>
                    <div className="flex gap-2 mt-4 text-[10px] text-zinc-600 font-medium">
                       <span>Jan</span><span className="ml-8">Feb</span><span className="ml-10">Mar</span><span className="ml-10">Apr</span>
                       <span className="ml-10">May</span><span className="ml-10">Jun</span><span className="ml-10">Jul</span><span className="ml-10">Aug</span>
                       <span className="ml-10">Sep</span><span className="ml-10">Oct</span><span className="ml-10">Nov</span><span className="ml-10">Dec</span>
                    </div>
                  </div>
                </div>

                {/* Stats Side Card */}
                <div className="p-8 bg-zinc-950/80 border border-white/10 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors"></div>
                  
                  <div className="space-y-10 relative z-10">
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Yearly Summary</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">{processedData?.totalForYear || 0}</span>
                        <span className="text-xs text-zinc-500">Contributions</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="relative flex items-center justify-center">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-zinc-800" />
                          <circle 
                            cx="40" cy="40" r="36" 
                            stroke="currentColor" strokeWidth="4" 
                            fill="transparent" 
                            strokeDasharray="226" 
                            strokeDashoffset={226 - (Math.min(processedData?.currentStreak || 0, 30) / 30 * 226)} 
                            className="text-accent transition-all duration-1000" 
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-lg font-bold text-white leading-none">{processedData?.currentStreak || 0}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-accent font-bold text-xs uppercase tracking-wider mb-1">Current Streak</p>
                        <p className="text-[10px] text-zinc-500">Days consistent</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Longest Streak</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white">{processedData?.longestStreak || 0}</span>
                        <span className="text-xs text-zinc-500">Days milestone</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
