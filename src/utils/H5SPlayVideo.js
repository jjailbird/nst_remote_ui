/*global H5SWebSocketClient socket:true*/
/*eslint no-undef: "error"*/

export class H5SPlayVideo {
  constructor(videoId) {
    this.videoId = videoId;
    this.sourceBuffer = null;
    this.buffer = [];	
    this.mediaSource = null;
    this.video = null;
    this.wsSocket = null;
    this.checkSourceBufferId = null;
		this.keepaliveTimerId = null;
		this.reconnectionTimerId = null;
    this.emptyBuffCnt = 0;
    this.lastBuffTime = 0;
    this.buffTimeSameCnt = 0;
		this.bNeedReconnect = false;
		
    this.ReconnectFunction = this.ReconnectFunction.bind(this);
    this.setupSourceBuffer = this.setupSourceBuffer.bind(this);
    this.setupWebSocket = this.setupWebSocket.bind(this);
    this.readFromBuffer = this.readFromBuffer.bind(this);
    this.keepaliveTimer = this.keepaliveTimer.bind(this);
    this.mediaSourceOpen = this.mediaSourceOpen.bind(this);
    this.CleanupWebSocket = this.CleanupWebSocket.bind(this);
    this.CleanupSourceBuffer = this.CleanupSourceBuffer.bind(this);
    this.CheckSourceBuffer = this.CheckSourceBuffer.bind(this);
    this.onWebSocketClose = this.onWebSocketClose.bind(this);
    this.onWebSocketOpen = this.onWebSocketOpen.bind(this);
    this.onWebSocketData = this.onWebSocketData.bind(this);

    this.H5SWebSocketClient = this.H5SWebSocketClient.bind(this);
  }

  H5SWebSocketClient(h5spath){
    let socket;
    console.log("H5SWebSocketClient");
    try {
      if (window.location.protocol === "http:") {
        // socket = (MozWebSocket !== undefined) ? new MozWebSocket('ws://' + window.location.host + h5spath) : new WebSocket('ws://' + window.location.host + h5spath);
        // socket = new WebSocket('ws://' + window.location.host + h5spath);
        socket = new WebSocket('ws://localhost:8080' + h5spath);
        
      }
      if (window.location.protocol === "https:") {	
        // socket = (MozWebSocket !== undefined) ? new MozWebSocket('wss://' + window.location.host + h5spath) : new WebSocket('wss://' + window.location.host + h5spath);
        socket = new WebSocket('wss://' + window.location.host + h5spath);
      }
      console.log(window.location.host);
    } catch (e) {
      // alert('H5SWebSocketClient error:' + e.message);
      
      console.log('H5SWebSocketClient error:', e.message);
      return null;
    }
    return socket;
  }
  /*
	$(window).blur(function(){
	  console.log('blur');
	});
	$(window).focus(function(){
	  console.log('focus');
	});
  */
 	ReconnectFunction() {
		// console.log('Try Reconnect...', this.bNeedReconnect);
		if (this.bNeedReconnect === true)
		{
			console.log('Reconnect...');
			this.setupSourceBuffer(this.videoId);
			this.setupWebSocket();
			this.bNeedReconnect = false;
		}
	}
	
  Start() {
		if(this.reconnectionTimerId == null) {
			console.log('H5SPlay STARTED!');
			this.reconnectionTimerId = setInterval(this.ReconnectFunction, 3000);
			this.setupSourceBuffer(this.videoId);
			this.setupWebSocket();
		}
  }
	
	readFromBuffer ()	{
		if (this.buffer.length === 0 || this.sourceBuffer.updating) 
		{
		  return;
		}
		try {
		  const data = this.buffer.shift();
		  const dataArray = new Uint8Array(data);
		  this.sourceBuffer.appendBuffer(dataArray);
		} catch (e) {
		  console.log(e, this.videoId);
		}
	};
	
	keepaliveTimer(){
		if(this.wsSocket != null && this.wsSocket.readyState == 1){
			this.wsSocket.send("keepalive");
		}
	}

	onWebSocketData(msg){
	/*
		var blob = msg.data;

		var fileReader = new FileReader();
		fileReader.onload = function () {
			buffer.push(this.result);
			readFromBuffer();
		};

		fileReader.readAsArrayBuffer(blob);
		*/
		this.buffer.push(msg.data);
    this.readFromBuffer();
	} 
	
	setupSourceBuffer(videoId){

		window.MediaSource = window.MediaSource || window.WebKitMediaSource;
		if (!window.MediaSource) {
		  console.log('MediaSource API is not available');
		}

		this.mediaSource = new window.MediaSource();
	
		this.video = document.getElementById(videoId);
		this.video.autoplay = true;

		// const h5spath = this.video.getAttribute('h5spath');
		/* var video = document.querySelector('h5sVideo'); */
		//alert(h5spath);
		this.video.src = window.URL.createObjectURL(this.mediaSource);
		this.video.play();

		this.mediaSource.addEventListener('sourceopen', this.mediaSourceOpen, false);
			
	}
	
	mediaSourceOpen()	{
		//console.log("Add SourceBuffer");
		//var strCodec = 'video/mp4; codecs="avc1.420028"';
		//var strCodec = 'video/mp4; codecs="avc1.42E01E"';
		const strCodec = 'video/mp4; codecs="avc1.640029"';
		this.sourceBuffer = this.mediaSource.addSourceBuffer(strCodec);
		this.mediaSource.duration = Infinity;
		this.mediaSource.removeEventListener('sourceopen', this.mediaSourceOpen, false);
		this.sourceBuffer.addEventListener('updateend', this.readFromBuffer, false);		
	}
  onWebSocketClose(){
    this.CleanupWebSocket();
		this.CleanupSourceBuffer();
		this.bNeedReconnect = true;
  }
  onWebSocketOpen() {
    this.checkSourceBufferId = setInterval(this.CheckSourceBuffer, 3000);
		this.keepaliveTimerId = setInterval(this.keepaliveTimer, 1000);
  }
  setupWebSocket() {
    // console.log('this.videoId', this.videoId);
    this.video = document.getElementById(this.videoId);
		this.video.autoplay = true;
		
		// let h5spath = this.video.getAttribute('h5spath');
    // const token = this.video.getAttribute('token');
    let h5spath = this.video.dataset.h5spath;
		const token = this.video.dataset.token;
		h5spath = h5spath + "?token=" + token;
		console.log(h5spath);
		
		this.wsSocket = this.H5SWebSocketClient(h5spath);
		this.wsSocket.binaryType = 'arraybuffer';
		this.wsSocket.onmessage = this.onWebSocketData;
		this.wsSocket.onopen = this.onWebSocketOpen;
		this.wsSocket.onclose = this.onWebSocketClose;
	}
	
	
	CleanupSourceBuffer()	{
		console.log('Cleanup Source Buffer');
    this.sourceBuffer.removeEventListener('updateend', this.readFromBuffer, false);
		this.sourceBuffer.abort();

		if (document.documentMode || /Edge/.test(navigator.userAgent)) 
		{
			console.log('IE or EDGE!');
		}else
		{
			this.mediaSource.removeSourceBuffer(this.sourceBuffer);
		}
		//Clear the video source
		this.video.src = '';
		this.sourceBuffer = null;
		this.mediaSource = null;
		this.buffer = [];
		
	}
	
	CleanupWebSocket() {
		clearInterval(this.keepaliveTimerId);
		clearInterval(this.checkSourceBufferId);
		this.emptyBuffCnt = 0;
		this.lastBuffTime = 0;
		this.buffTimeSameCnt = 0;
	}
	
	
	CheckSourceBuffer()	{
		// console.log("CheckSourceBuffer", $(window).height(), $(document).height(), $(window).width(), $(document).width());
		console.log("sourceBuffer", this.videoId, this.sourceBuffer);
		if (this.sourceBuffer.buffered.length <= 0)	{
			this.emptyBuffCnt ++;
			if (this.emptyBuffCnt > 8) {
				// console.log("CheckSourceBuffer Close 1");
				this.wsSocket.close();
				return;
			}
		} else {
			this.emptyBuffCnt = 0;
			// const buffStartTime = this.sourceBuffer.buffered.start(0);
			let buffEndTime = this.sourceBuffer.buffered.end(0);
			
			let buffDiff = buffEndTime - this.video.currentTime;
			if (buffDiff > 5 || buffDiff < 0)
			{
				// console.log("CheckSourceBuffer Close 2");
				this.wsSocket.close();
				return;				
			}
			
			if ( buffEndTime === this.lastBuffTime)
			{
				this.buffTimeSameCnt ++;
				if (this.buffTimeSameCnt > 3)
				{
					// console.log("CheckSourceBuffer Close 3");
					this.wsSocket.close();
					return;
				}
			}else
			{
				this.buffTimeSameCnt = 0;
			}
			
			this.lastBuffTime = buffEndTime;
			
		}
	}
	
	
	
}