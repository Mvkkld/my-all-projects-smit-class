import{
    auth,
    db,
    signOut,
    getDoc,
    getDocs ,
    doc,
    onAuthStateChanged, 
    collection,
    query,
    where,
    } from '../utils/utils.js'
  
  const logout_btn = document.getElementById('logout_btn');
  const login_link = document.getElementById('login_link');
  const user_img = document.getElementById('user_img');
  const events_cards_container = document.getElementById('events_cards_container');
  
  
  
  onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      login_link.style.display="none"  
      user_img.style.display="inline-block"  
      getUserInfo(uid);
      getMyEvents(user.uid)
      } else {
        // window.location.href = '../auth/login/index.html'
        login_link.style.display="inline-block"  
      user_img.style.display="none"  
      }
    });
    logout_btn.addEventListener('click', ()=>{
      signOut(auth);
    });
  
  
    function getUserInfo(uid){
      const userRef = doc (db, "users", uid);
      getDoc(userRef).then((data)=>{
        console.log("=>data", data.id);
        console.log("=>data", data.data());
        user_img.src = data.data().img;
      });
    }
  
  
  async function getMyEvents(uid){
  try{
    const q = query(collection(db, 'events'), where("createdBy", "==", uid));
    const querySnapshot = await getDocs(q);
    events_cards_container.innerHTML = ""
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  const event = doc.data()
  console.log("event =>",event);
  
  const  {banner, title, location, createdByEmail, desc,time, date} = event
  const card = `<div  class=" grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 max-w-md mt-10 p-6 mx-auto bg-blue-200 border border-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-10">
       
        <img src="${banner}"
         alt="Event Image" 
         class="rounded-t-lg">
        <div class="p-1">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Date: ${date}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Time: ${time}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Creator: ${createdByEmail}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: ${location}</p>
            <div>
            <button id="${doc.id}"
            
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ${auth?.currentUser && event?.likes?.includes(auth?.currentUser.uid)
               ? "Liked.." 
               : "Like"
              }${event?.likes?.length ? event?.likes?.length :''}
          </button>
        </div>
        </div>
    </div>`;
  
    events_cards_container.innerHTML += card;
  
  console.log(event)
  
    });
    
  }catch(err){
    alert(err)
  } 
  };
  