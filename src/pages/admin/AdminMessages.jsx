import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Search } from 'lucide-react';
import { mockMessages } from '../../data/mockData';

const AdminMessages = () => {
  const [selectedChat, setSelectedChat] = useState(mockMessages[0]);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-1">Communicate with your clients</p>
      </motion.div>

      <div className="card overflow-hidden" style={{ height: '600px' }}>
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-12 md:col-span-4 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search clients..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {mockMessages.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-accent transition-colors ${
                    selectedChat?.id === chat.id ? 'bg-accent' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {chat.clientName.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-gray-900 truncate">{chat.clientName}</p>
                        {chat.unread && (
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                      <p className="text-xs text-gray-400 mt-1">{chat.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 flex flex-col">
            {selectedChat ? (
              <>
                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {selectedChat.clientName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{selectedChat.clientName}</p>
                      <p className="text-sm text-gray-500">Client</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 bg-accent">
                  <div className="space-y-4">
                    {selectedChat.messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg ${
                            msg.sender === 'admin'
                              ? 'bg-primary text-white'
                              : 'bg-white text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.sender === 'admin' ? 'text-white/70' : 'text-gray-500'
                            }`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button type="submit" className="btn-primary flex items-center gap-2">
                      <Send size={18} />
                      Send
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
