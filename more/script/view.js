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
			border-bottom:1px solid #e8e8e8;
			display:flex;
			justify-content:center;
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
					border-bottom:1px solid rgb(232, 232, 232);
				">
					<div style="
						cursor:pointer;
						font-size:24px;
					">UnibHub</div>
				</div>
				<div style="
					display: flex;
					justify-content: space-between;
					height: 100%;
					display: flex;
					align-items: center;
				" id=ourmenu class=innerBox>
					<div>
						<span>Ping</span>
					</div>
					<div>
						<span>Beranda</span>
					</div>
					<div>
						<span>Pesan</span>
					</div>
					<div>
						<span>Notifikasi</span>
					</div>
					<div>
						<span>Profil</span>
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
				">
					<div>
						<input placeholder="Cari Disini...">
					</div>
					<div>
						<div class=button style="background:none;color:black;">Cari</div>
					</div>
				</div>
			</div>
			<div
			style="
				width:100%;
				height:100%;
				overflow:auto;
			"
			>
				<div class=lines>
					<div class=item>
						<div class=thumbnail>
							<img src=./more/media/pic.png>
						</div>
						<div class=moreinfo>
							<div class=title>
								#gamedevvlog Progress udah cukup significant!!!
							</div>
							<div class=addressinfo>
								<div class=username>By someone at</div>
								<div class=date>17 Sep 2023 19:30</div>
							</div>
						</div>
					</div>
					<div class=item>
						<div class=thumbnail>
							<img src=./more/media/pic.png>
						</div>
						<div class=moreinfo>
							<div class=title>
								What if this is changed???
							</div>
							<div class=addressinfo>
								<div class=username>By someone at</div>
								<div class=date>17 Sep 2023 19:30.</div>
							</div>
						</div>
					</div>
				</div>
				<div class=lines>
					<div class=item>
						<div class=thumbnail>
							<img src=./more/media/pic.png>
						</div>
						<div class=moreinfo>
							<div class=title>
								#gamedevvlog Progress udah cukup significant!!!
							</div>
							<div class=addressinfo>
								<div class=username>By someone at</div>
								<div class=date>17 Sep 2023 19:30</div>
							</div>
						</div>
					</div>
					<div class=item>
						<div class=thumbnail>
							<img src=./more/media/pic.png>
						</div>
						<div class=moreinfo>
							<div class=title>
								What if this is changed???
							</div>
							<div class=addressinfo>
								<div class=username>By someone at</div>
								<div class=date>17 Sep 2023 19:30.</div>
							</div>
						</div>
					</div>
				</div>
				<div class=lines>
					<div class=item>
						<div class=thumbnail>
							<img src=./more/media/pic.png>
						</div>
						<div class=moreinfo>
							<div class=title>
								#gamedevvlog Progress udah cukup significant!!!
							</div>
							<div class=addressinfo>
								<div class=username>By someone at</div>
								<div class=date>17 Sep 2023 19:30</div>
							</div>
						</div>
					</div>
					<div class=item>
						<div class=thumbnail>
							<img src=./more/media/pic.png>
						</div>
						<div class=moreinfo>
							<div class=title>
								What if this is changed???
							</div>
							<div class=addressinfo>
								<div class=username>By someone at</div>
								<div class=date>17 Sep 2023 19:30.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
	}),
	footer:makeElement('footer',{
		
	}),
}