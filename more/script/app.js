const app = {
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
		//view init.
		view.init();
		//flextoshowsa init.
		if(!this.flextoshowsa.init())return this.err();
	},
	getInfoLogin(){
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
		doglas:firebase
	},
	err(){
		view.main.clear();
		forceRecheck(view.main,'Error, Youre OFF! Please Check Back Your Internet Connection!',true);
	}
}

app.init();