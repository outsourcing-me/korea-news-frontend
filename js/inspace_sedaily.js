
var ILSA_ConfChild = function(){
	this.media = "sedaily";
	this.mainId = "articleBody";
	this.load_jQuery = false;
	this.bottomMargin = 150;
	this.isRight = true;
	this.delay = 500;
	this.exceptArea = ["#articleBody .sub_ad_banner4"];
	this.adHtml = "<div style='line-height:13px; margin:0px 7px 0px 0px;'><div id='adPremium' style='float:left;width:43px;height:13px;'><a href='http://ad.kakaocorp.com/adinfo/search' onclick='ilsaMain.IsaIconClick=true' target='_blank'><img src='//img2.keywordsconnect.com/inspace_premium.gif' style='border:none' ></a></div><div style='margin:" + (navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident")>=0?"4":"3") + "px 0 0 10px;float:left'><a href='[#LINK#]' target='_blank' alt='[#DESC#]' title='[#DESC#]' target='_blank' style='color:#225178;font-size:12px;font-weight:normal;line-height:15px;cursor:pointer;text-decoration:none;' onclick='closeIsad([#IDX#])'>[#TITLE#]</a></div><div id='closeBox' style='width:11px;height:11px;left:253px;top:-13px;position:absolute'><img src='//img2.keywordsconnect.com/inspace_close1.gif' style='cursor:pointer;width:11px;height:11px;' onclick='ilsaMain.IsaIconClick=true;closeIsad([#IDX#])' /></div></div><br><div id='ILSA_TogArea' style='clear:both;line-height:16px;'><a href='[#LINK#]' target='_blank' id='ILSA_descArea' style='font-size:12px;padding-left:5px;color:#565656;cursor:pointer;font-weight:normal;text-decoration:none;display:none' onclick='closeIsad([#IDX#])'>[#DESC#]</a><br><a href='[#LINK#]' target='_blank' id='ILSA_siteArea' style='font-size:12px;padding-left:5px;color:#218d44;cursor:pointer;text-decoration:none;display:none;font-weight:normal;' onclick='closeIsad([#IDX#])'>[#SITE#]</a></div><a id='ISA_Link' href='[#LINK#]' style='display:none'></a>";
	this.zIndex = 140;
};

var ILSA_UtilChild = function(){
	this.cT = function(){
		return true;
	};
};

var ILSA_MainChild = function(){

	this.beforeInit = function(){
		if(!$$$(".view_con").attr("id")){
			$$$(".view_con").attr("id",ilsaConf.mainId);
		}

		ilsaConf.mainId = $$$(".view_con").attr("id");
	};

};

var ilsaMain = null;
var ilsaUtil = null;
var ilsaPageInfo = null;
var ilsaConf = null;

ilsaAdLaunch = function(){

	ILSA_ConfChild.prototype = new ILSA_Config();
	ILSA_MainChild.prototype = new ILSA_Main();
	ILSA_UtilChild.prototype = new ILSA_Util();

	ilsaUtil = new ILSA_Util();

	ilsaMain = new ILSA_MainChild();
	ilsaConf = new ILSA_ConfChild();
	ilsaUtil = new ILSA_UtilChild();

	ilsaMain.init();

};


var inspaceAdScript = document.createElement("script");
inspaceAdScript.id = "iconAdSetScript";
inspaceAdScript.src = "//js2.keywordsconnect.com/Inspace_new_v2.0.js";
inspaceAdScript.type = "text/javascript";
var inspaceAdHeader = document.getElementsByTagName("head")[0];
inspaceAdHeader.appendChild(inspaceAdScript);