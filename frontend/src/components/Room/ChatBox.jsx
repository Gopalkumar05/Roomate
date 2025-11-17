import React from 'react';
import { MessageSquare, X, Trash2, Bell, Clock, User } from 'lucide-react';

const ChatBox = ({ messages, currentUser, onClearHistory, onClose }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isToday = (timestamp) => {
    const today = new Date();
    const messageDate = new Date(timestamp);
    return today.toDateString() === messageDate.toDateString();
  };

  const groupMessagesByDate = (messages) => {
    const groups = {};
    messages.forEach(message => {
      const date = formatDate(message.timestamp);
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });
    return groups;
  };

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-4 rounded-t-2xl text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <h3 className="font-semibold">Reminder Messages</h3>
            {messages.length > 0 && (
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {messages.length}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            {messages.length > 0 && (
              <button
                onClick={onClearHistory}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                title="Clear History"
              >
                <Trash2 size={16} />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <p className="text-blue-100 text-sm mt-1">
          All reminder messages sent in this room
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-8 w-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">No Messages Yet</h4>
            <p className="text-gray-600 text-sm">
              Reminder messages will appear here when sent to room members
            </p>
          </div>
        ) : (
          Object.entries(groupedMessages).map(([date, dateMessages]) => (
            <div key={date}>
              {/* Date Separator */}
              <div className="flex items-center justify-center my-4">
                <div className="bg-gray-100 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-600">
                    {isToday(dateMessages[0].timestamp) ? 'Today' : date}
                  </span>
                </div>
              </div>

              {/* Messages for this date */}
              {dateMessages.map((message) => (
                <div key={message.id} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bell className="h-4 w-4 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-sm font-semibold text-gray-900">
                            {message.from.name}
                          </span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">
                            To: {message.to.name}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-800 text-sm mb-2 bg-white p-3 rounded-lg border">
                        {message.message}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatTime(message.timestamp)}
                        </div>
                        <span className="text-blue-600 font-medium">Reminder</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
        <p className="text-xs text-gray-600 text-center">
          {messages.length === 0 
            ? "Send reminders to see them here" 
            : `${messages.length} reminder message${messages.length !== 1 ? 's' : ''}`
          }
        </p>
      </div>
    </div>
  );
};

export default ChatBox;