function isAuthorized(user, action) {
    // Check user's role and permissions for the given action.
    const roles = {
      admin: ['create', 'read', 'update', 'delete'],
      user: ['read'],
    };
  
    if (user.role in roles && roles[user.role].includes(action)) {
      return true;
    }
    return false;
  }
  
  const user = { username: 'alice', role: 'user' };
  
  if (isAuthorized(user, 'read')) {
    console.log('User is authorized to read');
  } else {
    console.log('User is not authorized to read');
  }
  