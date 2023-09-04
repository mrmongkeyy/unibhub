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
			height:128px;
			display:flex;
			justify-content:center;
			border-bottom:1px solid whitesmoke;
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
				">
					<div style="
						cursor:pointer;
						font-size:24px;
						font-family:poppinsbold;
					">TheSimpsons<span style=font-size:12px;font-family:poppinslight> Portal</span></div>
				</div>
				<div style="
					display: flex;
					justify-content: space-between;
					height: 100%;
					display: flex;
					align-items: center;
				" id=ourmenu class=innerBox>
					<div id=newPost>
						<img src=./more/media/pen.png class=navimg>
						Post
					</div>
					<div id=displayList>
						<img src=./more/media/home.png class=navimg>
						Beranda
					</div>
					<div id=openInbox>
						<img src=./more/media/chat.png class=navimg>
						Pesan
					</div>
					<div id=openNotif>
						<img src=./more/media/bell.png class=navimg>
						Notif
					</div>
					<div id=openProfile>
						<img src=./more/media/user.png class=navimg>
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
					font-weight:bold;
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
		clearLinesParent(){
			this.linesParent.clear();
		},
		onadded(){
			this.linesParent = this.find('#linesparent');
			//this.openArticle(app.dataFiktif);
			this.displayList([],'loadartikel',true);
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
			this.find('#stateLabel').innerHTML = 'Beranda';
			this.find('#reactTo').hide();
			this.find('#searchWare').show('flex');
		},
		newArticle(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.articlenew());
			this.find('#stateLabel').innerHTML = 'Artikel Baru';
			this.find('#reactTo').hide();
			this.find('#searchWare').hide();
		},
		newCerpen(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.cerpennew());
			this.find('#stateLabel').innerHTML = 'Cerpen Baru';
			this.find('#reactTo').hide();
			this.find('#searchWare').hide();
		},
		openArticles(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.openArticles());
			this.find('#stateLabel').innerHTML = 'Baca Artikel';
			this.find('#reactTo').show('flex');
			this.find('#searchWare').hide();
		},
		openShortStories(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.openShortStories());
			this.find('#stateLabel').innerHTML = 'Baca Cerpen';
			this.find('#reactTo').show('flex');
			this.find('#searchWare').hide();
		},
		openJobs(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.openJobs());
			this.find('#stateLabel').innerHTML = 'Info Loker';
			this.find('#reactTo').show('flex');
			this.find('#searchWare').hide();
		},
		openServices(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.openServices());
			this.find('#stateLabel').innerHTML = 'Info Jasa';
			this.find('#reactTo').show('flex');
			this.find('#searchWare').hide();
		},
		isInProfile(){
			let result = false;
			if(app.getInfoLogin()){
				result = true;
			}
			return result;
		},
		getIn(){
			view.main.addChild(view.loginBox());
		},
		openProfile(userId){
			if(!this.isInProfile()){
				return this.getIn();
			}
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.profilePage(userId));
			this.find('#stateLabel').innerHTML = 'Profil Pengguna';
			this.find('#reactTo').hide();
			this.find('#searchWare').hide();
		},
		newPost(){
			if(!app.userData){
				return forceRecheck(view.main,'Silahkan Login Terlebih Dahulu!');
			}
			this.addChild(view.newPost());
		},
		newJasa(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.jasanew());
			this.find('#stateLabel').innerHTML = 'Post Jasa';
			this.find('#reactTo').hide();
			this.find('#searchWare').hide();
		},
		newLoker(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.lokernew());
			this.find('#stateLabel').innerHTML = 'Post Loker';
			this.find('#reactTo').hide();
			this.find('#searchWare').hide();
		},
		openNotif(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.notif());
			this.find('#stateLabel').innerHTML = 'Notifmu';
			this.find('#reactTo').hide();
			this.find('#searchWare').hide();
		},
		async openInbox(){
			if(!app.getInfoLogin())return forceRecheck(view.main,'Silahkan Login Lebih Dahulu!');
			this.clearLinesParent();
			
			//update the user bid data.
			app.userData.bid = (await app.doglas.do(['database','users',`${app.userData.cleanEmail}/bid`,'get'])).val();
			
			this.find('#linesparent').addChild(view.inbox());
			this.find('#stateLabel').innerHTML = 'Inbox';
			this.find('#reactTo').hide();
			this.find('#searchWare').hide();
		}
	}),
	footer:makeElement('footer',{
		
	}),
	searchDiv(nav='loadartikel',boot=false){
		return makeElement('div',{
			nav,
			style:`
				width: 100%;
				display: flex;
				overflow: auto;
				/* margin-right: 10px; */
				margin: 2% 0;
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
					id=loadcerpen
					>
						<img src=./more/media/deer-shape.png class=navimg>
						Cerpen
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
					id=loadartikel
					>
						<img src=./more/media/papers.png class=navimg>
						Artikel
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						width: 100%;
						justify-content: center;
						padding: 10px;
					"
					id=loadloker
					>
						<img src=./more/media/worker.png class=navimg>
						Project
					</div>
					<div style="
						display: flex;
						gap: 8px;
						cursor: pointer;
						width: 100%;
						justify-content: center;
						padding: 10px;
					"
					id=loadjasa
					>
						<img src=./more/media/construction-worker.png class=navimg>
						Jasa
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
				this.find('#'+this.nav).style.borderBottom = '1px solid black';
				this.find('#'+this.nav).scrollIntoView();
				this.buttonSetup();
				if(boot)this.loadartikel();
			},
			loadjasa(){
				app.doglas.do(['database','post','Services','get','']).then(data=>{
					let datacb = data.val()||{};
					view.content.displayList(objToArray(datacb),'loadjasa');
				})
			},
			loadcerpen(){
				app.doglas.do(['database','post','ShortStories','get','']).then(data=>{
					let datacb = data.val()||{};
					view.content.displayList(objToArray(datacb),'loadcerpen');
				})
			},
			loadartikel(){
				app.doglas.do(['database','post','Articles','get','']).then(data=>{
					let datacb = data.val()||{};
					view.content.displayList(objToArray(datacb),'loadartikel');
				})
			},
			loadloker(){
				app.doglas.do(['database','post','Jobs','get','']).then(data=>{
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
				share:[],
				like:[],
				comment:[],
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
				</div>
			`,
			onadded(){
				if(data.maxFee||data.minFee){
					this.find('.vshareinfo').remove();
				}else this.find('#fee').remove();
				this.find('.item').onclick = ()=>{
					app.dataContent = data;
					view.content[`open${data.type}`]();
				}
			},
		})
	},
	articlenew(){
		return makeElement('div',{
			style:`
				margin:3%;
				display:flex;
				flex-direction:column;
				height:94%;
				gap:10px;
			`,
			innerHTML:`
				<div style="
					width: 100%;
					justify-content: space-around;
					display: flex;
					background: whitesmoke;
					border-radius: 20px;
				"
				id=newartilebuttons
				>
					<div style=width:100%; id=saveToDraft class=thebutton>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/upload.png
							style="
								width:14px;
								height:14px;
							"
							>
						Simpan</div>
					</div>
					<div style=width:100%; id=publish class=thebutton>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/save.png
								style="
									width:16px;
									height:16px;
								"
							>TERBITKAN</div>
					</div>
				</div>
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:poppinsbold;
					">
						Judul Artikel
					</div>
					<div style="
						height:100%;
					">
						<textarea id=title placeholder="Tulis Judul Disini..." style="height:100%;resize:none;border-radius:0;"></textarea>
					</div>
				</div>
				<div style="
					height:80%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:poppinsbold;
					">
						Konten Artikel
					</div>
					<div style="
						height:100%;
					">
						<textarea id=description placeholder="Tulis Konten Disini..." style="height:100%;resize:none;border-radius:0 0 20px 20px;"></textarea>
					</div>
				</div>
			`,
			collectData(){
				const Data = {};
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
				this.findall('#newartilebuttons .thebutton').forEach(button=>{
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
				height:94%;
				overflow:auto;
				overflow-x:hidden;
				gap:10px;
			`,
			innerHTML:`
				<div style="
					width: 100%;
					justify-content: space-around;
					display: flex;
					background: whitesmoke;
					border-radius: 20px;
				"
				id=newartilebuttons
				>
					<div style=width:100%; class=thebutton id=addFiles>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/upload.png
							style="
								width:14px;
								height:14px;
							"
							>
						Files</div>
					</div>
					<div style=width:100%; class=thebutton id=saveToDraft>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/upload.png
							style="
								width:14px;
								height:14px;
							"
							>
						Simpan</div>
					</div>
					<div style=width:100%; class=thebutton id=publish>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/save.png
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
						font-family:poppinsbold;
					">
						Min-Fee
					</div>
					<div style="
						height:100%;
					">
						<input placeholder="Misal 200.000.00" type=number style="height:100%;resize:none;border-radius:0;">
					</div>
				</div>
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:poppinsbold;
					">
						Nama Jasa
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Misal Jasa Buat Web Portofolio" style="height:100%;resize:none;border-radius:0;" id=title></textarea>
					</div>
				</div>
				<div style="
					height:80%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:poppinsbold;
					">
						Keterangan Jasa
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Keterangan Disini..." style="height:100%;resize:none;border-radius:0 0 20px 20px;" id=description></textarea>
					</div>
				</div>
			`,
			collectData(){
				const minFee = this.find('input').value;
				const Data = {minFee};
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
				this.findall('#newartilebuttons .thebutton').forEach(button=>{
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
				height:94%;
				gap:10px;
			`,
			innerHTML:`
				<div style="
					width: 100%;
					justify-content: space-around;
					display: flex;
					background: whitesmoke;
					border-radius: 20px;
				"
				id=newartilebuttons
				>
					<div style=width:100%; class="thebutton" id=addFiles>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/upload.png
							style="
								width:14px;
								height:14px;
							"
							>
						Files</div>
					</div>
					<div style=width:100%; class=thebutton id=saveToDraft>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/upload.png
							style="
								width:14px;
								height:14px;
							"
							>
						Simpan</div>
					</div>
					<div style=width:100%; class=thebutton id=publish>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/save.png
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
						font-family:poppinsbold;
					">
						Max-Fee
					</div>
					<div style="
						height:100%;
					">
						<input placeholder="Misal 200.000.00" type=number style="height:100%;resize:none;border-radius:0;">
					</div>
				</div>
				<div style="
					height:20%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:poppinsbold;
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
						font-family:poppinsbold;
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
			collectData(){
				const maxFee = this.find('input').value;
				const Data = {maxFee};
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
					}
				})
				return Data;
			},
			setupButton(){
				this.findall('#newartilebuttons .thebutton').forEach(button=>{
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
					font-family:poppinsbold;
					margin:10px 0;
				">${data.title}</div>
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
							background:black;
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
				overflow:auto;
				display:flex;
				flex-direction:column;
			`,
			innerHTML:`
				<div style="
					display:flex;
					align-items:center;
					gap:8px;
					margin:10px 0;
				">
					<div>
						<img class=profileimg src=./more/media/gemaprofile.png>
					</div>
					<div class=username>${data.username},</div>
					<div class=date>${data.time}</div>
				</div>
				<div id=fee>${data.type==='Jobs'?'Maks Bid':'Min Bid'} Rp. ${getPrice(data.maxFee||data.minFee)}</div>
				<div style="
					height:100%;
				">
					<div style="
						font-family:poppinsbold;
						margin:10px 0;
					">${data.title}</div>
					<div>
						${data.description.replaceAll('\n','<br>')}
					</div>
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
						background:black;
						color:white;
						border:1px solid black;
						border-bottom:none;
						border-radius:20px 20px 0 0;
						gap:10px;
						display:flex;
						justify-content:center;
						align-items:center;
						cursor:pointer;
					" id=dooffers>
						Buat Penawaran
					</div>
				</div>
			`,
			onadded(){
				this.find('#dooffers').onclick = ()=>{
					this.doOffers();
				}
			},
			doOffers(){
				if(!app.getInfoLogin())return forceRecheck(view.main,'Silahkan Login Terlebih Dahulu!');
				//handling owner bid owner.
				if(data.owner === app.userData.cleanEmail)return forceRecheck(view.main,'Tidak diperbolehkan untuk melakukan bid ke project sendiri!');
				view.main.addChild(view.servicesOfferPage({subject:data.title,minFee:data.minFee,type:data.type,postid:data.postId,owner:data.owner,profilepicture:data.profilepicture}));
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
					display:flex;
					align-items:center;
					gap:8px;
					margin:10px 0;
				">
					<div>
						<img class=profileimg src=./more/media/gemaprofile.png>
					</div>
					<div class=username>${data.username},</div>
					<div class=date>${data.time}</div>
				</div>
				<div id=fee>${data.type==='Jobs'?'Maks Bid':'Min Bid'} Rp. ${getPrice(data.maxFee||data.minFee)}</div>
				<div style="
					height:100%;
				">
					<div style="
						font-family:poppinsbold;
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
						background:black;
						color:white;
						border:1px solid black;
						border-bottom:none;
						border-radius:20px 20px 0 0;
						gap:10px;
						display:flex;
						justify-content:center;
						align-items:center;
						cursor:pointer;
					" id=dooffers>
						Buat Penawaran
					</div>
				</div>
			`,
			onadded(){
				this.find('#dooffers').onclick = ()=>{
					this.doOffers();
				}
			},
			doOffers(){
				if(!app.getInfoLogin())return forceRecheck(view.main,'Silahkan Login Terlebih Dahulu!');
				//handling owner bid owner.
				if(data.owner === app.userData.cleanEmail)return forceRecheck(view.main,'Tidak diperbolehkan untuk melakukan bid ke project sendiri!');
				view.main.addChild(view.jobsOfferPage({subject:data.title,maxFee:data.maxFee,type:data.type,postid:data.postId,owner:data.owner,profilepicture:data.profilepicture}));
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
					font-family:poppinsbold;
					margin:10px 0;
				">${data.title}</div>
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
							background:black;
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
	profilePage(){
		const userData = app.userData;
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
					background:lightblue;
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
						display: flex;
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
						display:flex;
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
							font-family:poppinsbold;
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
					display:flex;
					color: white;
					font-family: 'poppinsbold';
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
							" id=hire>
								<img src=./more/media/hired.png
									style="
										width:16px;
										height:16px;
									"
								>Rekrut</div>
						</div>
						<div>
							<div class="button buttonstyled" style="
								border-radius:20px;display:flex;
								align-items:center;gap:5px;font-size:10px;
							" id=chat>
								<img src=./more/media/chat.png
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
								<img src=./more/media/follow.png
								style="
									width:16px;
									height:16px;
								"
								>FOLLOW</div>
						</div>
					</div>
				</div>
				<div style="
					height: 48px;
					border-bottom: 1px solid whitesmoke;
					display: flex;
					gap: 1px;
					position: sticky;
					top: 0;
					background: white;
					/* color: white; */
					/* font-family: 'poppinsbold';
				">
					<div
					style="
						width:100%;
						height:100%;
						display:flex;
						align-items:center;
					"
					>
						<div style="
								width: 100%;
								display: flex;
								justify-content: space-around;
						" id=berandadivmenu>
							<div style="
								display: flex;
								gap: 8px;
								cursor: pointer;
								height: 100%;
								width: 100%;
								border-bottom: 1px solid black;
								padding: 10px;
								justify-content: center;
							">
								<img src=./more/media/papers.png class=navimg>
								Artikel
							</div>
							<div style="
								display: flex;
								gap: 8px;
								cursor: pointer;
								width: 100%;
								justify-content: center;
								padding: 10px;
							">
								<img src=./more/media/worker.png class=navimg>
								Project
							</div>
							<div style="
								display: flex;
								gap: 8px;
								cursor: pointer;
								width: 100%;
								justify-content: center;
								padding: 10px;
							">
								<img src=./more/media/construction-worker.png class=navimg>
								Jasa
							</div>
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
			">
				<div style="
					font-family:poppinsbold;
					display:flex;
					align-items:center;
					justify-content:space-between;
					padding:0 5px;
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
						<img src=./more/media/deer-shape.png>
						<div>
							<div>Cerpen</div>
							<div style="font-family:poppinslight">Posting Cerita Pendek, Dan Bagikan Imaginasimu!</div>
						</div>
					</div>
					<div id=newArticle class=child>
						<img src=./more/media/papers.png>
						<div>
							<div>Artikel</div>
							<div style="font-family:poppinslight">Posting Artikel, Dan Bagikan Pemikiranmu!</div>
						</div>
					</div>
					<div id=newJasa class=child>
						<img src=./more/media/construction-worker.png>
						<div>
							<div>Jasa</div>
							<div style="font-family:poppinslight">Posting Jasa, Dan Temukan Klienmu!</div>
						</div>
					</div>
					<div id=newLoker class=child>
						<img src=./more/media/worker.png>
						<div>
							<div>Loker</div>
							<div style="font-family:poppinslight">Posting Tugasmu, Dan Biarkan Mereka Yang Nyelesain!</div>
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
	loginBox(){
		return makeElement('div',{
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
							font-family:poppinsbold;
							margin-left:5px;
						">
							Login TheSimpsons
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
						" class=button id=goIn>
							Masuk
						</div>
						<div style="
							background: lightgray;
							color: black;
							width: 100%;
							text-align: center;
						" class=button id=goSignin>
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
					data.cleanEmail = data.userEmail.slice(0,data.userEmail.indexOf('@'));
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
				position:absolute;
				display:flex;
				align-items:flex-start;
				justify-content:center;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
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
							font-family:poppinsbold;
							margin-left:5px;
						">
							Akun Baru TheSimpsons
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
						<div class=button id=goSignin style="
							width: 100%;
							text-align: center;
						">
							Buat Akun
						</div>
						<div style="
							background:lightgray;
							color:black;
							width: 100%;
							text-align: center;
						" class=button id=goIn>
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
				height:94%;
				gap:10px;
			`,
			innerHTML:`
				<div style="
					width: 100%;
					justify-content: space-around;
					display: flex;
					background: whitesmoke;
					border-radius: 20px;
				"
				id=newartilebuttons
				>
					<div style=width:100%; class=thebutton id=publish>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/upload.png
							style="
								width:14px;
								height:14px;
							"
							>
						Simpan</div>
					</div>
					<div style=width:100%; class=thebutton id=publish>
						<div class="button buttonstyled" style="
							justify-content:center;display:flex;
							align-items:center;gap:10px;
						">
							<img src=./more/media/save.png
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
						font-family:poppinsbold;
					">
						Judul Cerpen
					</div>
					<div style="
						height:100%;
					">
						<textarea id=title placeholder="Tulis Judul Cerpen Disini..." style="height:100%;resize:none;border-radius:0;"></textarea>
					</div>
				</div>
				<div style="
					height:80%;
					display:flex;
					flex-direction:column;
				">
					<div style="
						font-family:poppinsbold;
					">
						Isi Cerpen
					</div>
					<div style="
						height:100%;
					">
						<textarea id=description placeholder="Tulis Isi Cerpen Disini..." style="height:100%;resize:none;border-radius:0 0 20px 20px;"></textarea>
					</div>
				</div>
			`,
			collectData(){
				const Data = {};
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
				this.findall('#newartilebuttons .thebutton').forEach(button=>{
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
				NotifList.forEach((item,i)=>{
					this.addChild(makeElement('div',{
						style:`
							width:96%;
							display:flex;
							gap:12px;
							padding:2%;
							align-items:center;
							border-bottom:${i===NotifList.length-1?'':'1px solid whitesmoke'};
						`,
						innerHTML:`
							<img src=./more/media/deer-shape.png style="
								width:32px;
								height:32px;
							">
							<div>
								<div>${item.who}, ${item.when}</div>
								<div class=bold>${item.what}</div>
							</div>
						`
					}))
				})
			},
			onadded(){
				this.generateNotifList([
					{who:'gemasajaa',when:'12 sep 2023',what:'Liking Your Boobs'},
					{who:'someguy',when:'15 sep 2023',what:'Liking Your Photos'}
				]);
			}
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
							font-family:poppinsbold;
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
					this.text.innerHTML = 'Data Berhasil Diupload';
					view.content.newPost();
				}else{
					this.text.innerHTML = 'Terjadi Masalah Saat Mengupload, coba lagi nanti.';
					this.remove();
				}
			},
			DoRequest(){
				app.doglas.do(['database','post',`${this.datatoupload.type}/${this.datatoupload.postId}`,'set',this.datatoupload]).then((x)=>{
					this.handleResponse(x);
				})
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
				justify-content:center;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
					background:white;
					height:70%;
					display:flex;
					flex-direction:column;
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
							font-family:poppinsbold;
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
						height:100%;
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
					view.content.openProfile();
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
				justify-content:center;
				align-items:flex-start;
				background:rgba(0, 0, 0, 0.25);
			`,
			innerHTML:`
				<div class=innerBox style="
					background:white;
				">
					<div style="
						width:94%;
						display:flex;
						justify-content:space-between;
						padding:3%;
						align-items:center;
						background:whitesmoke;
					">
						<div style="
							font-family:poppinsbold;
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
				justify-content:center;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
					background:white;
					display:flex;
					flex-direction:column;
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
							font-family:poppinsbold;
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
				justify-content:center;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
					background:white;
					display:flex;
					flex-direction:column;
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
							font-family:poppinsbold;
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
		console.log(data);
		return makeElement('div',{
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
					background:white;
					display:flex;
					flex-direction:column;
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
							font-family:poppinsbold;
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
					profilepicture:data.profilepicture,
					inbox:[{date:getFullDate(),from:app.userData.username,msg:this.find('#offerDescription').value}]
				}
				return xdata;
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
				justify-content:center;
				background:#00000040;
			`,
			innerHTML:`
				<div style="
					background:white;
					display:flex;
					flex-direction:column;
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
							font-family:poppinsbold;
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
					profilepicture:data.profilepicture,
					inbox:[{date:getFullDate(),from:app.userData.username,msg:this.find('#offerDescription').value}]
				}
				return xdata;
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
					forceRecheck(view.main,'Berhasil mengirim penawaran');
					this.remove();
				})
				
				this.find('#datasparent').hide();
				this.upnotice.show('block');
				
			}
		})
	},
	inbox(){
		return makeElement('div',{
			style:`
				width:100%;
				height:100%;
			`,
			generateChat(){
				app.userData.bid.forEach((bid,i)=>{
					this.addChild(view.inboxItem(i,bid,(i!==app.userData.bid.length-1)?true:false));
				})
				if(app.userData.bid.length===0){
					this.addChild(makeElement('div',{
						innerHTML:`Anda Belum Melakukan Aktifitas Penawaran!`,
						style:`
							height:200px;
							display:flex;
							align-items:center;
							justify-content:center;
						`
					}))
				}
			},
			onadded(){
				this.generateChat();
			}
		});
	},
	inboxItem(i,data,bt){
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
								<img class=profileimg src=${data.profilepicture}>
							</div>
							<div class=username>${data.owner},</div>
							<div class=date>${data.date}</div>
						</div>
					</div>
				</div>
			`,
			onadded(){
				
			},
			onclick(){
				view.main.addChild(view.openChatBid(data));
			}
		})
	},
	openChatBid(data){
		return makeElement('div',{
			style:`
				position:absolute;
				width:100%;
				height:100%;
				top:0;
				left:0;
				display:flex;
				align-items:center;
				justify-content:center;
				background:white;
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
						min-height: 100px;
						border-bottom: 1px solid whitesmoke;
						display: flex;
						align-items: center;
						justify-content: space-around;
					">
						<div style="
							height: 100%;
							width: 64px;
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div id=closethis style="cursor:pointer;">
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
								<img src=./more/media/menu.png class=navimg style=width:32px;height:32px;>
							</div>
						</div>
					</div>
					<div style="
						width:90%;
						height:94%;
						background:whitesmoke;
						overflow:auto;
						padding:5%;
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
						background: whitesmoke;
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
						">
							<textarea style="
								height: 81px;
								background: white;
								border: none;
								border-radius: 20px 0 0 20px;
								min-height:100px;
								min-width:100%;
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
							<div style=cursor:pointer id=sendbutton>
								<img src=./more/media/send.png
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
					msg:this.msgbox.value
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
			listen(){
				app.doglas.get(`bid/${data.type}/${data.bidId}/inbox`).on('value',(x)=>{
					const data = x.val();
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
				const inbox = (await app.doglas.do(['database','bid',`${data.type}/${data.bidId}/inbox`,'get'])).val();
				inbox.forEach((item)=>{
					this.putMsg(item);
				})
			},
			putMsg(msg){
				if(this.puttedMsg && this.puttedMsg.msg === msg.msg)return;
				this.boxinbox.addChild(this.inboxItem(msg));
				this.puttedMsg = msg;
			},
			onadded(){
				//close event.
				this.find('#closethis').onclick = ()=>{
					this.remove();
				}
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
							background:${item.from===app.userData.username?'white':'gray'};
							color:${item.from===app.userData.username?'black':'white'};
							padding:10px;
							border-radius:${item.from===app.userData.username?'20px 0 20px 20px':'0 20px 20px 20px'};
						">${item.msg.replaceAll('\n','<br>')}</div>
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
							font-family:poppinsbold;
							margin-left:5px;
						">
							Pilih Tindakan
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
						padding:20px;
						display:flex;
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
							<div style="width:100%">
								<div class="button buttonstyled" style="
									border-radius:20px;display:flex;
									align-items:center;gap:5px;justify-content:center;
								" id=hire>
									<img src=./more/media/hired.png
										style="
											width:16px;
											height:16px;
										"
									>Terima</div>
							</div>
							<div style="width:100%">
								<div class="button buttonstyled" style="
									border-radius:20px;display:flex;
									align-items:center;gap:5px;
									justify-content:center;
								" id=reject>
									<img src=./more/media/rejection.png
										style="
											width:16px;
											height:16px;
										"
									>Tolak</div>
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
				console.log(this.userData.bid);
				const saveBidUser = (await app.doglas.do(['database','users',`${data.bidderProfileId}`,'update',this.userData.bid])).val();
				console.log(saveBidUser);
			},
			generateNewUserBidData(){
				const bidData = [];
				this.userData.bid.forEach(bidId=>{
					if(bidId.bidId!=data.bidId)bidData.push(bidId);
				})
				this.userData.bid = bidData;
			}
		})
	}
}







