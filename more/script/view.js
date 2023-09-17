const userDatas = {
	username:'gemasajaa',
	name:'Rahmat Agem Pratama',
	bio:'Coding is more than writing a code, its the art of invention.',
	banner:'./more/media/banner.png',
	profile:'./more/media/gemaprofile.png',
	peoples:{
		following:[],
		follower:[]
	},
	privateInfo:{
		password:'Helloworldthisisgema',
		email:'gemalagifrominfinitydreams@gmail.com'
	},
	moreInfo:{
		hobbies:['Coding','Reading a book','Build Something'],
		job:['Founder & Ceo TOA','Software Engineer','College Student'],
		age:['19 Years'],
		email:['gemalagifrominfinitydreams@gmail.com'],
		website:['https://infinitydreams.cyclic.app']
	},
	content:{
		length:5,
		list:['randomid','randomid1','randomid2','randomid3','randomid4'],
		randomid:{
			username:'gemasajaa',
			title:'How to code using JS?',
			text:'This is the text',
			date:'13 Sep 2023',
			profilepicture:'./more/media/gemaprofile.png',
			more:{
				comment:[{
					username:'gemasajaa',
					date:'17 Sep 2023 19:00',
					text:'Haha Awsome, btw wth is this?! i dont know! Fuck this up! Shit this is suck!',
					profilepicture:'./more/media/gemaprofile.png',
					
				},{
					username:'gemasajaa',
					date:'17 Sep 2023 19:00',
					text:'Haha Awsome, btw wth is this?! i dont know! Fuck this up! Shit this is suck!',
					profilepicture:'./more/media/gemaprofile.png',
					
				},{
					username:'gemasajaa',
					date:'17 Sep 2023 19:00',
					text:'Haha Awsome, btw wth is this?! i dont know! Fuck this up! Shit this is suck!',
					profilepicture:'./more/media/gemaprofile.png',
					
				},{
					username:'gemasajaa',
					date:'17 Sep 2023 19:00',
					text:'Haha Awsome, btw wth is this?! i dont know! Fuck this up! Shit this is suck!',
					profilepicture:'./more/media/gemaprofile.png',
					
				},{
					username:'gemasajaa',
					date:'17 Sep 2023 19:00',
					text:'Haha Awsome, btw wth is this?! i dont know! Fuck this up! Shit this is suck!',
					profilepicture:'./more/media/gemaprofile.png',
					
				},{
					username:'gemasajaa',
					date:'17 Sep 2023 19:00',
					text:'Haha Awsome, btw wth is this?! i dont know! Fuck this up! Shit this is suck!',
					profilepicture:'./more/media/gemaprofile.png',
					
				}
				],
				like:[],
				view:[],
				share:[]
			}
		},
		randomid1:{
			username:'gemasajaa',
			title:'How to code using JS?',
			text:'This is the text',
			date:'13 Sep 2023',
			profilepicture:'./more/media/gemaprofile.png',
			more:{
				comment:[],
				like:[],
				view:[],
				share:[]
			}
		},
		randomid2:{
			username:'gemasajaa',
			title:'How to code using JS?',
			text:'This is the text',
			date:'13 Sep 2023',
			profilepicture:'./more/media/gemaprofile.png',
			more:{
				comment:[],
				like:[],
				view:[],
				share:[]
			}
		},
		randomid3:{
			username:'gemasajaa',
			title:'How to code using JS?',
			text:'This is the text',
			date:'13 Sep 2023',
			profilepicture:'./more/media/gemaprofile.png',
			more:{
				comment:[],
				like:[],
				view:[],
				share:[]
			}
		},
		randomid4:{
			username:'gemasajaa',
			title:'How to code using JS?',
			text:'This is the text',
			date:'13 Sep 2023',
			profilepicture:'./more/media/gemaprofile.png',
			more:{
				comment:[],
				like:[],
				view:[],
				share:[]
			}
		},
	}
}
const view = {
	body:find('body'),
	init(){
		this.main.addChild(this.header);
		this.main.addChild(this.content);
		this.main.addChild(this.footer);
		this.body.addChild(this.main);
	},
	main:makeElement('main',{
		style:`
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0px;
			left: 0px;
			display: flex;
			flex-direction: column;
			align-items: center;
		`
	}),
	header:makeElement('header',{
		style:`
			width:100%;
			height:200px;
			display:flex;
			justify-content:center;
			border-bottom:5px solid whitesmoke;
			background:white;
		`,
		innerHTML:`
			<div style="
				height:100%;
				display:flex;
				justify-content:space-around;
				align-items:center;
				flex-direction:column;
				width:100%;
			">
				<div style="
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content:center;
					/*background:#15244e;color:white;*/
				">
					<div style="
						cursor:pointer;
						font-size:24px;
						font-family:montserratbold;
					">circletask<span style=font-size:12px;font-family:montserratregular>.com</span></div>
				</div>
				<div style="
					display: flex;
					justify-content: space-between;
					height: 100%;
					display: flex;
					align-items: center;
					overflow:auto;
					overflow-y:hidden;
				" id=ourmenu class=innerBox>
					<div id=newPost style=padding-left:30px;>
						<img src=./more/media/addnew.png class=navimg>
						Post
					</div>
					<div id=displayList>
						<img src=./more/media/home.png class=navimg>
						Beranda
					</div>
					<div id=openMyproject>
						<img src=./more/media/task.png class=navimg>
						ProjectKu
					</div>
					<div id=openInbox>
						<img src=./more/media/message.png class=navimg>
						Pesan
					</div>
					<div id=openGlobalChat>
						<img src=./more/media/globe.png class=navimg>
						Global Chat
					</div>
					<div id=openNotif>
						<img src=./more/media/bell.png class=navimg>
						Notif
					</div>
					<div id=openProfile style=padding-right:30px;>
						<img src=./more/media/header.png class=navimg>
						Profil
					</div>
				</div>
			</div>
			
		`,
		navEvent(){
			this.findall('#ourmenu div').forEach(button=>{
				button.onclick = ()=>{
					view.content.saveRemove('#chooseType');
					view.content[button.id]([],'loadartikel',true);
				}
			})
		},
		onadded(){
			this.navEvent();
		}
	}),
	content:makeElement('content',{
		className:'innerBox fitborder',
		style:`
			background:white;
			height:100%;
			display:flex;
			align-items: center;
			overflow:hidden;
			flex-direction:column;
			position:relative;
		`,
		innerHTML:`
			<div style="
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10px;
				position:sticky;
				top:0;
				overflow:auto;
				height:48px;
				padding-bottom:0;
			">
				<div id=stateLabel
				style="
					margin-left:3%;
					width:100%;
				"
				>
					Beranda
				</div>
				<div style="
					cursor:pointer;
					display:none;
					margin-right:28px;
				"
				id=searchWare
				>
					<img src=./more/media/search.png class=navimg>
				</div>
				<div style="
					width: 100%;
					display: none;
					justify-content: flex-end;
					margin-right: 3%;
					gap:8px;
				"
				id=reactTo
				>
					<div style=display:flex;>
						<div class="buttonstyled" style="
							border-radius:20px;display:flex;
							align-items:center;gap:5px;background:none;
							font-size:12px;
						" id=view>10 Kali Dibaca</div>
					</div>
					
				</div>
				<div style="
					width: 100%;
					display: none;
					justify-content: flex-end;
					margin-right: 3%;
					gap:8px;
				"
				id=logout
				>
					<div style=display:flex;>
						<div class="buttonstyled" style="
							display: flex;
							align-items: center;
							gap: 5px;
							background: none;
							font-size: 12px;
							font-weight: bold;
							cursor: pointer;
							color:black;
						">
							<img src=./more/media/exit.png
							style="
								width:18px;
								height:18px;
							"
							>Keluar
						</div>
					</div>
					
				</div>
			</div>
			<div
			style="
				width:100%;
				height:100%;
				overflow:auto;
				overflow-x:hidden;
				position:relative;
			"
			id=linesparent
			></div>
		`,
		logoutEvent(){
			this.logout.onclick = ()=>{
				app.ls.remove();
				location.reload();
			}
		},
		clearLinesParent(){
			this.linesParent.clear();
		},
		onadded(){
			this.linesParent = this.find('#linesparent');
			this.stateLabel = this.find('#stateLabel');
			this.logout = this.find('#logout');
			this.reactTo = this.find('#reactTo');
			this.searchWare = this.find('#searchWare');
			
			//this.openArticle(app.dataFiktif);
			this.displayList([],'loadloker',true);
			
			//logoutbutton.
			this.logoutEvent();
		},
		displayList(data,nav,boot){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.searchDiv(nav,boot));
			data.forEach((item,i)=>{
				this.find('#linesparent').addChild(view.line(item,i+1,(i===data.length-1)?false:true));
			})
			//zerodata handler.
			if(data.length===0){
				this.find('#linesparent').addChild(view.nodata());
			}
			this.stateLabel.innerHTML = 'Beranda';
			this.reactTo.hide();
			this.searchWare.show('flex');
			this.logout.hide();
		},
		newArticle(){
			this.clearLinesParent();
			this.linesParent.addChild(view.articlenew());
			this.stateLabel.innerHTML = 'Artikel Baru';
			this.reactTo.hide();
			this.searchWare.hide();
		},
		newCerpen(){
			this.clearLinesParent();
			this.linesParent.addChild(view.cerpennew());
			this.stateLabel.innerHTML = 'Cerpen Baru';
			this.reactTo.hide();
			this.searchWare.hide();
		},
		openArticles(){
			this.clearLinesParent();
			this.linesParent.addChild(view.openArticles());
			this.stateLabel.innerHTML = 'Baca Artikel';
			this.reactTo.show('flex');
			this.searchWare.hide();
		},
		openShortStories(){
			this.clearLinesParent();
			this.linesParent.addChild(view.openShortStories());
			this.stateLabel.innerHTML = 'Baca Berita';
			this.reactTo.show('flex');
			this.searchWare.hide();
		},
		openJobs(){
			this.clearLinesParent();
			this.linesParent.addChild(view.openJobs());
			this.stateLabel.innerHTML = 'Info Loker';
			this.reactTo.show('flex');
			this.searchWare.hide();
		},
		openMyproject(data=[],nav='OnGoing',boot){
			if(!app.getInfoLogin()){
				view.content.getIn(()=>{view.content.openMyproject()});
				return forceRecheck(view.main,'Silahkan Login Lebih Dahulu!');
			}
			this.clearLinesParent();
			if(nav==='loadartikel')nav='OnGoing';
			this.find('#linesparent').addChild(view.myProjectDiv(nav,boot));
			data.forEach((item,i)=>{
				this.find('#linesparent').addChild(view.projectList(item,i+1,(i===data.length-1)?false:true));
			})
			//zerodata handler.
			if(data.length===0){
				this.find('#linesparent').addChild(view.nodata());
			}
			this.stateLabel.innerHTML = 'My Projects';
			this.reactTo.hide();
			this.searchWare.hide();
			this.logout.hide();
		},
		openGlobalChat(){
			if(!app.getInfoLogin()){
				view.content.getIn(()=>{view.content.openGlobalChat()});
				return forceRecheck(view.main,'Silahkan Login Lebih Dahulu!');
			}
			view.main.addChild(view.globalChat(()=>{
				view.content.displayList([],'loadartikel','true');
			}));
		},
		openServices(){
			this.clearLinesParent();
			this.linesParent.addChild(view.openServices());
			this.stateLabel.innerHTML = 'Info Jasa';
			this.reactTo.show('flex');
			this.searchWare.hide();
		},
		isInProfile(){
			let result = false;
			if(app.getInfoLogin()){
				result = true;
			}
			return result;
		},
		getIn(after){
			view.main.addChild(view.loginBox(after));
		},
		async openProfile(data=[],nav='home',boot,userId){
			if(typeof userId==='object')userId = null;
			let userData;
			if(!this.isInProfile() && !userId){
				return this.getIn(()=>{view.content.openProfile([],'home',false,null)});
			}
			this.clearLinesParent();
			if(userId){
				userData = (await app.doglas.do(['database','users',userId,'get'])).val();
			}
			if(nav==='loadartikel')nav='home';
			this.linesParent.addChild(view.profileDiv(nav,boot,userId));
			if(nav==='home')this.linesParent.addChild(view.profilePage(userData));
			else if(nav==='statistic')this.linesParent.addChild(view.statistic(userId));
			else {
				data.forEach((item,i)=>{
					this.find('#linesparent').addChild(view.line(item,i+1,(i===data.length-1)?false:true));
				})
			}
			this.stateLabel.innerHTML = 'Profil Pengguna';
			this.reactTo.hide();
			this.searchWare.hide();
			if(!userId)this.logout.show('flex');
		},
		newPost(){
			if(!app.getInfoLogin()){
				view.content.getIn(()=>{view.content.newPost()});
				return forceRecheck(view.main,'Silahkan Login Lebih Dahulu!');
			}
			this.addChild(view.newPost());
		},
		newJasa(){
			this.clearLinesParent();
			this.linesParent.addChild(view.jasanew());
			this.stateLabel.innerHTML = 'Post Jasa';
			this.reactTo.hide();
			this.searchWare.hide();
			this.logout.hide();
		},
		newLoker(){
			this.clearLinesParent();
			this.linesParent.addChild(view.lokernew());
			this.stateLabel.innerHTML = 'Post Loker';
			this.reactTo.hide();
			this.searchWare.hide();
			this.logout.hide();
		},
		openNotif(){
			if(!app.getInfoLogin()){
				view.content.getIn(()=>{view.content.openNotif()});
				return forceRecheck(view.main,'Silahkan Login Lebih Dahulu!');
			}
			this.clearLinesParent();
			this.linesParent.addChild(view.notif());
			this.stateLabel.innerHTML = 'Notifmu';
			this.reactTo.hide();
			this.searchWare.hide();
			this.logout.hide();
		},
		openInbox(data=[],nav='bid',boot){
			if(!app.getInfoLogin()){
				view.content.getIn(()=>{view.content.openInbox()});
				return forceRecheck(view.main,'Silahkan Login Lebih Dahulu!');
			}
			this.clearLinesParent();
			if(nav==='loadartikel')nav='bid';
			this.find('#linesparent').addChild(view.myInboxDiv(nav,boot));
			//update the user bid data.
			//app.userData.bid = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'get'])).val();
			app.userData[nav] = data;
			this.linesParent.addChild(view.inbox(nav));
			this.stateLabel.innerHTML = 'Inbox';
			this.reactTo.hide();
			this.searchWare.hide();
			this.logout.hide();
		}
	}),
	footer:makeElement('footer',{
		
	}),
	myProjectDiv(nav='OnGoing',boot=false){
		return makeElement('div',{
			nav,
			style:`
				width: 100%;
				display: flex;
				overflow: auto;
				background: white;
				border-bottom: 1px solid whitesmoke;
				align-items: center;
				position:sticky;
				top:0;
			`,
			innerHTML:`
				<div style="
					  width: 100%;
						display: flex;
						justify-content: flex-start;
						/* margin: 2%; */
						background: white;
				" id=berandadivmenu>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=OnGoing
					>
						<img src=./more/media/ongoing.png class=navimg>
						OnGoing
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=Finished
					>
						<img src=./more/media/finished.png class=navimg>
						Finished
					</div>
				</div>
			`,
			buttonSetup(){
				this.findall('#berandadivmenu div').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			onadded(){
				//set the nav.
				console.log(this.nav);
				this.find('#'+this.nav).style.borderBottom = '3px solid black';
				this.find('#'+this.nav).style.fontFamily = 'montserratbold';
				this.find('#'+this.nav).scrollIntoView();
				this.buttonSetup();
				if(boot){
					console.log('boot is true');
					this.OnGoing();
				}
			},
			OnGoing(){
				view.addLoading()
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/onGoingProjects`,'get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openMyproject(datacb,'OnGoing');
				})
			},
			Finished(){
				view.addLoading();
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/finishedProjects`,'get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openMyproject(datacb,'Finished');
				})
			}
		})
	},
	myInboxDiv(nav='bid',boot=false){
		return makeElement('div',{
			nav,
			style:`
				width: 100%;
				display: flex;
				overflow: auto;
				background: white;
				border-bottom: 1px solid whitesmoke;
				align-items: center;
				position:sticky;
				top:0;
			`,
			innerHTML:`
				<div style="
					  width: 100%;
						display: flex;
						justify-content: flex-start;
						/* margin: 2%; */
						background: white;
				" id=berandadivmenu>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=bid
					>
						<img src=./more/media/task.png class=navimg>
						Bid
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=inbox
					>
						<img src=./more/media/message.png class=navimg>
						Inbox
					</div>
				</div>
			`,
			buttonSetup(){
				this.findall('#berandadivmenu div').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			onadded(){
				//set the nav.
				console.log(this.nav);
				this.find('#'+this.nav).style.borderBottom = '3px solid black';
				this.find('#'+this.nav).style.fontFamily = 'montserratbold';
				this.find('#'+this.nav).scrollIntoView();
				this.buttonSetup();
				if(boot){
					this[this.nav]();
				}
			},
			bid(){
				view.addLoading();
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'get']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openInbox(datacb,'bid');
				})
			},
			inbox(){
				view.addLoading();
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/inbox`,'get']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openInbox(datacb,'inbox');
				})
			}
		})
	},
	searchDiv(nav='loadartikel',boot=false){
		return makeElement('div',{
			nav,
			style:`
				width: 100%;
				display: flex;
				overflow: auto;
				margin: 2% 0;
				background: white;
				align-items: center;
				position:sticky;
				top:0;
			`,
			innerHTML:`
				<div style="
					  width: 100%;
						display: flex;
						justify-content: flex-start;
						background: white;
				" id=berandadivmenu>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						width: 100%;
						justify-content: center;
						padding: 10px 20px;
					"
					id=loadloker
					>
						<img src=./more/media/task.png class=navimg>
						Project
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						width: 100%;
						justify-content: center;
						padding: 10px 20px;
					"
					id=loadjasa
					>
						<img src=./more/media/servicesicon.png class=navimg>
						Jasa
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px 20px;
						justify-content: center;
					"
					id=loadcerpen
					>
						<img src=./more/media/newsicon.png class=navimg>
						News
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px 20px;
						justify-content: center;
					"
					id=loadartikel
					>
						<img src=./more/media/articleicon.png class=navimg>
						Artikel
					</div>
				</div>
			`,
			buttonSetup(){
				this.findall('#berandadivmenu div').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			onadded(){
				//set the nav.
				this.find('#'+this.nav).style.borderBottom = '3px solid black';
				this.find('#'+this.nav).style.fontFamily = 'montserratbold';
				this.find('#'+this.nav).scrollIntoView();
				this.buttonSetup();
				if(boot)this.loadloker();
			},
			loadjasa(){
				view.addLoading();
				app.doglas.do(['database','post','Services','get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||{};
					view.content.displayList(objToArray(datacb),'loadjasa');
				})
			},
			loadcerpen(){
				view.addLoading();
				app.doglas.do(['database','post','ShortStories','get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||{};
					view.content.displayList(objToArray(datacb),'loadcerpen');
				})
			},
			loadartikel(){
				view.addLoading();
				app.doglas.do(['database','post','Articles','get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||{};
					view.content.displayList(objToArray(datacb),'loadartikel');
				})
			},
			loadloker(){
				view.addLoading();
				app.doglas.do(['database','post','Jobs','get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||{};
					view.content.displayList(objToArray(datacb),'loadloker');
				})
			}
		})
	},
	line(data,i,bt=true){
		const Dot = (data.title.length>100)?'...':'';
		if(!data.more){
			data.more = {
				view:[]
			}
		}
		return makeElement('div',{
			className:'lines',
			innerHTML:`
				<div class=item style=${!bt?'border-bottom:0;':''}>
					<div class=thumbnail>
						<div>#${i}</div>
					</div>
					<div class=moreinfo>
						<div id=fee>
							${data.type==='Jobs'?'Maks':'Min'} Bid Rp. ${getPrice(data.maxFee||data.minFee)}
						</div>
						<div class=title>
							${data.title.slice(0,100) + Dot}
						</div>
						<div class=addressinfo>
							<div>
								<img class=profileimg src=${data.profilepicture}>
							</div>
							<div class=username>${data.username},</div>
							<div class=date>${data.time}</div>
						</div>
						<div class=vshareinfo>
							<div>
								<span>${data.more.view.length} Kali Dibaca.</span>
							</div>
						</div>
					</div>
					<div style="
						height:68px;
						width:30%;
						border-radius:10px;
						margin-right:5px;
					">
						<img src=${data.preview||'./more/media/nothumbnailnew.png'} style="
							height:100%;
							width:100%;
							object-fit:cover;
							border-radius:10px;
						">
					</div>
				</div>
			`,
			onadded(){
				if(data.maxFee||data.minFee){
					this.find('.vshareinfo').remove();
				}else this.find('#fee').remove();
				this.find('.title').onclick = ()=>{
					app.dataContent = data;
					view.content[`open${data.type}`]();
				}
				this.find('.username').onclick = ()=>{
					app.dataContent = data;
					view.addLoading();
					view.content.openProfile([],'home',false,data.owner);
				}
			},
		})
	},
	projectList(data,i,bt=true){
		const Dot = (data.title.length>100)?'...':'';
		return makeElement('div',{
			className:'lines',
			innerHTML:`
				<div class=item style=${!bt?'border-bottom:0;':''}>
					<div class=thumbnail>
						<div>#${i}</div>
					</div>
					<div class=moreinfo>
						<div id=fee>
							Fee Rp. ${getPrice(data.fee)}
						</div>
						<div class=title>
							${data.title.slice(0,100) + Dot}
						</div>
						<div class=addressinfo>
							<div>
								<img class=profileimg src=${data.owner===app.userData.cleanEmail?data.bidderProfileIdPic:data.profilepicture}>
							</div>
							<div class=username>${data.owner===app.userData.cleanEmail?data.bidder:data.username},</div>
							<div class=date>${data.time}</div>
						</div>
					</div>
					<div style="
						height:68px;
						width:30%;
						border-radius:10px;
						margin-right:5px;
					">
						<img src=${data.preview||'./more/media/nothumbnailnew.png'} style="
							height:100%;
							width:100%;
							object-fit:cover;
							border-radius:10px;
						">
					</div>
				</div>
			`,
			onadded(){
				this.find('.title').onclick = ()=>{
					this.chatData = data;
					this.openChat();
				}
				this.find('.username').onclick = ()=>{
					app.dataContent = data;
					view.addLoading();
					view.content.openProfile([],'home',true,data.bidderProfileId);
				}
			},
			openChat(){
				view.main.addChild(view.OnGoingChat(this.chatData,()=>{
					view.content.openMyproject([],'OnGoing',true);
				}));
			}
		})
	},
	articlenew(){
		return makeElement('div',{
			style:`
				margin:3%;
				display:flex;
				flex-direction:column;
				gap:10px;
				height:94%;
			`,
			innerHTML:`
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Preview
					</div>
					<div style="
						height:100px;
						width:100%;
						background:whitesmoke;
						border:1px solid #e0e0e0;
						display:flex;
						align-items:center;
						justify-content:center;
						position:relative;
					">
						<div style="
							width:100%;
							height:100%;
						">
							<img id=preview style="
								width:100%;
								height:100%;
								object-fit:cover;
								display:none;
							">
						</div>
						<div style="
							background: white;
							padding: 5px;
							border-radius: 50%;
							border: 1px solid #e0e0e0;
							cursor: pointer;
							position:absolute;
							z-index:1;
						" id=choosePreview class=thebutton>
							<img src=./more/media/plus.png style="
								width:32px;
								height:32px;
							">
						</div>
					</div>
				</div>
				<div style="
					width: 100%;
					justify-content: space-around;
					display: flex;
					gap:10px;
					position:sticky;
					top:0;
					background:white;
				"
				id=newartilebuttons
				>
					<div style=width:100%; class=thebutton id=publish>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/whiteupload.png
								style="
									width:16px;
									height:16px;
								"
							>Terbitkan</div>
					</div>
				</div>
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Judul Artikel
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Judul Artikel Disini..." style="height:100%;resize:none;border-radius:0;" id=title></textarea>
					</div>
				</div>
				<div style="
					height:80%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Isi<span class=star>* <span class=sosmall>min 2000 characters</span></span>
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Isi Artikel..." style="height:100%;resize:none;border-radius:0 0 20px 20px;" id=description></textarea>
					</div>
				</div>
			`,
			choosePreview(){
				const showPreview = (file)=>{
					this.filepreview = file;
					const fs = new FileReader();
					fs.onload = ()=>{
						this.find('#preview').src = fs.result;
						this.find('#preview').show('block');
					}
					fs.readAsDataURL(file);
				}
				if(!this.preview)this.preview = makeElement('input',{
					type:'file',
					accept:'image/*',
					onchange(){
						const file = this.files[0];
						showPreview(file);
					}
				})
				this.preview.click();
			},
			collectData(){
				const Data = {};
				if(this.filepreview)Data.preview = this.filepreview;
				this.findall('textarea').forEach(input=>{
					Data[input.id] = input.value;
				})
				Object.assign(Data,{
					time:getFullDate(),
					owner:app.userData.cleanEmail,
					type:"Articles",
					postId:getUniqueID(),
					username:app.userData.username,
					profilepicture:app.userData.profilepicture||app.noProfilePng,
					more:{
						like:[],
						share:[],
						comments:[],
						view:[]
					}
				})
				return Data;
			},
			setupButton(){
				this.findall('.thebutton').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			addFiles(){

			},
			saveToDraft(){

			},
			publish(){
				const data = this.collectData();
				if(data.description.length<2000)return forceRecheck(view.main,'Maaf Konten Terlalu Sedikit, Dibutuhkan Minimal 2000 Huruf.');
				view.main.addChild(view.loadingPost(data));
			},
			onadded(){
				console.log('called');
				this.setupButton();
			}
		})
	},
	jasanew(){
		return makeElement('div',{
			style:`
				margin:3%;
				display:flex;
				flex-direction:column;
				gap:10px;
				height:94%;
			`,
			innerHTML:`
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Preview
					</div>
					<div style="
						height:100px;
						width:100%;
						background:whitesmoke;
						border:1px solid #e0e0e0;
						display:flex;
						align-items:center;
						justify-content:center;
						position:relative;
					">
						<div style="
							width:100%;
							height:100%;
						">
							<img id=preview style="
								width:100%;
								height:100%;
								object-fit:cover;
								display:none;
							">
						</div>
						<div style="
							background: white;
							padding: 5px;
							border-radius: 50%;
							border: 1px solid #e0e0e0;
							cursor: pointer;
							position:absolute;
							z-index:1;
						" id=choosePreview class=thebutton>
							<img src=./more/media/plus.png style="
								width:32px;
								height:32px;
							">
						</div>
					</div>
				</div>
				<div style="
					width: 100%;
					justify-content: space-around;
					display: flex;
					gap:10px;
					position:sticky;
					top:0;
					background:white;
				"
				id=newartilebuttons
				>
					<div style=width:100%; class=thebutton id=publish>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/whiteupload.png
								style="
									width:16px;
									height:16px;
								"
							>Terbitkan</div>
					</div>
				</div>
				<div style="
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Min-Fee
					</div>
					<div>
						<input placeholder="Misal 200.000.00" type=number style="height:100%;border-radius:0;">
					</div>
				</div>
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Nama Jasa
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Nama Pekerjaan Disini..." style="height:100%;resize:none;border-radius:0;" id=title></textarea>
					</div>
				</div>
				<div style="
					height:80%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Deskripsi Dan Persyaratan
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Keterangan Disini..." style="height:100%;resize:none;border-radius:0 0 20px 20px;" id=description></textarea>
					</div>
				</div>
			`,
			choosePreview(){
				const showPreview = (file)=>{
					this.filepreview = file;
					const fs = new FileReader();
					fs.onload = ()=>{
						this.find('#preview').src = fs.result;
						this.find('#preview').show('block');
					}
					fs.readAsDataURL(file);
				}
				if(!this.preview)this.preview = makeElement('input',{
					type:'file',
					accept:'image/*',
					onchange(){
						const file = this.files[0];
						showPreview(file);
					}
				})
				this.preview.click();
			},
			collectData(){
				const minFee = this.find('input').value;
				const Data = {minFee};
				if(this.filepreview)Data.preview = this.filepreview;
				this.findall('textarea').forEach(input=>{
					Data[input.id] = input.value;
				})
				Object.assign(Data,{
					time:getFullDate(),
					owner:app.userData.cleanEmail,
					type:"Services",
					postId:getUniqueID(),
					username:app.userData.username,
					profilepicture:app.userData.profilepicture||app.noProfilePng,
					more:{
						like:[],
						share:[],
						comments:[],
						view:[]
					}
				})
				return Data;
			},
			setupButton(){
				this.findall('.thebutton').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			addFiles(){

			},
			saveToDraft(){

			},
			publish(){
				const data = this.collectData();
				view.main.addChild(view.loadingPost(data));
			},
			onadded(){
				this.setupButton();
			}
		})
	},
	lokernew(){
		return makeElement('div',{
			style:`
				margin:3%;
				display:flex;
				flex-direction:column;
				gap:10px;
				height:94%;
			`,
			innerHTML:`
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Preview
					</div>
					<div style="
						height:100px;
						width:100%;
						background:whitesmoke;
						border:1px solid #e0e0e0;
						display:flex;
						align-items:center;
						justify-content:center;
						position:relative;
					">
						<div style="
							width:100%;
							height:100%;
						">
							<img id=preview style="
								width:100%;
								height:100%;
								object-fit:cover;
								display:none;
							">
						</div>
						<div style="
							background: white;
							padding: 5px;
							border-radius: 50%;
							border: 1px solid #e0e0e0;
							cursor: pointer;
							position:absolute;
							z-index:1;
						" id=choosePreview class=thebutton>
							<img src=./more/media/plus.png style="
								width:32px;
								height:32px;
							">
						</div>
					</div>
				</div>
				<div style="
					width: 100%;
					justify-content: space-around;
					display: flex;
					gap:10px;
					position:sticky;
					top:0;
					background:white;
				"
				id=newartilebuttons
				>
					<div style=width:100%; class=thebutton id=publish>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/whiteupload.png
								style="
									width:16px;
									height:16px;
								"
							>Terbitkan</div>
					</div>
				</div>
				<div style="
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Max-Fee
					</div>
					<div>
						<input placeholder="Misal 200.000.00" type=number style="height:100%;border-radius:0;">
					</div>
				</div>
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Nama Pekerjaan
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Nama Pekerjaan Disini..." style="height:100%;resize:none;border-radius:0;" id=title></textarea>
					</div>
				</div>
				<div style="
					height:80%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Deskripsi Dan Persyaratan
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Keterangan Disini..." style="height:100%;resize:none;border-radius:0 0 20px 20px;" id=description></textarea>
					</div>
				</div>
			`,
			choosePreview(){
				const showPreview = (file)=>{
					this.filepreview = file;
					const fs = new FileReader();
					fs.onload = ()=>{
						this.find('#preview').src = fs.result;
						this.find('#preview').show('block');
					}
					fs.readAsDataURL(file);
				}
				if(!this.preview)this.preview = makeElement('input',{
					type:'file',
					accept:'image/*',
					onchange(){
						const file = this.files[0];
						showPreview(file);
					}
				})
				this.preview.click();
			},
			collectData(){
				const maxFee = this.find('input').value;
				const Data = {maxFee};
				if(this.filepreview)Data.preview = this.filepreview;
				this.findall('textarea').forEach(input=>{
					Data[input.id] = input.value;
				})
				Object.assign(Data,{
					time:getFullDate(),
					owner:app.userData.cleanEmail,
					type:"Jobs",
					postId:getUniqueID(),
					username:app.userData.username,
					profilepicture:app.userData.profilepicture||app.noProfilePng,
					more:{
						like:[],
						share:[],
						comments:[],
						view:[]
					},
					winner:'unset'
				})
				return Data;
			},
			setupButton(){
				this.findall('.thebutton').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			addFiles(){

			},
			saveToDraft(){

			},
			publish(){
				const data = this.collectData();
				view.main.addChild(view.loadingPost(data));
			},
			onadded(){
				this.setupButton();
			}
		})
	},
	openArticles(){
		const data = app.dataContent;
		return makeElement('div',{
			style:`
				padding:0 3%;
				height:100%;
				overflow:auto;
				display:flex;
				flex-direction:column;
			`,
			innerHTML:`
				<div style="
					display:flex;
					align-items:center;
					gap:8px;
					margin-top:10px;
				">
					<div>
						<img class=profileimg src=./more/media/gemaprofile.png>
					</div>
					<div class=username>${data.username},</div>
					<div class=date>${data.time}</div>
				</div>
				<div style="
					font-family:montserratbold;
					margin:10px 0;
				">${data.title}</div>
				<div style="
					width:100%;
					margin-bottom:10px;
				">
					<img src=${data.preview||'./more/media/nothumbnailnew.png'} style="
						width:100%;
						height:100%;
						object-fit:cover;
					">
				</div>
				<div style="
					height:100%;
				">
					${data.description.replaceAll('\n','<br>')}
					<div style="
						position:sticky;
						bottom:0;
						width:100%;
						height:50px;
						left:0;
						display:flex;
						justify-content:center;
					">
						<div style="
							padding:20px;
							padding-bottom:10px;
							background:#15244e;
							color:white;
							border:1px solid black;
							border-bottom:none;
							border-radius:20px 20px 0 0;
							gap:10px;
							display:flex;
							justify-content:center;
							align-items:center;
							cursor:pointer;
						">
							Lihat Komentar
						</div>
					</div>
				</div>
				
			`,
			onadded(){
				//this.generateComment('randomid');
				this.find('.username').onclick = ()=>{
					app.dataContent = data;
					view.addLoading();
					view.content.openProfile([],'home',false,data.owner);
				}
			},
			generateComment(articleId){
				this.addChild(makeElement('div',{
					onadded(){
						this.addChild(view.comment(userData.content[articleId].more.comment));
					}
				}))
			}
		})
	},
	openServices(){
		const data = app.dataContent;
		return makeElement('div',{
			style:`
				padding:0 3%;
				height:100%;
				display:flex;
				flex-direction:column;
				overflow:auto;
			`,
			innerHTML:`
				<div style="
					width:100%;
					height:200px;
				">
					<img src=${data.preview||'./more/media/nothumbnailnew.png'} style="
						width:100%;
						height:100%;
						object-fit:cover;
					">
				</div>
				<div style="
					display:flex;
					align-items:center;
					gap:8px;
					margin:10px 0;
				">
					<div>
						<img class=profileimg src=${data.profilepicture||app.noProfilePng}>
					</div>
					<div class=username>${data.username},</div>
					<div class=date>${data.time}</div>
				</div>
				<div id=fee>${data.type==='Jobs'?'Maks Bid':'Min Bid'} Rp. ${getPrice(data.maxFee||data.minFee)}</div>
				<div style="
					height:100%;
				">
					<div style="
						font-family:montserratbold;
						margin:10px 0;
					">${data.title}</div>
					<div>${data.description.replaceAll('\n','<br>')}</div>
				</div>
				<div style="
					position:sticky;
					bottom:0;
					width:100%;
					height:50px;
					left:0;
					display:flex;
					justify-content:center;
				">
					<div style="
						padding:20px;
						padding-bottom:10px;
						background:#15244e;
						color:white;
						border-bottom:none;
						border-radius:20px 20px 0 0;
						gap:10px;
						display:${app.userData?data.owner===app.userData.cleanEmail?'none':'flex':'flex'};
						justify-content:center;
						align-items:center;
						cursor:pointer;
					" id=dooffers>
						Buat Penawaran
					</div>
					<div style="
						padding:20px;
						padding-bottom:10px;
						background:red;
						color:white;
						border-bottom:none;
						border-radius:20px 20px 0 0;
						gap:10px;
						display:${app.userData?data.owner===app.userData.cleanEmail?'flex':'none':'none'};
						justify-content:center;
						align-items:center;
						cursor:pointer;
					" id=delete>
						Hapus Penawaran
					</div>
				</div>
			`,
			onadded(){
				this.find('#dooffers').onclick = ()=>{
					this.doOffers();
				}
				this.find('.username').onclick = ()=>{
					app.dataContent = data;
					view.addLoading();
					view.content.openProfile([],'home',false,data.owner);
				}
			},
			doOffers(){
				if(!app.getInfoLogin()){
					view.content.getIn(()=>{
						view.content.openJobs();
					});
					return forceRecheck(view.main,'Silahkan Login Terlebih Dahulu!');
				}
				aaaaaaview.main.addChild(view.servicesOfferPage({subject:data.title,minFee:data.minFee,type:data.type,postid:data.postId,owner:data.owner,profilepicture:data.profilepicture}));
			}
		})
	},
	openJobs(){
		const data = app.dataContent;
		return makeElement('div',{
			style:`
				padding:0 3%;
				height:100%;
				display:flex;
				flex-direction:column;
				overflow:auto;
			`,
			innerHTML:`
				<div style="
					width:100%;
					height:200px;
				">
					<img src=${data.preview||'./more/media/nothumbnailnew.png'} style="
						width:100%;
						height:100%;
						object-fit:cover;
					">
				</div>
				<div style="
					display:flex;
					align-items:center;
					gap:8px;
					margin:10px 0;
				">
					<div>
						<img class=profileimg src=${data.profilepicture||app.noProfilePng}>
					</div>
					<div class=username>${data.username},</div>
					<div class=date>${data.time}</div>
				</div>
				<div id=fee>${data.type==='Jobs'?'Maks Bid':'Min Bid'} Rp. ${getPrice(data.maxFee||data.minFee)}</div>
				<div style="
					height:100%;
				">
					<div style="
						font-family:montserratbold;
						margin:10px 0;
					">${data.title}</div>
					<div>${data.description.replaceAll('\n','<br>')}</div>
				</div>
				<div style="
					position:sticky;
					bottom:0;
					width:100%;
					height:50px;
					left:0;
					display:flex;
					justify-content:center;
				">
					<div style="
						padding:20px;
						padding-bottom:10px;
						background:#15244e;
						color:white;
						border-bottom:none;
						border-radius:20px 20px 0 0;
						gap:10px;
						display:${app.userData?data.owner===app.userData.cleanEmail?'none':'flex':'flex'};
						justify-content:center;
						align-items:center;
						cursor:pointer;
					" id=dooffers>
						Buat Penawaran
					</div>
					<div style="
						padding:20px;
						padding-bottom:10px;
						background:red;
						color:white;
						border-bottom:none;
						border-radius:20px 20px 0 0;
						gap:10px;
						display:${app.userData?data.owner===app.userData.cleanEmail?'flex':'none':'none'};
						justify-content:center;
						align-items:center;
						cursor:pointer;
					" id=delete>
						Hapus Penawaran
					</div>
				</div>
			`,
			onadded(){
				this.find('#dooffers').onclick = ()=>{this.doOffers()};
				this.find('#delete').onclick = ()=>{this.deletePost()};
				this.find('.username').onclick = ()=>{
					app.dataContent = data;
					view.addLoading();
					view.content.openProfile([],'home',false,data.owner);
				}
			},
			deletePost(){
				view.main.addChild(view.userRemovePost(data));
			},
			doOffers(){
				if(!app.getInfoLogin()){
					view.content.getIn(()=>{
						view.content.openJobs();
					});
					return forceRecheck(view.main,'Silahkan Login Terlebih Dahulu!');
				}
				view.main.addChild(view.jobsOfferPage({subject:data.title,maxFee:data.maxFee,type:data.type,postid:data.postId,owner:data.owner,profilepicture:data.profilepicture}));
			}
		})
	},
	userRemovePost(datatoupload){
		return makeElement('div',{
			datatoupload,
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:center;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
					border-radius:0 0 20px 20px;
					background:white;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:3%;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Proses Uploading
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					">
						<div id=text>
							Mohon Tunggu Sebentar, Sedang Mengapus Data.
						</div>
					</div>
				</div>
			`,
			handleResponse(x){
				if(!x){
					this.text.innerHTML = 'Data Berhasil Hapus';
				}else{
					this.text.innerHTML = 'Terjadi masalah saat menghapus, coba lagi nanti.';
					this.remove();
				}
			},
			async DoRequest(){
				//send notif to owner.
				const ownerNotifs = (await app.doglas.do(['database','users',`${this.datatoupload.owner}/notif`,'get'])).val()||[];
				ownerNotifs.push({
					profilepicture:app.userData.profilepicture,
					who:'Kamu',
					when:getFullDate(),
					what:`Menghapus postingan ${this.datatoupload.type} ${this.datatoupload.title}`
				})
				await app.doglas.do(['database','users',`${this.datatoupload.owner}/notif`,'set',ownerNotifs]);
				await app.doglas.do(['database','post',`${this.datatoupload.type}/${this.datatoupload.postId}`,'remove']);
				this.handleResponse();
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{
					view.content.displayList([],'loadartikel',true);
					this.remove();
				}
				this.text = this.find('#text');
				this.DoRequest();
			}
		})
	},
	openShortStories(){
		const data = app.dataContent;
		return makeElement('div',{
			style:`
				padding:0 3%;
				height:100%;
				overflow:auto;
				display:flex;
				flex-direction:column;
			`,
			innerHTML:`
				<div style="
					display:flex;
					align-items:center;
					gap:8px;
					margin-top:10px;
				">
					<div>
						<img class=profileimg src=./more/media/gemaprofile.png>
					</div>
					<div class=username>${data.username},</div>
					<div class=date>${data.time}</div>
				</div>
				<div style="
					font-family:montserratbold;
					margin:10px 0;
				">${data.title}</div>
				<div style="
					width:100%;
					margin-bottom:10px;
				">
					<img src=${data.preview||'./more/media/nothumbnailnew.png'} style="
						width:100%;
						height:100%;
						object-fit:cover;
					">
				</div>
				<div style="
					height:100%;
				">
					${data.description.replaceAll('\n','<br>')}
					<div style="
						position:sticky;
						bottom:0;
						width:100%;
						height:50px;
						left:0;
						display:flex;
						justify-content:center;
					">
						<div style="
							padding:20px;
							padding-bottom:10px;
							background:#15244e;
							color:white;
							border:1px solid black;
							border-bottom:none;
							border-radius:20px 20px 0 0;
							gap:10px;
							display:flex;
							justify-content:center;
							align-items:center;
							cursor:pointer;
						">
							Lihat Komentar
						</div>
					</div>
				</div>
			`,
			onadded(){
				//this.generateComment('randomid');
				this.find('.username').onclick = ()=>{
					app.dataContent = data;
					view.addLoading();
					view.content.openProfile([],'home',false,data.owner);
				}
			},
			generateComment(articleId){
				this.addChild(makeElement('div',{
					onadded(){
						this.addChild(view.comment(userData.content[articleId].more.comment));
					}
				}))
			}
		})
	},
	profilePage(userData){
		if(!userData)userData = app.userData;
		if(!userData.peoples){
			userData.peoples = {
				followers:[],
				following:[],
				projects:[]
			}
		}
		return makeElement('div',{
			style:`
				border-radius:0 0 20px 20px;
				position:relative;
			`,
			innerHTML:`
				<div style="
					height:150px;
					width:100%;
					background:#15244e;
					position:relative;
				">
					<img id=bannerimg style="
						width:100%;
						height:150px;
						object-fit:cover;
					" src="${userData.bannerpic}" ${!userData.bannerpic?'hidden':''}>
					<div style="
						position: absolute;
						top: 0;
						right: 0;
						padding: 10px;
						background: white;
						display: ${userData.cleanEmail===app.userData.cleanEmail?'flex':'none'};
						align-items: center;
						justify-content: center;
						border-radius: 0 0 0 20px;
						border: 2px solid whitesmoke;
						cursor:pointer;
					" id=editbanner>
						<img src=./more/media/edit.png style="
							width:24px;
							height:24px;
						">
					</div>
				</div>
				<div id=topFront
				style="
					height: 300px;
					width: 88%;
					position: absolute;
					top: 0;
					left: 0;
					display: flex;
					align-items: center;
					margin: 0 6%;
					justify-content:space-between;
				"
				>
					<div style="
						padding:8px;
						background:white;
						border-radius:50%;
						width:128px;
						height:128px;
						position:relative;
					">
						<img src=${userData.profilepicture||app.noProfilePng}
						style="
							width:128px;
							height:128px;
							object-fit:cover;
							border-radius:50%;
						"
						id=profilepicture
						>
						<div style="
							position: absolute;
							bottom: 0;
							right: 0;
							padding: 10px;
							background: white;
							border: 2px solid whitesmoke;
							border-radius: 50%;
							cursor: pointer;
							display:${userData.cleanEmail===app.userData.cleanEmail?'':'none'};
						" id=editPicture>
							<img src=./more/media/edit.png style="
								width:24px;
								height:24px;
							">
						</div>
					</div>
					<div style="
						padding:8px;
						background:white;
						border:2px solid whitesmoke;
						border-radius:20px;
						display: ${userData.cleanEmail===app.userData.cleanEmail?'flex':'none'};
						gap:5px;
						cursor:pointer;
					" id=editProfile>
						<img src=./more/media/edit.png
						style="
							width:24px;
							height:24px;
							object-fit:cover;
						"
						>Edit Profil
					</div>
				</div>
				<div
				style="
					top: 0;
					left: 0;
					display: flex;
					flex-direction: column;
					border-bottom: 1px solid whitesmoke;
				"
				>
					<div style="
						margin: 78px 6% 20px 6%;
					" id=info>
						<div style="
							font-family:montserratbold;
						"><span>@${userData.username}</span></div>
						<div style="
							color:gray;
						"><span>${userData.name||'-'}</span></div>
						<div style="
							color:gray;
						"><span>${userData.bio||'-'}</span></div>
						<div style="
							display: flex;
							gap: 10px;
							margin-top:10px;
						">
							<div>
								<div>${userData.peoples.followers.length} followers</div>
							</div>
							<div>
								<div>${userData.peoples.following.length} following</div>
							</div>
							<div>
								<div>${userData.peoples.projects.length} Projects</div>
							</div>
						</div>
					</div>
				</div>
				<div style="
					border-bottom:1px solid whitesmoke;
					display: ${userData.cleanEmail===app.userData.cleanEmail?'none':'flex'};
					color: white;
					font-family: 'montserratbold';
					overflow:auto;
				">
					<div
					style="
						width:94%;
						height:100%;
						display:flex;
						align-items:center;
						margin:10px 6%;
						gap:8px;
						justify-content:space-around;
					"
					>
						<div>
							<div class="button buttonstyled" style="
								border-radius:20px;display:flex;
								align-items:center;gap:5px;font-size:10px;
							" id=chat>
								<img src=./more/media/whitechat.png
									style="
										width:16px;
										height:16px;
									"
								>CHAT</div>
						</div>
						<div>
							<div class="button buttonstyled" style="
								border-radius:20px;display:flex;
								align-items:center;gap:5px;font-size:10px;
							" id=follow>
								<img src=./more/media/followwhite.png
								style="
									width:16px;
									height:16px;
								"
								>FOLLOW</div>
						</div>
					</div>
				</div>
			`,
			onadded(){
				this.generateMore();
				//this.generateContent();
				
				//setup edit profile.
				this.find('#editProfile').onclick = ()=>{
					this.edit();
				}
				this.find('#editPicture').onclick = ()=>{
					this.editPicture();
				}
				this.find('#editbanner').onclick = ()=>{
					this.editbanner();
				}
				this.find('#chat').onclick = ()=>{
					this.sendmemsg();
				}

				//if loading.
				view.unloading();
			},
			generateMore(){
				for(let i in userData.more){
					this.find('#info').addChild(makeElement('div',{
						style:`
							margin-top: 10px;
							border-top: 1px solid whitesmoke;
							padding-top: 2px;
						`,
						innerHTML:`
							<div>${i}</div>
							<div id=infodata
							style="
								display:flex;
								gap:8px;
								overflow:auto;
							"
							>
								<div style="
									padding:2px 5px;
									background:whitesmoke;
									border-radius:20px;
									white-space: nowrap;
								">
									${userData.more[i]}
								</div>
							</div>
						`
					}))
				}
			},
			generateContent(){
				this.addChild(makeElement('div',{
					onadded(){
						userData.content.list.forEach((id,i)=>{
							const borderState = (i==userData.content.length-1)?false:true;
							this.addChild(view.line(userData.content[id],i+1,borderState));
						})
					}
				}))
			},
			edit(){
				view.main.addChild(view.editPop());
			},
			editbanner(){
				view.main.addChild(view.editBanner(this));
			},
			editPicture(){
				view.main.addChild(view.editPic(this));
			},
			followme(){},
			async sendmemsg(){
				if(!app.getInfoLogin()){
					view.content.getIn(()=>{this.sendmemsg()});
					return forceRecheck(view.main,'Silahkan Login Lebih Dahulu!');
				}
				const chatList = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/inbox`,'get'])).val()||[];
				
				//case is only checking for user, not with opponent.
				//have to check the opponent.
				let ourRoom;
				const opponentChatList = (await app.doglas.do(['database','users',`${userData.cleanEmail}/inbox`,'get'])).val()||[];
				opponentChatList.forEach((item)=>{
					if(item.to===app.userData.cleanEmail){
						ourRoom = item;
						return
					}
				})
				
				//checking the chat list.
				//finding the userId. If One, this mean i dont have to create new room
				let room = null;
				chatList.forEach((item)=>{
					console.log(item.to,userData.cleanEmail);
					if(item.to===userData.cleanEmail){
						room = item;
						return
					}
				})
				let roomId;
				if(!room){
					//no room found. make new one.
					//send notif to both user.
					//for sender.
					if(!ourRoom)roomId = getUniqueID();
					else roomId = ourRoom.roomId;
					//get sender chat list.
					const chatList = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/inbox`,'get'])).val()||[];
					room = {roomId,to:userData.cleanEmail,toProfile:userData.profilepicture,date:getFullDate(),toUsername:userData.username};
					chatList.push(room);
					await app.doglas.do(['database','users',`${app.userData.cleanEmail}/inbox`,'set',chatList]);
					//set initial data.
					await app.doglas.do(['database','privateChat',`${roomId}/peoples`,'set',[app.userData.cleanEmail,userData.cleanEmail]]);
				}

				if(!ourRoom){
					console.log('Opps, theres no room at this db, so i build one');
					//for reciever.
					if(!roomId)roomId=room.roomId;
					const recieverChatList = (await app.doglas.do(['database','users',`${userData.cleanEmail}/inbox`,'get'])).val()||[];
					recieverChatList.push({roomId,to:app.userData.cleanEmail,toProfile:app.userData.profilepicture,date:getFullDate(),toUsername:app.userData.username});
					await app.doglas.do(['database','users',`${userData.cleanEmail}/inbox`,'set',recieverChatList]);	
				}
				
				view.main.addChild(view.openPrivateChat(room));
				console.log(userData);
			}
		})
	},
	comment(datacomment){
		return makeElement('div',{
			style:`
				margin-top:10px;
			`,
			onadded(){
				datacomment.forEach((comment,i)=>{
					this.addChild(makeElement('div',{
						style:`
							display:flex;
							gap:10px;
							align-item:center;
							margin-top:8px;
							margin-bottom:${i===datacomment.length-1?20:0}px;
						`,
						innerHTML:`
							<div>
								<img src=${comment.profilepicture}
								style="
									width:24px;
									height:24px;
									border-radius:50%;
									margin-top:8px;
								"
								>
							</div>
							<div>
								<div style="
									display:flex;
									gap:5px;
								">
									<div>${comment.username}</div>
									<div>${comment.date}</div>
								</div>
								<div>${comment.text}</div>
							</div>
						`
					}))
				})
			}
		})
	},
	newPost(){
		return makeElement('div',{
			id:'chooseType',
			style:`
				position:absolute;
				top:0;
				left:0;
				background:rgba(0, 0, 0, 0.25);
				width:100%;
				height:100%;
				display:flex;
				align-items:flex-start;
				z-index:1;
			`,
			innerHTML:`
			<div style="
				background: white;
				width: 92%;
				padding: 4%;
				display: flex;
				flex-direction: column;
				overflow: auto;
				height: 100%;
				padding-top:0;
			">
				<div style="
					font-family:montserratbold;
					display:flex;
					align-items:center;
					justify-content:space-between;
					padding:0 5px;
					position:sticky;
					top:0;
					padding:20px;
					background:white;
				">
					Postingan Baru
					<img src=./more/media/close.png class=navimg style="
						width:16px;
						height:16px;
						cursor:pointer;
					" id=closethis>
				</div>
				<div class=newpostmenu>
					<div id=newCerpen class=child>
						<img src=./more/media/newsicon.png>
						<div>
							<div>News</div>
							<div style="font-family:montserratregular">Posting Berita terbaru, bagikan informasi!</div>
						</div>
					</div>
					<div id=newArticle class=child>
						<img src=./more/media/articleicon.png>
						<div>
							<div>Artikel</div>
							<div style="font-family:montserratregular">Posting Artikel, Dan Bagikan Pemikiranmu!</div>
						</div>
					</div>
					<div id=newJasa class=child>
						<img src=./more/media/servicesicon.png>
						<div>
							<div>Jasa</div>
							<div style="font-family:montserratregular">Posting Jasa, Dan Temukan Klienmu!</div>
						</div>
					</div>
					<div id=newLoker class=child>
						<img src=./more/media/task.png>
						<div>
							<div>Loker</div>
							<div style="font-family:montserratregular">Posting Tugasmu, Dan Biarkan Mereka Yang Nyelesain!</div>
						</div>
					</div>
				</div>
			</div>
			`,
			buttonEvent(){
				this.findall('.newpostmenu .child').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
						this.find('#closethis').click();
					}
				})
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{
					this.remove();
				}
				this.buttonEvent();
			},
			newArticle(){
				view.content.newArticle();
			},
			newCerpen(){
				view.content.newCerpen();
			},
			newJasa(){
				view.content.newJasa();
			},
			newLoker(){
				view.content.newLoker();
			}
		})
	},
	loginBox(after){
		return makeElement('div',{
			after,
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					background:white;
					height:100%;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Login circletask
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						flex-direction:column;
						gap:10px;
					">
						<div>
							<div>Email</div>
							<div>
								<input placeholder="Masukan Email" style=border-radius:0; type=email id=userEmail>
							</div>
						</div>
						<div>
							<div>Password</div>
							<div>
								<input placeholder="Masukan Password" style=border-radius:0; type=password id=userPass>
							</div>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					" id=buttons>
						<div style="
							width: 100%;
							text-align: center;
							display:flex;
							justify-content:center;
							align-items:center;
							gap:5px;
						" class=button id=goIn>
							<img src=./more/media/whitelogin.png style="
								width:24px;
								height:24px;
							">
							Masuk
						</div>
						<div style="
							width: 100%;
							text-align: center;
							display:flex;
							justify-content:center;
							align-items:center;
							gap:5px;
						" class=button id=goSignin>
							<img src=./more/media/whitesignup.png style="
								width:24px;
								height:24px;
							">
							Daftar
						</div>
					</div>
				</div>
			`,
			buttonEvent(){
				this.findall('#buttons div').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			collectData(){
				const data = {};
				this.findall('input').forEach(input=>{
					data[input.id] = input.value;
				})
				if(data.userEmail){
					if(data.userEmail.indexOf('@')!=-1)
						data.cleanEmail = data.userEmail.slice(0,data.userEmail.indexOf('@'));
					else data.cleanEmail = data.userEmail;
				}
				return data;
			},
			goIn(){
				//time to check user login data.
				const userPData = this.collectData();
				app.checkLogin(userPData,this);
			},
			goSignin(){
				view.main.addChild(view.siginBox());
				this.remove();
			},
			onadded(){
				//close Event.
				this.find('#closethis').onclick = ()=>{this.remove()}
				this.buttonEvent();
			}
		})
	},
	siginBox(){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
				position:absolute;z-index:1;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
					background:white;
					height:100%;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Akun Baru circletask
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						flex-direction:column;
						gap:10px;
					" id=form>
						<div id=username>
							<div>Username<span class=star>*</span></div>
							<div>
								<input type=text placeholder="Masukan Username" style=border-radius:0;>
							</div>
						</div>
						<div id=emailuser>
							<div>Email<span class=star>*</span></div>
							<div>
								<input type=email placeholder="Masukan Email" style=border-radius:0;>
							</div>
						</div>
						<div id=userpassone>
							<div>Password<span class=star>* <span class=sosmall>min 6 digits</span></span></div>
							<div>
								<input type=password placeholder="Masukan Password" style=border-radius:0; required>
							</div>
						</div>
						<div id=userpasstwo>
							<div>Ulagi Password<span class=star>* <span class=sosmall>min 6 digits</span></span></div>
							<div>
								<input type=password placeholder="Masukan Password" style=border-radius:0;>
							</div>
						</div>
					</div>
					<div id=loading style="
						padding:20px;
						display:none;
						align-items:center;
						justify-content:center;
					">
						Menyimpan data anda, tunggu sebentar!
					</div>
					<div id=anounce style="
						padding:20px;
						display:none;
						align-items:center;
						justify-content:center;
					">
						Maaf, ada masalah saat proses penyimpanan data anda!
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					" id=buttons>
						<div style="
							width: 100%;
							text-align: center;
							display:flex;
							justify-content:center;
							align-items:center;
							gap:5px;
						" class=button id=goSignin>
							<img src=./more/media/whitesignup.png style="
								width:24px;
								height:24px;
							">
							Daftar
						</div>
						<div style="
							width: 100%;
							text-align: center;
							display:flex;
							justify-content:center;
							align-items:center;
							gap:5px;
						" class=button id=goIn>
							<img src=./more/media/whitelogin.png style="
								width:24px;
								height:24px;
							">
							Masuk
						</div>
					</div>
				</div>
			`,
			buttonEvent(){
				this.findall('#buttons div').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			goIn(){
				view.main.addChild(view.loginBox());
				this.remove();
			},
			collectData(){
				const datauser = {len:0};
				this.findall('input').forEach(input=>{
					if(input.value.length>0){
						datauser[input.parentElement.parentElement.id] = {input,value:input.value};
						datauser.len += 1;
					}else{
						input.showUp((el)=>{
							el.style.borderColor = 'red';
						},(el)=>{
							el.style.borderColor = '#e0e0e0';
						});
					}
				})
				return datauser;
			},
			getComplete(validLen){
				const data = this.collectData();
				if(data.len===validLen)return data;
				return false;
			},
			validate(data,rules){
				let index = 0;
				let result = [];
				let back;
				for(let i in data){
					if(i==='len')continue;
					result.push(rules[index](data[i],back));
					back = data[i];
					index += 1;
				}
				return result;
			},
			rulesSignIn(){
				return [
					(value,back)=>{
						return true;
					},
					//email rules
					(value,back)=>{
						if(value.value.indexOf('@')===-1){
							value.input.showUp((el)=>{
								el.style.borderColor = 'red';
							},(el)=>{
								el.style.borderColor = '#e0e0e0';
							});
							forceRecheck(view.main,'Email Tidak Valid!');
							return false;
						}return true;
					},
					//password
					(value,back)=>{
						return true;
					},
					//password
					(value,back)=>{
						if(value.value !== back.value){
							value.input.showUp((el)=>{
								el.style.borderColor = 'red';
							},(el)=>{
								el.style.borderColor = '#e0e0e0';
							});
							back.input.showUp((el)=>{
								el.style.borderColor = 'red';
							},(el)=>{
								el.style.borderColor = '#e0e0e0';
							});
							forceRecheck(view.main,'Password Tidak Sama!');
							return false;
						}else if(value.value.length < 6){
							value.input.showUp((el)=>{
								el.style.borderColor = 'red';
							},(el)=>{
								el.style.borderColor = '#e0e0e0';
							});
							back.input.showUp((el)=>{
								el.style.borderColor = 'red';
							},(el)=>{
								el.style.borderColor = '#e0e0e0';
							});
							forceRecheck(view.main,'Password Minimum 6 Digit!');
							return false;
						}
						return true;
					}
				]
			},
			goSignin(){
				const data = this.getComplete(4);
				if(!data)return forceRecheck(view.main,'Lengkapi Data Terlebih Dahulu!');
				//now validating the data.
				const rst = this.validate(data,this.rulesSignIn());
				if(!rst.includes(false))this.completeIt(data);
			},
			hideFormAndButtons(){
				this.find('#form').hide();
				this.find('#buttons').hide();
			},
			showTheAnounce(msg){
				this.find('#loading').hide();
				const anounce = this.find('#anounce');
				anounce.innerText = msg;
				anounce.show('flex');
			},
			completeIt(data){
				this.submitData({
					username:data.username.value,
					password:data.userpassone.value,
					email:data.emailuser.value,
					uniqueId:getUniqueID(),
					date:getFullDate(),
					cleanEmail:data.emailuser.value.slice(0,data.emailuser.value.indexOf('@'))
				});
			},
			submitData(data){
				this.hideFormAndButtons();
				this.find('#loading').show('flex');
				app.doglas.do(['database','users',data.cleanEmail,'update',data]).then(()=>{
					this.showTheAnounce('Pendaftaran Berhasil! Silahkan Lakukan Login.');
					setTimeout(()=>{this.goIn()},1000);
				});
			},
			onadded(){
				//close Event.
				this.find('#closethis').onclick = ()=>{this.remove()}
				this.buttonEvent();
			}
		})
	},
	cerpennew(){
		return makeElement('div',{
			style:`
				margin:3%;
				display:flex;
				flex-direction:column;
				gap:10px;
				height:94%;
			`,
			innerHTML:`
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Preview
					</div>
					<div style="
						height:100px;
						width:100%;
						background:whitesmoke;
						border:1px solid #e0e0e0;
						display:flex;
						align-items:center;
						justify-content:center;
						position:relative;
					">
						<div style="
							width:100%;
							height:100%;
						">
							<img id=preview style="
								width:100%;
								height:100%;
								object-fit:cover;
								display:none;
							">
						</div>
						<div style="
							background: white;
							padding: 5px;
							border-radius: 50%;
							border: 1px solid #e0e0e0;
							cursor: pointer;
							position:absolute;
							z-index:1;
						" id=choosePreview class=thebutton>
							<img src=./more/media/plus.png style="
								width:32px;
								height:32px;
							">
						</div>
					</div>
				</div>
				<div style="
					width: 100%;
					justify-content: space-around;
					display: flex;
					gap:10px;
					position:sticky;
					top:0;
					background:white;
				"
				id=newartilebuttons
				>
					<div style=width:100%; class=thebutton id=publish>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/whiteupload.png
								style="
									width:16px;
									height:16px;
								"
							>Terbitkan</div>
					</div>
				</div>
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Judul Berita
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Judul Berita Disini..." style="height:100%;resize:none;border-radius:0;" id=title></textarea>
					</div>
				</div>
				<div style="
					height:80%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:montserratbold;
					">
						Isi<span class=star>* <span class=sosmall>min 1000 characters</span></span>
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Berita..." style="height:100%;resize:none;border-radius:0 0 20px 20px;" id=description></textarea>
					</div>
				</div>
			`,
			choosePreview(){
				const showPreview = (file)=>{
					this.filepreview = file;
					const fs = new FileReader();
					fs.onload = ()=>{
						this.find('#preview').src = fs.result;
						this.find('#preview').show('block');
					}
					fs.readAsDataURL(file);
				}
				if(!this.preview)this.preview = makeElement('input',{
					type:'file',
					accept:'image/*',
					onchange(){
						const file = this.files[0];
						showPreview(file);
					}
				})
				this.preview.click();
			},
			collectData(){
				const Data = {};
				if(this.filepreview)Data.preview = this.filepreview;
				this.findall('textarea').forEach(input=>{
					Data[input.id] = input.value;
				})
				Object.assign(Data,{
					time:getFullDate(),
					owner:app.userData.cleanEmail,
					type:"ShortStories",
					postId:getUniqueID(),
					username:app.userData.username,
					profilepicture:app.userData.profilepicture||app.noProfilePng
				})
				return Data;
			},
			setupButton(){
				this.findall('.thebutton').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			addFiles(){

			},
			saveToDraft(){

			},
			publish(){
				const data = this.collectData();
				if(data.description.length<1000)return forceRecheck(view.main,'Maaf Konten Terlalu Sedikit, Dibutuhkan Minimal 1000 Huruf.');
				view.main.addChild(view.loadingPost(data));
			},
			onadded(){
				console.log('called');
				this.setupButton();
			}
		})
	},
	notif(){
		return makeElement('div',{
			style:`
				width:96%;
				height:96%;
				gap:12px;
				display:flex;
				flex-direction:column;
				padding:2%;
				overflow:auto;
				cursor:pointer;
			`,
			className:'NotifParent',
			generateNotifList(NotifList){
				for(let i=NotifList.length-1;i>=0;i--){
					const item = NotifList[i];
					this.addChild(makeElement('div',{
						style:`
							width:96%;
							display:flex;
							gap:12px;
							padding:2%;
							align-items:center;
							border-bottom:${i===0?'':'1px solid whitesmoke'};
						`,
						innerHTML:`
							<div style="
								width:10%;
							">
								<img src=${item.profilepicture} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>							
							<div style="
								width:90%;
							">
								<div>${item.who}, ${item.when}</div>
								<div class=bold>${item.what}</div>
							</div>
						`
					}))
				}
				if(NotifList.length===0){
					this.addChild(makeElement('div',{
						style:`
							width:96%;
							display:flex;
							gap:12px;
							padding:2%;
							align-items:center;
						`,
						innerHTML:`
							Belum Ada Notifikasi...
						`
					}))
				}
			},
			onadded(){
				this.loadNotifData();
			},
			async loadNotifData(){
				view.addLoading();
				const data = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/notif`,'get'])).val()||[];
				view.unloading();
				this.generateNotifList(data);
			},
		})
	},
	loadingPost(datatoupload){
		return makeElement('div',{
			datatoupload,
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:center;
				background:#00000040;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					border-radius:0 0 20px 20px;
					background:white;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:3%;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Proses Uploading
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					">
						<div id=text>
							Mohon Tunggu Sebentar, Sedang Mengupload Data.
						</div>
					</div>
				</div>
			`,
			handleResponse(x){
				console.log(x);
				if(!x){
					this.text.innerHTML = 'Data berhasil diupload, menunggu persetujuan dari admin untuk dipublish';
					view.content.displayList([],'loadloker',true);
				}else{
					this.text.innerHTML = 'Terjadi Masalah Saat Mengupload, coba lagi nanti.';
					this.remove();
				}
			},
			async DoRequest(){
				console.log(this.datatoupload);
				if(this.datatoupload.preview){
					//upload preview file.first.
					const file = await app.doglas.save([getUniqueID(),this.datatoupload.preview,this.datatoupload.preview.contentType]);
					const url = await file.ref.getDownloadURL();
					this.datatoupload.preview = url;
				}
				const x = await app.doglas.do(['database','pending',`${this.datatoupload.type}/${this.datatoupload.postId}`,'set',this.datatoupload]);
				this.handleResponse(x);
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{this.remove()};
				this.text = this.find('#text');
				this.DoRequest();
			}
		})
	},
	editPop(){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					background:white;
					height:100%;
					display:flex;
					flex-direction:column;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Edit Profil
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:flex-start;
						gap:10px;
						overflow:auto;
						flex-direction:column;
					" id=datasparent>
						<div>
							<div>Username</div>
							<div>
								<input value=${app.userData.username} readonly id=username>
							</div>
						</div>
						<div>
							<div>Nama</div>
							<div>
								<input placeholder="Masukan Nama Anda" id=name value="${app.userData.name||''}">
							</div>
						</div>
						<div>
							<div>Bio</div>
							<div>
								<input placeholder="Masukan Bio" id=bio value="${app.userData.bio||''}">
							</div>
						</div>
						<div style="
							margin-top:10px;
							display:flex;
							flex-direction:column;
							gap:8px;
							align-items:center;
						">
							<div>Info Tambahan</div>
							<div style="
								cursor:pointer;
								border:1px solid black;
								padding:10px;
								border-radius:50%;
							" id=moreinfobutton>
								<img src=./more/media/plus.png style="
									width:24px;
									height:24px;
								">
							</div>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					" id=save>
						<div class=button id=goSignin style="
							width: 100%;
							text-align: center;
							border-radius:20px;
						">
							Simpan
						</div>
					</div>
				</div>
			`,
			handleResponse(x,data){
				if(!x){
					forceRecheck(view.main,'Berhasil Mengedit Profil');
					Object.assign(app.userData,data);
					view.content.openProfile([],'home',false,null);
					this.remove();
				}
			},
			generateMore(){
				for(let i in app.userData.more){
					this.find('#datasparent').addBefore(makeElement('div',{
						innerHTML:`
							<div>
								<div>${i}</div>
								<div>
									<input placeholder="Masukan Nama Anda" id="${i}" value="${app.userData.more[i]}">
								</div>
							</div>
						`
					}),this.find('#datasparent').children[this.find('#datasparent').children.length-1]);
				}
			},
			DoRequest(data){
				app.doglas.do(['database','users',`${app.userData.cleanEmail}`,'update',data]).then((x)=>{
					this.handleResponse(x,data);
				})
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{this.remove()};
				this.find('#save').onclick = ()=>{this.save()};
				//this.text = this.find('#text');
				//this.DoRequest();
				this.moreInfo();
				this.generateMore();
			},
			collectData(){
				const userData = {more:{}};
				this.findall('input').forEach((input,i)=>{
					if(input.value.length>0){
						if(i>2){
							userData.more[input.id] = input.value;
						}else userData[input.id] = input.value;
					}
				})
				return userData;
			},
			save(){
				this.DoRequest(this.collectData());
			},
			moreInfo(){
				this.find('#moreinfobutton').onclick = ()=>{
					view.main.addChild(view.moreinfoadd(this));
				}
			},
			add(data){
				this.find('#datasparent').addBefore(makeElement('div',{
					innerHTML:`
						<div>${data.iddata}</div>
						<div>
							<input placeholder="Masukan ${data.iddata}" id="${data.iddata}" value="${data.valuedata}">
						</div>
					`,
				}),this.find('#datasparent').children[this.find('#datasparent').children.length-1]);
				this.find('#moreinfobutton').scrollIntoView();
			}
		})
	},
	nodata(){
		return makeElement('div',{
			innerHTML:`
				Belum Ada Data Terbaru.
			`,
			style:`
				width:100%;
				height:200px;
				display:flex;
				align-items:center;
				justify-content:center;
			`
		})
	},
	moreinfoadd(goal){
		return makeElement('div',{
			style:`
				position:absolute;
				top:0;
				left:0;
				width:100%;
				height:100%;
				display:flex;
				justify-content:flex-end;
				align-items:flex-start;
				background:rgba(0, 0, 0, 0.25);
				z-index:1;
			`,
			innerHTML:`
				<div class=innerBox style="
					background:white;
					height:100%;
				">
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Data Tambahan
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="padding:10px 20px;">
						<div>Nama Data</div>
						<div>
							<input placeholder="Masukan Nama Data" id=iddata>
						</div>
					</div>
					<div style="padding:10px 20px;">
						<div>Isi Data</div>
						<div>
							<input placeholder="Masukan Isi Data" id=valuedata>
						</div>
					</div>
					<div style="
						padding:10px 20px;
						display:flex;
						justify-content:center;
						gap:10px;
					" id=thebutton>
						<div class=button id=goSignin style="
							width: 100%;
							text-align: center;
							border-radius:20px;
						">
							Tambah Data
						</div>
					</div>
				</div>
			`,
			collectData(){
				const moreData = {};
				this.findall('input').forEach((input)=>{
					moreData[input.id] = input.value;
				})
				return moreData;
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{this.remove()};
				this.find('#thebutton').onclick = ()=>{
					goal.add(this.collectData());
					this.remove();
				}
			}
		})
	},
	editPic(profilePage){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					background:white;
					display:flex;
					flex-direction:column;
					height:100%;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Edit Foto Profil
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:flex-start;
						gap:10px;
						overflow:auto;
						flex-direction:column;
					" id=datasparent>
						<div>
							<div>Pilih Foto</div>
							<div>
								<input id=fileimg type=file accept=image/*>
							</div>
						</div>
						<div>
							<div>Preview</div>
							<div
							style="
								display: flex;
								justify-content: center;
								background: whitesmoke;
								padding: 20px 0;
								border: 1px solid #e0e0e0;
							"
							>
								<div style="
									padding:8px;
									background:white;
									border-radius:50%;
									width:128px;
									height:128px;
								">
									<img id=preview src=${app.userData.profilepicture||app.noProfilePng}
									style="
										width:128px;
										height:128px;
										object-fit:cover;
										border-radius:50%;
									"
									>
								</div>
							</div>
						</div>
					</div>
					<div id=upnotice style="
						padding:20px;
						text-align:center;
						display:none;
					">
						Mohon Tunggu, Sedang Mengupload Foto Profil
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					" id=save>
						<div class=button id=goSignin style="
							width: 100%;
							text-align: center;
							border-radius:20px;
						">
							Simpan
						</div>
					</div>
				</div>
			`,
			getfile(){
				const getbutton = this.find('#fileimg');
				getbutton.onchange = ()=>{
					this.file = getbutton.files[0];
					this.showPreview();
				}
			},
			showPreview(){
				const fn = new FileReader();
				fn.onload = ()=>{
					this.preview.src = fn.result;
					this.find('#save').onclick = ()=>{this.save()};
				}
				fn.readAsDataURL(this.file);
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{this.remove()};
				this.preview = this.find('#preview');
				this.getfile();
				this.upnotice = this.find('#upnotice');
			},
			save(){
				this.find('#datasparent').hide();
				this.upnotice.show('block');
				app.doglas.save([getUniqueID(),this.file,this.file.contentType]).then(async x=>{
					const url = await x.ref.getDownloadURL();
					app.doglas.do(['database','users',app.userData.cleanEmail,'update',{profilepicture:url}]).then(x=>{
						profilePage.find('#profilepicture').src = url;
						app.userData.profilepicture = url;
						this.remove();
					})
				})
			}
		})
	},
	editBanner(profilePage){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					background:white;
					display:flex;
					flex-direction:column;
					height:100%;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Edit Foto Banner
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:flex-start;
						gap:10px;
						overflow:auto;
						flex-direction:column;
					" id=datasparent>
						<div>
							<div>Pilih Foto</div>
							<div>
								<input id=fileimg type=file accept=image/*>
							</div>
						</div>
						<div>
							<div>Preview</div>
							<div
							style="
								display: flex;
								justify-content: center;
								background: whitesmoke;
								padding: 20px 0;
								border: 1px solid #e0e0e0;
							"
							>
								<div style="
									padding:8px;
									background:white;
									height:150px;
									width:100%;
								">
									<img id=preview src=${app.userData.bannerpic||app.noProfilePng}
									style="
										height:150px;
										width:100%;
										object-fit:cover;
									"
									>
								</div>
							</div>
						</div>
					</div>
					<div id=upnotice style="
						padding:20px;
						text-align:center;
						display:none;
					">
						Mohon Tunggu, Sedang Mengupload Banner
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					" id=save>
						<div class=button id=goSignin style="
							width: 100%;
							text-align: center;
							border-radius:20px;
						">
							Simpan
						</div>
					</div>
				</div>
			`,
			getfile(){
				const getbutton = this.find('#fileimg');
				getbutton.onchange = ()=>{
					this.file = getbutton.files[0];
					this.showPreview();
				}
			},
			showPreview(){
				const fn = new FileReader();
				fn.onload = ()=>{
					this.preview.src = fn.result;
					this.find('#save').onclick = ()=>{this.save()};
				}
				fn.readAsDataURL(this.file);
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{this.remove()};
				this.preview = this.find('#preview');
				this.getfile();
				this.upnotice = this.find('#upnotice');
			},
			save(){
				this.find('#datasparent').hide();
				this.upnotice.show('block');
				app.doglas.save([getUniqueID(),this.file,this.file.contentType]).then(async x=>{
					const url = await x.ref.getDownloadURL();
					app.doglas.do(['database','users',app.userData.cleanEmail,'update',{bannerpic:url}]).then(x=>{
						const banner = profilePage.find('#bannerimg');
						banner.src = url;
						if(!app.userData.bannerpic){
							banner.onload = ()=>{
								banner.removeAttribute('hidden');
								app.userData.bannerpic = url;
							}
						}
						this.remove();
					})
				})
			}
		})
	},
	servicesOfferPage(data){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
					background:white;
					display:flex;
					flex-direction:column;
					height:100%;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Buat Tawaran
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:flex-start;
						gap:10px;
						overflow:auto;
						flex-direction:column;
					" id=datasparent>
						<div>
							<div>Jasa</div>
							<div>
								<input value="${data.subject}" readonly>
							</div>
						</div>
						<div>
							<div>Ajukan Fee <span class=star>Min Rp${getPrice(data.minFee)}</span></div>
							<div>
								<input type=number id=fee placeholder="Masukan Fee Yang Diinginkan" min=${data.minFee} value=${data.minFee}>
							</div>
						</div>
						<div>
							<div>Deskripsi Anda</div>
							<div>
								<textarea placeholder="Masukan Deskripsi..." id=offerDescription style="height:150px;"></textarea>
							</div>
						</div>
					</div>
					<div id=upnotice style="
						padding:20px;
						text-align:center;
						display:none;
					">
						Mohon Tunggu, Sedang Mengupload Foto Profil
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					" id=save>
						<div class=button id=goSignin style="
							width: 100%;
							text-align: center;
							border-radius:20px;
						">
							Kirim
						</div>
					</div>
				</div>
			`,
			getfile(){
				const getbutton = this.find('#fileimg');
				getbutton.onchange = ()=>{
					this.file = getbutton.files[0];
					this.showPreview();
				}
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{this.remove()};
				this.upnotice = this.find('#upnotice');
				this.find('#save').onclick = ()=>{
					this.save();
				}
			},
			collectData(){
				const xdata = {
					fee:this.find('#fee').value,
					bidId:getUniqueID(),
					description:this.find('#offerDescription').value,
					bidder:app.userData.username,
					bidderProfileId:app.userData.cleanEmail,
					date:getFullDate(),
					owner:data.owner,
					reject:'unset',
					profilepicture:data.profilepicture,
					inbox:[{profilepicture:app.userData.profilepicture,date:getFullDate(),from:app.userData.username,msg:this.find('#offerDescription').value}]
				}
				return xdata;
			},
			async handleNotifOwner(){
				let ownerNotif = (await app.doglas.do(['database','users',`${data.owner}/notif`,'get'])).val()||[];
				ownerNotif.push({who:app.userData.username,profilepicture:app.userData.profilepicture,when:getFullDate(),what:`Memberi penawaran ke ${data.subject} sebesar Rp. ${getPrice(data.fee)}`});
				if(ownerNotif.length>20){
					const newOwnerNotif = [];
					for(let i=0;i<10;i++){
						newOwnerNotif.push(ownerNotif[i+11]);
					}
					ownerNotif = newOwnerNotif;
				}
				await app.doglas.do(['database','users',`${data.owner}/notif`,'set',ownerNotif]);
			},
			async handleNotifUser(){
				let ownerNotif = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/notif`,'get'])).val()||[];
				ownerNotif.push({who:'Kamu',profilepicture:app.userData.profilepicture,when:getFullDate(),what:`Memberi penawaran ke ${data.subject} sebesar Rp. ${getPrice(data.fee)}`});
				if(ownerNotif.length>20){
					const newOwnerNotif = [];
					for(let i=0;i<10;i++){
						newOwnerNotif.push(ownerNotif[i+11]);
					}
					ownerNotif = newOwnerNotif;
				}
				await app.doglas.do(['database','users',`${app.userData.cleanEmail}/notif`,'set',ownerNotif]);
			},
			save(){
				
				Object.assign(data,this.collectData());
				console.log(data);
				//adding bid data to the project.
				app.doglas.do(['database',`bid/${data.type}`,data.bidId,'update',data]).then(async x=>{
					delete data.inbox;
					//get the data first.
					const biddatauser = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'get'])).val()||[];
					biddatauser.push(data);
					await app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'update',biddatauser]);
					const biddataowner = (await app.doglas.do(['database','users',`${data.owner}/bid`,'get'])).val()||[];
					biddataowner.push(data);
					await app.doglas.do(['database','users',`${data.owner}/bid`,'update',biddataowner]);
					app.userData.bid = biddatauser;
					//Notif
					this.handleNotifOwner();
					this.handleNotifUser();
					forceRecheck(view.main,'Berhasil mengirim penawaran');
					this.remove();
				})
				
				this.find('#datasparent').hide();
				this.upnotice.show('block');
				
			}
		})
	},
	jobsOfferPage(data){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					background:white;
					display:flex;
					flex-direction:column;
					height:100%;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Buat Tawaran
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:flex-start;
						gap:10px;
						overflow:auto;
						flex-direction:column;
					" id=datasparent>
						<div>
							<div>Job</div>
							<div>
								<input value="${data.subject}" readonly>
							</div>
						</div>
						<div>
							<div>Ajukan Fee <span class=star>Max Rp${getPrice(data.maxFee)}</span></div>
							<div>
								<input type=number id=fee placeholder="Masukan Fee Yang Diinginkan" max=${data.maxFee} value=${data.maxFee}>
							</div>
						</div>
						<div>
							<div>Deskripsi Anda</div>
							<div>
								<textarea placeholder="Masukan Deskripsi..." id=offerDescription style="height:150px;"></textarea>
							</div>
						</div>
					</div>
					<div id=upnotice style="
						padding:20px;
						text-align:center;
						display:none;
					">
						Mohon Tunggu, Sedang Mengupload Foto Profil
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					" id=save>
						<div class=button id=goSignin style="
							width: 100%;
							text-align: center;
							border-radius:20px;
						">
							Kirim
						</div>
					</div>
				</div>
			`,
			getfile(){
				const getbutton = this.find('#fileimg');
				getbutton.onchange = ()=>{
					this.file = getbutton.files[0];
					this.showPreview();
				}
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{this.remove()};
				this.upnotice = this.find('#upnotice');
				this.find('#save').onclick = ()=>{
					this.save();
				}
			},
			collectData(){
				const xdata = {
					fee:this.find('#fee').value,
					bidId:getUniqueID(),
					description:this.find('#offerDescription').value,
					bidder:app.userData.username,
					bidderProfileId:app.userData.cleanEmail,
					date:getFullDate(),
					owner:data.owner,
					ownerUsername:data.username,
					status:'unset',
					profilepicture:data.profilepicture,
					bidderProfileIdPic:app.userData.profilepicture,
					inbox:[{profilepicture:app.userData.profilepicture,date:getFullDate(),from:app.userData.username,msg:this.find('#offerDescription').value}]
				}
				return xdata;
			},
			async handleNotifOwner(){
				let ownerNotif = (await app.doglas.do(['database','users',`${data.owner}/notif`,'get'])).val()||[];
				ownerNotif.push({who:app.userData.username,profilepicture:app.userData.profilepicture,when:getFullDate(),what:`Memberi penawaran ke ${data.subject} sebesar Rp. ${getPrice(data.fee)}`});
				if(ownerNotif.length>20){
					const newOwnerNotif = [];
					for(let i=0;i<10;i++){
						newOwnerNotif.push(ownerNotif[i+11]);
					}
					ownerNotif = newOwnerNotif;
				}
				await app.doglas.do(['database','users',`${data.owner}/notif`,'set',ownerNotif]);
			},
			async handleNotifUser(){
				let ownerNotif = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/notif`,'get'])).val()||[];
				ownerNotif.push({who:'Kamu',profilepicture:app.userData.profilepicture,when:getFullDate(),what:`Memberi penawaran ke ${data.subject} sebesar Rp. ${getPrice(data.fee)}`});
				if(ownerNotif.length>20){
					const newOwnerNotif = [];
					for(let i=0;i<10;i++){
						newOwnerNotif.push(ownerNotif[i+11]);
					}
					ownerNotif = newOwnerNotif;
				}
				await app.doglas.do(['database','users',`${app.userData.cleanEmail}/notif`,'set',ownerNotif]);
			},
			async save(){
				
				Object.assign(data,this.collectData());
				//adding bid data to the project.
				app.doglas.do(['database',`bid/${data.type}`,data.bidId,'update',data]).then(async x=>{
					delete data.inbox;
					//get the data first.
					const biddatauser = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'get'])).val()||[];
					biddatauser.push(data);
					await app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'update',biddatauser]);
					const biddataowner = (await app.doglas.do(['database','users',`${data.owner}/bid`,'get'])).val()||[];
					biddataowner.push(data);
					await app.doglas.do(['database','users',`${data.owner}/bid`,'update',biddataowner]);
					app.userData.bid = biddatauser;
					//Notif
					this.handleNotifOwner();
					this.handleNotifUser();
				
					//update project bidder id.
					this.updateBidderId();
				
					forceRecheck(view.main,'Berhasil mengirim penawaran');
					this.remove();
				})
				
				this.find('#datasparent').hide();
				this.upnotice.show('block');
				
			},
			async updateBidderId(){

				//get Data bidder first.
				let biddata = (await app.doglas.do(['database','post',`${data.type}/${data.postid}/bidder`,'get'])).val()||[];
				console.log(biddata);
				biddata.push(app.userData.cleanEmail);
				await app.doglas.do(['database','post',`${data.type}/${data.postid}/bidder`,'set',biddata]);
				const biddingList =  (await app.doglas.do(['database','post',`${data.type}/${data.postid}/biddingList`,'get'])).val()||[];
				biddingList.push(data.bidId);
				await app.doglas.do(['database','post',`${data.type}/${data.postid}/biddingList`,'set',biddingList]);
			}
		})
	},
	inbox(nav){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
			`,
			generateChat(){
				if(!app.userData.bid)app.userData.bid = [];
				app.userData[nav].forEach(async (bid,i)=>{
					let msgs = null;
					if(nav==='inbox'){
						//getting the latest msg from chat.
						msgs = (await app.doglas.do(['database','privateChat',`${bid.roomId}/inbox`,'get'])).val()||[];
					}
					this.addChild(view[`${nav}Item`](i,bid,(i!==app.userData.bid.length-1)?true:false,msgs));
				})
				if(app.userData[nav].length===0){
					this.addChild(makeElement('div',{
						innerHTML:`${nav==='bid'?'Anda Belum Melakukan Aktifitas Penawaran!':'Tidak Ada Pesan!'}`,
						style:`
							height:200px;
							display:flex;
							align-items:center;
							justify-content:center;
							padding:20px;
							text-align:center;
						`
					}))
				}
			},
			onadded(){
				this.generateChat();
			}
		});
	},
	inboxItem(i,data,bt,msgs){
		const Dot = '...';
		return makeElement('div',{
			className:'lines',
			innerHTML:`
				<div class=item style=${!bt?'':'border-bottom:1px solid whitesmoke'}>
					<div class=thumbnail>
						<div>#${i+1}</div>
					</div>
					<div class=moreinfo>
						<div class=title>
							${msgs[msgs.length-1].msg.slice(0,20)+Dot}
						</div>
						<div class=addressinfo>
							<div>
								<img class=profileimg src=${data.toProfile}>
							</div>
							<div class=username>${data.toUsername},</div>
							<div class=date>${msgs[msgs.length-1].date}</div>
						</div>
					</div>
					<div style="
						display:flex;
						justify-content:center;
						width:20%;
					">
						<div style="
							padding: 5px;
					    background: whitesmoke;
					    border-radius: 50%;
					    cursor: pointer;
						" id=morebutton>
							<img src=./more/media/moreicon.png style="
								width:24px;
								height:24px;
							">
						</div>
					</div>
				</div>
			`,
			onadded(){
				this.find('.title').onclick = ()=>{
					view.main.addChild(view.openPrivateChat(data));
				}
				this.find('.username').onclick = ()=>{
					app.dataContent = data;
					view.addLoading();
					view.content.openProfile([],'home',true,data.to);
				}
				this.find('#morebutton').onclick = ()=>{
					this.openMoreMenu();
				}
			},
			openMoreMenu(){
				view.main.addChild(view.moreMenuInbox(data));
			}
		})
	},
	bidItem(i,data,bt){
		const Dot = '...';
		return makeElement('div',{
			className:'lines',
			innerHTML:`
				<div class=item style=${!bt?'border-bottom:0;':''}>
					<div class=thumbnail>
						<div>#${i+1}</div>
					</div>
					<div class=moreinfo>
						<div id=fee>
							${data.type} - ${data.type==='Jobs'?'Maks':'Min'} Bid Rp. ${getPrice(data.fee)}
						</div>
						<div class=title>
							${data.subject.slice(0,100) + Dot}
						</div>
						<div class=addressinfo>
							<div>
								<img class=profileimg src=${data.owner===app.userData.cleanEmail?data.bidderProfileIdPic:data.profilepicture}>
							</div>
							<div class=username>${data.owner===app.userData.cleanEmail?data.bidder:data.owner},</div>
							<div class=date>${data.date}</div>
						</div>
					</div>
					<div style="
						height:68px;
						width:30%;
						border-radius:10px;
						margin-right:5px;
					">
						<img src=${data.preview||'./more/media/nothumbnailnew.png'} style="
							height:100%;
							width:100%;
							object-fit:cover;
							border-radius:10px;
						">
					</div>
				</div>
			`,
			onadded(){
				this.find('.title').onclick = ()=>{
					view.main.addChild(view.openChatBid(data));
				}
				this.find('.username').onclick = ()=>{
					app.dataContent = data;
					view.addLoading();
					view.content.openProfile([],'home',false,data.owner);
				}
			},
			onclick(){
				
			}
		})
	},
	openChatBid(data,customCloseThis){
		return makeElement('div',{
			style:`
				position:absolute;
				width:100%;
				height:100%;
				top:0;
				left:0;
				display:flex;
				align-items:center;
				justify-content:flex-end;
				background:rgba(0, 0, 0, 0.4);
			`,
			innerHTML:`
				<div class=innerBox
				style="
					height:100%;
					background:white;
					display:flex;
					flex-direction:column;
				"
				>
					<div style="
						width: 100%;
						min-height: 77px;
						display: flex;
						align-items: center;
						justify-content: space-around;
						background:#15244e;
						color:white;
					">
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=closethis style="cursor:pointer;
								padding:5px;
								background:white;
								border-radius:10px;
							">
								<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
							</div>
						</div>
						<div style="
							width:80%;
						">
							<div>${data.subject.slice(0,30)+'...'}</div>
							<div>Rp. ${getPrice(data.fee)} - ${data.type} - ${data.date}</div>
						</div>
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=moremenu style="cursor:pointer;">
								<img src=./more/media/whitemenu.png class=navimg style=width:24px;height:24px;>
							</div>
						</div>
					</div>
					<div id=userActionBidder style="
				    padding: 2% 0;
				    background: white;
				    display: ${data.owner===app.userData.cleanEmail?'flex':'none'};
				    gap: 8px;
				    justify-content: space-around;
					">
						<div id=hire style="
							padding: 10px;
					    background: green;
					    color: white;
					    width: 100%;
					    text-align: center;
							cursor:pointer;
							display: flex;
							align-items: center;
							gap: 8px;
							font-weight: bold;
							justify-content: center;
						">
						<img src=./more/media/correct.png
						style="
							width:24px;
							height:24px;
						"
						>Rekrut</div>
						<div id=reject style="
							padding: 10px;
					    background: red;
					    color: white;
					    width: 100%;
					    text-align: center;
							cursor:pointer;
							display: flex;
							align-items: center;
							gap: 8px;
							font-weight: bold;
							justify-content: center;
						">
						<img src=./more/media/closewhite.png
						style="
							width:24px;
							height:24px;
						"
						>
						Tolak</div>
					</div>
					<div style="
						width:90%;
						height:94%;
						background:whitesmoke;
						overflow:auto;
						padding:5%;
						  scrollbar-color: gray whitesmoke;
						  scrollbar-width: thin;
					" id=boxinbox>
						
					</div>
					<div style="
						width: 94%;
						/* height: 69px; */
						border-top: 1px solid whitesmoke;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 3%;
						background: white;
						gap:5px;
					">
						<div style="
							width: 80%;
							/* height: 100%; */
							display: flex;
							align-items: center;
							justify-content: center;
							background: white;
							border-radius: 20px 0 0 20px;
							padding:10px;
							overflow:hidden;
						">
							<textarea style="
								background: white;
								border: none;
								border-radius: 20px 0 0 20px;
								min-height:40px;
								min-width:100%;
								max-width:100%;
							" id=msgbox placeholder="Masukan Teks Disini..."></textarea>
						</div>
						<div style="
							width: 20%;
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:black;
								border-radius:10px;
							" id=sendbutton>
								<img src=./more/media/whitesend.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
						<div style="
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:black;
								border-radius:10px;
							" id=sendbutton>
								<img src=./more/media/whitesend.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
						<div style="
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:whitesmoke;
								border-radius:10px;
							" id=sendbutton>
								<img src=./more/media/attachfile.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
					</div>
				</div>
			`,
			collectData(){
				const msg = {
					from:app.userData.username,
					date:getFullDate(),
					msg:this.msgbox.value,
					profilepicture:app.userData.profilepicture
				}
				return msg;
			},
			initUserActionToBidder(){
				this.findall('#userActionBidder div').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			hire(){
				console.log('To Hire ',data);

				//1. add admin.
				//2. set status.
				//3. send notif to others bidder.



				//send notif to people who bidding.
				this.handleNotifToOthers();
			},
			async handleContinueRoom(winner,project){
				console.log('the project is',project);
				//remove ineficience data.
				delete project.biddingList;
				delete project.bidder;
				delete project.winner;
				
				//getting admin data.
				const admins = (await app.doglas.do(['database','admin','','get'])).val()||{};
				console.log('admins data',admins);
				project.admin = objToArray(admins).getRandom().cleanEmail;
				console.log(project.admin);
				
				//updating admin notif.
				const adminNotifs = (await app.doglas.do(['database','admin',`${project.admin}/notif`,'get'])).val()||[];
				adminNotifs.push({
					profilepicture:app.noProfilePng,
					who:'Sistem',
					when:getFullDate(),
					what:`Anda terpilih sebagai admin ${project.type} ${project.title} dari ${project.owner}`
				})
				await app.doglas.do(['database','admin',`${app.userData.cleanEmail}/notif`,'set',adminNotifs]);
				
				//set global room //onGoingRoom
				const roomId = getUniqueID();
				console.log(roomId, 'is room id');
				project.OnGoingRoomId = roomId;
				
				await app.doglas.do(['database','OnGoingRooms',roomId,'set',project]);
				console.log('global room updateed');
				
				//sign the value of data to project.
				Object.assign(project,data);
				console.log('the project is',project);
				
				
				//set room for owner.
				const ownerOnGoingProjects = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/onGoingProjects`,'get'])).val()||[];
				console.log(ownerOnGoingProjects);
				ownerOnGoingProjects.push(project);
				await app.doglas.do(['database','users',`${app.userData.cleanEmail}/onGoingProjects`,'set',ownerOnGoingProjects]);

				//set room for the winner
				console.log('winner is',winner);
				const winnerOnGoingProjects = (await app.doglas.do(['database','users',`${winner}/onGoingProjects`,'get'])).val()||[];
				console.log(winnerOnGoingProjects);
				winnerOnGoingProjects.push(project);
				await app.doglas.do(['database','users',`${winner}/onGoingProjects`,'set',winnerOnGoingProjects]);
				
				//set room for the admin
				console.log('winner is',winner);
				const adminOnGoingProjects = (await app.doglas.do(['database','admin',`${project.admin}/onGoingProjects`,'get'])).val()||[];
				console.log(adminOnGoingProjects);
				adminOnGoingProjects.push(project);
				await app.doglas.do(['database','admin',`${project.admin}/onGoingProjects`,'set',adminOnGoingProjects]);
			},
			async setWinner(param){
				await app.doglas.do(['database','post',`${data.type}/${data.postid}/winner`,'set',param]);
				//delete bid history.
				const biddingList = (await app.doglas.do(['database','post',`${data.type}/${data.postid}/biddingList`,'get'])).val()||[];
				console.log('the list of bid ',biddingList);
				biddingList.forEach(async (bidId)=>{
					console.log('removing bid data', bidId);
					await app.doglas.get(`bid/${data.type}/${bidId}`).remove();
				})
				const project = (await app.doglas.do(['database','post',`${data.type}/${data.postid}`,'get'])).val();
				await app.doglas.do(['database','post',`${data.type}/${data.postid}`,'remove']);
				console.log('project deleted, post');


				//so far its ok.


				//now time to work on room.
				this.handleContinueRoom(param,project);
			},
			async handleNotifToOthers(){
				//give the indicator.
				const actionIndicator = view.actionIndicator(this);
				view.main.addChild(actionIndicator);
				actionIndicator.find('#text').innerHTML = `Memperoses Rekrutmen Kepada ${data.bidder} sebesar Rp. ${getPrice(data.fee)}`;

				//getting peoples id.
				const bidders = (await app.doglas.do(['database','post',`${data.type}/${data.postid}/bidder`,'get'])).val();
				//adding owner id also, we need owner bid also updated.
				bidders.push(app.userData.cleanEmail);
				console.log(bidders);

				bidders.forEach(async bidder=>{
						
					//deleting the bid list from this user.
					const userBidList = (await app.doglas.do(['database','users',`${bidder}/bid`,'get'])).val()||[];
					const userNewBidList = [];
					userBidList.forEach(bid=>{
						if(bid.postid!==data.postid){
							userNewBidList.push(bid);
						}
					})
					console.log('User new bid ',userNewBidList);
					await app.doglas.do(['database','users',`${bidder}/bid`,'set',userNewBidList]);
					
					//get people notif list.
					const notifs = (await app.doglas.do(['database','users',`${bidder}/notif`,'get'])).val()||[];
					notifs.push({who:(bidder===app.userData.cleanEmail?'Kamu':app.userData.username),profilepicture:app.userData.profilepicture,when:getFullDate(),
						what:`Telah menerima penawaran dari ${data.bidderProfileId===bidder?'Kamu':data.bidder} sebesar Rp. ${getPrice(data.fee)}`
					});
					//adding notification to user notif list.
					await app.doglas.do(['database','users',`${bidder}/notif`,'set',notifs]);
					console.log('Adding new notif');

				})

				//remove the projects out from the global db.
				this.setWinner(data.bidderProfileId);
				actionIndicator.find('#text').innerHTML = `Berhasil Menerima Bid Dari ${data.bidder} sebesar ${data.fee}`;
				this.out();
			},
			async reject(){
				//give the indicator.
				const indicator = view.actionIndicator(this);
				view.main.addChild(indicator);
				await app.doglas.do(['database','bid',`${data.type}/${data.bidId}/reject`,'set','ok']);
				await app.doglas.do(['database','bid',`${data.type}/${data.bidId}`,'remove']);
				
				//for user.
				this.generateNewUserBidData();
				if(app.userData.bid.length===0){
					await app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'remove']);
				}else{
					await app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'set',app.userData.bid]);
				}
				
				//for bidder
				const bidderBid = (await app.doglas.do(['database','users',`${data.bidderProfileId}/bid`,'get'])).val()||[];
				if(bidderBid.length===0){
					await app.doglas.do(['database','users',`${data.bidderProfileId}/bid`,'remove']);
				}else{
					const bidderNewBid = [];
					bidderBid.forEach(bidId=>{
						if(bidId.bidId!==data.bidId){
							bidderNewBid.push(bidId);
						}
					})
					await app.doglas.do(['database','users',`${data.bidderProfileId}/bid`,'set',bidderNewBid]);
				}
				//notif
				this.handleNotifOwner(`${data.owner} menolak penawaran kamu sebesar Rp. ${getPrice(data.fee)}`);
				this.handleNotifUser(`Kamu menolak penawaran dari ${data.bidder} sebesar Rp. ${getPrice(data.fee)}`);
				indicator.find('#text').innerHTML = 'Bidder Berhasil Ditolak!';
			},
			async handleNotifOwner(what){
				let ownerNotif = (await app.doglas.do(['database','users',`${data.bidderProfileId}/notif`,'get'])).val()||[];
				ownerNotif.push({who:app.userData.username,profilepicture:app.userData.profilepicture,when:getFullDate(),what});
				if(ownerNotif.length>20){
					const newOwnerNotif = [];
					for(let i=0;i<10;i++){
						newOwnerNotif.push(ownerNotif[i+11]);
					}
					ownerNotif = newOwnerNotif;
				}
				await app.doglas.do(['database','users',`${data.bidderProfileId}/notif`,'set',ownerNotif]);
			},
			async handleNotifUser(what){
				let ownerNotif = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/notif`,'get'])).val()||[];
				ownerNotif.push({who:'Kamu',profilepicture:app.userData.profilepicture,when:getFullDate(),what});
				if(ownerNotif.length>20){
					const newOwnerNotif = [];
					for(let i=0;i<10;i++){
						newOwnerNotif.push(ownerNotif[i+11]);
					}
					ownerNotif = newOwnerNotif;
				}
				await app.doglas.do(['database','users',`${app.userData.cleanEmail}/notif`,'set',ownerNotif]);
			},
			generateNewUserBidData(){
				const bidData = [];
				if(app.userData.bid.length>0){
					app.userData.bid.forEach(bidId=>{
						if(bidId.bidId!==data.bidId){
							bidData.push(bidId);
						}
					})	
				}
				app.userData.bid = bidData;
			},
			moreMenuInit(){
				this.initUserActionToBidder();
				this.find('#moremenu').onclick = ()=>{
					view.main.addChild(view.moremenubid(data));
				}
			},
			initSendButton(){
				this.find('#sendbutton').onclick = ()=>{
					this.sendMsg();
				}
			},
			async sendMsg(){
				const msgData = this.collectData();
				if(msgData.msg.length===0)return;
				
				//send the msg to the server.
				const inbox = (await app.doglas.do(['database','bid',`${data.type}/${data.bidId}/inbox`,'get'])).val();
				inbox.push(msgData);
				const result = await app.doglas.do(['database','bid',`${data.type}/${data.bidId}/inbox`,'set',inbox]);
				this.putMsg(msgData);
				//set msgbox value to zero.
				this.msgbox.value = '';
			},
			downKeys:[],
			initEnterSend(){
				this.msgbox.onkeydown = (e)=>{
					if(!this.downKeys.includes(e.key))this.downKeys.push(e.key);
					if(this.downKeys.includes('Enter') && !this.downKeys.includes('Shift')){
						this.sendMsg();
					}
				}
				this.msgbox.onkeyup = (e)=>{
					this.downKeys.pop();
				}
			},
			handleRejectMsg(){
				const indicator = view.actionIndicator(this);
				indicator.find('#topTitle').innerHTML = 'Notifikasi';
				indicator.find('#text').innerHTML = 'Owner Menolak Tawaran Anda';
				view.main.addChild(indicator);
			},
			handleWinMsg(winner){
				const indicator = view.actionIndicator(this);
				indicator.find('#topTitle').innerHTML = 'Notifikasi';
				indicator.find('#text').innerHTML = `Owner Menerima Tawaran ${winner}`;
				view.main.addChild(indicator);
			},
			async removeMyBid(){
				await app.doglas.get(`bid/${data.type}/${data.bidId}`).remove();
				console.log('Lose, deleting my own bid data');
			},
			listen(){
				app.doglas.get(`bid/${data.type}/${data.bidId}/inbox`).on('value',(x)=>{
					const data = x.val();
					if(!data)return;
					if(data[data.length-1].from!==app.userData.username){
						this.putMsg(data[data.length-1]);
					}
				})
				if(data.bidderProfileId===app.userData.cleanEmail){
					app.doglas.get(`bid/${data.type}/${data.bidId}/reject`).on('value',(x)=>{
						const rejected = x.val();
						console.log(rejected);
						if(rejected==='unset' || !rejected)return;
						this.handleRejectMsg();
						app.doglas.get(`bid/${data.type}/${data.bidId}/reject`).off('value');
						//remove the listener for the project.
						app.doglas.get(`post/${data.type}/${data.postid}/winner`).off('value');
					})
					app.doglas.get(`post/${data.type}/${data.postid}/winner`).on('value',(x)=>{
						const winner = x.val();
						console.log(winner);
						if(winner==='unset' || !winner)return;
						if(winner===app.userData.cleanEmail){
							this.handleWinMsg('Anda');
						}else{
							this.handleWinMsg(winner);
						}
						app.doglas.get(`post/${data.type}/${data.postid}/winner`).off('value');
					})	
				}
			},
			removeListen(){
				app.doglas.get(`bid/${data.type}/${data.bidId}/inbox`).off('value');
				app.doglas.get(`bid/${data.type}/${data.bidId}/reject`).off('value');
				app.doglas.get(`post/${data.type}/${data.postid}/winner`).off('value');
			},
			init(){
				this.boxinbox = this.find('#boxinbox');
				this.showInboxInit();
				this.msgbox = this.find('#msgbox');
				this.initSendButton();
				this.initEnterSend();
				this.moreMenuInit();
				setTimeout(()=>{this.listen()},2000);
			},
			async showInboxInit(){
				const inbox = (await app.doglas.do(['database','bid',`${data.type}/${data.bidId}/inbox`,'get'])).val()||[];
				inbox.forEach((item)=>{
					this.putMsg(item);
				})
			},
			putMsg(msg){
				if(this.puttedMsg && this.puttedMsg.msg === msg.msg)return;
				this.boxinbox.addChild(this.inboxItem(msg));
				this.puttedMsg = msg;
			},
			onCloseClickded(){
				this.removeListen();
				if(customCloseThis){
					customCloseThis();
				}else view.content.openInbox([],'bid',true);
				this.remove();
			},
			onadded(){
				//close event.
				this.find('#closethis').onclick = ()=>{this.onCloseClickded()};
				this.init();
			},
			inboxItem(item){
				return makeElement('div',{
					style:`
						display:flex;
						flex-direction:column;
						align-items:${item.from===app.userData.username?'flex-end':'flex-start'};
						width:100%;
						gap:5px;
					`,
					innerHTML:`
						<div>${item.from}</div>
						<div style="
							display:flex;
						">
							<div style="
								padding:8px;
								border-radius:50%;
								display:${item.from===app.userData.username?'none':'block'};
							">
								<img src=${item.profilepicture||app.noProfilePng} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>
							<div style="
								background:${item.from===app.userData.username?'white':'#15244e'};
								color:${item.from===app.userData.username?'black':'white'};
								padding:10px;
								font-weight:bold;
								border-radius:${item.from===app.userData.username?'20px 0 20px 20px':'0 20px 20px 20px'};
							">${item.msg.replaceAll('\n','<br>')}</div>
							<div style="
								padding:8px;
								border-radius:50%;
								background:whitesmoke;
								display:${item.from===app.userData.username?'block':'none'};
							">
								<img src=${item.profilepicture||app.noProfilePng} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>
						</div>
						<div style=font-size:12px>${item.date}</div>
					`,
					onadded(){
						this.scrollIntoView();
					}
				})
			}
		})
	},
	OnGoingChat(data,customCloseThis){
		return makeElement('div',{
			style:`
				position:absolute;
				width:100%;
				height:100%;
				top:0;
				left:0;
				display:flex;
				align-items:center;
				justify-content:flex-end;
				background:rgba(0, 0, 0, 0.4);
				z-index:1;
			`,
			innerHTML:`
				<div class=innerBox
				style="
					height:100%;
					background:white;
					display:flex;
					flex-direction:column;
				"
				>
					<div style="
						width: 100%;
						min-height: 77px;
						display: flex;
						align-items: center;
						justify-content: space-around;
						background:#15244e;
						color:white;
					">
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=closethis style="cursor:pointer;
								padding:5px;
								background:white;
								border-radius:10px;
							">
								<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
							</div>
						</div>
						<div style="
							width:80%;
						">
							<div>${data.subject.slice(0,30)+'...'}</div>
							<div>Rp. ${getPrice(data.fee)} - ${data.type} - ${data.date}</div>
						</div>
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=moremenu style="cursor:pointer;">
								<img src=./more/media/whitemenu.png class=navimg style=width:24px;height:24px;>
							</div>
						</div>
					</div>
					<div style="
						width:90%;
						height:94%;
						background:whitesmoke;
						overflow:auto;
						padding:5%;
						  scrollbar-color: gray whitesmoke;
						  scrollbar-width: thin;
					" id=boxinbox>
						
					</div>
					<div style="
						width: 94%;
						/* height: 69px; */
						border-top: 1px solid whitesmoke;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 3%;
						background: white;
						gap:5px;
					">
						<div style="
							width: 80%;
							/* height: 100%; */
							display: flex;
							align-items: center;
							justify-content: center;
							background: white;
							border-radius: 20px 0 0 20px;
							padding:10px;
							overflow:hidden;
						">
							<textarea style="
								background: white;
								border: none;
								border-radius: 20px 0 0 20px;
								min-height:40px;
								min-width:100%;
								max-width:100%;
							" id=msgbox placeholder="Masukan Teks Disini..."></textarea>
						</div>
						<div style="
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:black;
								border-radius:10px;
							" id=sendbutton>
								<img src=./more/media/whitesend.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
						<div style="
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:whitesmoke;
								border-radius:10px;
							" id=sendbutton>
								<img src=./more/media/attachfile.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
					</div>
				</div>
			`,
			collectData(){
				const msg = {
					from:app.userData.username,
					date:getFullDate(),
					msg:this.msgbox.value,
					profilepicture:app.userData.profilepicture
				}
				return msg;
			},
			initUserActionToBidder(){
				this.findall('#userActionBidder div').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			moreMenuInit(){
				//this.initUserActionToBidder();
				this.find('#moremenu').onclick = ()=>{
					view.main.addChild(view.moremenubid(data));
				}
			},
			initSendButton(){
				this.find('#sendbutton').onclick = ()=>{
					this.sendMsg();
				}
			},
			async sendMsg(){
				const msgData = this.collectData();
				if(msgData.msg.length===0)return;
				
				//send the msg to the server.
				const inbox = (await app.doglas.do(['database','OnGoingRooms',`${data.OnGoingRoomId}/inbox`,'get'])).val()||[];
				inbox.push(msgData);
				const result = await app.doglas.do(['database','OnGoingRooms',`${data.OnGoingRoomId}/inbox`,'set',inbox]);
				this.putMsg(msgData);
				//set msgbox value to zero.
				this.msgbox.value = '';
			},
			downKeys:[],
			initEnterSend(){
				this.msgbox.onkeydown = (e)=>{
					if(!this.downKeys.includes(e.key))this.downKeys.push(e.key);
					if(this.downKeys.includes('Enter') && !this.downKeys.includes('Shift')){
						this.sendMsg();
					}
				}
				this.msgbox.onkeyup = (e)=>{
					this.downKeys.pop();
				}
			},
			removeListen(){
				app.doglas.get(`OnGoingRooms/${data.OnGoingRoomId}/inbox`).off('value');
			},
			listen(){
				app.doglas.get(`OnGoingRooms/${data.OnGoingRoomId}/inbox`).on('value',(x)=>{
					const data = x.val();
					if(!data)return;
					if(data[data.length-1].from!==app.userData.username){
						this.putMsg(data[data.length-1]);
					}
				})
			},
			init(){
				this.boxinbox = this.find('#boxinbox');
				this.showInboxInit();
				this.msgbox = this.find('#msgbox');
				this.initSendButton();
				this.initEnterSend();
				this.moreMenuInit();
				setTimeout(()=>{this.listen()},2000);
			},
			async showInboxInit(){
				const inbox = (await app.doglas.do(['database','OnGoingRooms',`${data.OnGoingRoomId}/inbox`,'get'])).val()||[];
				inbox.forEach((item)=>{
					this.putMsg(item);
				})
			},
			putMsg(msg){
				if(this.puttedMsg && this.puttedMsg.msg === msg.msg)return;
				this.boxinbox.addChild(this.inboxItem(msg));
				this.puttedMsg = msg;
			},
			onCloseClickded(){
				if(customCloseThis){
					customCloseThis();
				}else view.content.openInbox();
				this.remove();
			},
			onadded(){
				//close event.
				this.find('#closethis').onclick = ()=>{this.onCloseClickded()};
				this.init();
			},
			getRole(item){
				let role = '';
				if(item.from.indexOf('-') && item.from.slice(0,item.from.indexOf('-'))==='admin')role='Admin';
				else if(item.from===data.username)role='Owner';
				else if(item.from===data.bidder)role='task';
				return role;
			},
			inboxItem(item){
				const role = this.getRole(item);
				return makeElement('div',{
					style:`
						display:flex;
						flex-direction:column;
						align-items:${item.from===app.userData.username?'flex-end':'flex-start'};
						width:100%;
						gap:5px;
					`,
					innerHTML:`
						<div>${item.from}: ${role}</div>
						<div style="
							display:flex;
						">
							<div style="
								padding:8px;
								border-radius:50%;
								background:whitesmoke;
								display:${item.from===app.userData.username?'none':'block'};
							">
								<img src=${item.profilepicture} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>
							<div style="
								background:${item.from===app.userData.username?'white':'#15244e'};
								color:${item.from===app.userData.username?'black':'white'};
								padding:10px;
								font-weight:bold;
								border-radius:${item.from===app.userData.username?'20px 0 20px 20px':'0 20px 20px 20px'};
							">${item.msg.replaceAll('\n','<br>')}</div>
							<div style="
								padding:8px;
								border-radius:50%;
								background:whitesmoke;
								display:${item.from===app.userData.username?'block':'none'};
							">
								<img src=${item.profilepicture} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>
						</div>
						<div style=font-size:12px>${item.date}</div>
					`,
					onadded(){
						this.scrollIntoView();
					}
				})
			}
		})
	},
	moremenubid(data){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					border-radius:0 0 20px 20px;
					background:white;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						">
							Project Info
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div id=hiredMsg style="display:none;padding:20px;">
						<div>Berhasil menerima pembidder, silahkan lanjutkan percakapan atau aktifitas lain</div>
					</div>
					<div id=rejectedMsg style="display:none;padding:20px;">
						<div>Berhasil mereject pembidder, pembidder akan diblock untuk kembali membidder dan percakapan sebelumnya akan di hapus</div>
					</div>
					<div style="
						    padding: 20px;
								display: flex;
								flex-direction: column;
								gap: 5px
					">
						<div><b>Admin</b></div>
						<div>
							<input value=${data.admin} readonly>
						</div>
						<div><b>Owner</b></div>
						<div>
							<input value=${data.username} readonly>
						</div>
						<div><b>Bidder</b></div>
						<div>
							<input value=${data.bidder} readonly>
						</div>
						<div><b>Fee</b></div>
						<div>
							<input value="Rp. ${getPrice(data.fee)}" readonly>
						</div>
					</div>
					<div style="
						padding:20px;
						display:none;
						justify-content:center;
						gap:10px;
					" id=buttonsMenu>
						<div
						style="
							width:94%;
							height:100%;
							display:flex;
							align-items:center;
							gap:8px;
							justify-content:space-around;
							flex-direction:column;
						"
						>
							<div><b>Admin Kontrol</b></div>
							<div style="width:100%">
								<div class="button buttonstyled" style="
									border-radius:20px;display:flex;
									align-items:center;gap:5px;justify-content:center;
									background:green;color:white;
								" id=hire>
									<img src=./more/media/hired.png
										style="
											width:16px;
											height:16px;
										"
									>Selesai</div>
							</div>
							<div style="width:100%">
								<div class="button buttonstyled" style="
									border-radius:20px;display:flex;
									align-items:center;gap:5px;
									justify-content:center;
									background:red;color:white;
								" id=reject>
									<img src=./more/media/rejection.png
										style="
											width:16px;
											height:16px;
										"
									>Batalkan</div>
							</div>
						</div>
					</div>
				</div>
			`,
			buttonsEvent(){
				this.findall('.button').forEach(button=>{
					button.onclick = ()=>{this[button.id]()};
				})
			},
			onadded(){
				this.find('#closethis').onclick = ()=>{this.remove()}
				this.buttonsMenu = this.find('#buttonsMenu');
				this.buttonsEvent();
			},
			hire(){
				console.log('To Hire ',data);
				this.buttonsMenu.changeTo(this.find('#hiredMsg'),'flex');
			},
			async reject(){
				console.log('To Reject ',data);
				const deleteR = await app.doglas.do(['database','bid',`${data.type}/${data.bidId}`,'remove']);
				console.log(deleteR);
				//for user.
				this.generateNewUserBidData();
				console.log(app.userData.bid);
				const saveBidUser = await app.doglas.do(['database','users',`${data.bidderProfileId}/bid`,'update',app.userData.bid]);
				console.log(saveBidUser);
			},
			generateNewUserBidData(){
				const bidData = [];
				if(app.userData.bid.length>0){
					app.userData.bid.forEach(bidId=>{
						console.log(bidId);
						if(bidId.bidId!=data.bidId)bidData.push(bidId);
					})	
				}
				app.userData.bid = bidData;
			}
		})
	},
	actionIndicator(chatpage){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
				position:absolute;
				z-index:1;
				display:flex;
				align-items:flex-start;
				justify-content:flex-end;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
					border-radius:0 0 20px 20px;
					background:white;
				" class=innerBox>
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:0 3%;
						height:77px;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:montserratbold;
							margin-left:5px;
						" id=topTitle>
							Loading...
						</div>
						<div id=closethis style="cursor:pointer;">
							<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
						</div>
					</div>
					<div style="
						padding:20px;
						display:flex;
						justify-content:center;
						gap:10px;
					">
						<div id=text>
							Memproses Penolakan.
						</div>
					</div>
				</div>
			`,
			onadded(){
				this.find('#closethis').onclick = ()=>{
					chatpage.remove();
					view.content.openInbox();
					this.remove();
				}
			}
		})
	},
	globalChat(customCloseThis){
		return makeElement('div',{
			style:`
				position:absolute;
				width:100%;
				height:100%;
				top:0;
				left:0;
				display:flex;
				align-items:center;
				justify-content:flex-end;
				background:#00000066;
				z-index:1;
			`,
			innerHTML:`
				<div class=innerBox
				style="
					height:100%;
					background:white;
					display:flex;
					flex-direction:column;
				"
				>
					<div style="
						width: 100%;
						min-height: 77px;
						display: flex;
						align-items: center;
						justify-content: space-around;
						background:#15244e;
						color:white;
					">
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=closethis style="cursor:pointer;
								padding:5px;
								background:white;
								border-radius:10px;
							">
								<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
							</div>
						</div>
						<div style="
							width:80%;
						">
							<div style=font-family:montserratbold>The Simpsons Group</div>
						</div>
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=moremenu style="cursor:pointer;">
								<img src=./more/media/whitemenu.png class=navimg style=width:24px;height:24px;>
							</div>
						</div>
					</div>
					<div style="
						width:90%;
						height:94%;
						background:whitesmoke;
						overflow:auto;
						padding:5%;
						  scrollbar-color: gray whitesmoke;
						  scrollbar-width: thin;
					" id=boxinbox>
						
					</div>
					<div style="
						width: 94%;
						border-top: 1px solid whitesmoke;
						display: none;
						align-items: center;
						justify-content: space-between;
						padding: 3%;
						background: white;
						gap:5px;
					" id=embedfile>
						<div id=filename></div>
						<div>
							<div id=closeembedfile style=cursor:pointer;>
								<img src=./more/media/close.png style="
									width:16px;
									height:16px;
								">
							</div>
						</div>
					</div>
					<div style="
						width: 94%;
						border-top: 1px solid whitesmoke;
						display: none;
						align-items: center;
						justify-content: space-between;
						padding: 3%;
						background: white;
						gap:10px;
					" id=embedphoto>
						<div id=preview style="
							width:100%;
							min-height:100px;
							max-height:150px;
							background:whitesmoke;
							border-radius:20px;
						">
							<img src=./more/media/gemaprofile.png style="
								width:100%;
								height:100%;
								object-fit:contain;
							">
						</div>
						<div>
							<div id=closeembedphoto style=cursor:pointer;>
								<img src=./more/media/close.png style="
									width:16px;
									height:16px;
								">
							</div>
						</div>
					</div>
					<div style="
						width: 94%;
						/* height: 69px; */
						border-top: 1px solid whitesmoke;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 3%;
						background: white;
						gap:5px;
					">
						<div style="
							width: 80%;
							/* height: 100%; */
							display: flex;
							align-items: center;
							justify-content: center;
							background: white;
							border-radius: 20px 0 0 20px;
							padding:10px;
							overflow:hidden;
						">
							<textarea style="
								background: white;
								border: none;
								border-radius: 20px 0 0 20px;
								min-height:40px;
								max-width:100%;
								min-width:100%;
							" id=msgbox placeholder="Masukan Teks Disini..."></textarea>
						</div>
						<div style="
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:black;
								border-radius:10px;
							" id=sendbutton>
								<img src=./more/media/whitesend.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
						<div style="
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:whitesmoke;
								border-radius:10px;
							" id=attachfilebutton>
								<img src=./more/media/attachfile.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
					</div>
				</div>
			`,
			embedMedia(button){
				const parent = this;
				this.find('#boxinbox').addChild(makeElement('div',{
					style:`
						position: absolute;
						background: white;
						bottom: 0px;
						right: 0px;
						margin-bottom: 100px;
						margin-right: 10px;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						padding: 15px 10px;
						gap: 10px;
						border-radius: 30px;
					`,
					innerHTML:`
						<div style="
							padding:5px;
							cursor:pointer;
						" id=sendphoto>
							<img src=./more/media/images.png style="
								width:32;
								height:32;
							">
						</div>
						<div style="
							padding:5px;
							cursor:pointer;
						" id=senddocument>
							<img src=./more/media/documents.png style="
								width:32;
								height:32;
							">
						</div>
						<div style="
							padding:5px;
							cursor:pointer;
						" id=closethis>
							<img src=./more/media/close.png style="
								width:16;
								height:16;
							">
						</div>
					`,
					onadded(){
						this.findall('div').forEach(div=>{
							div.onclick = ()=>{this[div.id]()};
						})
						button.hide();
					},
					closethis(){
						parent.filebutton.show('flex');
						this.remove();
					},
					senddocument(){
						const onload = ()=>{
							parent.file = this.input.files[0];
							parent.find('#filename').innerText = `File: ${parent.file.name.slice(0,50)}...`;
							parent.find('#embedfile').show('flex');
							this.closethis();
						}
						this.input = makeElement('input',{
							type:'file',
							accept:`application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
											text/plain, application/pdf
							`,
							onchange(){
								onload();
							}
						})
						this.input.click();
					},
					sendphoto(){
						const onload = ()=>{
							parent.file = this.input.files[0];
							const fs = new FileReader();
							fs.onload = ()=>{
								//show the div.
								parent.find('#embedphoto #preview img').src = fs.result;
								parent.find('#embedphoto').show('flex');
							}
							fs.readAsDataURL(parent.file);
							this.closethis();
						}
						this.input = makeElement('input',{
							type:'file',
							accept:`image/png,image/jpeg,image/gif,image/jpg`,
							onchange(){
								onload();
							}
						})
						this.input.click();
					}
				}))
			},
			collectData(){
				const msg = {
					id:app.userData.cleanEmail,
					from:app.userData.username,
					date:getFullDate(),
					msg:this.msgbox.value,
					profilepicture:app.userData.profilepicture
				}
				return msg;
			},
			moreMenuInit(){
				//this.initUserActionToBidder();
				this.find('#moremenu').onclick = ()=>{
					view.main.addChild(view.moremenubid(data));
				}
			},
			initSendButton(){
				this.find('#sendbutton').onclick = ()=>{
					this.sendMsg();
				}
				this.filebutton.onclick = ()=>{
					this.embedMedia(this.filebutton);
				}
				//closefileembed
				this.find('#closeembedphoto').onclick = ()=>{
					this.embedphoto.hide();
					this.filebutton.show('flex');
				}
				this.find('#closeembedfile').onclick = ()=>{
					this.embedfile.hide();
					this.filebutton.show('flex');
				}
			},
			async sendMsg(){
				const msgData = this.collectData();
				if(msgData.msg.length===0 && !this.file)return;
				
				if(this.file){
					console.log('uploading file', this.file);
					const file = await app.doglas.save([this.file.name,this.file,this.file.contentType]);
					const url = await file.ref.getDownloadURL();
					msgData.file = {
						url,type:this.file.type,
						name:this.file.name,size:this.file.size
					}
					if(msgData.file.type.split('/')[0]==='image'){
						this.embedphoto.hide();
					}else this.embedfile.hide();
				}
				
				//send the msg to the server.
				let inbox = (await app.doglas.do(['database','globalGroupChat',``,'get'])).val()||[];
				if(inbox.length>=30){
					//slicing the array cause i wanna protect the size.
					inbox = inbox.slice(19,30);
				}
				inbox.push(msgData);
				const result = await app.doglas.do(['database','globalGroupChat',``,'set',inbox]);
				this.putMsg(msgData);
				this.filebutton.show('flex');
				this.file = null;
				//set msgbox value to zero.
				this.msgbox.value = '';
			},
			downKeys:[],
			initEnterSend(){
				this.msgbox.onkeydown = (e)=>{
					if(!this.downKeys.includes(e.key))this.downKeys.push(e.key);
					if(this.downKeys.includes('Enter') && !this.downKeys.includes('Shift')){
						this.sendMsg();
					}
				}
				this.msgbox.onkeyup = (e)=>{
					this.downKeys.pop();
				}
			},
			listen(){
				app.doglas.get(`globalGroupChat`).on('value',(x)=>{
					const data = x.val();
					if(!data)return;
					if(data[data.length-1].from!==app.userData.username){
						this.putMsg(data[data.length-1]);
					}
				})
			},
			init(){
				this.boxinbox = this.find('#boxinbox');
				this.showInboxInit();
				this.msgbox = this.find('#msgbox');
				this.initSendButton();
				this.initEnterSend();
				this.moreMenuInit();
				setTimeout(()=>{this.listen()},2000);
			},
			async showInboxInit(){
				const inbox = (await app.doglas.do(['database','globalGroupChat',``,'get'])).val()||[];
				inbox.forEach((item)=>{
					this.putMsg(item);
				})
			},
			putMsg(msg){
				//if(this.puttedMsg && this.puttedMsg.msg === msg.msg)return;
				this.boxinbox.addChild(this.inboxItem(msg));
				this.puttedMsg = msg;
			},
			removeListen(){
				app.doglas.get(`globalGroupChat`).off('value');
			},
			onCloseClickded(){
				if(customCloseThis){
					customCloseThis();
				}else view.content.openInbox();
				//delete the event
				this.removeListen();
				this.remove();
			},
			onadded(){
				//close event.
				this.find('#closethis').onclick = ()=>{this.onCloseClickded()};
				this.embedphoto = this.find('#embedphoto');
				this.embedfile = this.find('#embedfile');
				this.filebutton = this.find('#attachfilebutton');
				this.init();
			},
			inboxItem(item){
				const parent = this;
				return makeElement('div',{
					style:`
						display:flex;
						flex-direction:column;
						align-items:${item.from===app.userData.username?'flex-end':'flex-start'};
						width:100%;
						gap:5px;
						margin-bottom:15px;
					`,
					innerHTML:`
						<div style="font-weight:bold;"><span class=username>@${item.from}</span>, <span style=font-size:10px;>${item.date}</span></div>
						<div style="
							display:flex;
						">
							<div style="
								padding:8px;
								border-radius:50%;
								background:whitesmoke;
								display:${item.from===app.userData.username?'none':'block'};
							">
								<img src=${item.profilepicture} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>
							<div style="
								background:${item.from===app.userData.username?'white':'#15244e'};
								color:${item.from===app.userData.username?'black':'white'};
								padding:10px;
								font-weight:bold;
								border-radius:${item.from===app.userData.username?'20px 0 20px 20px':'0 20px 20px 20px'};
							">
								<div id=fileembed style="
									display:${item.file?item.file.type.split('/')[0]==='image'?'none':'flex':'none'};
									gap:10px;
									align-items:center;
									justify-content:space-between;
									margin-bottom:10px;
									border-bottom:2px solid ${item.from===app.userData.username?'whitesmoke':'white'};
									padding-bottom:10px;
								">
									<div style="
										padding: 10px;
										background: whitesmoke;
										border-radius: 10px;
										color:black;
									" id=filex>
									-
									</div>
									<div>
										${item.file?item.file.name?item.file.name.slice(0,10):'':''}...
									</div>
									<div>
										<div style="
											padding:5px;
											border-radius:10px;
											cursor:pointer;
											background:whitesmoke;
										" id=downloadbutton>
											<img src=./more/media/downloadmedia.png style="
												width:24;
												height:24;
											">
										</div>
									</div>
								</div>
								<div id=photoembed style="
									display:${item.file?item.file.type.split('/')[0]==='image'?'flex':'none':'none'};
									width:100%;
									height:150px;
									margin-bottom:10px;
									border-radius:20px;
									background:whitesmoke;
									overflow:hidden;
								">
									<img src="${item.file?item.file.url:''}" style="
										width:100%;
										height:100%;
										object-fit:contain;
									">
								</div>
								${item.msg.length>0?item.msg.replaceAll('\n','<br>'):''}
							</div>
							<div style="
								padding:8px;
								border-radius:50%;
								background:whitesmoke;
								display:${item.from===app.userData.username?'block':'none'};
							">
								<img src=${item.profilepicture} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>
						</div>
					`,
					onadded(){
						this.scrollIntoView();
						this.find('#downloadbutton').onclick = ()=>{this.setupDownload()};
						this.find('.username').onclick = ()=>{
							view.addLoading();
							view.content.openProfile([],'home',false,item.id);
							parent.remove();
						}
						if(item.file){
							const spliteditem = item.file.name.split('.');
							this.find('#filex').innerText = spliteditem[spliteditem.length-1];
							console.log(spliteditem);
						}
					},
					setupDownload(){
						if(item.file && item.file.url)open(item.file.url,'_blank');
					}
				})
			}
		})
	},
	openLoading(){
		return makeElement('div',{
			id:'openLoading',
			style:`
				background:white;
				width:100%;
				height:100%;
				display:flex;
				align-items:center;
				justify-content:center;
				position:absolute;
				top:0;left:0;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
				">
					<img src=./more/media/Loading_icon.gif
					style="
						width: 30%;
						height: 30%;
						object-fit: cover;
						margin-top:100px;
					"
					>
					Tunggu Sebentar!
				</div>
			`
		})
	},
	addLoading(){
		this.content.addChild(view.openLoading());
	},
	unloading(){
		this.content.saveRemove('#openLoading');
	},
	openPrivateChat(room){
		return makeElement('div',{
			style:`
				position:absolute;
				width:100%;
				height:100%;
				top:0;
				left:0;
				display:flex;
				align-items:center;
				justify-content:flex-end;
				background:rgba(0, 0, 0, 0.4);
				z-index:1;
			`,
			innerHTML:`
				<div class=innerBox
				style="
					height:100%;
					background:white;
					display:flex;
					flex-direction:column;
				"
				>
					<div style="
						width: 100%;
						min-height: 77px;
						display: flex;
						align-items: center;
						justify-content: space-around;
						background:#15244e;
						color:white;
					">
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=closethis style="cursor:pointer;
								padding:5px;
								background:white;
								border-radius:10px;
							">
								<img src=./more/media/close.png class=navimg style=width:16px;height:16px;>
							</div>
						</div>
						<div style="
							width:80%;
						">
							<div>Kirim pesan ke ${room.toUsername}</div>
						</div>
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=moremenu style="cursor:pointer;">
								<img src=./more/media/whitemenu.png class=navimg style=width:24px;height:24px;>
							</div>
						</div>
					</div>
					<div style="
						width:90%;
						height:94%;
						background:whitesmoke;
						overflow:auto;
						padding:5%;
						  scrollbar-color: gray whitesmoke;
						  scrollbar-width: thin;
					" id=boxinbox>
						
					</div>
					<div style="
						width: 94%;
						/* height: 69px; */
						border-top: 1px solid whitesmoke;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 3%;
						background: white;
						gap:5px;
					">
						<div style="
							width: 80%;
							/* height: 100%; */
							display: flex;
							align-items: center;
							justify-content: center;
							background: white;
							border-radius: 20px 0 0 20px;
							padding:10px;
							overflow:hidden;
						">
							<textarea style="
								background: white;
								border: none;
								border-radius: 20px 0 0 20px;
								min-height:40px;
								max-width:100%;
								min-width:100%;
							" id=msgbox placeholder="Masukan Teks Disini..."></textarea>
						</div>
						<div style="
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:black;
								border-radius:10px;
							" id=sendbutton>
								<img src=./more/media/whitesend.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
						<div style="
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							/* background: whitesmoke; */
							/* border: 1px solid whitesmoke; */
							background: white;
							border-radius: 0 20px 20px 0;
						">
							<div style="cursor:pointer;
								padding:10px;
								background:whitesmoke;
								border-radius:10px;
							" id=sendbutton>
								<img src=./more/media/attachfile.png
								style="
									width:32px;
									height:32px;
								"
								>
							</div>
						</div>
					</div>
				</div>
			`,
			async fixRoom(){
				//case is only checking for user, not with opponent.
				//have to check the opponent.
				let ourRoom;
				const opponentChatList = (await app.doglas.do(['database','users',`${room.to}/inbox`,'get'])).val()||[];
				opponentChatList.forEach((item)=>{
					if(item.to===app.userData.cleanEmail){
						ourRoom = item;
						return
					}
				})
				let roomId;
				if(!ourRoom){
					console.log('Opps, theres no room at this db, so i build one');
					//for reciever.
					if(!roomId)roomId=room.roomId;
					const recieverChatList = (await app.doglas.do(['database','users',`${room.to}/inbox`,'get'])).val()||[];
					recieverChatList.push({roomId,to:app.userData.cleanEmail,toProfile:app.userData.profilepicture,date:getFullDate(),toUsername:app.userData.username});
					await app.doglas.do(['database','users',`${room.to}/inbox`,'set',recieverChatList]);	
				}
			},
			collectData(){
				const msg = {
					from:app.userData.username,
					date:getFullDate(),
					msg:this.msgbox.value,
					profilepicture:app.userData.profilepicture
				}
				return msg;
			},
			moreMenuInit(){
				this.find('#moremenu').onclick = ()=>{
					view.main.addChild(view.moremenubid(data));
				}
			},
			initSendButton(){
				this.find('#sendbutton').onclick = ()=>{
					this.sendMsg();
				}
			},
			async sendMsg(){

				this.fixRoom();

				const msgData = this.collectData();
				if(msgData.msg.length===0)return;
				
				//send the msg to the server.
				const inbox = (await app.doglas.do(['database','privateChat',`${room.roomId}/inbox`,'get'])).val()||[];
				inbox.push(msgData);
				const result = await app.doglas.do(['database','privateChat',`${room.roomId}/inbox`,'set',inbox]);
				this.putMsg(msgData);
				//set msgbox value to zero.
				this.msgbox.value = '';
			},
			downKeys:[],
			initEnterSend(){
				this.msgbox.onkeydown = (e)=>{
					if(!this.downKeys.includes(e.key))this.downKeys.push(e.key);
					if(this.downKeys.includes('Enter') && !this.downKeys.includes('Shift')){
						this.sendMsg();
					}
				}
				this.msgbox.onkeyup = (e)=>{
					this.downKeys.pop();
				}
			},
			listen(){
				app.doglas.get(`privateChat/${room.roomId}/inbox`).on('value',(x)=>{
					const data = x.val();
					if(!data)return;
					if(data[data.length-1].from!==app.userData.username){
						this.putMsg(data[data.length-1]);
					}
				})
			},
			removeListen(){
				app.doglas.get(`privateChat/${room.roomId}/inbox`).off('value');
			},
			init(){
				this.boxinbox = this.find('#boxinbox');
				this.showInboxInit();
				this.msgbox = this.find('#msgbox');
				this.initSendButton();
				this.initEnterSend();
				this.moreMenuInit();
				setTimeout(()=>{this.listen()},2000);
			},
			async showInboxInit(){
				const inbox = (await app.doglas.do(['database','privateChat',`${room.roomId}/inbox`,'get'])).val();
				inbox.forEach((item)=>{
					this.putMsg(item);
				})
			},
			putMsg(msg){
				if(this.puttedMsg && this.puttedMsg.msg === msg.msg)return;
				this.boxinbox.addChild(this.inboxItem(msg));
				this.puttedMsg = msg;
			},
			onCloseClickded(){
				this.removeListen();
				view.content.openInbox([],'inbox',true);
				this.remove();
			},
			onadded(){
				//close event.
				this.find('#closethis').onclick = ()=>{this.onCloseClickded()};
				this.init();
			},
			inboxItem(item){
				return makeElement('div',{
					style:`
						display:flex;
						flex-direction:column;
						align-items:${item.from===app.userData.username?'flex-end':'flex-start'};
						width:100%;
						gap:5px;
					`,
					innerHTML:`
						<div>${item.from}</div>
						<div style="
							display:flex;
						">
							<div style="
								padding:8px;
								border-radius:50%;
								background:whitesmoke;
								display:${item.from===app.userData.username?'none':'block'};
							">
								<img src=${item.profilepicture||app.noProfilePng} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>
							<div style="
								background:${item.from===app.userData.username?'white':'#15244e'};
								color:${item.from===app.userData.username?'black':'white'};
								padding:10px;
								font-weight:bold;
								border-radius:${item.from===app.userData.username?'20px 0 20px 20px':'0 20px 20px 20px'};
							">${item.msg.replaceAll('\n','<br>')}</div>
							<div style="
								padding:8px;
								border-radius:50%;
								background:whitesmoke;
								display:${item.from===app.userData.username?'block':'none'};
							">
								<img src=${item.profilepicture||app.noProfilePng} style="
									width:32px;
									height:32px;
									border-radius:50%;
									object-fit:cover;
								">
							</div>
						</div>
						<div style=font-size:12px>${item.date}</div>
					`,
					onadded(){
						this.scrollIntoView();
					}
				})
			}
		})
	},
	moreMenuInbox(toRemove){
		return makeElement('div',{
			style:`
				width: 100%;
		    height: 100%;
		    background: #00000036;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    position: absolute;
		    top: 0px;
		    left: 0px;
			`,
			innerHTML:`
				<div style="
					position:relative;
					background: white;
			    width: 200px;
			    height: 200px;
			    border-radius: 20px;
			    padding: 20px;
			    padding-top: 10px;
			    overflow:auto;
			    display:flex;
			    flex-direction:column;
			    gap:10px;
				">
					<div style="
						position:absolute;
						left:0;top:0;
						padding:10px;
					">
						<div style="cursor:pointer;" id=closethis>
							<img src=./more/media/close.png
							style="
								width:16px;
								height:16px;
							"
							>
						</div>
					</div>
					<div style="
						text-align: center;
				    margin-bottom: 20px;
				    border-bottom: 1px solid whitesmoke;
				    padding-bottom: 5px;
				    position:sticky;top:0;
					"><b>More Menu!</b></div>
					<div class=action style="
						display: flex;
				    align-items: center;
				    /* height: 100%; */
				    background: whitesmoke;
				    padding: 10px;
				    border-radius: 20px;
				    cursor: pointer;
					" id=removeChat>
						<div style="
							display: flex;
					    gap: 10px;
					    justify-content: center;
					    align-items: center;
						">
							<img src=./more/media/deleteicon.png style="
								width:24px;
								height:24px;
							">
							Hapus
						</div>
					</div>
					<div class=action style="
						display: flex;
				    align-items: center;
				    /* height: 100%; */
				    background: whitesmoke;
				    padding: 10px;
				    border-radius: 20px;
				    cursor: pointer;
					" id=reportChat>
						<div style="
							display: flex;
					    gap: 10px;
					    justify-content: center;
					    align-items: center;
						">
							<img src=./more/media/deleteicon.png style="
								width:24px;
								height:24px;
							">
							Laporkan
						</div>
					</div>
				</div>
			`,
			onadded(){
				this.find('#closethis').onclick = ()=>{
					this.remove();
				}
				this.findall('.action').forEach((button)=>{
					button.onclick = ()=>{this[button.id]();}
				})
			},
			async removeChat(){
				//remove that chat from user db.
				console.log(toRemove);
				const chatList = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/inbox`,'get'])).val()||[];
				//filtering chat list.
				const newChatList = [];
				chatList.forEach((item)=>{
					if(item.roomId!==toRemove.roomId){
						newChatList.push(item);
					}
				})
				//now its time to remove.
				await app.doglas.do(['database','users',`${app.userData.cleanEmail}/inbox`,'set',newChatList]);
				view.content.openInbox([],'inbox',true);
				this.remove();
			},
			reportChat(){
				//reporting this chat to admin.
			}
		})
	},
	profileDiv(nav='home',boot=false,userId){
		return makeElement('div',{
			nav,
			style:`
				width: 100%;
				display: flex;
				overflow: auto;
				background: white;
				align-items: center;
				position:sticky;
				top:0;
				z-index:1;
			`,
			innerHTML:`
				<div style="
					  width: 100%;
						display: flex;
						justify-content: flex-start;
						/* margin: 2%; */
						background: white;
				" id=berandadivmenu>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=home
					>
						<img src=./more/media/home.png class=navimg>
						Beranda
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=article
					>
						<img src=./more/media/articleicon.png class=navimg>
						Artikel
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=jobs
					>
						<img src=./more/media/task.png class=navimg>
						Loker
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=services
					>
						<img src=./more/media/servicesicon.png class=navimg>
						Jasa
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=statistic
					>
						<img src=./more/media/report.png class=navimg>
						Statistik
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						height: 100%;
						width: 100%;
						padding: 10px;
						justify-content: center;
					"
					id=bidderSay
					>
						<img src=./more/media/review.png class=navimg>
						Testimoni
					</div>
				</div>
			`,
			buttonSetup(){
				this.findall('#berandadivmenu div').forEach(button=>{
					button.onclick = ()=>{
						this[button.id]();
					}
				})
			},
			onadded(){
				//set the nav.
				console.log(this.nav);
				this.find('#'+this.nav).style.borderBottom = '3px solid black';
				this.find('#'+this.nav).style.fontFamily = 'montserratbold';
				this.find('#'+this.nav).scrollIntoView();
				this.buttonSetup();
				if(boot){
					console.log('boot is true');
					this.home();
				}
			},
			home(){
				view.addLoading()
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/onGoingProjects`,'get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openProfile(datacb,'home',false,userId);
				})
			},
			article(){
				view.addLoading();
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/finishedProjects`,'get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openProfile(datacb,'article',false,userId);
				})
			},
			jobs(){
				view.addLoading();
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/finishedProjects`,'get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openProfile(datacb,'jobs',false,userId);
				})
			},
			services(){
				view.addLoading();
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/finishedProjects`,'get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openProfile(datacb,'services',false,userId);
				})
			},
			statistic(){
				view.addLoading();
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/finishedProjects`,'get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openProfile(datacb,'statistic',false,userId);
				})
			},
			bidderSay(){
				view.addLoading();
				app.doglas.do(['database','users',`${app.userData.cleanEmail}/finishedProjects`,'get','']).then(data=>{
					view.unloading();
					let datacb = data.val()||[];
					view.content.openProfile(datacb,'bidderSay',false,userId);
				})
			}
		})
	}
}







