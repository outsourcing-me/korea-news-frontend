
var IconAd_ConfChild = function(){
	this.media = "sedaily";
	this.mainId = "articleBody";
	this.posFromBot = 360;
	this.delay = 200;
	this.cssUrl = "//css2.keywordsconnect.com/iconad_sedaily.css";
	this.baseHtml = '<div id="textLasOut"><img id="sliderDefImage" /><div id="sliderAdText"><a href="[#LINK#]" target="_blank" class="titleAdLink"><div class="textAdTitle" style="margin-top:6px">[#TITLE#]</div></a><br/><a href="[#LINK#]" target="_blank" class="titleAdLink"><div class="textAdDesc">[#DESC#]</div></a><br/><a href="[#LINK#]" target="_blank" class="titleAdLink"><div class="textAdSite">[#SITE#]</div></a></div><div id="iconAdBtn" style="display:none;width:34px;height:9px;top:45px;left:192px;position:absolute"><a href="http://ad.kakaocorp.com/adinfo/search" target="_blank" style="border:none"><img src="//img2.keywordsconnect.com/btn_premium.png" style="border:none" /></a></div></div>';
};

var IconAd_MainChild = function(){
	this.beforeInit = this.startScrollCheck = function(){
		if(IconAd_Vars.util.cT(18,9)) IconAd_Vars.iconAdConf.delay=200;

		IconAd_Vars.iconAdConf.leftPos = 13;
		IconAd_Vars.iconAdConf.adMinWidth = 42;
		document.getElementById("pscroller2").style.width = IconAd_Vars.iconAdConf.adMinWidth + "px";

		var isDisable = false;
		var curIconTop =  IconAd_Vars.util.getPageSize().height + IconAd_Vars.util.scrollY() - 60 - IconAd_Vars.iconAdConf.posFromBot;
		
		var leftAdObj = document.getElementById(IconAd_Vars.iconAdConf.mainId);
		if(leftAdObj){
			if(curIconTop > IconAd_Vars.util.objXorY(leftAdObj, "offsetTop") + leftAdObj.offsetHeight - 30 ){
				isDisable = true;
			}else{
				isDisable = false;
			}
		}

		if(isDisable) iconAdMain.scrollObj.style.display = "none";
		else if(!IconAd_Vars.isSliderClosed) {
			iconAdMain.scrollObj.style.display = "block";
		}

	};

	this.scrollPosCheck = function(adObj){

	};
};

var iconAdMain = null;

iconAdLaunch = function(){

	IconAd_ConfChild.prototype = new IconAd_Config();
	IconAd_MainChild.prototype = new IconAd_Main();

	IconAd_Vars.iconAdConf = new IconAd_ConfChild();
	iconAdMain = new IconAd_MainChild();

	if(!jQuery(".view_con").attr("id")){
		jQuery(".view_con").attr("id",IconAd_Vars.iconAdConf.mainId);
	}

	IconAd_Vars.iconAdConf.mainId = jQuery(".view_con").attr("id");

	iconAdInit();
};

var iconAdScript = document.createElement("script");
iconAdScript.id = "iconAdSetScript";
iconAdScript.src = "//js2.keywordsconnect.com/IconAd_New_v1.1.js";
iconAdScript.type = "text/javascript";
var iconAdHeader = document.getElementsByTagName("head")[0];
iconAdHeader.appendChild(iconAdScript);