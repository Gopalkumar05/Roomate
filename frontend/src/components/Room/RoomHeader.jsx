// import React, { useState } from 'react';
// import { Plus, Download, Home, Crown, Edit3, Settings, Trash2, LogOut, UserPlus } from 'lucide-react';

// const RoomHeader = ({ 
//   room, 
//   currentUser, 
//   onUpdateRoom, 
//   onDeleteRoom, 
//   onLeaveRoom, 
//   onAddMember, 
//   onGeneratePDF, 
//   onAddExpense 
// }) => {
//   const [editingRoom, setEditingRoom] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);
//   const [showAddMember, setShowAddMember] = useState(false);
//   const [newMemberEmail, setNewMemberEmail] = useState('');
//   const [editForm, setEditForm] = useState({ 
//     name: room?.name || '', 
//     description: room?.description || '' 
//   });

//   const isRoomCreator = room && currentUser && room.createdBy._id === currentUser.userId;

//   const handleUpdateRoom = async () => {
//     const success = await onUpdateRoom(editForm);
//     if (success) {
//       setEditingRoom(false);
//     }
//   };

//   const handleAddMember = async () => {
//     if (!newMemberEmail.trim()) return;
    
//     const success = await onAddMember(newMemberEmail);
//     if (success) {
//       setNewMemberEmail('');
//       setShowAddMember(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//         <div className="space-y-2 flex-1">
//           {editingRoom ? (
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 value={editForm.name}
//                 onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
//                 className="text-2xl lg:text-3xl font-bold text-gray-900 bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none w-full"
//               />
//               <textarea
//                 value={editForm.description}
//                 onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
//                 className="text-gray-600 bg-transparent border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:outline-none w-full resize-none"
//                 rows="2"
//               />
//               <div className="flex gap-2">
//                 <button
//                   onClick={handleUpdateRoom}
//                   className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setEditingRoom(false)}
//                   className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <Home className="h-6 w-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center gap-2">
//                   <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{room.name}</h1>
//                   {isRoomCreator && <Crown className="h-5 w-5 text-yellow-500" />}
//                 </div>
//                 <p className="text-gray-600">{room.description}</p>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="flex flex-col sm:flex-row gap-3">
//           <div className="flex gap-2">
//             {isRoomCreator && !editingRoom && (
//               <button
//                 onClick={() => setEditingRoom(true)}
//                 className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200"
//               >
//                 <Edit3 size={16} />
//                 Edit
//               </button>
//             )}
//             <button
//               onClick={() => setShowSettings(!showSettings)}
//               className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200"
//             >
//               <Settings size={16} />
//               Settings
//             </button>
//           </div>
//           <button
//             onClick={onGeneratePDF}
//             className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium"
//           >
//             <Download size={20} />
//             Export PDF
//           </button>
//           <button
//             onClick={onAddExpense}
//             className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg shadow-blue-500/25"
//           >
//             <Plus size={20} />
//             Add Expense
//           </button>
//         </div>
//       </div>

//       {showSettings && (
//         <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
//           <div className="flex flex-col sm:flex-row gap-3">
//             {isRoomCreator ? (
//               <>
//                 <button
//                   onClick={onDeleteRoom}
//                   className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                 >
//                   <Trash2 size={16} />
//                   Delete Room
//                 </button>
//                 <button
//                   onClick={() => setShowAddMember(true)}
//                   className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//                 >
//                   <UserPlus size={16} />
//                   Add Member
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={onLeaveRoom}
//                 className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
//               >
//                 <LogOut size={16} />
//                 Leave Room
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       {showAddMember && (
//         <div className="mt-4 p-4 bg-white rounded-xl border border-gray-200 shadow-lg">
//           <h3 className="font-semibold mb-3">Add New Member</h3>
//           <div className="flex gap-2">
//             <input
//               type="email"
//               value={newMemberEmail}
//               onChange={(e) => setNewMemberEmail(e.target.value)}
//               placeholder="Enter email address"
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             <button
//               onClick={handleAddMember}
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//             >
//               Add
//             </button>
//             <button
//               onClick={() => setShowAddMember(false)}
//               className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomHeader;




import React, { useState } from 'react';
import { Plus, Download, Home, Crown, Edit3, Settings, Trash2, LogOut, UserPlus, MessageSquare } from 'lucide-react';

const RoomHeader = ({ 
  room, 
  currentUser, 
  onUpdateRoom, 
  onDeleteRoom, 
  onLeaveRoom, 
  onAddMember, 
  onGeneratePDF, 
  onAddExpense,
  onToggleChat,
  showChat,
  reminderCount
}) => {
  const [editingRoom, setEditingRoom] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [editForm, setEditForm] = useState({ 
    name: room?.name || '', 
    description: room?.description || '' 
  });

  const isRoomCreator = room && currentUser && room.createdBy._id === currentUser.userId;

  const handleUpdateRoom = async () => {
    const success = await onUpdateRoom(editForm);
    if (success) {
      setEditingRoom(false);
    }
  };

  const handleAddMember = async () => {
    if (!newMemberEmail.trim()) return;
    
    const success = await onAddMember(newMemberEmail);
    if (success) {
      setNewMemberEmail('');
      setShowAddMember(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2 flex-1">
          {editingRoom ? (
            <div className="space-y-3">
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="text-2xl lg:text-3xl font-bold text-gray-900 bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none w-full"
              />
              <textarea
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                className="text-gray-600 bg-transparent border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:outline-none w-full resize-none"
                rows="2"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleUpdateRoom}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingRoom(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{room.name}</h1>
                  {isRoomCreator && <Crown className="h-5 w-5 text-yellow-500" />}
                </div>
                <p className="text-gray-600">{room.description}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex gap-2">
            {isRoomCreator && !editingRoom && (
              <button
                onClick={() => setEditingRoom(true)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200"
              >
                <Edit3 size={16} />
                Edit
              </button>
            )}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200"
            >
              <Settings size={16} />
              Settings
            </button>
            <button
              onClick={onToggleChat}
              className={`flex items-center gap-2 px-4 py-3 border rounded-xl transition-all duration-200 ${
                showChat
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MessageSquare size={16} />
              Messages
              {reminderCount > 0 && (
                <span className={`px-2 py-1 rounded-full text-xs ${
                  showChat ? 'bg-white/20 text-white' : 'bg-blue-500 text-white'
                }`}>
                  {reminderCount}
                </span>
              )}
            </button>
          </div>
          <button
            onClick={onGeneratePDF}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium"
          >
            <Download size={20} />
            Export PDF
          </button>
          <button
            onClick={onAddExpense}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg shadow-blue-500/25"
          >
            <Plus size={20} />
            Add Expense
          </button>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {showSettings && (
        <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3">
            {isRoomCreator ? (
              <>
                <button
                  onClick={onDeleteRoom}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Trash2 size={16} />
                  Delete Room
                </button>
                <button
                  onClick={() => setShowAddMember(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <UserPlus size={16} />
                  Add Member
                </button>
              </>
            ) : (
              <button
                onClick={onLeaveRoom}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <LogOut size={16} />
                Leave Room
              </button>
            )}
          </div>
        </div>
      )}

      {showAddMember && (
        <div className="mt-4 p-4 bg-white rounded-xl border border-gray-200 shadow-lg">
          <h3 className="font-semibold mb-3">Add New Member</h3>
          <div className="flex gap-2">
            <input
              type="email"
              value={newMemberEmail}
              onChange={(e) => setNewMemberEmail(e.target.value)}
              placeholder="Enter email address"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleAddMember}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
            <button
              onClick={() => setShowAddMember(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomHeader;