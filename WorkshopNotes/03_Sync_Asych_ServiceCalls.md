const getUser = () => {
  setTimeout(() => {
    return {name: 'Max'}
  }, 2000);
};

const user = getUser(); // This doesn't actually fetch the user
console.log(user.name); // This won't work

//Revised Version
:Using callbacks
const getUser = (cb) => {
  setTimeout(() => {
    cb({name: 'Max'});
  }, 2000);
};

getUser((user) => {
  console.log(user.name); // Prints 'Max' after 2 seconds
})

Using Named Functions:
// Use an anonymous function
getUser((user) => {
  console.log(user.name); // Prints 'Max' after 2 seconds
})
// Alternatively, use a named function:
getUser(handleUser); // <- This also works, just make sure to NOT execute the function here (handleUser() would be wrong!)
const handleUser = (user) => {
  console.log(user.name); // Prints 'Max' after 2 seconds
};
# WELCOME TO CALLBACK HELL

//callback hell: 

const checkAuth = (cb) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
    setTimeout(() => {
        cb({
            isAuth: true
        });
    }, 2000);
};
const getUser = (authInfo, cb) => {
    if (!authInfo.isAuth) {
        console.log('authentication fails')
        cb(null);
        return;
    }
    setTimeout(() => {
        cb({
            name: 'Max'
        });
    }, 2000);
};
checkAuth((authInfo) => {
    getUser(authInfo, (user) => {
        console.log(user.name);
    });
});

////The below logic is hard to write///may be end up with callback hell.

checkAuth((authInfo) => {
  getUser(authInfo, (user) => {
    console.log(user.name);
  });
});

////
//callback hell: 

const checkAuth = (cb) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
    setTimeout(() => {
        cb({
            isAuth: true
        });
    }, 2000);
};
const getUser = (authInfo, cb) => {
    if (!authInfo.isAuth) {
        console.log('authentication fails')
        cb(null);
        return;
    }
    setTimeout(() => {
        cb({
            name: 'Subramanian'
        });
    }, 2000);
};
const getUserName = (user, cb) => {
    if (user.name !== 'Subramanian') {
        //console.log('Name does not match');
        cb(null);
        return;
    }
    setTimeout(() => {
        cb({
            status: 'You are authenticated Person'
        });
    }, 2000);
}
checkAuth((authInfo) => {
    getUser(authInfo, (user) => {
        //console.log(user.name);
        getUserName(user, (status) => {
            console.log(status)
        });
    });
});

Features of callback Hell:
This problem is referred to as callback hell. It really can be a hell because you'll have a hard time changing one of your many layers of callbacks. Debugging it can be a pain and it certainly isn't readable anymore once you reach three or four levels of nesting.

>Also don't forget error handling.

# PROMISING A BETTER FUTURE

Callbacks are okay for single asynchronous operations but they certainly aren't perfect, we know that now. Fortunately, we're not the only ones discovering this issue. ES6 introduces a solution: Promises! Indeed, with the help of various third-party libraries, you could and can use the concept of promises in an ES5 code already. Here's how a promise works in JavaScript.

Using Promise Solves All problems of callback nesting:
//callback hell: 

const getUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'Max'
            });
        }, 2000);
    });
};

const checkAuth = (role) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
    return new Promise((resolve, reject) => {
        if (role === 'admin') {
            setTimeout(() => {
                resolve({
                    isAuth: true
                });
            }, 2000);
        } else {
            setTimeout(() => {
                reject({
                    isAuth: false
                });
            }, 2000);
        }
    });

};

//getUser().then((user) => console.log(user.name));
checkAuth('admin')
    .then(authStatus => getUser(authStatus))
    .then(user => console.log(user.name))
    .catch(error => console.log(error));