const userData = {
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
					margin-left:28px;
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
						" id=view>10 Dilihat</div>
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
		InProfile(){
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
						justify-content: space-around;
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
						Loker
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
								<img class=profileimg src=./more/media/eye.png>
								<span>${data.more.view.length}</span>
							</div>
							<div>
								<img class=profileimg src=./more/media/share.png>
								<span>${data.more.share.length}</span>
							</div>
						</div>
					</div>
				</div>
			`,
			onadded(){
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
					height:50%;
					padding-bottom:20px;
				">
					<textarea readonly
					style="
						height: 100%;
				    border-radius: 0;
				    padding: 0;
				    border: 0;
				    background: white;
				    resize:none;
					"
					>${data.description}</textarea>
				</div>
				<div style="
					 display: flex;
					gap: 10px;
					/* margin-top: 10px; */
					justify-content: space-around;
					margin-bottom: 10px;
					/* border-bottom: 1px solid whitesmoke; */
					/* border-radius: 10px;
				">
					<div style="width:100%;">
						<div class="button buttonstyled" style="
							display:flex;justify-content:center;
							align-items:center;gap:10px;
						">Sukai Artikel</div>
					</div>
					<div style="width:100%;">
						<div class="button buttonstyled" style="
							display:flex;justify-content:center;
							align-items:center;gap:10px;
						">
							<img src=./more/media/share.png
								style="
									width:16px;
									height:16px;
								"
							>Bagikan</div>
					</div>
				</div>
				<div id=commentsection style="
					position:sticky;
					top:0;
					background:white;
					padding-top:8px;
				">
					<div style="margin-bottom:8px;
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div style="font-family:poppinsbold;">
							Tinggalkan Komentar!
						</div>
						<div class=button style="
							border-radius:20px;
						">
							Posting
						</div>
					</div>
					<div style="
						padding-bottom:10px;
					">
						<textarea style="
							border-radius:0;
							min-height:100px;
							min-width:100%;
							max-width:100%;
						"></textarea>
					</div>
				</div>
			`,
			onadded(){
				this.generateComment('randomid');
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
					height:50%;
					padding-bottom:20px;
				">
					<textarea readonly
					style="
						height: 100%;
				    border-radius: 0;
				    padding: 0;
				    border: 0;
				    background: white;
				    resize:none;
					"
					>${data.description}</textarea>
				</div>
				<div style="
					 display: flex;
					gap: 10px;
					/* margin-top: 10px; */
					justify-content: space-around;
					margin-bottom: 10px;
					/* border-bottom: 1px solid whitesmoke; */
					/* border-radius: 10px;
				">
					<div style="width:100%;">
						<div class="button buttonstyled" style="
							display:flex;justify-content:center;
							align-items:center;gap:10px;
						">Sukai Artikel</div>
					</div>
					<div style="width:100%;">
						<div class="button buttonstyled" style="
							display:flex;justify-content:center;
							align-items:center;gap:10px;
						">
							<img src=./more/media/share.png
								style="
									width:16px;
									height:16px;
								"
							>Bagikan</div>
					</div>
				</div>
				<div id=commentsection style="
					position:sticky;
					top:0;
					background:white;
					padding-top:8px;
				">
					<div style="margin-bottom:8px;
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div style="font-family:poppinsbold;">
							Tinggalkan Komentar!
						</div>
						<div class=button style="
							border-radius:20px;
						">
							Posting
						</div>
					</div>
					<div style="
						padding-bottom:10px;
					">
						<textarea style="
							border-radius:0;
							min-height:100px;
							min-width:100%;
							max-width:100%;
						"></textarea>
					</div>
				</div>
			`,
			onadded(){
				this.generateComment('randomid');
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
	openJobs(){
		const data = app.dataContent;
		return makeElement('div',{
			style:`
				padding:0 3%;
				height:100%;
				overflow:auto;
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
					height:50%;
					padding-bottom:20px;
				">
					<textarea readonly
					style="
						height: 100%;
				    border-radius: 0;
				    padding: 0;
				    border: 0;
				    background: white;
				    resize:none;
					"
					>${data.description}</textarea>
				</div>
				<div style="
					 display: flex;
					gap: 10px;
					/* margin-top: 10px; */
					justify-content: space-around;
					margin-bottom: 10px;
					/* border-bottom: 1px solid whitesmoke; */
					/* border-radius: 10px;
				">
					<div style="width:100%;">
						<div class="button buttonstyled" style="
							display:flex;justify-content:center;
							align-items:center;gap:10px;
						">Sukai Artikel</div>
					</div>
					<div style="width:100%;">
						<div class="button buttonstyled" style="
							display:flex;justify-content:center;
							align-items:center;gap:10px;
						">
							<img src=./more/media/share.png
								style="
									width:16px;
									height:16px;
								"
							>Bagikan</div>
					</div>
				</div>
				<div id=commentsection style="
					position:sticky;
					top:0;
					background:white;
					padding-top:8px;
				">
					<div style="margin-bottom:8px;
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div style="font-family:poppinsbold;">
							Tinggalkan Komentar!
						</div>
						<div class=button style="
							border-radius:20px;
						">
							Posting
						</div>
					</div>
					<div style="
						padding-bottom:10px;
					">
						<textarea style="
							border-radius:0;
							min-height:100px;
							min-width:100%;
							max-width:100%;
						"></textarea>
					</div>
				</div>
			`,
			onadded(){
				this.generateComment('randomid');
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
	openShortStories(){
		const data = app.dataContent;
		return makeElement('div',{
			style:`
				padding:0 3%;
				height:100%;
				overflow:auto;
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
					height:50%;
					padding-bottom:20px;
				">
					<textarea readonly
					style="
						height: 100%;
				    border-radius: 0;
				    padding: 0;
				    border: 0;
				    background: white;
				    resize:none;
					"
					>${data.description}</textarea>
				</div>
				<div style="
					 display: flex;
					gap: 10px;
					/* margin-top: 10px; */
					justify-content: space-around;
					margin-bottom: 10px;
					/* border-bottom: 1px solid whitesmoke; */
					/* border-radius: 10px;
				">
					<div style="width:100%;">
						<div class="button buttonstyled" style="
							display:flex;justify-content:center;
							align-items:center;gap:10px;
						">Sukai Artikel</div>
					</div>
					<div style="width:100%;">
						<div class="button buttonstyled" style="
							display:flex;justify-content:center;
							align-items:center;gap:10px;
						">
							<img src=./more/media/share.png
								style="
									width:16px;
									height:16px;
								"
							>Bagikan</div>
					</div>
				</div>
				<div id=commentsection style="
					position:sticky;
					top:0;
					background:white;
					padding-top:8px;
				">
					<div style="margin-bottom:8px;
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div style="font-family:poppinsbold;">
							Tinggalkan Komentar!
						</div>
						<div class=button style="
							border-radius:20px;
						">
							Posting
						</div>
					</div>
					<div style="
						padding-bottom:10px;
					">
						<textarea style="
							border-radius:0;
							min-height:100px;
							min-width:100%;
							max-width:100%;
						"></textarea>
					</div>
				</div>
			`,
			onadded(){
				this.generateComment('randomid');
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
		Object.assign(userData,app.userData);
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
				">
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
					">
						<img src=${userData.profile}
						style="
							width:128px;
							height:128px;
							object-fit:cover;
							border-radius:50%;
						"
						>
					</div>
					<div style="
						padding:8px;
						background:white;
						border:2px solid whitesmoke;
						border-radius:20px;
						display:flex;
						gap:5px;
						cursor:pointer;
					">
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
						"><span>${userData.name}</span></div>
						<div style="
							color:gray;
						"><span>${userData.bio}</span></div>
						<div style="
							display: flex;
							gap: 10px;
						">
							<div>
								<div>${userData.peoples.follower.length} followers</div>
							</div>
							<div>
								<div>${userData.peoples.following.length} following</div>
							</div>
							<div>
								<div>${userData.peoples.following.length} Projects</div>
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
							" id=view>
								<img src=./more/media/chat.png
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
							" id=view>
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
							">FOLLOW</div>
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
				this.generateContent();
			},
			generateMore(){
				for(let i in userData.moreInfo){
					this.find('#info').addChild(makeElement('div',{
						style:`
							margin-top: 10px;
							border-top: 1px solid whitesmoke;
							padding-top: 2px;
						`,
						infodata:userData.moreInfo[i],
						innerHTML:`
							<div>${i}</div>
							<div id=infodata
							style="
								display:flex;
								gap:8px;
								overflow:auto;
							"
							></div>
						`,
						onadded(){
							this.infodata.forEach(data=>{
								this.find('#infodata').addChild(makeElement('div',{
									style:`
										padding:2px 5px;
										background:whitesmoke;
										border-radius:20px;
										white-space: nowrap;
									`,
									innerHTML:data
								}))
							});
						}
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
	}
}







