import React, { useState } from 'react';
import { Home, Building, Users, FileText, Calendar, DollarSign, MessageSquare, Settings, Menu, X } from 'lucide-react';

const VaadManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const tabs = [
    { id: 'dashboard', name: 'דשבורד', icon: Home },
    { id: 'buildings', name: 'בניינים', icon: Building },
    { id: 'residents', name: 'דיירים', icon: Users },
    { id: 'reports', name: 'דוחות', icon: FileText },
    { id: 'calendar', name: 'משימות', icon: Calendar },
    { id: 'payments', name: 'תשלומים', icon: DollarSign },
    { id: 'messages', name: 'הודעות', icon: MessageSquare },
    { id: 'settings', name: 'הגדרות', icon: Settings }
  ];

  const buildings = [
    { id: 1, name: 'רחוב הרצל 45', apartments: 12, balance: 15000, status: 'תקין' },
    { id: 2, name: 'רחוב בן גוריון 23', apartments: 8, balance: -3500, status: 'חוב' },
    { id: 3, name: 'שדרות ירושלים 67', apartments: 20, balance: 28000, status: 'תקין' }
  ];

  const residents = [
    { id: 1, name: 'משה כהן', apartment: 'הרצל 45 דירה 3', phone: '050-1234567', balance: 1200 },
    { id: 2, name: 'שרה לוי', apartment: 'בן גוריון 23 דירה 5', phone: '052-9876543', balance: -450 },
    { id: 3, name: 'דוד ישראלי', apartment: 'ירושלים 67 דירה 12', phone: '054-5555555', balance: 800 },
    { id: 4, name: 'רחל אברהם', apartment: 'הרצל 45 דירה 7', phone: '053-2223334', balance: 0 }
  ];

  const tasks = [
    { id: 1, title: 'תיקון מעלית', building: 'הרצל 45', date: '2025-11-20', status: 'ממתין' },
    { id: 2, title: 'ניקיון חדר מדרגות', building: 'בן גוריון 23', date: '2025-11-18', status: 'בביצוע' },
    { id: 3, title: 'פגישת ועד', building: 'כללי', date: '2025-11-25', status: 'מתוכנן' }
  ];

  const payments = [
    { id: 1, resident: 'משה כהן', amount: 450, date: '2025-11-01', method: 'העברה בנקאית' },
    { id: 2, resident: 'דוד ישראלי', amount: 450, date: '2025-11-03', method: 'כרטיס אשראי' },
    { id: 3, resident: 'רחל אברהם', amount: 450, date: '2025-11-05', method: 'מזומן' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">דשבורד ראשי</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-100 text-sm">סך הכל בניינים</p>
                    <p className="text-3xl font-bold mt-2">3</p>
                  </div>
                  <Building className="w-8 h-8 text-blue-200" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-green-100 text-sm">דיירים פעילים</p>
                    <p className="text-3xl font-bold mt-2">40</p>
                  </div>
                  <Users className="w-8 h-8 text-green-200" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-purple-100 text-sm">יתרה כוללת</p>
                    <p className="text-3xl font-bold mt-2">₪39.5K</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-purple-200" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-orange-100 text-sm">משימות פתוחות</p>
                    <p className="text-3xl font-bold mt-2">7</p>
                  </div>
                  <Calendar className="w-8 h-8 text-orange-200" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">משימות אחרונות</h3>
                <div className="space-y-3">
                  {tasks.map(task => (
                    <div key={task.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-800">{task.title}</p>
                        <p className="text-sm text-gray-600">{task.building}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        task.status === 'ממתין' ? 'bg-yellow-100 text-yellow-800' :
                        task.status === 'בביצוע' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">תשלומים אחרונים</h3>
                <div className="space-y-3">
                  {payments.map(payment => (
                    <div key={payment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-800">{payment.resident}</p>
                        <p className="text-sm text-gray-600">{payment.method}</p>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-green-600">₪{payment.amount}</p>
                        <p className="text-xs text-gray-500">{payment.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'buildings':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">ניהול בניינים</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                + הוסף בניין
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {buildings.map(building => (
                <div key={building.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{building.name}</h3>
                      <p className="text-gray-600 mt-1">{building.apartments} דירות</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      building.status === 'תקין' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {building.status}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">יתרה כוללת</p>
                      <p className={`text-2xl font-bold ${building.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₪{building.balance.toLocaleString()}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">
                      צפה בפרטים →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'residents':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">ניהול דיירים</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                + הוסף דייר
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">שם</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">דירה</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">טלפון</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">יתרה</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">פעולות</th>
                  </tr>
                </thead>
                <tbody>
                  {residents.map(resident => (
                    <tr key={resident.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-800">{resident.name}</td>
                      <td className="px-6 py-4 text-gray-600">{resident.apartment}</td>
                      <td className="px-6 py-4 text-gray-600">{resident.phone}</td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${resident.balance > 0 ? 'text-green-600' : resident.balance < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                          ₪{resident.balance}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-800 ml-3">ערוך</button>
                        <button className="text-gray-600 hover:text-gray-800">צפה</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">דוחות ומסמכים</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-right">
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">דוח הכנסות והוצאות</h3>
                <p className="text-sm text-gray-600">צפה בדוח כספי חודשי מפורט</p>
              </button>
              
              <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-right">
                <FileText className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">דוח חובות</h3>
                <p className="text-sm text-gray-600">רשימת דיירים עם יתרות חוב</p>
              </button>
              
              <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-right">
                <FileText className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">פרוטוקול ישיבה</h3>
                <p className="text-sm text-gray-600">צור פרוטוקול ישיבת ועד</p>
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">מסמכים אחרונים</h3>
              <div className="space-y-3">
                {[
                  { name: 'דוח חודש אוקטובר 2025', date: '2025-11-01', type: 'PDF' },
                  { name: 'פרוטוקול ישיבה 15.10.2025', date: '2025-10-16', type: 'PDF' },
                  { name: 'חשבונית חברת ניקיון', date: '2025-10-20', type: 'PDF' }
                ].map((doc, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-600 ml-3" />
                      <div>
                        <p className="font-semibold text-gray-800">{doc.name}</p>
                        <p className="text-sm text-gray-600">{doc.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">הורד</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">משימות ולוח שנה</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                + הוסף משימה
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full ml-2"></span>
                  ממתין
                </h3>
                {tasks.filter(t => t.status === 'ממתין').map(task => (
                  <div key={task.id} className="mb-3 p-3 bg-yellow-50 rounded-lg">
                    <p className="font-semibold text-gray-800">{task.title}</p>
                    <p className="text-sm text-gray-600">{task.building}</p>
                    <p className="text-xs text-gray-500 mt-1">{task.date}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full ml-2"></span>
                  בביצוע
                </h3>
                {tasks.filter(t => t.status === 'בביצוע').map(task => (
                  <div key={task.id} className="mb-3 p-3 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-gray-800">{task.title}</p>
                    <p className="text-sm text-gray-600">{task.building}</p>
                    <p className="text-xs text-gray-500 mt-1">{task.date}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full ml-2"></span>
                  מתוכנן
                </h3>
                {tasks.filter(t => t.status === 'מתוכנן').map(task => (
                  <div key={task.id} className="mb-3 p-3 bg-green-50 rounded-lg">
                    <p className="font-semibold text-gray-800">{task.title}</p>
                    <p className="text-sm text-gray-600">{task.building}</p>
                    <p className="text-xs text-gray-500 mt-1">{task.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'payments':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">ניהול תשלומים</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                + הוסף תשלום
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-green-100 text-sm">סך תשלומים החודש</p>
                <p className="text-3xl font-bold mt-2">₪18,450</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-red-100 text-sm">חובות פתוחים</p>
                <p className="text-3xl font-bold mt-2">₪3,500</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-blue-100 text-sm">תשלומים החודש</p>
                <p className="text-3xl font-bold mt-2">41</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">דייר</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">סכום</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">תאריך</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">אמצעי תשלום</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">פעולות</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map(payment => (
                    <tr key={payment.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-800">{payment.resident}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">₪{payment.amount}</td>
                      <td className="px-6 py-4 text-gray-600">{payment.date}</td>
                      <td className="px-6 py-4 text-gray-600">{payment.method}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-800">קבלה</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">הודעות ותקשורת</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                + הודעה חדשה
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 bg-white rounded-lg shadow-md">
                <div className="p-4 border-b">
                  <input 
                    type="text" 
                    placeholder="חיפוש שיחות..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="divide-y">
                  {[
                    { name: 'משה כהן', message: 'מתי מגיע הטכנאי?', time: '10:30', unread: true },
                    { name: 'ועד בניין הרצל', message: 'זימון לישיבה', time: 'אתמול', unread: false },
                    { name: 'שרה לוי', message: 'שאלה לגבי חשבונית', time: '15/11', unread: false }
                  ].map((chat, idx) => (
                    <div key={idx} className={`p-4 hover:bg-gray-50 cursor-pointer ${chat.unread ? 'bg-blue-50' : ''}`}>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">{chat.name}</p>
                          <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                        </div>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      {chat.unread && <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-1"></span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 bg-white rounded-lg shadow-md flex flex-col h-[500px]">
                <div className="p-4 border-b flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold ml-3">
                    מ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">משה כהן</p>
                    <p className="text-xs text-gray-500">דירה 3, רחוב הרצל 45</p>
                  </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-gray-800">שלום, מתי מגיע הטכנאי לתקן את המעלית?</p>
                      <p className="text-xs text-gray-500 mt-1">10:30</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                      <p>שלום משה, הטכנאי אמור להגיע מחר בשעה 9:00</p>
                      <p className="text-xs text-blue-200 mt-1">10:35</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t">
                  <div className="flex items-center">
                    <input 
                      type="text" 
                      placeholder="כתוב הודעה..."
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="mr-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                      שלח
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">הגדרות מערכת</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">הגדרות כלליות</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">שם החברה</label>
                    <input type="text" defaultValue=" ועד בתים" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">אימייל</label>
                    <input type="email" defaultValue="info@aa.co.il" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">טלפון</label>
                    <input type="tel" defaultValue="03-1234567" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  שמור שינויים
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">התראות</h3>
                <div className="space-y-4">
                  {[
                    { label: 'התראות על תשלומים חדשים', checked: true },
                    { label: 'התראות על משימות חדשות', checked: true },
                    { label: 'התראות על הודעות חדשות', checked: false },
                    { label: 'דוחות שבועיים באימייל', checked: true }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-gray-700">{item.label}</span>
                      <label className="relative inline-block w-12 h-6">
                        <input type="checkbox" defaultChecked={item.checked} className="opacity-0 w-0 h-0" />
                        <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition ${item.checked ? 'bg-blue-600' : 'bg-gray-300'}`}>
                          <span className={`absolute right-1 bottom-1 bg-white w-4 h-4 rounded-full transition ${item.checked ? 'transform -translate-x-6' : ''}`}></span>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">הרשאות משתמשים</h3>
                <div className="space-y-3">
                  {[
                    { name: 'אדמין ראשי', role: 'מנהל מערכת', active: true },
                    { name: 'רואה חשבון חיצוני', role: 'צפייה בלבד', active: true },
                    { name: 'מזכיר ועד', role: 'עורך', active: false }
                  ].map((user, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-800">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.role}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${user.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {user.active ? 'פעיל' : 'לא פעיל'}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  + הוסף משתמש
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">גיבוי ושחזור</h3>
                <p className="text-gray-600 mb-4">גיבוי אחרון: 15 נובמבר 2025, 23:00</p>
                <div className="space-y-3">
                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    צור גיבוי עכשיו
                  </button>
                  <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                    שחזר מגיבוי
                  </button>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    ייצא נתונים
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="ml-4 text-gray-600 hover:text-gray-800 lg:hidden"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center ml-3">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800"> ועד בתים</h1>
                <p className="text-xs text-gray-500">מערכת ניהול מתקדמת</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-reverse space-x-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center">
              <div className="text-left ml-3">
                <p className="text-sm font-semibold text-gray-800">מנהל מערכת</p>
                <p className="text-xs text-gray-500">admin@aa.co.il</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                מ
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 right-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20 mt-16 lg:mt-0`}>
          <nav className="p-4 space-y-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 ml-3" />
                  <span className="font-semibold">{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default VaadManagementSystem;