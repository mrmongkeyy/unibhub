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
					background:#f0f1f2;
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
					height: 200px;
					display: flex;
					align-items: center;
					background:white;
					border-radius:20px 20px 0 0;
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
					<div id=opneNotif>
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
					view.content[button.id]();
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
				border-bottom: 1px solid rgb(232, 232, 232);
				position:sticky;
				top:0;
				overflow:auto;
				height:48px;
			">
				<div id=backcontroll
				style="
					margin-left:28px;
					font-weight:bold;
					border-radius:50%;
					padding:2px;
					cursor:pointer;
				"
				>
					<img src=./more/media/back.png
					style="
						width:16px;
						height:16px;
					"
					>
				</div>
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
			this.openArticle(app.dataFiktif);
		},
		displayList(data){
			if(!data)data=app.dataFiktif;
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.searchDiv());
			data.forEach((item,i)=>{
				this.find('#linesparent').addChild(view.line(item,i+1,(i===data.length-1)?false:true));
			})
			this.find('#stateLabel').innerHTML = 'Beranda';
			this.find('#reactTo').hide();
		},
		newArticle(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.articlenew());
			this.find('#stateLabel').innerHTML = 'Artikel Baru';
			this.find('#reactTo').hide();
		},
		openArticle(){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.openArticle());
			this.find('#stateLabel').innerHTML = 'Baca Artikel';
			this.find('#reactTo').show('flex');
		},
		openProfile(userId){
			this.clearLinesParent();
			this.find('#linesparent').addChild(view.profilePage(userId));
			this.find('#stateLabel').innerHTML = 'Profil Pengguna';
			this.find('#reactTo').hide();
		},
		newPost(){
			this.addChild(view.newPost());
		}
	}),
	footer:makeElement('footer',{
		
	}),
	searchDiv(){		
		return makeElement('div',{
			style:`
				width: 96%;
				display: flex;
				overflow:auto;
				margin-right: 10px;
				padding: 2%;
				background: white;
				border-bottom: 1px solid whitesmoke;
				align-items:center;
			`,
			innerHTML:`
				<div style="
					width: 96%;
					display: flex;
					gap:12px;
					margin-right: 10px;
					padding: 2%;
					background: white;
				">
					<div style="
						display:flex;
						gap:8px;
						cursor:pointer;
					">
						<img src=./more/media/papers.png class=navimg>
						Artikel
					</div>
					<div style="
						display:flex;
						gap:8px;
						cursor:pointer;
					">
						<img src=./more/media/worker.png class=navimg>
						Loker
					</div>
					<div style="
						display:flex;
						gap:8px;
						cursor:pointer;
					">
						<img src=./more/media/construction-worker.png class=navimg>
						Jasa
					</div>
				</div>
				<div style=width:100%;>
					<input placeholder="Cari Disini...">
				</div>
				<div style="
					padding: 8px;
					cursor: pointer;
					margin-left:8px;
				">
					<img src=./more/media/search.png class=navimg>
				</div>
			`
		})
	},
	line(data,i,bt=true){
		const Dot = (data.title.length>100)?'...':'';
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
							<div class=date>${data.date}</div>
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
		})
	},
	articlenew(){
		return makeElement('div',{
			style:`
				margin:3%;
				display:flex;
				flex-direction:column;
				height:94%;
			`,
			innerHTML:`
				<div style="
					width: 100%;
					justify-content: center;
					margin-right: 10px;
					display:flex;
				"
				id=newartilebuttons
				>
					<div>
						<div class="button buttonstyled" style="
							border-radius:20px 0 0 20px;display:flex;
							align-items:center;gap:5px;
						">
							<img src=./more/media/upload.png
							style="
								width:14px;
								height:14px;
							"
							>
						Simpan</div>
					</div>
					<div>
						<div class="button buttonstyled" style="
							border-radius:0 20px 20px 0;display:flex;
							align-items:center;gap:5px;
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
						Judul
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Judul Disini..." style="height:100%;resize:none;border-radius:0;"></textarea>
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
						Konten
					</div>
					<div style="
						height:100%;
					">
						<textarea placeholder="Tulis Konten Disini..." style="height:100%;resize:none;border-radius:0 0 20px 20px;"></textarea>
					</div>
				</div>
			`,
			
		})
	},
	openArticle(articleId){
		return makeElement('div',{
			style:`
				padding:0 3%;
				display:flex;
				flex-direction:column;
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
					<div class=username>gemasajaa,</div>
					<div class=date>17 Sep 2023</div>
				</div>
				<div style="
					font-family:poppinsbold;
					margin:10px 0;
				">
					Apa yang akan menjadi permasalahan selanjutnya? We gonna understand later! hahaha
				</div>
				<div style="
					display:flex;
					flex-direction:column;
					padding-bottom:20px;
					border-bottom:1px solid whitesmoke;
				">
					What is the different between sound and sounds like?

This is what the problem is become, we have so many trouble in our life. And this is must be repaired to be normal because this is so important and i dont have any idea about this at a first place, and i hope that i will get it later.

The next problem is something to understand isnt have any current solutions, this is a big trouble. And talking about it, it has so many mistake or error cause the mechanic isnt designed well enough to used in this system.

So, how can i fix this problem? and what will happend if there's no solution founded since 2024? i dont think that i have that space or capable enough to understand and make decision for it right now.

So many people say that i dont have big idea.


And i am ok with that.
				</div>
				<div style="
					display:flex;
					gap:10px;
					margin-top:10px;
					justify-content:center;
					padding-bottom:8px;
					border-bottom:1px solid whitesmoke;
				">
					<div>
						<div class="button buttonstyled" style="
							border-radius:20px;display:flex;
							align-items:center;gap:5px;
						">Sukai Artikel</div>
					</div>
					<div>
						<div class="button buttonstyled" style="
							border-radius:20px;display:flex;
							align-items:center;gap:5px;
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
						border-bottom:1px solid whitesmoke;
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
	profilePage(userId){
		
		return makeElement('div',{
			style:`
				border:1px solid whitesmoke;
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
					height:48px;
					border-bottom:1px solid whitesmoke;
					display:flex;
					gap:1px;
					position:sticky;
					top:0;
					background: gray;
					color: white;
					font-family: 'poppinsbold';
				">
					<div
					style="
						width:94%;
						height:100%;
						display:flex;
						align-items:center;
						margin:0 6%;
					"
					>
						<div>${userData.content.length} Artikel Di Publish</div>
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
				background:#00000070;
				width:100%;
				height:100%;
				display:flex;
				align-items:flex-end;
			`,
			innerHTML:`
			<div style="
				background:white;
				width:96%;
				padding: 2%;
				border-radius:20px 20px 0 0;
				display:flex;
				flex-direction:column;
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
					<div>
						<img src=./more/media/papers.png>
						Artikel
					</div>
					<div>
						<img src=./more/media/construction-worker.png>
						Jasa
					</div>
					<div>
						<img src=./more/media/worker.png>
						Loker
					</div>
				</div>
			</div>
			`,
			onadded(){
				this.find('#closethis').onclick = ()=>{
					this.remove();
				}
			}
		})
	}
}







