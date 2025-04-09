import React, { useState, useEffect } from 'react';

const WaterFast = () => {
  // State for fast duration and water tracking
  const [fastDuration, setFastDuration] = useState(24); // Default to 24 hours
  const [fastStartTime, setFastStartTime] = useState(null);
  const [customStartDate, setCustomStartDate] = useState('');
  const [customStartTime, setCustomStartTime] = useState('');
  const [waterIntake, setWaterIntake] = useState(0);
  const [waterToAdd, setWaterToAdd] = useState(8); // Default to 8 oz
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [timeFasted, setTimeFasted] = useState(null);
  const [isFasting, setIsFasting] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState('');
  const [showMotivation, setShowMotivation] = useState(false);
  const [fastMessage, setFastMessage] = useState('');
  const [showFastMessage, setShowFastMessage] = useState(false);
  
  const WATER_GOAL = 50; // Kamryn's daily water goal in ounces
  
  // Motivation messages array for water intake
  const motivationMessages = [
    "Great job, Kamryn! Keep hydrating! 💧",
    "You're doing amazing! Every ounce counts! 💪",
    "Stay strong! Your body is thanking you for this water! 🌱",
    "Hydration is key to healing! You've got this! ✨",
    "Amazing effort! Keep those toxins flushing out! 🌊",
    "Water is your superpower during this fast! Keep it up! ⚡",
    "Your candida cleanse is working better with every sip! 🌟",
    "You're making Carson proud with your dedication! 🎉",
    "Staying hydrated will help you feel your best! Keep going! 💙",
    "That's the way to do it! Your body loves this water! 💯"
  ];
  
  // Motivation messages array for fasting
  const fastMotivationMessages = [
    "You've got this, Kamryn! Your fast has begun! 🎯",
    "Your healing journey continues with each hour of fasting! 💪",
    "Be proud of yourself! This fast is helping your body heal! ✨",
    "Your determination is inspiring! Keep going strong! 🔥",
    "Every minute of fasting is helping fight candida! 🦠",
    "Your body is thanking you for this reset! You're amazing! 🌟",
    "Carson is so proud of your commitment to healing! 💕",
    "Trust the process! Your body knows how to heal! 🧘‍♀️",
    "You're doing something incredible for your health! Keep it up! 🏆",
    "This temporary challenge brings lasting health benefits! You can do it! 🌱"
  ];
  
  // Set default custom start time to current date/time if not already fasting
  useEffect(() => {
    if (!isFasting && !customStartDate) {
      const now = new Date();
      setCustomStartDate(now.toISOString().split('T')[0]);
      setCustomStartTime(now.toTimeString().split(' ')[0].substring(0, 5));
    }
  }, [isFasting, customStartDate]);
  
  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedFastStart = localStorage.getItem('fastStartTime');
    const savedFastDuration = localStorage.getItem('fastDuration');
    const savedWaterIntake = localStorage.getItem('waterIntake');
    const savedIsFasting = localStorage.getItem('isFasting');
    const savedCustomStartDate = localStorage.getItem('customStartDate');
    const savedCustomStartTime = localStorage.getItem('customStartTime');
    
    if (savedFastStart) setFastStartTime(parseInt(savedFastStart));
    if (savedFastDuration) setFastDuration(parseInt(savedFastDuration));
    if (savedWaterIntake) setWaterIntake(parseInt(savedWaterIntake));
    if (savedIsFasting) setIsFasting(savedIsFasting === 'true');
    if (savedCustomStartDate) setCustomStartDate(savedCustomStartDate);
    if (savedCustomStartTime) setCustomStartTime(savedCustomStartTime);
  }, []);
  
  // Update time remaining and time fasted every second
  useEffect(() => {
    let timer;
    
    if (isFasting && fastStartTime) {
      timer = setInterval(() => {
        const now = Date.now();
        const endTime = fastStartTime + (fastDuration * 60 * 60 * 1000);
        const remaining = endTime - now;
        const fasted = now - fastStartTime;
        
        if (remaining <= 0) {
          setTimeRemaining(0);
          setTimeFasted(fastDuration * 60 * 60 * 1000);
          setIsFasting(false);
          localStorage.setItem('isFasting', 'false');
          clearInterval(timer);
        } else {
          setTimeRemaining(remaining);
          setTimeFasted(fasted);
        }
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isFasting, fastStartTime, fastDuration]);
  
  // Auto-hide motivation message after 5 seconds
  useEffect(() => {
    let timer;
    if (showMotivation) {
      timer = setTimeout(() => {
        setShowMotivation(false);
      }, 5000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showMotivation]);
  
  // Auto-hide fast motivation message after 8 seconds
  useEffect(() => {
    let timer;
    if (showFastMessage) {
      timer = setTimeout(() => {
        setShowFastMessage(false);
      }, 8000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showFastMessage]);
  
  // Save to localStorage when values change
  useEffect(() => {
    if (isFasting) {
      localStorage.setItem('fastStartTime', fastStartTime);
      localStorage.setItem('fastDuration', fastDuration);
      localStorage.setItem('isFasting', isFasting);
      localStorage.setItem('customStartDate', customStartDate);
      localStorage.setItem('customStartTime', customStartTime);
    }
    localStorage.setItem('waterIntake', waterIntake);
  }, [fastStartTime, fastDuration, waterIntake, isFasting, customStartDate, customStartTime]);
  
  // Start a new fast
  const startFast = () => {
    let startTime;
    
    if (customStartDate && customStartTime) {
      // Use the custom date and time
      const customDateTime = new Date(`${customStartDate}T${customStartTime}`);
      startTime = customDateTime.getTime();
    } else {
      // Use current time if no custom time is set
      startTime = Date.now();
    }
    
    setFastStartTime(startTime);
    setIsFasting(true);
    localStorage.setItem('fastStartTime', startTime);
    localStorage.setItem('isFasting', 'true');
    
    // Show random fast motivation message
    const randomIndex = Math.floor(Math.random() * fastMotivationMessages.length);
    setFastMessage(fastMotivationMessages[randomIndex]);
    setShowFastMessage(true);
  };
  
  // End current fast
  const endFast = () => {
    setIsFasting(false);
    setTimeRemaining(null);
    setTimeFasted(null);
    localStorage.setItem('isFasting', 'false');
  };
  
  // Reset water intake (typically for a new day)
  const resetWater = () => {
    setWaterIntake(0);
    localStorage.setItem('waterIntake', 0);
  };
  
  // Add water to daily intake and show motivation message
  const addWater = () => {
    const newAmount = waterIntake + parseInt(waterToAdd);
    setWaterIntake(newAmount);
    localStorage.setItem('waterIntake', newAmount);
    
    // Show random motivation message
    const randomIndex = Math.floor(Math.random() * motivationMessages.length);
    setMotivationMessage(motivationMessages[randomIndex]);
    setShowMotivation(true);
  };
  
  // Format time remaining
  const formatTimeRemaining = (ms) => {
    if (!ms) return '--:--:--';
    
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Format time fasted
  const formatTimeFasted = (ms) => {
    if (!ms) return '--:--:--';
    
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Calculate percent of fast completed
  const calculateFastProgress = () => {
    if (!timeFasted || !fastDuration) return 0;
    const totalFastTimeMs = fastDuration * 60 * 60 * 1000;
    return Math.min(100, (timeFasted / totalFastTimeMs) * 100);
  };
  
  // Format duration options
  const formatDurationOption = (hours) => {
    if (hours < 24) {
      return `${hours} hours`;
    } else {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      return remainingHours 
        ? `${days} day${days > 1 ? 's' : ''}, ${remainingHours} hour${remainingHours > 1 ? 's' : ''}` 
        : `${days} day${days > 1 ? 's' : ''}`;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Kamryn's Water Fast Tracker</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Fast duration tracker */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Fast Duration</h2>
          
          {!isFasting ? (
            <div className="space-y-6">
              <div>
                <label htmlFor="fastDuration" className="block text-sm font-medium text-gray-700 mb-2">
                  Select fast duration:
                </label>
                <select 
                  id="fastDuration"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={fastDuration}
                  onChange={(e) => setFastDuration(Number(e.target.value))}
                >
                  <option value="12">{formatDurationOption(12)}</option>
                  <option value="16">{formatDurationOption(16)}</option>
                  <option value="18">{formatDurationOption(18)}</option>
                  <option value="24">{formatDurationOption(24)}</option>
                  <option value="36">{formatDurationOption(36)}</option>
                  <option value="48">{formatDurationOption(48)}</option>
                  <option value="72">{formatDurationOption(72)}</option>
                </select>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Set custom start time:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="customStartDate" className="block text-xs text-gray-500 mb-1">Date</label>
                    <input 
                      type="date" 
                      id="customStartDate"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={customStartDate}
                      onChange={(e) => setCustomStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="customStartTime" className="block text-xs text-gray-500 mb-1">Time</label>
                    <input 
                      type="time" 
                      id="customStartTime"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={customStartTime}
                      onChange={(e) => setCustomStartTime(e.target.value)}
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  For example, if you started fasting at 9:00 AM today, set the date to today and time to 09:00
                </p>
              </div>
              
              <button 
                onClick={startFast}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-md transition"
              >
                Start Fast
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {/* Time fasted */}
                <div>
                  <p className="text-sm text-gray-600 mb-1">Time Fasted:</p>
                  <div className="text-4xl font-mono font-bold text-center py-4 bg-green-50 rounded-lg">
                    {formatTimeFasted(timeFasted)}
                  </div>
                  
                  {/* Fast progress bar */}
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${calculateFastProgress()}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">0%</span>
                      <span className="text-xs text-gray-500">{Math.round(calculateFastProgress())}%</span>
                      <span className="text-xs text-gray-500">100%</span>
                    </div>
                  </div>
                </div>
                
                {/* Time remaining */}
                <div>
                  <p className="text-sm text-gray-600 mb-1">Time Remaining:</p>
                  <div className="text-4xl font-mono font-bold text-center py-4 bg-gray-100 rounded-lg">
                    {formatTimeRemaining(timeRemaining)}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="text-blue-800">
                    <span className="font-semibold">Fast duration: </span>
                    {formatDurationOption(fastDuration)}
                  </p>
                  <p className="text-blue-800 mt-1">
                    <span className="font-semibold">Started: </span>
                    {new Date(fastStartTime).toLocaleString()}
                  </p>
                  <p className="text-blue-800 mt-1">
                    <span className="font-semibold">Finishing: </span>
                    {new Date(fastStartTime + (fastDuration * 60 * 60 * 1000)).toLocaleString()}
                  </p>
                </div>
                
                {/* Fast motivation message */}
                {showFastMessage && (
                  <div className="p-3 bg-purple-50 text-purple-700 rounded-md animate-fade-in-out transition-all">
                    {fastMessage}
                  </div>
                )}
              </div>
              
              <button 
                onClick={endFast}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md transition"
              >
                End Fast Early
              </button>
            </div>
          )}
          
          <div className="mt-6 bg-yellow-50 p-4 rounded-md">
            <h3 className="font-semibold text-yellow-800">Fasting Tips</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-yellow-800">
              <li>Drink plenty of water throughout your fast</li>
              <li>Add a pinch of Himalayan salt to maintain electrolytes</li>
              <li>Herbal teas are allowed during your water fast</li>
              <li>If you feel dizzy or unwell, please stop fasting</li>
              <li>Consult with your healthcare provider before starting extended fasting</li>
            </ul>
          </div>
        </div>
        
        {/* Water intake tracker */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Water Intake</h2>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Daily Goal: {WATER_GOAL} oz</span>
              <span className="text-sm font-medium text-gray-700">{waterIntake} / {WATER_GOAL} oz</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (waterIntake / WATER_GOAL) * 100)}%` }}
              ></div>
            </div>
            
            {waterIntake >= WATER_GOAL && (
              <div className="mt-2 text-green-600 text-sm font-medium">
                🎉 Daily goal achieved! Great job staying hydrated!
              </div>
            )}
            
            {/* Motivation message */}
            {showMotivation && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md animate-fade-in-out transition-all">
                {motivationMessage}
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <select
                className="w-24 p-2 border border-gray-300 rounded-l-md"
                value={waterToAdd}
                onChange={(e) => setWaterToAdd(e.target.value)}
              >
                <option value="4">4 oz</option>
                <option value="8">8 oz</option>
                <option value="12">12 oz</option>
                <option value="16">16 oz</option>
                <option value="20">20 oz</option>
                <option value="24">24 oz</option>
                <option value="32">32 oz</option>
              </select>
              <button
                onClick={addWater}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-md transition"
              >
                Add Water
              </button>
            </div>
            
            <button
              onClick={resetWater}
              className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md transition"
            >
              Reset Water Intake
            </button>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-md">
            <h3 className="font-semibold text-blue-800">Hydration Tips for Fasting</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-blue-800">
              <li>Drink at least 50oz of water daily during your fast</li>
              <li>Sip water throughout the day rather than large amounts at once</li>
              <li>Room temperature water is easier on your system than cold water</li>
              <li>Herbal teas count toward your water goal</li>
              <li>Monitor urine color (pale yellow indicates good hydration)</li>
            </ul>
          </div>
          
          <div className="mt-6 p-4 bg-purple-50 rounded-md">
            <h3 className="font-semibold text-purple-800">Benefits of Water Fasting</h3>
            <p className="mt-2 text-purple-800">
              Water fasting can help support your candida cleanse by giving your digestive system a rest, 
              promoting autophagy (cellular cleaning), and helping to flush toxins. Stay hydrated and 
              listen to your body throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterFast; 