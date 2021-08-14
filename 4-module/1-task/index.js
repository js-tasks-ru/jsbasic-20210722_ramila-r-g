function makeFriendsList(friends) {
  let uList = document.createElement('ul');
  let users = []
  
  friends.forEach((friend) => {
    let newLi = document.createElement('li');
    users.push(friend.firstName + ' ' + friend.lastName)    
    uList.append(newLi);
    newLi.innerHTML = friend.firstName + ' ' + friend.lastName
  }
  );

  return uList;
};
