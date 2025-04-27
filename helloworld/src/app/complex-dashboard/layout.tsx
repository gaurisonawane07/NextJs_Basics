import React from 'react'

export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications
} : {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {
  return (
    <>
    <div>{children}</div>
    <div style={{ display: 'flex', gap: '20px' }}> {/* Outer container for horizontal arrangement with spacing */}
  <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
    <div>Users</div>
    <div>{users}</div> {/* Assuming 'users' holds the user count or relevant info */}
  </div>

  <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
    <div>Revenue</div>
    <div>{revenue}</div> {/* Assuming 'revenue' holds the revenue value */}
  </div>

  <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', flexGrow: 1 }}>
    <div>Notifications</div>
    <div>{notifications}</div> {/* Assuming 'notifications' holds notification content */}
  </div>
</div>
    </>
  );
}
