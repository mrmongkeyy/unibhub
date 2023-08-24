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
		hobbies:['Coding','Playing Football'],
		job:['Founder & Ceo TOA','Software Engineer','College Student'],
		age:[19],
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
					">TOA<span style=font-size:12px;>KAN Pikiran Mu!</span></div>
				</div>
				<div style="
					display: flex;
					justify-content: space-between;
					height: 100%;
					display: flex;
					align-items: center;
					background:white;
					border-radius:20px 20px 0 0;
				" id=ourmenu class=innerBox>
					<div>
						<img src=./more/media/pen.png class=navimg>
					</div>
					<div>
						<img src=./more/media/home.png class=navimg>
					</div>
					<div>
						<img src=./more/media/chat.png class=navimg>
					</div>
					<div>
						<img src=./more/media/bell.png class=navimg>
					</div>
					<div>
						<img src=./more/media/user.png class=navimg>
					</div>
				</div>
			</div>
			
		`
	}),
	content:makeElement('content',{
		className:'innerBox fitborder',
		style:`
			background:white;
			height:100%;
			margin:10px;
			display:flex;
			align-items: center;
			overflow:hidden;
			flex-direction:column;
			margin-top:0;
			border-radius:0 0 20px 20px;
		`,
		innerHTML:`
			<div style="
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10px;
				border-bottom: 1px solid rgb(232, 232, 232);
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
					On Beranda
				</div>
				<div style="
					width: 100%;
					display: flex;
					justify-content: flex-end;
					margin-right: 10px;
				"
				id=searchware
				>
					<div>
						<input placeholder="Cari Disini...">
					</div>
					<div>
						<div class=button style="background:none;color:black;">Cari</div>
					</div>
				</div>
				<div style="
					width: 100%;
					display: none;
					justify-content: flex-end;
					margin-right: 10px;
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
							>Publish</div>
					</div>
				</div>
				<div style="
					width: 100%;
					display: none;
					justify-content: flex-end;
					margin-right: 10px;
					gap:8px;
				"
				id=reactTo
				>
					<div style=display:flex;>
						<div class="buttonstyled" style="
							border-radius:20px;display:flex;
							align-items:center;gap:5px;background:none;
						" id=view>10 view</div>
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
							>Share</div>
					</div>
				</div>
				<div style="
					width: 100%;
					display: none;
					justify-content: flex-end;
					margin-right: 10px;
					gap:5px;
				"
				id=profileTop
				>
					<div>
						<div class="button buttonstyled" style="
							border-radius:20px;display:flex;
							align-items:center;gap:5px;
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
							align-items:center;gap:5px;
						">FOLLOW</div>
					</div>
				</div>
			</div>
			<div
			style="
				width:100%;
				height:100%;
				overflow:auto;
			"
			id=linesparent
			></div>
		`,
		onadded(){
			this.openArticle();
		},
		displayList(data){
			data.forEach((item,i)=>{
				this.find('#linesparent').addChild(view.line(item,i+1));
			})
		},
		newArticle(){
			this.find('#linesparent').addChild(view.articlenew());
			this.find('#stateLabel').innerHTML = 'Artikel Baru';
			this.find('#searchware').hide();
			this.find('#reactTo').hide();
			this.find('#newartilebuttons').show('flex');
		},
		openArticle(){
			this.find('#linesparent').addChild(view.openArticle());
			this.find('#stateLabel').innerHTML = 'Baca Artikel';
			this.find('#searchware').hide();
			this.find('#newartilebuttons').hide();
			this.find('#profileTop').hide();
			this.find('#reactTo').show('flex');
		},
		openProfile(userId){
			this.find('#linesparent').addChild(view.profilePage(userId));
			this.find('#stateLabel').innerHTML = 'Profil Pengguna';
			this.find('#searchware').hide();
			this.find('#newartilebuttons').hide();
			this.find('#reactTo').hide();
			this.find('#profileTop').show('flex');
		}
	}),
	footer:makeElement('footer',{
		
	}),
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
			`
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
						<textarea placeholder="Tulis Judul Disini..." style="height:100%;resize:none;"></textarea>
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
						<textarea placeholder="Tulis Konten Disini..." style="height:100%;resize:none;"></textarea>
					</div>
				</div>
			`,
			
		})
	},
	openArticle(articleId){
		return makeElement('div',{
			style:`
				margin:3%;
				display:flex;
				flex-direction:column;
				height:94%;
				overflow:auto;
			`,
			innerHTML:`
				<div style="
					display:flex;
					align-items:center;
					gap:8px;
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
					Biografi Singkat Penemu Facebook, Gema.
				</div>
				<div style="
					display:flex;
					flex-direction:column;
					padding-bottom:20px;
					border-bottom:1px solid whitesmoke;
					margin-bottom:8px;
				">
					Zuckerberg lahir tahun 1984 di White Plains, New York[8] dari pasangan Karen, seorang psikiater, dan Edward Zuckerberg, seorang dokter gigi. Ia bersama tiga saudara perempuannya, Randi, Donna, dan Arielle,[9] dibesarkan di Dobbs Ferry, New York.[9] Zuckerberg dibesarkan sebagai seorang Yahudi dan menjalani bar mitzvah ketika menginjak usia 13 tahun,[10][11] meski selama ini ia menetapkan dirinya sebagai seorang ateis.[11][12]

Di Ardsley High School, Zuckerberg mendapat nilai tinggi pada mata pelajaran klasika sebelum pindah ke Phillips Exeter Academy pada tahun pertamanya, tempat ia mendapat banyak hadiah dalam bidang sains (matematika, astronomi, dan fisika) dan ilmu klasik (dalam formulir pendaftaran perguruan tingginya, Zuckerberg memasukkan bahasa Prancis, Ibrani, Latin, dan Yunani Kuno dalam kolom bahasa non-Inggris yang bisa ia baca dan tulis) swerta merupakan seorang bintang anggar dan kapten tim anggar.[13][14][15][16] Di perguruan tinggi, ia dikenal karena mengutip beberapa kalimat dari puisi-puisi epik seperti Iliad.[13]

Pada sebuah pesta yang diadakan persaudaraannya pada tahun kedua di universitas, Zuckerberg bertemu mft, seorang mahasiswa Cina-Amerika asal pinggiran kota Boston (Braintree, Massachusetts[17]), dan mereka terus berkencan, sempat putus sebentar, sejak 2003. Pada September 2010, Zuckerberg mengundang Chan yang sudah menjadi mahasiswi kedokteran di Universitas California, San Francisco,[18] untuk pindah ke rumah sewaannya di Palo Alto.[9][19] Zuckerberg mempelajari bahasa Tionghoa Mandarin setiap hari sebagai persiapan kunjungan keduanya ke Tiongkok pada bulan Desember 2010.[20][21] Hingga 2010, Facebook diblokir oleh tembok api Internet negara itu.[22]


Zuckerberg (kanan) bersama Robert Scoble tahun 2008.
Di profil Facebook Zuckerberg, ia menyebutkan tertarik pada "keterbukaan, menciptakan sesuatu yang membantu orang-orang terhubung dan berbagi segala hal yang penting bagi mereka, revolusi, aliran informasi, minimalisme".[23] Zuckerberg lebih enak melihat warna biru karena kebutaan warna merah-hijau yang dialaminya; biru juga merupakan warna dominan di Facebook.[24]

Pada Mei 2011, dilaporkan bahwa Zuckerberg telah membeli rumah berkamar lima di Palo Alto senilai $7 juta.[25][26]

Pada tanggal 19 Mei 2012, Zuckerberg menikah dengan Priscilla Chan. Upacara dilangsungkan di halaman belakang Zuckerberg. Tamu-tamu khusus diundang dengan dalih merayakan lulusnya Chan sebagai dokter dari fakultas kedokteran di University of California, San Francisco.[27][28]

Pada 1 Desember 2015, ia mengumumkan kelahiran anaknya yang pertama, seorang bayi perempuan yang lahir dengan berat 3,4 kg dan diberi nama Maxima Chan Zuckerberg.[29] Ia juga menulis surat terbuka bagi putrinya, Max. Dalam surat tersebut, ia mengumumkan dirinya bakal membuat yayasan bernama Chan Zuckerberg Initiative.[30]
				</div>
				<div id=commentsection style="
					position:sticky;
					top:0;
					background:white;
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
				margin:2%;
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
					height:48px;
					border-bottom:1px solid whitesmoke;
					display:flex;
					gap:1px;
					position:sticky;
					top:0;
					background:white;
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
						<div>${userData.content.length} Artikel</div>
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
				datacomment.forEach(comment=>{
					this.addChild(makeElement('div',{
						style:`
							display:flex;
							gap:10px;
							align-item:center;
							margin-top:8px;
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
	}
}