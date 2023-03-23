let notificationList = document.querySelectorAll('.notification')
notificationList[0].style.backgroundColor = 'hsl(210, 60%, 98%)'; 
notificationList[1].style.backgroundColor = 'hsl(210, 60%, 98%)'; 
notificationList[2].style.backgroundColor = 'hsl(210, 60%, 98%)'; 

document.querySelector('button').addEventListener('click', function() {
    let unreadLength = document.querySelectorAll('.dot').length

    for (i=unreadLength-1; i>-1; i--) {
        document.querySelectorAll('.dot')[i].classList.remove('dot')
        notificationList[i].style.backgroundColor = 'white';
    }
    
    document.querySelector('.notification-unread').innerHTML='0';
});

