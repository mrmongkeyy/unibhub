const app={noProfilePng:"./more/media/user.png",init(){if(this.doglas.init(),this.ls.init(),view.init(),!this.flextoshowsa.init())return this.err()},userData:{},validDataChecker:e=>!(getTime()>e.exp),getInfoLogin(){return!!this.userData.cleanEmail},flextoshowsa:{init:()=>!0},doglas:{data:{apiKey:"AIzaSyDtBX4yOJ3b3sz4vyTXLmMttpOVHi3j2gk",authDomain:"thesimpsonsportal-ef851.firebaseapp.com",projectId:"thesimpsonsportal-ef851",storageBucket:"thesimpsonsportal-ef851.appspot.com",databaseURL:"https://thesimpsonsportal-ef851-default-rtdb.asia-southeast1.firebasedatabase.app",messagingSenderId:"226743571848",appId:"1:226743571848:web:51c5c3984409ef5c00163d"},init(){this.doglas.initializeApp(this.data)},doglas:firebase,do(e){return this.doglas[e[0]]().ref(`${e[1]}/${e[2]}`)[e[3]](e[4])},save(e){return this.doglas.storage().ref().child(e[0]).put(e[1],e[2])},get(e){return this.doglas.database().ref(e)}},err(){view.main.clear(),forceRecheck(view.main,"Error, Youre OFF! Please Check Back Your Internet Connection!",!0)},checkAdminLogin(e,a){this.doglas.do(["database","admin",`${e.cleanEmail}`,"get"]).then(i=>{const t=i.val();return t?this.checkPass(e,t)?(this.saveDataLogin(t),forceRecheck(view.main,`Selamat Datang Kembali! ${t.username}`),void a.remove()):(forceRecheck(view.main,"Kata Sandi Salah! Periksa Kembali."),!1):(forceRecheck(view.main,"Admin Tidak Ditemukan! Periksa Kembali Email Anda!"),!1)})},checkLogin(e,a){this.doglas.do(["database","users",`${e.cleanEmail}`,"get"]).then(i=>{const t=i.val();return t?this.checkPass(e,t)?(this.saveDataLogin(t),forceRecheck(view.main,`Selamat Datang Kembali! ${t.username}`),console.log(a.after),a.after&&a.after(),void a.remove()):(forceRecheck(view.main,"Kata Sandi Salah! Periksa Kembali."),!1):(forceRecheck(view.main,"User Tidak Ditemukan! Periksa Kembali Email Anda!"),!1)})},checkPass:(e,a)=>e.userPass===a.password,saveDataLogin(e){e.exp=getTimePlus(6e5),this.ls.put(e),delete e.password,this.userData=e},ls:{init(){this.id="simpsonsportal"},put(e){localStorage.setItem(this.id,JSON.stringify(e))},get(){return JSON.parse(localStorage.getItem(this.id))},remove(){localStorage.removeItem(this.id)}}};app.init();