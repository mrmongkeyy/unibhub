const app = {
	noProfilePng:'./more/media/user.png',
	dataFiktif:[
		{
			title:'How to code a game using PYTHON!!!',
			username:'gemasajaa',
			profilepicture:'./more/media/gemaprofile.png',
			date:'17 Sep 2023',
			more:{
				view:[],
				share:[],
				like:[],
				comment:[]
			}
		},
		{
			title:'P3M Telah Resmi Menjadi UKM Di UNIB, Diharapkan Mampu Memberikan Sumbangsih Kepada Kejayaan Nama Besar Unib!',
			username:'gemasajaa',
			profilepicture:'./more/media/gemaprofile.png',
			date:'17 Sep 2023',
			more:{
				view:[],
				share:[],
				like:[],
				comment:[]
			}
		},
		{
			title:'How to code a game using PYTHON!!!',
			username:'gemasajaa',
			profilepicture:'./more/media/gemaprofile.png',
			date:'17 Sep 2023',
			more:{
				view:[],
				share:[],
				like:[],
				comment:[]
			}
		},
		{
			title:'P3M Telah Resmi Menjadi UKM Di UNIB, Diharapkan Mampu Memberikan Sumbangsih Kepada Kejayaan Nama Besar Unib!',
			username:'gemasajaa',
			profilepicture:'./more/media/gemaprofile.png',
			date:'17 Sep 2023',
			more:{
				view:[],
				share:[],
				like:[],
				comment:[]
			}
		},
		{
			title:'How to code a game using PYTHON!!!',
			username:'gemasajaa',
			profilepicture:'./more/media/gemaprofile.png',
			date:'17 Sep 2023',
			more:{
				view:[],
				share:[],
				like:[],
				comment:[]
			}
		},
		{
			title:'P3M Telah Resmi Menjadi UKM Di UNIB, Diharapkan Mampu Memberikan Sumbangsih Kepada Kejayaan Nama Besar Unib!',
			username:'gemasajaa',
			profilepicture:'./more/media/gemaprofile.png',
			date:'17 Sep 2023',
			more:{
				view:[],
				share:[],
				like:[],
				comment:[]
			}
		}
	],
	init(){
		this.doglas.init();
		this.ls.init();
		//view init.
		view.init();
		//flextoshowsa init.
		if(!this.flextoshowsa.init())return this.err();
	},
	userData:{},
	validDataChecker(x){
		const now = getTime();
		if(now>x.exp)return false;
		return true;
	},
	getInfoLogin(){
		if(this.userData.cleanEmail)return true;
		return false;
		const databefore = this.ls.get();
		if(databefore && this.validDataChecker(databefore)){
			this.userData = databefore;
			return true;
		}
		return false;
	},
	flextoshowsa:{
		init(){
			//if(!firebase || !navigator.onLine)return false;
			
			return true;
		}
	},
	doglas:{
		data:{
			apiKey: "AIzaSyDtBX4yOJ3b3sz4vyTXLmMttpOVHi3j2gk",
			authDomain: "thesimpsonsportal-ef851.firebaseapp.com",
			projectId: "thesimpsonsportal-ef851",
			storageBucket: "thesimpsonsportal-ef851.appspot.com",
			databaseURL:'https://thesimpsonsportal-ef851-default-rtdb.asia-southeast1.firebasedatabase.app',
			messagingSenderId: "226743571848",
			appId: "1:226743571848:web:51c5c3984409ef5c00163d"
		},
		init(){
			this.doglas.initializeApp(this.data);
		},
		doglas:firebase,
		do(args){ //[db/orsomething,parentchild,child,get/orupdate,datapass].
			return this.doglas[args[0]]().ref(`${args[1]}/${args[2]}`)[args[3]](args[4]);
		},
		save(args){
			return this.doglas.storage().ref().child(args[0]).put(args[1],args[2]);
		},
		get(refId){
			return this.doglas.database().ref(refId);
		}
	},
	err(){
		view.main.clear();
		forceRecheck(view.main,'Error, Youre OFF! Please Check Back Your Internet Connection!',true);
	},
	checkAdminLogin(datauser,toRemove){
		this.doglas.do(['database','admin',`${datauser.cleanEmail}`,'get']).then((callbackData)=>{
			const data = callbackData.val();
			if(!data){
				forceRecheck(view.main,'Admin Tidak Ditemukan! Periksa Kembali Email Anda!');	
				return false;
			}
			const passed = this.checkPass(datauser,data);
			if(!passed){
				forceRecheck(view.main,'Kata Sandi Salah! Periksa Kembali.');
				return false;
			}
			this.saveDataLogin(data);
			forceRecheck(view.main,`Selamat Datang Kembali! ${data.username}`);
			toRemove.remove();
		})
	},
	checkLogin(datauser,toRemove){
		this.doglas.do(['database','users',`${datauser.cleanEmail}`,'get']).then((callbackData)=>{
			const data = callbackData.val();
			if(!data){
				forceRecheck(view.main,'User Tidak Ditemukan! Periksa Kembali Email Anda!');	
				return false;
			}
			const passed = this.checkPass(datauser,data);
			if(!passed){
				forceRecheck(view.main,'Kata Sandi Salah! Periksa Kembali.');
				return false;
			}
			this.saveDataLogin(data);
			forceRecheck(view.main,`Selamat Datang Kembali! ${data.username}`);
			//handle callback if theres one.
			console.log(toRemove.after);
			if(toRemove.after)toRemove.after();
			toRemove.remove();
		})
	},
	checkPass(datauser,data){
		if(datauser.userPass === data.password)return true;
		return false;
	},
	saveDataLogin(datatosave){
		datatosave.exp = getTimePlus(600000);
		this.ls.put(datatosave);
		delete datatosave.password;
		this.userData = datatosave;
	},
	ls:{
		init(){
			this.id = 'simpsonsportal';
		},
		put(data){
			localStorage.setItem(this.id,JSON.stringify(data));
		},
		get(){
			return JSON.parse(localStorage.getItem(this.id));
		},
		remove(){
			localStorage.removeItem(this.id);
		}
	}
}

app.init();