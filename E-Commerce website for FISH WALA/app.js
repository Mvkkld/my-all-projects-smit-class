import{
  auth,
  db,
  signOut,
  getDoc,
  getDocs ,
  doc,
  storage,
  onAuthStateChanged, 
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove} from './utils/utils.js'

const logout_btn = document.getElementById('logout_btn');
const login_link = document.getElementById('login_link');
const user_img = document.getElementById('user_img');
const events_cards_container = document.getElementById('events_cards_container');


getAllEvents()
onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    login_link.style.display="none"  
    user_img.style.display="inline-block"  
    getUserInfo(uid);

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


async function getAllEvents(){
try{
  const querySnapshot = await getDocs(collection(db, "events"));
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
           onclick = "likeEvent(this)"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          ${auth?.currentUser && event?.likes?.includes(auth?.currentUser.uid)
             ? "Liked.." 
             : "Like"
            }${event?.likes?.length ? event?.likes?.length :''}
        </button>
      </div>
      </div>
  </div>`;

  window.likeEvent = likeEvent;
  events_cards_container.innerHTML += card;

console.log(event)

  });
  
}catch(err){
  alert(err)
} 
};

async function likeEvent(e){
  if(auth.currentUser){
    e.disabled = true
    const docRef = doc(db, 'events', e.id);
    if(e.innerText == 'Liked..'){

      updateDoc(docRef, {
        likes: arrayRemove(auth.currentUser.uid)
      })
          .then(()=>{
            
            e.innerText = 'Like'
            e.disabled = false

          })
          .catch((err)=>console.log(err));
 }else{

updateDoc(docRef, {
  likes: arrayUnion(auth.currentUser.uid)
})
    .then(()=>{
       
      e.innerText = 'Liked..'
    e.disabled = false

    })
    .catch((err)=>console.log(err));
}
  
}else{
    window.location.href = '/auth/login/index.html'
  }
}